export type LengthUnitType = 'nm' | '纳米' | 'μm' | '微米' | 'mm' | '毫米' | 'cm' | '厘米' | 'dm' | '分米' | 'm' | '米' | 'km' | '千米' | '公里' | 'mile' | '英里' | 'yd' | '码' | 'ft' | '英尺' | 'in' | '英寸' | '里' | '丈' | '尺' | '寸' | '分' | 'n mile' | '海里'

/**
 * **lengthConversionBase**
 * 
 * <Badge type="tip" text="version: v0.0.13+" />
 * 
 * @group length-conversion
 *
 * @param value - Enter value
 * @param fromUnit - Enter value unit nm/纳米/um/微米/mm/毫米/cm/厘米/dm/分米/m/米/km/千米/公里/mile/英里/yd/码/ft/英尺/in/英寸/里/丈/尺/寸/分/n mile/海里
 * @param toUnit - Enter target unit nm/纳米/um/微米/mm/毫米/cm/厘米/dm/分米/m/米/km/千米/公里/mile/英里/yd/码/ft/英尺/in/英寸/里/丈/尺/寸/分/n mile/海里
 * @returns target value
 * 
 * @example
 * ```ts
 * lengthConversionBase(100, 'm', 'km')
 * // 0.1
 * lengthConversionBase(10, 'm', 'cm')
 * // 1000
 * ```
 */
export function lengthConversionBase(value: number, fromUnit: LengthUnitType, toUnit: LengthUnitType): number {
  const units = {
    nm: 0.000000001,
    纳米: 0.000000001,
    μm: 0.000001,
    微米: 0.000001,
    mm: 0.001,
    毫米: 0.001,
    cm: 0.01,
    厘米: 0.01,
    dm: 0.1,
    分米: 0.1,
    m: 1,
    米: 1,
    km: 1000,
    千米: 1000,
    公里: 1000,
    mile: 1609.344,
    英里: 1609.344,
    yd: 0.9144,
    码: 0.9144,
    ft: 0.3048,
    英尺: 0.3048,
    in: 0.0254,
    英寸: 0.0254,
    里: 500,
    丈: 3.33,
    尺: 0.333,
    寸: 0.0333,
    分: 0.00333,
    'n mile': 1852,
    海里: 1852
  }

  const fromValue = value * units[fromUnit]
  const toValue = fromValue / units[toUnit]
  return toValue
}