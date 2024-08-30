/**
 * **[en:hexRrggbbToHexRgb:][zh:十六进制色值简写:]**
 *
 * <Badge type="tip" text="version: v0.0.6+" />
 *
 * @group color-conversion
 *
 * @param value - [en:Enter #rrggbb:][zh:输入十六进制色值（带 `#`，例如`#ffffff`）:]
 * @returns [en:Return #rgb:][zh:返回十六进制色值简写（带 `#`，例如`#fff`）:]
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
export declare function hexRrggbbToHexRgb(color: string): string;
/**
 * **[en:hexRgbToHexRrggbb:][zh:十六进制色值完整写法:]**
 *
 * <Badge type="tip" text="version: v0.0.6+" />
 *
 * @group color-conversion
 *
 * @param value - [en:Enter #rgb:][zh:输入十六进制色值（带 `#`，例如`#fff`）:]
 * @returns [en:Return #rrggbb:][zh:返回十六进制色值完整写法（带 `#`，例如`#ffffff`）:]
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
export declare function hexRgbToHexRrggbb(color: string): string;
/**
 * **[en:hexRgbsToRgbArray:][zh:十六进制色值转RGB数组:]**
 *
 * <Badge type="tip" text="version: v0.0.6+" />
 *
 * @group color-conversion
 *
 * @param value - [en:Enter #rgb / #rrggbb / #rgba / #rrggbbaa:][zh:输入 #rgb / #rrggbb / #rgba / #rrggbbaa:]
 * @returns [en:Return array `[r, g, b, a?]`:][zh:返回数组 `[r, g, b, a?]`:]
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
export declare function hexRgbsToRgbArray(color: string): number[];
/**
 * **[en:hexRgbsToRgbObject:][zh:十六进制色值转RGB对象:]**
 *
 * <Badge type="tip" text="version: v0.0.7+" />
 *
 * @group color-conversion
 *
 * @param value - [en:Enter #rgb / #rrggbb / #rgba / #rrggbbaa:][zh:输入 #rgb / #rrggbb / #rgba / #rrggbbaa:]
 * @returns [en:Return object `{r, g, b, a?}`:][zh:返回对象 `{r, g, b, a?}`:]
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
export declare function hexRgbsToRgbObject(color: string): {
    r: number;
    g: number;
    b: number;
    a?: number;
};
/**
 * **[en:hexRgbsToRgb:][zh:十六进制色值转RGB:]**
 *
 * <Badge type="tip" text="version: v0.0.6+" />
 *
 * @group color-conversion
 *
 * @param value - [en:Enter #rgb / #rrggbb:][zh:输入 #rgb 或 #rrggbb:]
 * @returns [en:Return rgb(r, g, b):][zh:返回 rgb(r, g, b):]
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
export declare function hexRgbsToRgb(color: string): string;
/**
 * **[en:rgbToRgbArray:][zh:RGB转RGB数组:]**
 *
 * <Badge type="tip" text="version: v0.0.6+" />
 *
 * @group color-conversion
 *
 * @param value - [en:Enter rgb(r, g, b, a?):][zh:输入 rgb(r, g, b, a?):]
 * @returns [en:Return array `[r, g, b, a?]`:][zh:返回数组 `[r, g, b, a?]`:]
 *
 * @example
 * ```ts
 * rgbToRgbArray('rgb(255, 255, 255)')
 * // [255, 255, 255]
 * rgbToRgbArray('rgba(255, 0, 0, 0.33)')
 * // [255, 0, 0, 0.33]
 * ```
 */
export declare function rgbToRgbArray(color: string): number[];
/**
 * **[en:rgbToRgbObject:][zh:RGB转RGB对象:]**
 *
 * <Badge type="tip" text="version: v0.0.7+" />
 *
 * @group color-conversion
 *
 * @param value - [en:Enter rgb(r, g, b, a?):][zh:输入 rgb(r, g, b, a?):]
 * @returns [en:Return object `{r, g, b, a?}`:][zh:返回对象 `{r, g, b, a?}`:]
 *
 * @example
 * ```ts
 * rgbToRgbObject('rgb(255, 255, 255)')
 * // { r: 255, g: 255, b: 255}
 * rgbToRgbObject('rgba(51, 68, 85, 0.4)')
 * // { r: 51, g: 68, b: 85, a: 0.4}
 * ```
 */
export declare function rgbToRgbObject(color: string): {
    r: number;
    g: number;
    b: number;
    a?: number;
};
/**
 * **[en:rgbToHexRgbs:][zh:RGB转十六进制色值:]**
 *
 * <Badge type="tip" text="version: v0.0.6+" />
 *
 * @group color-conversion
 *
 * @param value - [en:Enter rgb(r, g, b, a?):][zh:输入 rgb(r, g, b, a?):]
 * @returns [en:Return #rgb / #rrggbb / #rgba / #rrggbbaa:][zh:返回 #rgb / #rrggbb / #rgba / #rrggbbaa:]
 *
 * @example
 * ```ts
 * rgbToHexRgbs('rgb(255, 255, 255)')
 * // #fff
 * rgbToHexRgbs('rgba(255, 0, 0, 0.33)')
 * // #ff000054
 * ```
 */
export declare function rgbToHexRgbs(color: string): string;
