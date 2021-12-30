export default function daysToXmas(date) {
  const xmas = new Date('Dec 25, 2021')
  return Math.ceil((xmas - date ) / 1000 / 3600 / 24) 
}