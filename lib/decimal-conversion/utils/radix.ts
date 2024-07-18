export function leftFillZero (str: string, length: number): string {
  return str.padStart(length, '0')
}

export function getMapNumberToString (base: number) {
  const res: { [key: string]: string } = {}
  if (base < 10) return res
  const strList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let curIndex = 10
  while (curIndex < base) {
    res[curIndex] = strList[curIndex - 10]
    curIndex++
  }
  return res
}

export function getMapStringToNumber (base: number) {
  const res: { [key: string]: string } = {}
  if (base < 10) return res
  const strList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let curIndex = 10
  while (curIndex < base) {
    res[strList[curIndex - 10]] = String(curIndex)
    curIndex++
  }
  return res
}
