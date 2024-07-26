import { describe, expect, test } from 'vitest'
import { hexRrggbbToHexRgb, hexRgbToHexRrggbb, hexRgbsToRgbArray, hexRgbsToRgb, rgbToRgbArray, rgbToHexRgbs } from '../../lib/main'

describe('hexRrggbbToHexRgb', () => {
  test(`hexRrggbbToHexRgb`, () => {
    expect(hexRrggbbToHexRgb('#ff0000')).toBe('#f00')
  })

  test(`hexRrggbbToHexRgb`, () => {
    expect(hexRrggbbToHexRgb('#ff0f00')).toBe('#ff0f00')
  })

  test(`hexRrggbbToHexRgb error`, () => {
    expect(() => hexRrggbbToHexRgb('#ff00000')).toThrowError('hexRrggbb format error')
  })
})

describe('hexRgbToHexRrggbb', () => {
  test(`hexRgbToHexRrggbb`, () => {
    expect(hexRgbToHexRrggbb('#f00')).toBe('#ff0000')
  })

  test(`hexRgbToHexRrggbb error`, () => {
    expect(() => hexRgbToHexRrggbb('#f000')).toThrowError('hexRgb format error')
  })
})

describe('hexRgbsToRgbArray', () => {
  test(`hexRgbsToRgbArray`, () => {
    expect(hexRgbsToRgbArray('#f00')).toEqual([255, 0, 0])
  })

  test(`hexRgbsToRgbArray error`, () => {
    expect(() => hexRgbsToRgbArray('#f000')).toThrowError('hexRgbs format error')
  })
})

test(`hexRgbsToRgb`, () => {
  expect(hexRgbsToRgb('#f00')).toBe('rgb(255,0,0)')
})

test(`rgbToRgbArray`, () => {
  expect(rgbToRgbArray('rgb(255, 0, 0)')).toEqual([255, 0, 0])
})

test(`rgbToHexRgbs`, () => {
  expect(rgbToHexRgbs('rgb(255, 0, 0)')).toBe('#f00')
})
