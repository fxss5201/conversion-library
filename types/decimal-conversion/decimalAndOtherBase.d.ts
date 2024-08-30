/**
 * **[en:decimalToOtherBase:][zh:十进制转任意进制:]**
 *
 * > alias：[`tenToOther`](tenToOther)
 *
 * @group decimal-conversion
 *
 * @param num - [en:Enter a value of number type:][zh:输入十进制数值:]
 * @param base - [en:Target base:][zh:目标进制:]
 * @returns [en:Return the corresponding string:][zh:返回目标进制字符串:]
 *
 * @example
 * ```ts
 * decimalToOtherBase(10, 2) // '1010'
 * ```
 */
export declare function decimalToOtherBase(num: number, base: number): string;
export declare const tenToOther: typeof decimalToOtherBase;
/**
 * **[en:otherBaseToDecimal:][zh:任意进制制转十进制:]**
 *
 * > alias：[`otherToTen`](otherToTen)
 *
 * @group decimal-conversion
 *
 * @param str - [en:Enter a value of string type:][zh:带转换的字符串:]
 * @param base - [en:Current base:][zh:带转换的字符串的进制:]
 * @returns [en:Return the corresponding number:][zh:输出十进制数值:]
 *
 * @example
 * ```ts
 * decimalToOtherBase('1010', 2) // 10
 * ```
 */
export declare function otherBaseToDecimal(str: string, base: number): number;
export declare const otherToTen: typeof otherBaseToDecimal;
