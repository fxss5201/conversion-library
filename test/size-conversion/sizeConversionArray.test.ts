import { describe, expect, test } from 'vitest'
import { sizeConversionArray } from '../../lib/main'

describe('sizeConversionArray', () => {
  const res5000GB = [
    { value: 4, unit: 'TB', label: '4TB' },
    { value: 904, unit: 'GB', label: '904GB' }
  ]
  test(`sizeConversionArray(5000, 'GB')`, () => {
    expect(sizeConversionArray(5000, 'GB')).toEqual(res5000GB)
  })

  const res50000000MB = [
    { value: 47, unit: 'TB', label: '47TB' },
    { value: 700, unit: 'GB', label: '700GB' },
    { value: 128, unit: 'MB', label: '128MB' }
  ]
  test(`sizeConversionArray(50000000, 'MB')`, () => {
    expect(sizeConversionArray(50000000, 'MB')).toEqual(res50000000MB)
  })

  const res2000YB = [
    { value: 2000, unit: 'YB', label: '2000YB' }
  ]
  test(`sizeConversionArray(2000, 'YB')`, () => {
    expect(sizeConversionArray(2000, 'YB')).toEqual(res2000YB)
  })

  const res2000000ZB = [
    { value: 128, unit: 'ZB', label: '128ZB' },
    { value: 1953, unit: 'YB', label: '1953YB' }
  ]
  test(`sizeConversionArray(2000000, 'ZB')`, () => {
    expect(sizeConversionArray(2000000, 'ZB')).toEqual(res2000000ZB)
  })
})