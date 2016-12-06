// Given an array of integers, determine whether or not there exist two elements
// in the array (at different positions) whose sum is equal to some target
// value.
// Examples: [5, 4, 2, 4], 8 --> true [5, 1, 2, 4], 8 --> false

import test from 'ava'

function sumInArray(array, target) {
  return array.some((addend, index) => {
    return array.slice(index + 1).some((augend) => {
      return (addend + augend) === target
    })
  })
}

test('sum is found', t => {
  t.true(sumInArray([5, 4, 2, 4], 8))
  t.true(sumInArray([1, 1], 2))
})

test('sum is not found', t => {
  t.false(sumInArray([5, 1, 2, 4], 8))
  t.false(sumInArray([0, 0], 8))
})
