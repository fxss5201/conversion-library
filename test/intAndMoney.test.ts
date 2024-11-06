import { describe, expect, test } from 'vitest'
import { intToMoney } from '../lib/main'

describe('intToMoney', () => {
  test('intToMoney(1234567)', () => {
    expect(intToMoney(1234567)).toBe('1,234,567')
  })

  test(`intToMoney(1234567, '$')`, () => {
    expect(intToMoney(1234567, '$')).toBe('$ 1,234,567')
  })

  test('intToMoney(0)', () => {
    expect(intToMoney(0)).toBe('0')
  })

  test('intToMoney(-1234567)', () => {
    expect(intToMoney(-1234567)).toBe('-1,234,567')
  })

  test('intToMoney(1234.567)', () => {
    expect(intToMoney(1234.567)).toBe('1,234.567')
  })
})

