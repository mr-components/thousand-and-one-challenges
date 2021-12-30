export default function groupBy(collection, it) {
  let group = {}
  collection.forEach(item => {
    let key = typeof it == 'function' ? it(item) : item[it]
    if(group[key]) group[key].push(item)
    else {
      group[key] = []
      group[key].push(item)
    }    
  })
  return group
}