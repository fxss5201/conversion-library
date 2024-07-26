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
export declare function hexRrggbbToHexRgb(color: string): string;
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
export declare function hexRgbToHexRrggbb(color: string): string;
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
export declare function hexRgbsToRgbArray(color: string): number[];
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
export declare function hexRgbsToRgb(color: string): string;
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
export declare function rgbToRgbArray(color: string): number[];
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
export declare function rgbToHexRgbs(color: string): string;
