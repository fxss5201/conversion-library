[conversion-library](../globals.md) / rgbToHexRgbs

# Function: rgbToHexRgbs()

```ts
function rgbToHexRgbs(color: string): string
```

**rgbToHexRgbs**

<Badge type="tip" text="version: v0.0.6+" />

## Parameters

• **color**: `string`

## Returns

`string`

Return #rgb / #rrggbb / #rgba / #rrggbbaa

## Example

```ts
rgbToHexRgbs('rgb(255, 255, 255)')
// #fff
rgbToHexRgbs('rgba(255, 0, 0, 0.33)')
// #ff000054
```

## Defined in

[lib/color-conversion/hexAndRgb.ts:281](https://github.com/fxss5201/conversion-library/blob/main/lib/color-conversion/hexAndRgb.ts#L281)
