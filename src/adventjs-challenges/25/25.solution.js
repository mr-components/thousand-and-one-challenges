export default function canMouseEat(direction, game) {
  const movements = {
    up: ([row, column]) => [row - 1, column],
    down: ([row, column]) => [row + 1, column],
    left: ([row, column]) => [row, column - 1],
    right: ([row, column]) => [row, column + 1],
  } 
  let mousePosition = []
  for(let rowId = 0; rowId < game.length; rowId++) {
    const columnId = game[rowId].indexOf('m')
    if(columnId >= 0) {
      mousePosition = [rowId, columnId]
      break
    }
  }
  const [ foodRow, foodColumn ] = movements[direction](mousePosition)
  return game[foodRow] ? game[foodRow][foodColumn] == '*' : false
}