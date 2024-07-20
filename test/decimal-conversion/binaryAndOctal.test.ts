import { describe, expect, test } from 'vitest'
import { octalToBinary, eightToTwo, binaryToOctal, twoToEight } from '../../lib/main'

describe('octalToBinary', () => {
  test(`'15' to '1101'`, () => {
    expect(octalToBinary('15')).toBe('1101')
  })
})

describe('eightToTwo', () => {
  test(`'15' to '1101'`, () => {
    expect(eightToTwo('15')).toBe('1101')
  })
})

describe('binaryToOctal', () => {
  test(`'1101' to '15'`, () => {
    expect(binaryToOctal('1101')).toBe('15')
  })
})

describe('twoToEight', () => {
  test(`'1101' to '15'`, () => {
    expect(twoToEight('1101')).toBe('15')
  })
})