/**
 * **[en:decimalToBinary][zh:十进制转二进制]**
 * 
 * > alias：[`tenToTwo`](tenToTwo)
 * 
 * @group decimal-conversion
 *
 * @param num - [en:Enter a value of number type][zh:输入十进制数值]
 * @returns [en:Return the corresponding binary][zh:返回二进制]
 * 
 * @example
 * ```ts
 * decimalToBinary(10) // '1010'
 * ```
 */
export function decimalToBinary (num: number): string {
  let res = ''
  while (num > 0) {
    res = num % 2 + res
    num = ~~(num / 2)
  }
  return res
}

export const tenToTwo = decimalToBinary

/**
 * **[en:binaryToDecimal][zh:二进制转十进制]**
 * 
 * > alias：[`twoToTen`](twoToTen)
 * 
 * @group decimal-conversion
 * 
 * @param str - [en:Enter a value of string type][zh:输入二进制字符串]
 * @returns [en:Return the corresponding number][zh:输出十进制数值]
 * 
 * @example
 * ```ts
 * binaryToDecimal('1010') // 10
 * ```
 */
export function binaryToDecimal (str: string): number {
  let res = 0
  let digit = 0
  for (let i = str.length - 1; i > -1; i--) {
    res += Number(str[i]) * Math.pow(2, digit)
    digit += 1
  }
  return res
}

export const twoToTen = binaryToDecimal
