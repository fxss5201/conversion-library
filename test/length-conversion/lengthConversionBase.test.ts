import { describe, expect, test } from 'vitest'
import { lengthConversionBase } from '../../lib/main'

describe('lengthConversionBase', () => {
  test(`lengthConversionBase(100, 'm', 'km')`, () => {
    expect(lengthConversionBase(100, 'm', 'km')).toBe(0.1)
  })

  test(`lengthConversionBase(100, '米', '千米')`, () => {
    expect(lengthConversionBase(100, '米', '千米')).toBe(0.1)
  })

  test(`lengthConversionBase(1, 'nm', '米')`, () => {
    expect(lengthConversionBase(1, 'nm', '米')).toBe(0.000000001)
  })

  test(`lengthConversionBase(1, '纳米', '米')`, () => {
    expect(lengthConversionBase(1, '纳米', '米')).toBe(0.000000001)
  })

  test(`lengthConversionBase(1, 'μm', '米')`, () => {
    expect(lengthConversionBase(1, 'μm', '米')).toBe(0.000001)
  })

  test(`lengthConversionBase(1, '微米', '米')`, () => {
    expect(lengthConversionBase(1, '微米', '米')).toBe(0.000001)
  })

  test(`lengthConversionBase(1, 'mm', '米')`, () => {
    expect(lengthConversionBase(1, 'mm', '米')).toBe(0.001)
  })

  test(`lengthConversionBase(1, '毫米', '米')`, () => {
    expect(lengthConversionBase(1, '毫米', '米')).toBe(0.001)
  })

  test(`lengthConversionBase(1, 'cm', '米')`, () => {
    expect(lengthConversionBase(1, 'cm', '米')).toBe(0.01)
  })

  test(`lengthConversionBase(1, '厘米', '米')`, () => {
    expect(lengthConversionBase(1, '厘米', '米')).toBe(0.01)
  })

  test(`lengthConversionBase(1, 'dm', '米')`, () => {
    expect(lengthConversionBase(1, 'dm', '米')).toBe(0.1)
  })

  test(`lengthConversionBase(1, '分米', '米')`, () => {
    expect(lengthConversionBase(1, '分米', '米')).toBe(0.1)
  })

  test(`lengthConversionBase(1, 'km', '米')`, () => {
    expect(lengthConversionBase(1, 'km', '米')).toBe(1000)
  })

  test(`lengthConversionBase(1, '千米', '米')`, () => {
    expect(lengthConversionBase(1, '千米', '米')).toBe(1000)
  })

  test(`lengthConversionBase(1, '公里', '米')`, () => {
    expect(lengthConversionBase(1, '公里', '米')).toBe(1000)
  })

  test(`lengthConversionBase(1, 'mile', '米')`, () => {
    expect(lengthConversionBase(1, 'mile', '米')).toBe(1609.344)
  })

  test(`lengthConversionBase(1, '英里', '米')`, () => {
    expect(lengthConversionBase(1, '英里', '米')).toBe(1609.344)
  })

  test(`lengthConversionBase(1, 'yd', '米')`, () => {
    expect(lengthConversionBase(1, 'yd', '米')).toBe(0.9144)
  })

  test(`lengthConversionBase(1, '码', '米')`, () => {
    expect(lengthConversionBase(1, '码', '米')).toBe(0.9144)
  })

  test(`lengthConversionBase(1, 'ft', '米')`, () => {
    expect(lengthConversionBase(1, 'ft', '米')).toBe(0.3048)
  })

  test(`lengthConversionBase(1, '英尺', '米')`, () => {
    expect(lengthConversionBase(1, '英尺', '米')).toBe(0.3048)
  })

  test(`lengthConversionBase(1, 'in', '米')`, () => {
    expect(lengthConversionBase(1, 'in', '米')).toBe(0.0254)
  })

  test(`lengthConversionBase(1, '英寸', '米')`, () => {
    expect(lengthConversionBase(1, '英寸', '米')).toBe(0.0254)
  })

  test(`lengthConversionBase(1, '里', '米')`, () => {
    expect(lengthConversionBase(1, '里', '米')).toBe(500)
  })

  test(`lengthConversionBase(1, '丈', '米')`, () => {
    expect(lengthConversionBase(1, '丈', '米')).toBe(3.33)
  })

  test(`lengthConversionBase(1, '尺', '米')`, () => {
    expect(lengthConversionBase(1, '尺', '米')).toBe(0.333)
  })

  test(`lengthConversionBase(1, '寸', '米')`, () => {
    expect(lengthConversionBase(1, '寸', '米')).toBe(0.0333)
  })

  test(`lengthConversionBase(1, '分', '米')`, () => {
    expect(lengthConversionBase(1, '分', '米')).toBe(0.00333)
  })

  test(`lengthConversionBase(1, 'n mile', '米')`, () => {
    expect(lengthConversionBase(1, 'n mile', '米')).toBe(1852)
  })

  test(`lengthConversionBase(1, '海里', '米')`, () => {
    expect(lengthConversionBase(1, '海里', '米')).toBe(1852)
  })
})