import { getMapNumberToString, getMapStringToNumber } from "./utils"

/**
 * decimal to other base
 * 
 * > alias：[`tenToOther`](tenToOther)
 * 
 * @group decimal-conversion
 *
 * @param num - Enter a value of number type
 * @param base - Target base
 * @returns Return the corresponding string
 * 
 * @example
 * ```ts
 * decimalToOtherBase(10, 2) // '1010'
 * ```
 */
export function decimalToOtherBase (num: number, base: number): string {
  if (base === 10 || base > 36 || base < 2) return String(num)
  const numToStr = getMapNumberToString(base)
  let res = ''
  while (num > 0) {
    const remainder = num % base
    const curStr = remainder > 9 ? numToStr[remainder] : remainder
    res = curStr + res
    num = ~~(num / base)
  }
  return res
}

/**
 * decimal to other base
 * 
 * @group decimal-conversion
 *
 * @param num - Enter a value of number type
 * @param base - Enter a value of number type
 * @returns Return the corresponding string
 * 
 * @example
 * ```ts
 * tenToOther(10, 2) // '1010'
 * ```
 */
export const tenToOther = decimalToOtherBase

/**
 * other base to decimal
 * 
 * > alias：[`otherToTen`](otherToTen)
 * 
 * @group decimal-conversion
 *
 * @param str - Enter a value of string type
 * @param base - Current base
 * @returns Return the corresponding number
 * 
 * @example
 * ```ts
 * decimalToOtherBase('1010', 2) // 10
 * ```
 */
export function otherBaseToDecimal (str: string, base: number): number {
  if (base === 10 || base > 36 || base < 2) return Number(str)
  str = str.toLowerCase()
  let res = 0
  let digit = 0
  const strToNum = getMapStringToNumber(base)
  for (let i = str.length - 1; i > -1; i--) {
    const curStr = str[i]
    const curNum = strToNum[curStr] ? strToNum[curStr] : curStr
    res += Number(curNum) * Math.pow(base, digit)
    digit += 1
  }
  return res
}

/**
 * other base to decimal
 * 
 * @group decimal-conversion
 *
 * @param str - Enter a value of string type
 * @param base - Enter a value of number type
 * @returns Return the corresponding number
 * 
 * @example
 * ```ts
 * otherToTen('1010', 2) // 10
 * ```
 */
export const otherToTen = otherBaseToDecimal
