import { describe, expect, test } from 'vitest'
import { decimalToBinary, tenToTwo, binaryToDecimal, twoToTen } from './decimalAndBinary'

describe('decimalToBinary', () => {
  test(`10 to '1010'`, () => {
    expect(decimalToBinary(10)).toBe('1010')
  })
})

describe('tenToTwo', () => {
  test(`10 to '1010'`, () => {
    expect(tenToTwo(10)).toBe('1010')
  })
})

describe('binaryToDecimal', () => {
  test(`'1010' to 10`, () => {
    expect(binaryToDecimal('1010')).toBe(10)
  })
})

describe('twoToTen', () => {
  test(`'1010' to 10`, () => {
    expect(twoToTen('1010')).toBe(10)
  })
})
