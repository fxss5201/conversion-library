import { describe, expect, test } from 'vitest'
import { intToRoman, intArrayToRomanArray, romanToInt, romanArrayToIntArray } from '../lib/main'

describe('intToRoman', () => {
  test(`intToRoman(3749)`, () => {
    expect(intToRoman(3749)).toBe('MMMDCCXLIX')
  })
})

const intArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000]
const romanArray = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M', 'MM']

describe('intArrayToRomanArray', () => {
  test(`intArrayToRomanArray(intArray)`, () => {
    expect(intArrayToRomanArray(intArray)).toEqual(romanArray)
  })
})

describe('romanToInt', () => {
  test(`romanToInt('MMMDCCXLIX')`, () => {
    expect(romanToInt('MMMDCCXLIX')).toBe(3749)
  })
})

describe('romanArrayToIntArray', () => {
  test(`romanArrayToIntArray(romanArray)`, () => {
    expect(romanArrayToIntArray(romanArray)).toEqual(intArray)
  })
})
