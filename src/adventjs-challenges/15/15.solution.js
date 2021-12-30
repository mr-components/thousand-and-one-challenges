export default function checkSledJump(heights) {
  let [isGoingUp, isComingDown] = [true, false]
  for(let indexHeigth = 0; indexHeigth < heights.length - 1; indexHeigth ++) {
    const delta = heights[indexHeigth] - heights[indexHeigth + 1]
    if(delta == 0) return false
    if(delta > 0 && isGoingUp){
      [isGoingUp, isComingDown] = [!isGoingUp, !isComingDown]
    }
    if(
      (delta > 0 && !isComingDown) || 
      (delta < 0 && !isGoingUp)
    ) return false
  }
  return isComingDown
}