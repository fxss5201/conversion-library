import { describe, expect, test } from 'vitest'
import { sizeConversionBase } from '../../lib/main'

describe('sizeConversionBase', () => {
  test(`sizeConversionBase(1024, 'B', 'KB')`, () => {
    expect(sizeConversionBase(1024, 'B', 'KB')).toBe(1)
  })

  test(`sizeConversionBase(20 * 1024, 'KB', 'MB')`, () => {
    expect(sizeConversionBase(20 * 1024, 'KB', 'MB')).toBe(20)
  })

  test(`sizeConversionBase(512, 'MB', 'GB')`, () => {
    expect(sizeConversionBase(512, 'MB', 'GB')).toBe(0.5)
  })

  test(`sizeConversionBase(0.5, 'TB', 'GB')`, () => {
    expect(sizeConversionBase(0.5, 'TB', 'GB')).toBe(512)
  })

  test(`sizeConversionBase(0.25, 'PB', 'TB')`, () => {
    expect(sizeConversionBase(0.25, 'PB', 'TB')).toBe(256)
  })

  test(`sizeConversionBase(1024, 'EB', 'PB')`, () => {
    expect(sizeConversionBase(1024, 'EB', 'PB')).toBe(1024 * 1024)
  })

  test(`sizeConversionBase(1024, 'EB', 'ZB')`, () => {
    expect(sizeConversionBase(1024, 'EB', 'ZB')).toBe(1)
  })

  test(`sizeConversionBase(1024, 'ZB', 'YB')`, () => {
    expect(sizeConversionBase(1024, 'ZB', 'YB')).toBe(1)
  })

  test(`sizeConversionBase(512, 'GB', 'B')`, () => {
    expect(sizeConversionBase(512, 'GB', 'B')).toBe(512 * 1024 * 1024 * 1024)
  })
})
