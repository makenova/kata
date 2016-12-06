// Implement a set-like data structure that supports Insert, Remove, and
// GetRandomElement efficiently. Example: If you insert the elements 1, 3, 6, 8
// and remove 6, the structure should contain [1, 3, 8]. Now, GetRandom should
// return one of 1, 3 or 8 with equal probability.

import test from 'ava'

class MyStructure {
  constructor(array) {
    this.list = array || []
  }

  insert(number) {
    this.list.push(number)
  }

  remove(number) {
    this.list = this.list.filter((element) => number !== element)
  }

  getRandomElement() {
    const random = Math.floor(Math.random() * (this.list.length))
    return this.list[random]
  }
}

test('create an empty MyStructure', t => {
  const structure = new MyStructure()
  t.deepEqual(structure.list, [])
})

test('create a populated MyStructure', t => {
  const testArray = [1, 2, 3]
  const structure = new MyStructure(testArray.slice())
  t.deepEqual(structure.list, testArray)
})

test('insert an element', t => {
  const testArray = [1, 2, 3]
  const structure = new MyStructure(testArray.slice())
  structure.insert(4)
  t.deepEqual(structure.list, testArray.concat([4]))
})

test('remove an element', t => {
  const testArray = [1, 3, 2, 3]
  const structure = new MyStructure(testArray.slice())
  structure.remove(3)
  t.deepEqual(structure.list, [1, 2])
})

test('get a random element', t => {
  const testArray = [88, 76, 10]
  const structure = new MyStructure(testArray.slice())
  const randomValue = structure.getRandomElement()
  t.true(structure.list.includes(randomValue))
})
