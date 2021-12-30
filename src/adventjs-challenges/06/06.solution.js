export default function sumPairs(numbers, result)  {
  for(let indexFirstAddend = 0; 
      indexFirstAddend < numbers.length; 
      indexFirstAddend ++) {

    for(let indexSecondAddend = indexFirstAddend + 1; 
        indexSecondAddend < numbers.length; 
        indexSecondAddend ++) {
          
      const sum = numbers[indexFirstAddend] + numbers[indexSecondAddend]
      if(sum == result) {
         return [numbers[indexFirstAddend], numbers[indexSecondAddend]]
      }
    }
  }
  return null
}