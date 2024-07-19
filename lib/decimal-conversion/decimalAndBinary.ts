/**
 * decimal to binary
 * 
 * > alias：[`tenToTwo`](tenToTwo)
 * 
 * @group decimal-conversion
 *
 * @param num - Enter a value of number type
 * @returns Return the corresponding binary
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
 * binary to decimal
 * 
 * > alias：[`twoToTen`](twoToTen)
 * 
 * @group decimal-conversion
 * 
 * @param str - Enter a value of string type
 * @returns Return the corresponding number
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
