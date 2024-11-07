import { type SizeUnitType } from './sizeConversionBase'

export type SizeConversionArrayItemType = { value: number, unit: SizeUnitType, label: string }

/**
 * **sizeConversionArray**
 * 
 * <Badge type="tip" text="version: v0.0.12+" />
 * 
 * @group size-conversion
 *
 * @param value - Enter value
 * @param fromUnit - Enter value unit B/KB/MB/GB/TB/PB/EB/ZB/YB
 * @returns size array, { value: number, unit: SizeUnitType, label: string }[]
 * 
 * @example
 * ```ts
 * sizeConversionArray(5000, 'GB')
 * [
 *   { value: 4, unit: 'TB', label: '4TB' },
 *   { value: 904, unit: 'GB', label: '904GB' }
 * ]
 * ```
 */
export function sizeConversionArray(value: number, fromUnit: SizeUnitType): SizeConversionArrayItemType[] {
  const unitArray: SizeUnitType[] = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const list: SizeConversionArrayItemType[] = []
  let nowUnit = fromUnit
  let nowUnitIndex = unitArray.indexOf(nowUnit)
  while (value > 0) {
    if (nowUnitIndex === unitArray.length - 1) {
      list.push({
        value,
        unit: nowUnit,
        label: `${value}${nowUnit}`
      })
      return list
    }
    const nowValue = value % 1024
    list.unshift({
      value: nowValue,
      unit: nowUnit,
      label: `${nowValue}${nowUnit}`
    })
    value = Math.floor(value / 1024)
    nowUnitIndex++
    nowUnit = unitArray[nowUnitIndex]
  }
  return list
}
