import { type SizeUnitType } from './sizeConversionBase'
import { sizeConversionArray } from './sizeConversionArray'

/**
 * **sizeConversionString**
 * 
 * <Badge type="tip" text="version: v0.0.12+" />
 * 
 * @group size-conversion
 *
 * @param value - Enter value
 * @param fromUnit - Enter value unit B/KB/MB/GB/TB/PB/EB/ZB/YB
 * @param symbol - Enter symbol, Used for connecting strings
 * @returns size string
 * 
 * @example
 * ```ts
 * sizeConversionString(5000, 'GB')
 * // 4TB904GB
 * sizeConversionString(5000, 'GB', '-')
 * // 4TB-904GB
 * ```
 */
export function sizeConversionString(value: number, fromUnit: SizeUnitType, symbol?: string): string {
  const list = sizeConversionArray(value, fromUnit)
  return list.map(item => item.label).join(symbol ?? '')
}