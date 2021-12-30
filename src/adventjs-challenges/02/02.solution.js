export default function listGifts(letter) {
  let dict = {}
  letter.split(' ')
    .filter(item => !item.startsWith('_') && item != '')
    .forEach(item => dict[item] = dict[item] ? dict[item]  + 1 : 1 )
  return dict
}