import { describe, expect, test } from 'vitest'
import { sizeConversionString } from '../../lib/main'

describe('sizeConversionString', () => {
  test(`sizeConversionString(5000, 'GB')`, () => {
    expect(sizeConversionString(5000, 'GB')).toBe('4TB904GB')
  })
  
  test(`sizeConversionString(5000, 'GB', '-')`, () => {
    expect(sizeConversionString(5000, 'GB', '-')).toBe('4TB-904GB')
  })
})