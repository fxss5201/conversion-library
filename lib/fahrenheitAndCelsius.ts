/**
 * **fahrenheitToCelsius**
 * 
 * <Badge type="tip" text="version: v0.0.12+" />
 * 
 * @group fahrenheit-and-celsius
 *
 * @param fahrenheit - Enter fahrenheit
 * @returns celsius
 * 
 * @example
 * ```ts
 * fahrenheitToCelsius(32)
 * // 0
 * fahrenheitToCelsius(212)
 * // 100
 * fahrenheitToCelsius(-40)
 * // -40
 * ```
 */
export function fahrenheitToCelsius(fahrenheit: number): number {
  return (fahrenheit - 32) * 5 / 9
}

/**
 * **celsiusToFahrenheit**
 * 
 * <Badge type="tip" text="version: v0.0.12+" />
 * 
 * @group fahrenheit-and-celsius
 *
 * @param celsius - Enter celsius
 * @returns fahrenheit
 * 
 * @example
 * ```ts
 * celsiusToFahrenheit(0)
 * // 32
 * celsiusToFahrenheit(100)
 * // 212
 * celsiusToFahrenheit(-10)
 * // 14
 * ```
 */
export function celsiusToFahrenheit(celsius: number): number {
  return celsius * 9 / 5 + 32
}
