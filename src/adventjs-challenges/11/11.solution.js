export default function shouldBuyFidelity(times) {
  if(times <= 0) return false
  const ticketValue = 12 
  const normalTicket = ticketValue * times
  const fidelityCard = 250 + ticketValue * (Array.from(
      {length: times}, (_, index) => 0.75 ** (index + 1)
    ).reduce((prev, current) => prev + current)) 
  return normalTicket > fidelityCard
} 