/**
 * **[en:octalToBinary][zh:八进制转二进制]**
 *
 * > alias：[`eightToTwo`](eightToTwo)
 *
 * @group decimal-conversion
 *
 * @param num - [en:Enter octal string][zh:输入八进制]
 * @returns [en:Return binary string][zh:返回二进制]
 *
 * @example
 * ```ts
 * octalToBinary('15') // '1101'
 * ```
 */
export declare function octalToBinary(octal: string): string;
export declare const eightToTwo: typeof octalToBinary;
/**
 * **[en:binaryToOctal][zh:二进制转八进制]**
 *
 * > alias：[`twoToEight`](twoToEight)
 *
 * @group decimal-conversion
 *
 * @param num - [en:Enter binary string][zh:输入二进制]
 * @returns [en:Return octal string][zh:返回八进制]
 *
 * @example
 * ```ts
 * binaryToOctal('1101') // '15'
 * ```
 */
export declare function binaryToOctal(binary: string): string;
export declare const twoToEight: typeof binaryToOctal;
