import { decimalToBinary, binaryToDecimal } from './decimalAndBinary'
import { leftPadZero } from './utils'

/**
 * **[en:octalToBinary:][zh:八进制转二进制:]**
 * 
 * <Badge type="tip" text="version: v0.0.5+" />
 * 
 * > alias：[`eightToTwo`](eightToTwo)
 * 
 * @group decimal-conversion
 *
 * @param octal - [en:Enter octal string:][zh:输入八进制:]
 * @returns [en:Return binary string:][zh:返回二进制:]
 * 
 * @example
 * ```ts
 * octalToBinary('15') // '1101'
 * ```
 */
export function octalToBinary (octal: string): string {
  let res = ''
  for (let i = 0; i < octal.length; i++) {
    const nowStr = decimalToBinary(Number(octal[i]))
    res += i > 0 ? leftPadZero(nowStr, 3) : nowStr
  }
  return res
}

export const eightToTwo = octalToBinary

/**
 * **[en:binaryToOctal:][zh:二进制转八进制:]**
 * 
 * <Badge type="tip" text="version: v0.0.5+" />
 * 
 * > alias：[`twoToEight`](twoToEight)
 * 
 * @group decimal-conversion
 *
 * @param binary - [en:Enter binary string:][zh:输入二进制:]
 * @returns [en:Return octal string:][zh:返回八进制:]
 * 
 * @example
 * ```ts
 * binaryToOctal('1101') // '15'
 * ```
 */
export function binaryToOctal (binary: string): string {
  let octal = ''
  for (let i = binary.length - 1; i > -1; i-=3) {
    const start = i - 2
    octal = binaryToDecimal(binary.slice(start < 0 ? 0 : start, i + 1)) + octal
  }
  return octal
}

export const twoToEight = binaryToOctal