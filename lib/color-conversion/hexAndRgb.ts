import { tenToOther, otherToTen } from './../decimal-conversion'
import { leftPadZero } from './../decimal-conversion/utils'

/**
 * **[en:hexRrggbbToHexRgb][zh:十六进制色值简写]**
 * 
 * <Badge type="tip" text="version: v0.0.6+" />
 * 
 * @group color-conversion
 *
 * @param value - [en:Enter #rrggbb][zh:输入十六进制色值（带 `#`，例如`#ffffff`）]
 * @returns [en:Return #rgb][zh:返回十六进制色值简写（带 `#`，例如`#fff`）]
 * 
 * @example
 * ```ts
 * hexRrggbbToHexRgb('#ffffff')
 * // #fff
 * hexRrggbbToHexRgb('#33445566')
 * // #3456
 * hexRrggbbToHexRgb('#ff0f00')
 * // #ff0f00
 * ```
 */
export function hexRrggbbToHexRgb (color: string): string {
  color = color.trim()
  const colorLen = color.length
  if ([7, 9].includes(colorLen) && color.startsWith('#')) {
    let resColor = '#'
    let flag = true
    for (let i = 0, len = Math.floor(colorLen / 2); i < len; i++) {
      if (color[i * 2 + 1] !== color[i * 2 + 2]) {
        flag = false
        break
      } else {
        resColor = `${resColor}${color[i * 2 + 1]}`
      }
    }
    if (flag) {
      return resColor
    }
    return color
  } else {
    throw new Error('hexRrggbb format error')
  }
}

/**
 * **[en:hexRgbToHexRrggbb][zh:十六进制色值完整写法]**
 * 
 * <Badge type="tip" text="version: v0.0.6+" />
 * 
 * @group color-conversion
 *
 * @param value - [en:Enter #rgb][zh:输入十六进制色值（带 `#`，例如`#fff`）]
 * @returns [en:Return #rrggbb][zh:返回十六进制色值完整写法（带 `#`，例如`#ffffff`）]
 * 
 * @example
 * ```ts
 * hexRgbToHexRrggbb('#fff')
 * // #ffffff
 * hexRgbToHexRrggbb('#3456')
 * // #33445566
 * hexRgbToHexRrggbb('#334455')
 * // #334455
 * ```
 */
export function hexRgbToHexRrggbb (color: string): string {
  color = color.trim()
  const colorLen = color.length
  if ([4, 5].includes(colorLen) && color.startsWith('#')) {
    let resColor = '#'
    for (let i = 1; i < colorLen; i++) {
      resColor = `${resColor}${color[i]}${color[i]}`
    }
    return resColor
  } else if ([7, 9].includes(colorLen)) {
    return color
  } else {
    throw new Error('hexRgb format error')
  }
}

/**
 * **[en:hexRgbsToRgbArray][zh:十六进制色值转RGB数组]**
 * 
 * <Badge type="tip" text="version: v0.0.6+" />
 * 
 * @group color-conversion
 *
 * @param value - [en:Enter #rgb / #rrggbb / #rgba / #rrggbbaa][zh:输入 #rgb / #rrggbb / #rgba / #rrggbbaa]
 * @returns [en:Return array][zh:返回数组]
 * 
 * @example
 * ```ts
 * hexRgbsToRgbArray('#fff')
 * // [255, 255, 255]
 * hexRgbsToRgbArray('#3456')
 * // [51, 68, 85, 0.4]
 * hexRgbsToRgbArray('#33445566')
 * // [51, 68, 85, 0.4]
 * ```
 */
export function hexRgbsToRgbArray (color: string): number[] {
  color = color.trim()
  const colorLen = color.length
  if ([4, 5, 7, 9].includes(colorLen) && color.startsWith('#')) {
    color = hexRgbToHexRrggbb(color)
    const rgbList = [otherToTen(color.slice(1, 3), 16), otherToTen(color.slice(3, 5), 16), otherToTen(color.slice(5, 7), 16)]
    if (color.length === 7) {
      return rgbList
    } else {
      return [...rgbList, Math.floor(otherToTen(color.slice(7), 16) / 2.55) / 100]
    }
  } else {
    throw new Error('hexRgbs format error')
  }
}

/**
 * **[en:hexRgbsToRgbObject][zh:十六进制色值转RGB对象]**
 * 
 * <Badge type="tip" text="version: v0.0.7+" />
 * 
 * @group color-conversion
 *
 * @param value - [en:Enter #rgb / #rrggbb / #rgba / #rrggbbaa][zh:输入 #rgb / #rrggbb / #rgba / #rrggbbaa]
 * @returns [en:Return object][zh:返回对象]
 * 
 * @example
 * ```ts
 * hexRgbsToRgbObject('#fff')
 * // { r: 255, g: 255, b: 255}
 * hexRgbsToRgbObject('#3456')
 * // { r: 51, g: 68, b: 85, a: 0.4}
 * hexRgbsToRgbObject('#33445566')
 * // { r: 51, g: 68, b: 85, a: 0.4}
 * ```
 */
