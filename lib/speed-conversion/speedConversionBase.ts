export type speedUnitType = 'km/h' | '千米/小时' | 'km/m' | '千米/分钟' | 'km/s' | '千米/秒' | 'm/h' | '米/小时' | 'm/m' | '米/分钟' | 'm/s' | '米/秒' | 'dm/h' | '分米/小时' | 'dm/m' | '分米/分钟' | 'dm/s' | '分米/秒' | 'cm/h' | '厘米/小时' | 'cm/m' | '厘米/分钟' | 'cm/s' | '厘米/秒' | 'kn' | '节'

/**
 * **speedConversionBase**
 * 
 * <Badge type="tip" text="version: v0.0.14+" />
 * 
 * @group speed-conversion
 *
 * @param value - Enter value
 * @param fromUnit - Enter value unit 'km/h' | '千米/小时' | 'km/m' | '千米/分钟' | 'km/s' | '千米/秒' | 'm/h' | '米/小时' | 'm/m' | '米/分钟' | 'm/s' | '米/秒' | 'dm/h' | '分米/小时' | 'dm/m' | '分米/分钟' | 'dm/s' | '分米/秒' | 'cm/h' | '厘米/小时' | 'cm/m' | '厘米/分钟' | 'cm/s' | '厘米/秒' | 'kn' | '节'
 * @param toUnit - Enter target unit 'km/h' | '千米/小时' | 'km/m' | '千米/分钟' | 'km/s' | '千米/秒' | 'm/h' | '米/小时' | 'm/m' | '米/分钟' | 'm/s' | '米/秒' | 'dm/h' | '分米/小时' | 'dm/m' | '分米/分钟' | 'dm/s' | '分米/秒' | 'cm/h' | '厘米/小时' | 'cm/m' | '厘米/分钟' | 'cm/s' | '厘米/秒' | 'kn' | '节'
 * @returns target value
 * 
 * @example
 * ```ts
 * speedConversionBase(10, 'm/s', 'km/h')
 * // 36
 * speedConversionBase(500, 'cm/s', 'm/s')
 * // 5
 * ```
 */
export function speedConversionBase(value: number, fromUnit: speedUnitType, toUnit: speedUnitType): number {
  const units = {
    'km/h': 1000 / 3600,
    '千米/小时': 1000 / 3600,
    'km/m': 1000 / 60,
    '千米/分钟': 1000 / 60,
    'km/s': 1000 / 3600,
    '千米/秒': 1000 / 3600,

    'm/h': 1 / 3600,
    '米/小时': 1 / 3600,
    'm/m': 1 / 60,
    '米/分钟': 1 / 60,
    'm/s': 1,
    '米/秒': 1,

    'dm/h': 0.1 / 3600,
    '分米/小时': 0.1 / 3600,
    'dm/m': 0.1 / 60,
    '分米/分钟': 0.1 / 60,
    'dm/s': 0.1,
    '分米/秒': 0.1,

    'cm/h': 0.01 / 3600,
    '厘米/小时': 0.01 / 3600,
    'cm/m': 0.01 / 60,
    '厘米/分钟': 0.01 / 60,
    'cm/s': 0.01,
    '厘米/秒': 0.01,

    'kn': 1852 / 3600,
    '节': 1852 / 3600
  }

  const fromValue = value * units[fromUnit]
  const toValue = fromValue / units[toUnit]
  return toValue
}