export default function canCarry(capacity, trip) {
  const road = {}
  for (const step of trip) {
    const [ gift, pickUpPoint, deliveryPoint ] = step
    if(gift > capacity) return false
    for(let step = pickUpPoint; step < deliveryPoint; step++) {
      console.log(0)
      road[step] = road[step] + gift || gift
      if(road[step] > capacity) return false 
    }
  }
  return true
} 
/**
 * Queda pendiente implementación con intervalos para reducir
 * la cantidad máxima de operaciones que se podrían llegar a realizar
 */