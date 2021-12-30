export default function getCoins(change) {
    let coinsForChange = {
      50: 0, 20: 0, 10: 0, 5: 0, 2: 0, 1: 0
    } 
    const valueOfCoins = Object.keys(coinsForChange).reverse()
    for (let coin of valueOfCoins) {
      if(coin === 0) break
      if(change - coin < 0) continue
      while(change - coin >= 0) {
        coinsForChange[coin] += 1
        change -= coin
      }
    }
    return (Object.values(coinsForChange))
}
