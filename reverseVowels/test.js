const test = require('ava').test
const reverseVowels = require('./reverseVowels')

test('reverse Vowels', (t) => {
  t.is(reverseVowels('hello'), 'holle')
  t.is(reverseVowels('hail'), 'hial')
  t.is(reverseVowels('Aa'), 'aA')
})