export function hexRgbsToRgbObject (color: string): {
  r: number
  g: number
  b: number
  a?: number
} {
  color = color.trim()
  const colorLen = color.length
  if ([4, 5, 7, 9].includes(colorLen) && color.startsWith('#')) {
    color = hexRgbToHexRrggbb(color)
    const rgbObject = {
      r: otherToTen(color.slice(1, 3), 16),
      g: otherToTen(color.slice(3, 5), 16),
      b: otherToTen(color.slice(5, 7), 16)
    }
    if (color.length === 7) {
      return rgbObject
    } else {
      return {
        ...rgbObject,
        a: Math.floor(otherToTen(color.slice(7), 16) / 2.55) / 100
      }
    }
  } else {
    throw new Error('hexRgbs format error')
  }
}

/**
 * **[en:hexRgbsToRgb][zh:十六进制色值转RGB]**
 * 
 * <Badge type="tip" text="version: v0.0.6+" />
 * 
 * @group color-conversion
 *
 * @param value - [en:Enter #rgb / #rrggbb][zh:输入 #rgb 或 #rrggbb]
 * @returns [en:Return rgb(r, g, b)][zh:返回 rgb(r, g, b)]
 * 
 * @example
 * ```ts
 * hexRgbsToRgb('#fff')
 * // rgb(255, 255, 255)
 * hexRgbsToRgb('#3456')
 * // rgba(51,68,85,0.4)
 * hexRgbsToRgb('#33445566')
 * // rgba(51,68,85,0.4)
 * ```
 */
export function hexRgbsToRgb (color: string): string {
  color = color.trim()
  const colorLen = color.length
  if ([4, 5, 7, 9].includes(colorLen) && color.startsWith('#')) {
    return `${[5, 9].includes(colorLen) ? 'rgba' : 'rgb'}(${hexRgbsToRgbArray(color).join(',')})`
  } else {
    throw new Error('hexRgbs format error')
  }
}

/**
 * **[en:rgbToRgbArray][zh:RGB转RGB数组]**
 * 
 * <Badge type="tip" text="version: v0.0.6+" />
 * 
 * @group color-conversion
 *
 * @param value - [en:Enter rgb(r, g, b, a?)][zh:输入 rgb(r, g, b, a?)]
 * @returns [en:Return array][zh:返回数组]
 * 
 * @example
 * ```ts
 * rgbToRgbArray('rgb(255, 255, 255)')
 * // [255, 255, 255]
 * rgbToRgbArray('rgba(255, 0, 0, 0.33)')
 * // [255, 0, 0, 0.33]
 * ```
 */
export function rgbToRgbArray (color: string): number[] {
  color = color.replace(/\s/g, '')
  if (color.startsWith('rgb')) {
    color = color.slice(color.startsWith('rgba') ? 5 : 4, -1)
    return color.split(',').map(x => Number(x))
  } else {
    throw new Error('rgb format error')
  }
}

/**
 * **[en:rgbToRgbObject][zh:RGB转RGB对象]**
 * 
 * <Badge type="tip" text="version: v0.0.7+" />
 * 
 * @group color-conversion
 *
 * @param value - [en:Enter rgb(r, g, b, a?)][zh:输入 rgb(r, g, b, a?)]
 * @returns [en:Return object][zh:返回对象]
 * 
 * @example
 * ```ts
 * rgbToRgbObject('rgb(255, 255, 255)')
 * // { r: 255, g: 255, b: 255}
 * rgbToRgbObject('rgba(51, 68, 85, 0.4)')
 * // { r: 51, g: 68, b: 85, a: 0.4}
 * ```
 */
export function rgbToRgbObject (color: string): {
  r: number
  g: number
  b: number
  a?: number
} {
  const colorList = rgbToRgbArray(color)
  const resColor: {
    r: number
    g: number
    b: number
    a?: number
  } = {
    r: colorList[0],
    g: colorList[1],
    b: colorList[2]
  }
  if (colorList.length === 4) resColor.a = colorList[3]
  return resColor
}

/**
 * **[en:rgbToHexRgbs][zh:RGB转十六进制色值]**
 * 
 * <Badge type="tip" text="version: v0.0.6+" />
 * 
 * @group color-conversion
 *
 * @param value - [en:Enter rgb(r, g, b, a?)][zh:输入 rgb(r, g, b, a?)]
 * @returns [en:Return #rgb / #rrggbb / #rgba / #rrggbbaa][zh:返回 #rgb / #rrggbb / #rgba / #rrggbbaa]
 * 
 * @example
 * ```ts
 * rgbToHexRgbs('rgb(255, 255, 255)')
 * // #fff
 * rgbToHexRgbs('rgba(255, 0, 0, 0.33)')
 * // #ff000054
 * ```
 */
export function rgbToHexRgbs (color: string): string {
  color = color.replace(/\s/g, '')
  const colorList = rgbToRgbArray(color)
  let colorStr = `#${leftPadZero(tenToOther(colorList[0], 16), 2)}${leftPadZero(tenToOther(colorList[1], 16), 2)}${leftPadZero(tenToOther(colorList[2], 16), 2)}`
  if (color.startsWith('rgba')) colorStr = `${colorStr}${leftPadZero(tenToOther(Math.floor(colorList[3] * 255), 16), 2)}`
  return hexRrggbbToHexRgb(colorStr)
}
