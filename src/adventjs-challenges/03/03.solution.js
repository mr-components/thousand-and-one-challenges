export default function isValid(letter) {
 const haveSpecialCharacters = letter.includes('[') || letter.includes('{')
 const haveWordBetweenParenthesis = letter.match(/\([a-zñó]+\)/g)
 const haveParenthesisWithoutWords = letter.match(/\(\)/g)
 return (
  !haveSpecialCharacters && 
  !!haveWordBetweenParenthesis 
  &&!haveParenthesisWithoutWords
 )
}