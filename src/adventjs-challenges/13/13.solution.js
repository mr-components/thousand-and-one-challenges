export default function wrapGifts(gifts) {
  gifts.splice(0, 0, '*'.repeat(gifts[0].length))
  gifts.splice(gifts.length, 0, '*'.repeat(gifts[0].length))
  return gifts.map(gift => `*${gift}*`)
}