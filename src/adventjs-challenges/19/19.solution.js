export default function learn(time, courses) {
  let maxTimePosible = 0
  let ids = null
  for(let currId = 0; currId < courses.length - 1; currId ++) {
    for(let nextId = currId + 1; nextId < courses.length; nextId ++) {
      const timeSpent = courses[currId] + courses[nextId]
      if(time == timeSpent) return [currId, nextId]      
      if(maxTimePosible < timeSpent && timeSpent < time) {
        maxTimePosible = timeSpent
        ids = [currId, nextId]
      }
    }
  }
  return ids
}