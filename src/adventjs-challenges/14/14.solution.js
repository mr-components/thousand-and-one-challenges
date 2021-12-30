export default function missingReindeer(ids) {
  let maxValue = ids[0]
  let sumOfIds = 0
  for(let id of ids) {
    maxValue = id > maxValue ? id : maxValue
    sumOfIds += id
  }
  if(maxValue != ids.length) return ids.length
  return (maxValue * (ids.length + 1) / 2) - sumOfIds
}