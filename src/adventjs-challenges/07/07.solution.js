export default function contains(store, product) {
  for(let drawer in store) {    
    if(store[drawer] == product) return true

    if(typeof store[drawer] == 'object') {
      const drawerContainsTheProduct = contains(store[drawer], product)
      if(drawerContainsTheProduct) return true
    }
  }
  return false
}