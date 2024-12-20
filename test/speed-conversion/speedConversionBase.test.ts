import { describe, expect, test } from 'vitest'
import { speedConversionBase } from '../../lib/main'

describe('speedConversionBase', () => {
  test(`speedConversionBase(10, 'm/s', 'km/h')`, () => {
    expect(speedConversionBase(10, 'm/s', 'km/h')).toBe(36)
  })

  test(`speedConversionBase(72, 'km/h', 'm/s')`, () => {
    expect(speedConversionBase(72, 'km/h', 'm/s')).toBe(20)
  })

  test(`speedConversionBase(3, 'm/s', 'cm/s')`, () => {
    expect(speedConversionBase(3, 'm/s', 'cm/s')).toBe(300)
  })

  test(`speedConversionBase(500, 'cm/s', 'm/s')`, () => {
    expect(speedConversionBase(500, 'cm/s', 'm/s')).toBe(5)
  })

  test(`speedConversionBase(30, 'kn', 'km/h')`, () => {
    console.log(speedConversionBase(30, 'kn', 'km/h'))
    expect(speedConversionBase(30, 'kn', 'km/h').toFixed(2)).toBe('55.56')
  })

  test(`speedConversionBase(92.6, 'km/h', 'kn')`, () => {
    console.log(speedConversionBase(92.6, 'km/h', 'kn'))
    expect(speedConversionBase(92.6, 'km/h', 'kn').toFixed(2)).toBe('50.00')
  })
})