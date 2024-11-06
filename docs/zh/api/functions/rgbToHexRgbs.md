[conversion-library](../globals.md) / rgbToHexRgbs

# Function: rgbToHexRgbs()

```ts
function rgbToHexRgbs(color: string): string
```

**rgbToHexRgbs**

<Badge type="tip" text="version: v0.0.6+" />

## Parameters

• **color**: `string`

输入 rgb(r, g, b, a?)

## Returns

`string`

输出 #rgb / #rrggbb / #rgba / #rrggbbaa

## Example

```ts
rgbToHexRgbs('rgb(255, 255, 255)')
// #fff
rgbToHexRgbs('rgba(255, 0, 0, 0.33)')
// #ff000054
```

## Defined in

[lib/color-conversion/hexAndRgb.ts:281](https://github.com/fxss5201/conversion-library/blob/main/lib/color-conversion/hexAndRgb.ts#L281)
