const { chromium } = require('playwright')
const { prompt } = require('inquirer');

const getInfo = async () => {
  console.log('Iniciando scrapping');
  const browser = await chromium.launch({
    headless: false
  }) 
  const adventJsPage = await browser.newPage();
  await adventJsPage.goto('https://adventjs.dev')
  // Iniciar sesión
  await adventJsPage.locator('header div button').click()
  console.log('Vamos a iniciar sesión en GitHub');
  console.log('Te pediré algunos datos. No los almacenaré en ningún lado, así que es seguro.');
  const { email, password } = await prompt([
    {
      name: 'email',
      message: 'Email: '
    },
    {
      name: 'password',
      message: 'Contraseña: ',
      type: 'password',
      mask: '*',
    }
  ])
  const emailInput = await adventJsPage.locator('#login_field')
  const passwordInput = await adventJsPage.locator('#password')
  const signInButton = await adventJsPage.locator('[name="commit"]')
  await emailInput.fill(email)
  await passwordInput.fill(password)
  await signInButton.click()
  console.log('Esperando respuesta de GH...');
  await adventJsPage.waitForURL('https://adventjs.dev')
  console.log('Ingreso satisfactorio, recuperando data');
  const data = (await adventJsPage.request.get('https://adventjs.dev/api/challenge/user/01')).json()
  console.log(data);  
  
}

getInfo()