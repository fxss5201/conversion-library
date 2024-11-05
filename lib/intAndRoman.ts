/**
 * **intToRoman**
 * 
 * <Badge type="tip" text="version: v0.0.11+" />
 * 
 * @group int-and-roman
 *
 * @param value - Enter int
 * @returns roman
 * 
 * @example
 * ```ts
 * intToRoman(3749)
 * // MMMDCCXLIX
 * ```
 */
export function intToRoman(num: number): string {
  const list: [number, string][] = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]]
  let res = ''
  for (const [int, rom] of list) {
    while (num >= int) {
      num -= int
      res += rom
    }
    if (num === 0) break
  }
  return res
}

/**
 * **intArrayToRomanArray**
 * 
 * <Badge type="tip" text="version: v0.0.11+" />
 * 
 * @group int-and-roman
 *
 * @param value - Enter int array
 * @returns roman array
 * 
 * @example
 * ```ts
 * intArrayToRomanArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000])
 * // ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M', 'MM']
 * ```
 */
export function intArrayToRomanArray(num: number[]): string[] {
  return num.map(intToRoman)
}

/**
 * **romanToInt**
 * 
 * <Badge type="tip" text="version: v0.0.11+" />
 * 
 * @group int-and-roman
 *
 * @param value - Enter roman
 * @returns int
 * 
 * @example
 * ```ts
 * romanToInt('MMMDCCXLIX')
 * // 3749
 * ```
 */
export function romanToInt(s: string): number {
  const list: [string, number][] = [["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]]
  let res = 0
  for (const [rom, int] of list) {
    while (s.startsWith(rom)) {
      s = s.replace(rom, '')
      res += int
    }
  }
  return res
}

/**
 * **romanArrayToIntArray**
 * 
 * <Badge type="tip" text="version: v0.0.11+" />
 * 
 * @group int-and-roman
 *
 * @param value - Enter roman array
 * @returns int array
 * 
 * @example
 * ```ts
 * romanArrayToIntArray(['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M', 'MM'])
 * // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000]
 * ```
 */
export function romanArrayToIntArray(s: string[]): number[] {
  return s.map(romanToInt)
}
