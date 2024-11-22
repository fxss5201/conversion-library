/**
 * **numberToExponential**
 * 
 * <Badge type="tip" text="version: v0.0.15+" />
 * 
 * @group number-conversion
 *
 * @param value - Enter number value
 * @param fractionDigits - The number of digits after the decimal point, the default setting is the number required to fully represent the number.
 * @returns A string representing the given Number object in exponential notation with one digit before the decimal point, rounded to fractionDigits digits after the decimal point.
 * 
 * @example
 * ```ts
 * numberToExponential(123456)
 * // 1.23456e+5
 * numberToExponential(123456, 2)
 * // 1.23e+5
 * numberToExponential(123456.78)
 * // 1.2345678e+5
 * ```
 */
export function numberToExponential(value: number, fractionDigits?: number): string {
  return value.toExponential(fractionDigits)
}

/**
 * **exponentialToNumber**
 * 
 * <Badge type="tip" text="version: v0.0.15+" />
 * 
 * @group number-conversion
 *
 * @param value - Enter a exponential string
 * @returns A number
 * 
 * @example
 * ```ts
 * exponentialToNumber(1.23456e+5)
 * // 123456
 * exponentialToNumber(1.23e+5)
 * // 123000
 * exponentialToNumber(1.2345678e+5)
 * // 123456.78
 * ```
 */
export function exponentialToNumber(value: string): number {
  return Number(value)
}
