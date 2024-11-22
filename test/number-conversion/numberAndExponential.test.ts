import { describe, expect, test } from 'vitest'
import { numberToExponential, exponentialToNumber } from '../../lib/main'

describe('numberToExponential', () => {
  test(`numberToExponential(123456)`, () => {
    expect(numberToExponential(123456)).toBe('1.23456e+5')
  })
  test(`numberToExponential(123456, 2)`, () => {
    expect(numberToExponential(123456, 2)).toBe('1.23e+5')
  })
  test(`numberToExponential(123456.78)`, () => {
    expect(numberToExponential(123456.78)).toBe('1.2345678e+5')
  })
})

describe('exponentialToNumber', () => {
  test(`exponentialToNumber('1.23456e+5')`, () => {
    expect(exponentialToNumber('1.23456e+5')).toBe(123456)
  })
  test(`exponentialToNumber('1.23e+5')`, () => {
    expect(exponentialToNumber('1.23e+5')).toBe(123000)
  })
  test(`exponentialToNumber('1.2345678e+5')`, () => {
    expect(exponentialToNumber('1.2345678e+5')).toBe(123456.78)
  })
})
