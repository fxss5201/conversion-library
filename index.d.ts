declare namespace conversionLibrary {
  export function tenToTwo (num: number): string
  export function decimalToBinary (num: number): string
  export function twoToTen (num: number): string
  export function binaryToDecimal (num: number): string
  export function tenToOther (num: number, base: number): string
  export function decimalToOtherBase (num: number, base: number): string
  export function otherToTen (str: string, base: number): number
  export function otherBaseToDecimal (str: string, base: number): number
}
