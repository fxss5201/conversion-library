/**
 * decimal to binary
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
export declare function decimalToBinary(num: number): string;
/**
 * decimal to binary
 *
 * @group decimal-conversion
 *
 * @param num - Enter a value of number type
 * @returns Return the corresponding binary
 *
 * @example
 * ```ts
 * tenToTwo(10) // '1010'
 * ```
 */
export declare const tenToTwo: typeof decimalToBinary;
/**
 * binary to decimal
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
export declare function binaryToDecimal(str: string): number;
/**
 * binary to decimal
 *
 * @group decimal-conversion
 *
 * @param str - Enter a value of string type
 * @returns Return the corresponding number
 *
 * @example
 * ```ts
 * twoToTen('1010') // 10
 * ```
 */
export declare const twoToTen: typeof binaryToDecimal;
