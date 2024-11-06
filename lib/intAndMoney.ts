/**
 * **intToMoney**
 * 
 * <Badge type="tip" text="version: v0.0.12+" />
 * 
 * @group int-and-money
 *
 * @param num - Enter int
 * @param symbol - symbol, example: ￥, $
 * @returns money
 * 
 * @example
 * ```ts
 * intToMoney(1234567)
 * // '1,234,567'
 * intToMoney(1234567, '$')
 * // '$ 1,234,567'
 * ```
 */
export function intToMoney(num: number, symbol?: string): string {
  const numStr = num.toString().replace(/\B(?=(\d{3})+\b)/g, ',')
  return symbol ? numStr.replace(/^/, `${symbol} `) : numStr
}
