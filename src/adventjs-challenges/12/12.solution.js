export default function getMinJump(obstacles)  {
  let wayToGo = [] 
  obstacles.forEach(obstacle => {
    wayToGo[obstacle] = 'x'
  })
  for(let jump = 1; jump <= wayToGo.length; jump++) {
    let step = 0 // Initial step
    do {
      step += jump + 1
      if(wayToGo[step] == 'x') break
      if(wayToGo[step] == undefined && step >= wayToGo.length) return jump + 1
    } while(step < wayToGo.length) 
  }
}
