import { tenToOther, otherToTen } from './../decimal-conversion'
import { leftPadZero } from './../decimal-conversion/utils'

/**
 * **[en:hexRrggbbToHexRgb][zh:十六进制色值六位转三位]**
 * 
 * <Badge type="tip" text="version: v0.0.6+" />
 * 
 * @group color-conversion
 *
 * @param value - [en:Enter #rrggbb][zh:输入六位十六进制色值（带 `#`，例如`#ffffff`）]
 * @returns [en:Return #rgb][zh:返回三位十六进制色值（带 `#`，例如`#fff`）]
 * 
 * @example
 * ```ts
 * hexRrggbbToHexRgb('#ffffff')
 * // #fff
 * ```
 */
export function hexRrggbbToHexRgb (color: string): string {
  color = color.trim()
  if (color.length === 7) {
    if (color[1] === color[2] && color[3] === color[4] && color[5] === color[6]) {
      return `#${color[1]}${color[3]}${color[5]}`
    }
    return color
  } else {
    throw new Error('hexRrggbb format error')
  }
}

/**
 * **[en:hexRgbToHexRrggbb][zh:十六进制色值三位转六位]**
 * 
 * <Badge type="tip" text="version: v0.0.6+" />
 * 
 * @group color-conversion
 *
 * @param value - [en:Enter #rgb][zh:输入三位十六进制色值（带 `#`，例如`#fff`）]
 * @returns [en:Return #rrggbb][zh:返回六位十六进制色值（带 `#`，例如`#ffffff`）]
 * 
 * @example
 * ```ts
 * hexRgbToHexRrggbb('#fff')
 * // #ffffff
 * ```
 */
export function hexRgbToHexRrggbb (color: string): string {
  color = color.trim()
  if (color.length === 4) {
    return `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`
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
 * @param value - [en:Enter #rgb / #rrggbb][zh:输入 #rgb 或 #rrggbb]
 * @returns [en:Return [r, g, b]][zh:返回 [r, g, b]]
 * 
 * @example
 * ```ts
 * hexRgbsToRgbArray('#fff')
 * // [255, 255, 255]
 * ```
 */
export function hexRgbsToRgbArray (color: string): number[] {
  color = color.trim()
  if (color.length === 4 || color.length === 7) {
    if (color.length === 4) color = hexRgbToHexRrggbb(color)
    return [otherToTen(color.slice(1, 3), 16), otherToTen(color.slice(3, 5), 16), otherToTen(color.slice(5), 16)]
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
 * ```
 */
export function hexRgbsToRgb (color: string): string {
  return `rgb(${hexRgbsToRgbArray(color).join(',')})`
}

/**
 * **[en:rgbToRgbArray][zh:RGB转RGB数组]**
 * 
 * <Badge type="tip" text="version: v0.0.6+" />
 * 
 * @group color-conversion
 *
 * @param value - [en:Enter rgb(r, g, b)][zh:输入 rgb(r, g, b)]
 * @returns [en:Return [r, g, b]][zh:返回 [r, g, b]]
 * 
 * @example
 * ```ts
 * rgbToRgbArray('rgb(255, 255, 255)')
 * // [255, 255, 255]
 * ```
 */
export function rgbToRgbArray (color: string): number[] {
  color = color.replace(/\s/g, '')
  color = color.slice(4, -1)
  return color.split(',').map(x => Number(x))
}

/**
 * **[en:rgbToHexRgbs][zh:RGB转十六进制色值]**
 * 
 * <Badge type="tip" text="version: v0.0.6+" />
 * 
 * @group color-conversion
 *
 * @param value - [en:Enter rgb(r, g, b)][zh:输入 rgb(r, g, b)]
 * @returns [en:Return #rgb / #rrggbb][zh:返回 #rgb 或 #rrggbb]
 * 
 * @example
 * ```ts
 * rgbToHexRgbs('rgb(255, 255, 255)')
 * // #fff
 * ```
 */
export function rgbToHexRgbs (color: string): string {
  const colorList = rgbToRgbArray(color)
  const colorStr = `#${leftPadZero(tenToOther(colorList[0], 16), 2)}${leftPadZero(tenToOther(colorList[1], 16), 2)}${leftPadZero(tenToOther(colorList[2], 16), 2)}`
  return hexRrggbbToHexRgb(colorStr)
}
