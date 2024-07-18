import { getMapNumberToString, getMapStringToNumber } from "./utils"

export function decimalToOtherBase (num: number, base: number): string {
  if (base === 10 || base > 36 || base < 2) return String(num)
  const numToStr = getMapNumberToString(base)
  let res = ''
  while (num > 0) {
    const remainder = num % base
    const curStr = remainder > 9 ? numToStr[remainder] : remainder
    res = curStr + res
    num = ~~(num / base)
  }
  return res
}

export const tenToOther = decimalToOtherBase

export function otherBaseToDecimal (str: string, base: number): number {
  if (base === 10 || base > 36 || base < 2) return Number(str)
  str = str.toLowerCase()
  let res = 0
  let digit = 0
  const strToNum = getMapStringToNumber(base)
  for (let i = str.length - 1; i > -1; i--) {
    const curStr = str[i]
    const curNum = strToNum[curStr] ? strToNum[curStr] : curStr
    res += Number(curNum) * Math.pow(base, digit)
    digit += 1
  }
  return res
}

export const otherToTen = otherBaseToDecimal
