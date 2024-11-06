import { describe, expect, test } from 'vitest'
import { fahrenheitToCelsius, celsiusToFahrenheit } from '../lib/main'

describe('fahrenheitToCelsius', () => {
  test('fahrenheitToCelsius(32)', () => {
    expect(fahrenheitToCelsius(32)).toEqual(0)
  })

  test(`fahrenheitToCelsius(212)`, () => {
    expect(fahrenheitToCelsius(212)).toEqual(100)
  })

  test('fahrenheitToCelsius(-40)', () => {
    expect(fahrenheitToCelsius(-40)).toEqual(-40)
  })
})

describe('celsiusToFahrenheit', () => {
  test('celsiusToFahrenheit(0)', () => {
    expect(celsiusToFahrenheit(0)).toEqual(32)
  })

  test(`celsiusToFahrenheit(100)`, () => {
    expect(celsiusToFahrenheit(100)).toEqual(212)
  })

  test('celsiusToFahrenheit(-10)', () => {
    expect(celsiusToFahrenheit(-10)).toEqual(14)
  })
})
