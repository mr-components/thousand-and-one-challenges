export default function maxProfit(prices) {
  let maxValue = prices[0]
  let minValue = prices[0]
  let _maxProfit = -1
  for(let indexPrice = 1; indexPrice < prices.length; indexPrice ++) {
    const price = prices[indexPrice]
    if (price < minValue) {
      minValue = price
      maxValue = price
    } else if (price > maxValue) {
      maxValue = price
    } 
    const delta = maxValue - minValue
    if(delta > 0) _maxProfit = delta
  }
  return _maxProfit
}