export default function pangram(letter) {
  if(!letter.includes('ñ')) return false
  const normalizedText = letter.normalize('NFD').replace(/[\u0300-\u036f]/g,"")
  return !!normalizedText.match(/([a-z])+/gi)
}