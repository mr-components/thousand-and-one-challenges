export default function decodeNumber(symbols) {
  const equivalences = {
    '.': 1,
    ',': 5,
    ':': 10, 
    ';': 50, 
    '!': 100
  }
  const clues = symbols.split('').map(symbol => equivalences[symbol] || NaN)
  const numbersToSum = clues.map((num, index) => {
    const nextNum =  clues[index + 1]
    return !nextNum ? num : num - nextNum < 0 ? -num : num
  })
  return numbersToSum.reduce((prev, curr) => prev + curr)
}