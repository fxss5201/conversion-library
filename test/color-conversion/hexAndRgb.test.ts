import { describe, expect, test } from 'vitest'
import { hexRrggbbToHexRgb, hexRgbToHexRrggbb, hexRgbsToRgbArray, hexRgbsToRgbObject, hexRgbsToRgb, rgbToRgbArray, rgbToRgbObject, rgbToHexRgbs } from '../../lib/main'

describe('hexRrggbbToHexRgb', () => {
  test(`hexRrggbbToHexRgb`, () => {
    expect(hexRrggbbToHexRgb('#ff0000')).toBe('#f00')
    expect(hexRrggbbToHexRgb('#33445566')).toBe('#3456')
    expect(hexRrggbbToHexRgb('#ff0f00')).toBe('#ff0f00')
    expect(hexRrggbbToHexRgb('#33445568')).toBe('#33445568')
  })

  test(`hexRrggbbToHexRgb error`, () => {
    expect(() => hexRrggbbToHexRgb('#ff00000')).toThrowError('hexRrggbb format error')
    expect(() => hexRrggbbToHexRgb('ff0')).toThrowError('hexRrggbb format error')
  })
})

describe('hexRgbToHexRrggbb', () => {
  test(`hexRgbToHexRrggbb`, () => {
    expect(hexRgbToHexRrggbb('#f00')).toBe('#ff0000')
    expect(hexRgbToHexRrggbb('#3456')).toBe('#33445566')
    expect(hexRgbToHexRrggbb('#334455')).toBe('#334455')
  })

  test(`hexRgbToHexRrggbb error`, () => {
    expect(() => hexRgbToHexRrggbb('#f0000')).toThrowError('hexRgb format error')
    expect(() => hexRgbToHexRrggbb('ff0')).toThrowError('hexRgb format error')
  })
})

describe('hexRgbsToRgbArray', () => {
  test(`hexRgbsToRgbArray`, () => {
    expect(hexRgbsToRgbArray('#f00')).toEqual([255, 0, 0])
    expect(hexRgbsToRgbArray('#3456')).toEqual([51, 68, 85, 0.4])
    expect(hexRgbsToRgbArray('#33445566')).toEqual([51, 68, 85, 0.4])
    expect(hexRgbsToRgbArray('#f005')).toEqual([255, 0, 0, 0.33])
  })

  test(`hexRgbsToRgbArray error`, () => {
    expect(() => hexRgbsToRgbArray('#f0000')).toThrowError('hexRgbs format error')
    expect(() => hexRgbsToRgbArray('ff0')).toThrowError('hexRgbs format error')
  })
})

describe('hexRgbsToRgbObject', () => {
  test(`hexRgbsToRgbObject`, () => {
    expect(hexRgbsToRgbObject('#f00')).toEqual({ r: 255, g: 0, b: 0})
    expect(hexRgbsToRgbObject('#3456')).toEqual({ r: 51, g: 68, b: 85, a: 0.4})
    expect(hexRgbsToRgbObject('#33445566')).toEqual({ r: 51, g: 68, b: 85, a: 0.4})
    expect(hexRgbsToRgbObject('#f005')).toEqual({ r: 255, g: 0, b: 0, a: 0.33})
  })

  test(`hexRgbsToRgbObject error`, () => {
    expect(() => hexRgbsToRgbObject('#f0000')).toThrowError('hexRgbs format error')
    expect(() => hexRgbsToRgbObject('ff0')).toThrowError('hexRgbs format error')
  })
})

describe(`hexRgbsToRgb`, () => {
  test(`hexRgbsToRgb`, () => {
    expect(hexRgbsToRgb('#f00')).toBe('rgb(255,0,0)')
    expect(hexRgbsToRgb('#3456')).toBe('rgba(51,68,85,0.4)')
    expect(hexRgbsToRgb('#33445566')).toBe('rgba(51,68,85,0.4)')
    expect(hexRgbsToRgb('#f005')).toBe('rgba(255,0,0,0.33)')
  })

  test(`hexRgbsToRgb error`, () => {
    expect(() => hexRgbsToRgb('#f0000')).toThrowError('hexRgbs format error')
    expect(() => hexRgbsToRgb('ff0')).toThrowError('hexRgbs format error')
  })
})

describe(`rgbToRgbArray`, () => {
  test(`rgbToRgbArray`, () => {
    expect(rgbToRgbArray('rgb(255, 0, 0)')).toEqual([255, 0, 0])
    expect(rgbToRgbArray('rgba(255, 0, 0, 0.33)')).toEqual([255, 0, 0, 0.33])
  })

  test(`rgbToRgbArray error`, () => {
    expect(() => rgbToRgbArray('#f0000')).toThrowError('rgb format error')
    expect(() => rgbToRgbArray('ff0')).toThrowError('rgb format error')
  })
})

describe('rgbToRgbObject', () => {
  test(`rgbToRgbObject`, () => {
    expect(rgbToRgbObject('rgb(255, 0, 0)')).toEqual({ r: 255, g: 0, b: 0})
    expect(rgbToRgbObject('rgba(51, 68, 85, 0.4)')).toEqual({ r: 51, g: 68, b: 85, a: 0.4})
    expect(rgbToRgbObject('rgba(255, 0, 0, 0.33)')).toEqual({ r: 255, g: 0, b: 0, a: 0.33})
  })

  test(`rgbToRgbObject error`, () => {
    expect(() => rgbToRgbObject('#f0000')).toThrowError('rgb format error')
    expect(() => rgbToRgbObject('ff0')).toThrowError('rgb format error')
  })
})

describe(`rgbToHexRgbs`, () => {
  test(`rgbToHexRgbs`, () => {
    expect(rgbToHexRgbs('rgb(255, 0, 0)')).toBe('#f00')
    expect(rgbToHexRgbs('rgba(255, 0, 0, 0.33)')).toBe('#ff000054')
  })

  test(`rgbToHexRgbs error`, () => {
    expect(() => rgbToHexRgbs('#f0000')).toThrowError('rgb format error')
    expect(() => rgbToHexRgbs('ff0')).toThrowError('rgb format error')
  })
})
