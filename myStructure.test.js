// Implement a set-like data structure that supports Insert, Remove, and
// GetRandomElement efficiently. Example: If you insert the elements 1, 3, 6, 8
// and remove 6, the structure should contain [1, 3, 8]. Now, GetRandom should
// return one of 1, 3 or 8 with equal probability.

import test from 'ava'

class MyStructure {
  constructor(array) {
    this.set = Array.isArray(array) ? new Set(array) : new Set()
  }

  insert(number) {
    this.set.add(number)
  }

  remove(number) {
    this.set.delete(number)
  }

  getRandomElement() {
    const random = Math.floor(Math.random() * (this.set.size))
    const randomValue = Array.from(this.set)[random]
    return randomValue
  }
}

test('create an empty MyStructure', t => {
  const structure = new MyStructure()
  t.deepEqual(Array.from(structure.set), [])
})

test('create a populated MyStructure', t => {
  const testArray = [1, 2, 3]
  const structure = new MyStructure(testArray.slice())
  t.deepEqual(Array.from(structure.set), testArray)
})

test('insert an element', t => {
  const testArray = [1, 2, 3]
  const structure = new MyStructure(testArray.slice())
  structure.insert(4)
  t.deepEqual(Array.from(structure.set), testArray.concat([4]))
})

test('remove an element', t => {
  const testArray = [1, 2, 3]
  const structure = new MyStructure(testArray.slice())
  structure.remove(3)
  t.deepEqual(Array.from(structure.set), [1, 2])
})

test('get a random element', t => {
  const testArray = [88, 76, 10]
  const structure = new MyStructure(testArray.slice())
  const randomValue = structure.getRandomElement()
  t.true(structure.set.has(randomValue))
})
