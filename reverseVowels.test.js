// Reverse the vowels in a string
// e.g. 'hello' -> 'holle'

// ## Notes
// * was off by one when checking if letter was in vowels array i.e.
// vowels.indexOf(letter) > 0 instead of vowels.indexOf(letter) >= 0
// * Didn't deal with different uppercase letters

const test = require('ava').test

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

test('reverse Vowels', (t) => {
  t.is(reverseVowels('hello'), 'holle')
  t.is(reverseVowels('hail'), 'hial')
  t.is(reverseVowels('Aa'), 'aA')
})
