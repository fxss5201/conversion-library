[conversion-library](../globals.md) / rgbToRgbArray

# Function: rgbToRgbArray()

```ts
function rgbToRgbArray(color: string): number[]
```

**rgbToRgbArray**

<Badge type="tip" text="version: v0.0.6+" />

## Parameters

• **color**: `string`

输入 rgb(r, g, b, a?)

## Returns

`number`[]

输出数组 `[r, g, b, a?]`

## Example

```ts
rgbToRgbArray('rgb(255, 255, 255)')
// [255, 255, 255]
rgbToRgbArray('rgba(255, 0, 0, 0.33)')
// [255, 0, 0, 0.33]
```

## Defined in

[lib/color-conversion/hexAndRgb.ts:214](https://github.com/fxss5201/conversion-library/blob/main/lib/color-conversion/hexAndRgb.ts#L214)
