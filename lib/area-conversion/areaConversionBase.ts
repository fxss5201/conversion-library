export type AreaUnitType = 'm㎡' | '平方毫米' | 'c㎡' | '平方厘米' | 'd㎡' | '平方分米' | '㎡' | '平方米' | 'h㎡' | '公顷' | 'k㎡' | '平方千米' | 'sq.in' | '平方英寸' | 'sq.ft' | '平方英尺' | 'sq.yd' | '平方码' | 'acre' | '英亩' | 'sq.mi' | '平方英里' | '平方丈' | '平方尺' | '平方寸' | '亩' | '分'

/**
 * **areaConversionBase**
 * 
 * <Badge type="tip" text="version: v0.0.13+" />
 * 
 * @group area-conversion
 *
 * @param value - Enter value
 * @param fromUnit - Enter value unit m㎡/平方毫米/c㎡/平方厘米/d㎡/平方分米/㎡/平方米/h㎡/公顷/k㎡/平方千米/sq.in/平方英寸/sq.ft/平方英尺/sq.yd/平方码/acre/英亩/sq.mi/平方英里/平方丈/平方尺/平方寸/亩/分
 * @param toUnit - Enter target unit m㎡/平方毫米/c㎡/平方厘米/d㎡/平方分米/㎡/平方米/h㎡/公顷/k㎡/平方千米/sq.in/平方英寸/sq.ft/平方英尺/sq.yd/平方码/acre/英亩/sq.mi/平方英里/平方丈/平方尺/平方寸/亩/分
 * @returns target value
 * 
 * @example
 * ```ts
 * areaConversionBase(100, 'c㎡', '㎡')
 * // 0.01
 * areaConversionBase(1, '㎡', 'c㎡')
 * // 10000
 * ```
 */
export function areaConversionBase(value: number, fromUnit: AreaUnitType, toUnit: AreaUnitType): number {
  const units = {
    'm㎡': 0.000001,
    平方毫米: 0.000001,
    'c㎡': 0.0001,
    平方厘米: 0.0001,
    'd㎡': 0.01,
    平方分米: 0.01,
    '㎡': 1,
    平方米: 1,
    'h㎡': 10000,
    公顷: 10000,
    'k㎡': 1000000,
    平方千米: 1000000,
    'sq.in': 0.00064516,
    平方英寸: 0.00064516,
    'sq.ft': 0.092903,
    平方英尺: 0.092903,
    'sq.yd': 0.836127,
    平方码: 0.836127,
    'acre': 4046.86,
    英亩: 4046.86,
    'sq.mi': 2589988.110336,
    平方英里: 2589988.110336,
    平方丈: 11.1111,
    平方尺: 0.1111,
    平方寸: 0.0011,
    亩: 666.67,
    分: 66.667
  }

  const fromValue = value * units[fromUnit]
  const toValue = fromValue / units[toUnit]
  return toValue
}