import { describe, expect, test } from 'vitest'
import { areaConversionBase } from '../../lib/main'

describe('areaConversionBase', () => {
  test(`areaConversionBase(100, 'c㎡', '㎡')`, () => {
    expect(areaConversionBase(100, 'c㎡', '㎡')).toBe(0.01)
  })

  test(`areaConversionBase(1, '㎡', 'c㎡')`, () => {
    expect(areaConversionBase(1, '㎡', 'c㎡')).toBe(10000)
  })

  test(`areaConversionBase(1, 'm㎡', '㎡')`, () => {
    expect(areaConversionBase(1, 'm㎡', '㎡')).toBe(0.000001)
  })

  test(`areaConversionBase(1, '平方毫米', '㎡')`, () => {
    expect(areaConversionBase(1, '平方毫米', '㎡')).toBe(0.000001)
  })

  test(`areaConversionBase(1, 'c㎡', '㎡')`, () => {
    expect(areaConversionBase(1, 'c㎡', '㎡')).toBe(0.0001)
  })

  test(`areaConversionBase(1, '平方厘米', '㎡')`, () => {
    expect(areaConversionBase(1, '平方厘米', '㎡')).toBe(0.0001)
  })

  test(`areaConversionBase(1, 'd㎡', '㎡')`, () => {
    expect(areaConversionBase(1, 'd㎡', '㎡')).toBe(0.01)
  })

  test(`areaConversionBase(1, '平方分米', '㎡')`, () => {
    expect(areaConversionBase(1, '平方分米', '㎡')).toBe(0.01)
  })

  test(`areaConversionBase(1, 'h㎡', '㎡')`, () => {
    expect(areaConversionBase(1, 'h㎡', '㎡')).toBe(10000)
  })

  test(`areaConversionBase(1, '公顷', '㎡')`, () => {
    expect(areaConversionBase(1, '公顷', '㎡')).toBe(10000)
  })

  test(`areaConversionBase(1, 'k㎡', '㎡')`, () => {
    expect(areaConversionBase(1, 'k㎡', '㎡')).toBe(1000000)
  })

  test(`areaConversionBase(1, '平方千米', '㎡')`, () => {
    expect(areaConversionBase(1, '平方千米', '㎡')).toBe(1000000)
  })

  test(`areaConversionBase(1, 'sq.in', '㎡')`, () => {
    expect(areaConversionBase(1, 'sq.in', '㎡')).toBe(0.00064516)
  })

  test(`areaConversionBase(1, '平方英寸', '㎡')`, () => {
    expect(areaConversionBase(1, '平方英寸', '㎡')).toBe(0.00064516)
  })

  test(`areaConversionBase(1, 'sq.ft', '㎡')`, () => {
    expect(areaConversionBase(1, 'sq.ft', '㎡')).toBe(0.092903)
  })

  test(`areaConversionBase(1, '平方英尺', '㎡')`, () => {
    expect(areaConversionBase(1, '平方英尺', '㎡')).toBe(0.092903)
  })

  test(`areaConversionBase(1, 'sq.yd', '㎡')`, () => {
    expect(areaConversionBase(1, 'sq.yd', '㎡')).toBe(0.836127)
  })

  test(`areaConversionBase(1, '平方码', '㎡')`, () => {
    expect(areaConversionBase(1, '平方码', '㎡')).toBe(0.836127)
  })

  test(`areaConversionBase(1, 'acre', '㎡')`, () => {
    expect(areaConversionBase(1, 'acre', '㎡')).toBe(4046.86)
  })

  test(`areaConversionBase(1, '英亩', '㎡')`, () => {
    expect(areaConversionBase(1, '英亩', '㎡')).toBe(4046.86)
  })

  test(`areaConversionBase(1, 'sq.mi', '㎡')`, () => {
    expect(areaConversionBase(1, 'sq.mi', '㎡')).toBe(2589988.110336)
  })

  test(`areaConversionBase(1, '平方英里', '㎡')`, () => {
    expect(areaConversionBase(1, '平方英里', '㎡')).toBe(2589988.110336)
  })

  test(`areaConversionBase(1, '平方丈', '㎡')`, () => {
    expect(areaConversionBase(1, '平方丈', '㎡')).toBe(11.1111)
  })

  test(`areaConversionBase(1, '平方尺', '㎡')`, () => {
    expect(areaConversionBase(1, '平方尺', '㎡')).toBe(0.1111)
  })

  test(`areaConversionBase(1, '平方寸', '㎡')`, () => {
    expect(areaConversionBase(1, '平方寸', '㎡')).toBe(0.0011)
  })

  test(`areaConversionBase(1, '亩', '㎡')`, () => {
    expect(areaConversionBase(1, '亩', '㎡')).toBe(666.67)
  })

  test(`areaConversionBase(1, '分', '㎡')`, () => {
    expect(areaConversionBase(1, '分', '㎡')).toBe(66.667)
  })
})