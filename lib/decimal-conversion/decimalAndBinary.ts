/**
 * **decimalToBinary**
 * 
 * > alias：[`tenToTwo`](tenToTwo)
 * 
 * @group decimal-conversion
 *
 * @param num - Enter decimal numerical value
 * @returns Return binary
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
 * **binaryToDecimal**
 * 
 * > alias：[`twoToTen`](twoToTen)
 * 
 * @group decimal-conversion
 * 
 * @param str - Enter binary string
 * @returns Return decimal values
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
