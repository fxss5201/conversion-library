import { expect, test } from 'vitest'
import { hexRrggbbToHexRgb, hexRgbToHexRrggbb, hexRgbsToRgbArray, hexRgbsToRgb, rgbToRgbArray, rgbToHexRgbs } from '../../lib/main'

test(`hexRrggbbToHexRgb`, () => {
  expect(hexRrggbbToHexRgb('#ff0000')).toBe('#f00')
})

test(`hexRgbToHexRrggbb`, () => {
  expect(hexRgbToHexRrggbb('#f00')).toBe('#ff0000')
})

console.log(hexRgbsToRgbArray('#f00'))
test(`hexRgbsToRgbArray`, () => {
  expect(hexRgbsToRgbArray('#f00')).toEqual([255, 0, 0])
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
