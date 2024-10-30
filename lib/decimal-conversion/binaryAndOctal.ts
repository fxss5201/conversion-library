import { decimalToBinary, binaryToDecimal } from './decimalAndBinary'
import { leftPadZero } from './utils'

/**
 * **octalToBinary**
 * 
 * <Badge type="tip" text="version: v0.0.5+" />
 * 
 * > alias：[`eightToTwo`](eightToTwo)
 * 
 * @group decimal-conversion
 *
 * @param octal - Enter octal
 * @returns Return binary
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
 * **binaryToOctal**
 * 
 * <Badge type="tip" text="version: v0.0.5+" />
 * 
 * > alias：[`twoToEight`](twoToEight)
 * 
 * @group decimal-conversion
 *
 * @param binary - Enter binary
 * @returns Return octal
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