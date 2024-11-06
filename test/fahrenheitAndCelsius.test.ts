import { describe, expect, test } from 'vitest'
import { fahrenheitToCelsius, celsiusToFahrenheit } from '../lib/main'

describe('fahrenheitToCelsius', () => {
  test('fahrenheitToCelsius(32)', () => {
    expect(fahrenheitToCelsius(32)).toBe(0)
  })

  test(`fahrenheitToCelsius(212)`, () => {
    expect(fahrenheitToCelsius(212)).toBe(100)
  })

  test('fahrenheitToCelsius(-40)', () => {
    expect(fahrenheitToCelsius(-40)).toBe(-40)
  })
})

describe('celsiusToFahrenheit', () => {
  test('celsiusToFahrenheit(0)', () => {
    expect(celsiusToFahrenheit(0)).toBe(32)
  })

  test(`celsiusToFahrenheit(100)`, () => {
    expect(celsiusToFahrenheit(100)).toBe(212)
  })

  test('celsiusToFahrenheit(-10)', () => {
    expect(celsiusToFahrenheit(-10)).toBe(14)
  })
})
