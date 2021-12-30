export default function canReconfigure(from, to) {
  if(from.length !== to.length) return false
  const mapFrom = new Map()
  const mapTo = new Map()
  for(let key = 0; key < from.length; key ++) {
    mapFrom.set(from[key], to[key])
    mapTo.set(to[key], from[key])
    if(from[key] != mapTo.get(to[key]) || mapFrom.size !== mapTo.size ) return false
  }
  return true
}