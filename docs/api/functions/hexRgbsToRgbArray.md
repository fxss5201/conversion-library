[conversion-library](../globals.md) / hexRgbsToRgbArray

# Function: hexRgbsToRgbArray()

```ts
function hexRgbsToRgbArray(color: string): number[]
```

**hexRgbsToRgbArray**

<Badge type="tip" text="version: v0.0.6+" />

## Parameters

• **color**: `string`

## Returns

`number`[]

Return array `[r, g, b, a?]`

## Example

```ts
hexRgbsToRgbArray('#fff')
// [255, 255, 255]
hexRgbsToRgbArray('#3456')
// [51, 68, 85, 0.4]
hexRgbsToRgbArray('#33445566')
// [51, 68, 85, 0.4]
```

## Defined in

[lib/color-conversion/hexAndRgb.ts:104](https://github.com/fxss5201/conversion-library/blob/main/lib/color-conversion/hexAndRgb.ts#L104)
