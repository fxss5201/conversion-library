import { describe, expect, test } from 'vitest'
import { weightConversionBase } from '../../lib/main'

describe('weightConversionBase', () => {
  test(`weightConversionBase(100, 'g', 'kg')`, () => {
    expect(weightConversionBase(100, 'g', 'kg')).toBe(0.1)
  })

  test(`weightConversionBase(1, 'kg', 'g')`, () => {
    expect(weightConversionBase(1, 'kg', 'g')).toBe(1000)
  })

  test(`weightConversionBase(1, 'μg', 'kg')`, () => {
    expect(weightConversionBase(1, 'μg', 'kg')).toBe(0.000000001)
  })

  test(`weightConversionBase(1, '微克', 'kg')`, () => {
    expect(weightConversionBase(1, '微克', 'kg')).toBe(0.000000001)
  })

  test(`weightConversionBase(1, 'mg', 'kg')`, () => {
    expect(weightConversionBase(1, 'mg', 'kg')).toBe(0.000001)
  })

  test(`weightConversionBase(1, '毫克', 'kg')`, () => {
    expect(weightConversionBase(1, '毫克', 'kg')).toBe(0.000001)
  })

  test(`weightConversionBase(1, 'g', 'kg')`, () => {
    expect(weightConversionBase(1, 'g', 'kg')).toBe(0.001)
  })

  test(`weightConversionBase(1, '克', 'kg')`, () => {
    expect(weightConversionBase(1, '克', 'kg')).toBe(0.001)
  })

  test(`weightConversionBase(1, 't', 'kg')`, () => {
    expect(weightConversionBase(1, 't', 'kg')).toBe(1000)
  })

  test(`weightConversionBase(1, '吨', 'kg')`, () => {
    expect(weightConversionBase(1, '吨', 'kg')).toBe(1000)
  })

  test(`weightConversionBase(1, 'lb', 'kg')`, () => {
    expect(weightConversionBase(1, 'lb', 'kg')).toBe(0.4536)
  })

  test(`weightConversionBase(1, '磅', 'kg')`, () => {
    expect(weightConversionBase(1, '磅', 'kg')).toBe(0.4536)
  })

  test(`weightConversionBase(1, 'oz', 'kg')`, () => {
    expect(weightConversionBase(1, 'oz', 'kg')).toBe(0.0283495)
  })

  test(`weightConversionBase(1, '盎司', 'kg')`, () => {
    expect(weightConversionBase(1, '盎司', 'kg')).toBe(0.0283495)
  })

  test(`weightConversionBase(1, '担', 'kg')`, () => {
    expect(weightConversionBase(1, '担', 'kg')).toBe(50)
  })

  test(`weightConversionBase(1, '斤', 'kg')`, () => {
    expect(weightConversionBase(1, '斤', 'kg')).toBe(0.5)
  })

  test(`weightConversionBase(1, '两', 'kg')`, () => {
    expect(weightConversionBase(1, '两', 'kg')).toBe(0.05)
  })

  test(`weightConversionBase(1, '钱', 'kg')`, () => {
    expect(weightConversionBase(1, '钱', 'kg')).toBe(0.005)
  })

  test(`weightConversionBase(1, '克拉', 'kg')`, () => {
    expect(weightConversionBase(1, '克拉', 'kg')).toBe(0.0002)
  })
})