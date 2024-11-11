export type WeightUnitType = 'μg' | '微克' | 'mg' | '毫克' | 'g' | '克' | 'kg' | '千克' | 't' | '吨' | 'lb' | '磅' | 'oz' | '盎司' | '担' | '斤' | '两' | '钱' | '克拉'

/**
 * **weightConversionBase**
 * 
 * <Badge type="tip" text="version: v0.0.13+" />
 * 
 * @group weight-conversion
 *
 * @param value - Enter value
 * @param fromUnit - Enter value unit μg/微克/mg/毫克/g/克/kg/千克/t/吨/lb/磅/oz/盎司/担/斤/两/钱/克拉
 * @param toUnit - Enter target unit μg/微克/mg/毫克/g/克/kg/千克/t/吨/lb/磅/oz/盎司/担/斤/两/钱/克拉
 * @returns target value
 * 
 * @example
 * ```ts
 * weightConversionBase(100, 'g', 'kg')
 * // 0.1
 * weightConversionBase(1, 'kg', 'g')
 * // 1000
 * ```
 */
export function weightConversionBase(value: number, fromUnit: WeightUnitType, toUnit: WeightUnitType): number {
  const units = {
    μg: 0.000000001,
    微克: 0.000000001,
    mg: 0.000001,
    毫克: 0.000001,
    g: 0.001,
    克: 0.001,
    kg: 1,
    千克: 1,
    t: 1000,
    吨: 1000,
    lb: 0.4536,
    磅: 0.4536,
    oz: 0.0283495,
    盎司: 0.0283495,
    担: 50,
    斤: 0.5,
    两: 0.05,
    钱: 0.005,
    克拉: 0.0002
  }

  const fromValue = value * units[fromUnit]
  const toValue = fromValue / units[toUnit]
  return toValue
}