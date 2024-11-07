export type SizeUnitType = 'B' | 'KB' | 'MB' | 'GB' | 'TB' | 'PB' | 'EB' | 'ZB' | 'YB'
/**
 * **sizeConversionBase**
 * 
 * <Badge type="tip" text="version: v0.0.12+" />
 * 
 * @group size-conversion
 *
 * @param value - Enter value
 * @param fromUnit - Enter value unit B/KB/MB/GB/TB/PB/EB/ZB/YB
 * @param toUnit - Enter target unit B/KB/MB/GB/TB/PB/EB/ZB/YB
 * @returns target value
 * 
 * @example
 * ```ts
 * sizeConversionBase(1024, 'B', 'KB')
 * // 1
 * sizeConversionBase(20 * 1024, 'KB', 'MB')
 * // 20
 * sizeConversionBase(512, 'MB', 'GB')
 * // 0.5
 * ```
 */
export function sizeConversionBase(value: number, fromUnit: SizeUnitType, toUnit: SizeUnitType): number {
  const B = 1
  const KB = 1024
  const MB = 1024 * KB
  const GB = 1024 * MB
  const TB = 1024 * GB
  const PB = 1024 * TB
  const EB = 1024 * PB
  const ZB = 1024 * EB
  const YB = 1024 * ZB

  const units = {
    B,
    KB,
    MB,
    GB,
    TB,
    PB,
    EB,
    ZB,
    YB,
  }

  const fromValue = value * units[fromUnit]
  const toValue = fromValue / units[toUnit]
  return toValue
}
