import { getMapNumberToString, getMapStringToNumber } from "./utils"

/**
 * **[en:decimalToOtherBase][zh:十进制转任意进制]**
 * 
 * > alias：[`tenToOther`](tenToOther)
 * 
 * @group decimal-conversion
 *
 * @param num - [en:Enter a value of number type][zh:输入十进制数值]
 * @param base - [en:Target base][zh:目标进制]
 * @returns [en:Return the corresponding string][zh:返回目标进制字符串]
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

export const tenToOther = decimalToOtherBase

/**
 * **[en:otherBaseToDecimal][zh:任意进制制转十进制]**
 * 
 * > alias：[`otherToTen`](otherToTen)
 * 
 * @group decimal-conversion
 *
 * @param str - [en:Enter a value of string type][zh:带转换的字符串]
 * @param base - [en:Current base][zh:带转换的字符串的进制]
 * @returns [en:Return the corresponding number][zh:输出十进制数值]
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

export const otherToTen = otherBaseToDecimal
