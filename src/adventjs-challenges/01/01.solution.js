export default function contarOvejas(ovejas) {
  return ovejas.filter(oveja => (
    oveja.color == 'rojo' &&
    oveja.name.toLowerCase().includes('a') &&
    oveja.name.toLowerCase().includes('n') 
  ))
}