// Reverse the vowels in a string
// e.g. 'hello' -> 'holle'

var reverseVowels = function(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var stringVowels = string.split('').filter(function(letter) {
    return vowels.indexOf(letter.toLowerCase()) >= 0
  })

  return string.split('').reduce(function(acc, letter) {
    vowels.indexOf(letter.toLowerCase()) >= 0 ?
      acc.push(stringVowels.pop()) :
      acc.push(letter)
    return acc
  },[]).join('')
}

module.exports = reverseVowels;
