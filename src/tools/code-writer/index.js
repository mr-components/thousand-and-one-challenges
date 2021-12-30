const { chromium } = require('playwright')
const { prompt } = require('inquirer');
const { loginWithEnvVariables } = require('./config.json')
const { mkdir } = require('fs/promises');
const { appendFileSync } = require('fs');
require('dotenv').config()

// Función encargada de obtener los códigos
const obtainData = async page => {
  // Creamos un array de 25 elementos
  const dataPromises = Array.from({length: 25}, (_, x) => x + 1) 
    // Mapeamos promesas basadas en fetch
    .map(id => { 
      id = id < 10 ? `0${id}` : id
      return new Promise( async (resolve, reject) => {
        try {
          // Hacemos una petición para recopilar la data
          const response = await page.request.get(`https://adventjs.dev/api/challenge/user/${id}`)
          const data = response.json()
          resolve(data)
        } catch (error) {
          reject(error)
        }
  })})
    // Retornamos una promesa que ejecuta todas las peticiones
  try {
    const data = await Promise.all(dataPromises);
    return data;
  } catch (e) {
    console.log('Tenemos errores');
    console.log(e);
  }
}

const obtainGitHubCredentials = async () => {
  if(loginWithEnvVariables) {
    const { USER_GITHUB_MAIL, USER_GITHUB_PASSWORD } = process.env
    return {
      email: USER_GITHUB_MAIL,
      password: USER_GITHUB_PASSWORD
    }
  }
  console.log('Te pediré algunos datos. No los almacenaré en ningún lado, así que es seguro.');
  const { UserEmail, UserPassword } = await prompt([
    {
      name: 'UserEmail',
      message: 'Email: '
    },
    {
      name: 'UserPassword',
      message: 'Contraseña: ',
      type: 'password',
      mask: '*',
    }
  ])
  return {
    email: UserEmail,
    password: UserPassword
  }
}

const login = async page => {
  const { email, password } = await obtainGitHubCredentials()
  console.log('Iniciando sesión en GitHub...');
  const emailInput = await page.locator('#login_field')
  const passwordInput = await page.locator('#password')
  const signInButton = await page.locator('[name="commit"]')
  await emailInput.fill(email)
  await passwordInput.fill(password)
  await signInButton.click() 
}

const getInfo = async () => {
  console.log('Iniciando scrapping...');
  const browser = await chromium.launch({
    headless: true
  }) 
  const adventJsPage = await browser.newPage();
  await adventJsPage.goto('https://adventjs.dev')
  // Iniciar sesión
  await adventJsPage.locator('header div button').click()
  await login(adventJsPage)
  console.log('Esperando respuesta de GH...');
  await adventJsPage.waitForURL('https://adventjs.dev')
  console.log('Ingreso satisfactorio, recuperando data...');
  const data = await obtainData(adventJsPage)
  console.log('Data recuperada');
  browser.close()
  return data 
}

const saveData = async getListOfCodes => {
  // Trabajar el path con regex
  console.log('Buscando data...');
  const listOfCodes = await getListOfCodes() 
  console.log('Iniciando proceso de creación de código...');
  const basePath = process.cwd()
  const promisesForCreateFiles = listOfCodes.map((codeObject, index) => (
    new Promise(async (resolve) => {
      index = index < 9 ? `0${index + 1}` : `${index + 1}` 
      const { code } = codeObject
      const path = `${basePath}/src/adventjs-challenges/${index}`
      // Creamos el directorio
      try {
        await mkdir(path)
      } catch (error) {
        console.log('Ya existe el directorio ', path);
      }
      // Creamos al archivo que contiene la solución
      appendFileSync(
        `${path}/${index}.solution.js`,
        code
      )
      // Creamos el template para tu solución
      const headerCode = code.split('\n')[0]
      const yourSolveCode = `${headerCode}\n` +
      '  // your solution\n' +
      '}' 
      appendFileSync(
        `${path}/${index}.your-code.js`,
        yourSolveCode
      )
      resolve()
    })
  ))
  await Promise.all(promisesForCreateFiles)
  console.log('Ficheros creados exitosamente.');
}

saveData(getInfo)