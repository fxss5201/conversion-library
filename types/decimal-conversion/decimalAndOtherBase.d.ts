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
export declare function decimalToOtherBase(num: number, base: number): string;
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
export declare const tenToOther: typeof decimalToOtherBase;
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
export declare function otherBaseToDecimal(str: string, base: number): number;
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
export declare const otherToTen: typeof otherBaseToDecimal;
