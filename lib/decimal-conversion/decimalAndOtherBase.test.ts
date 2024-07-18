import { describe, expect, test } from 'vitest'
import { decimalToOtherBase, tenToOther, otherBaseToDecimal, otherToTen } from './decimalAndOtherBase'

describe('decimalToOtherBase', () => {
  test(`decimalToOtherBase(10, 2)`, () => {
    expect(decimalToOtherBase(10, 2)).toBe('1010')
  })

  test(`decimalToOtherBase(30, 8)`, () => {
    expect(decimalToOtherBase(30, 8)).toBe('36')
  })

  test(`decimalToOtherBase(30, 16)`, () => {
    expect(decimalToOtherBase(30, 16)).toBe('1e')
  })

  test(`decimalToOtherBase(34, 12)`, () => {
    expect(decimalToOtherBase(34, 12)).toBe('2a')
  })

  test(`decimalToOtherBase(100, 36)`, () => {
    expect(decimalToOtherBase(100, 36)).toBe('2s')
  })

  test(`decimalToOtherBase(10, 38)`, () => {
    expect(decimalToOtherBase(10, 38)).toBe('10')
  })
})

describe('otherBaseToDecimal', () => {
  test(`otherBaseToDecimal('1010', 2)`, () => {
    expect(otherBaseToDecimal('1010', 2)).toBe(10)
  })


  test(`otherBaseToDecimal('36', 8)`, () => {
    expect(otherBaseToDecimal('36', 8)).toBe(30)
  })


  test(`otherBaseToDecimal('1e', 16)`, () => {
    expect(otherBaseToDecimal('1e', 16)).toBe(30)
  })

  test(`otherBaseToDecimal('2a', 12)`, () => {
    expect(otherBaseToDecimal('2a', 12)).toBe(34)
  })

  test(`otherBaseToDecimal('2s', 36)`, () => {
    expect(otherBaseToDecimal('2s', 36)).toBe(100)
  })

  test(`otherBaseToDecimal('2a', 38)`, () => {
    expect(otherBaseToDecimal('2a', 38)).toBe(NaN)
  })
})
