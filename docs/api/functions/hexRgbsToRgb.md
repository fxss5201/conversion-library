[conversion-library](../globals.md) / hexRgbsToRgb

# Function: hexRgbsToRgb()

```ts
function hexRgbsToRgb(color: string): string
```

**hexRgbsToRgb**

<Badge type="tip" text="version: v0.0.6+" />

## Parameters

• **color**: `string`

Enter #rgb / #rrggbb

## Returns

`string`

Return rgb(r, g, b)

## Example

```ts
hexRgbsToRgb('#fff')
// rgb(255, 255, 255)
hexRgbsToRgb('#3456')
// rgba(51,68,85,0.4)
hexRgbsToRgb('#33445566')
// rgba(51,68,85,0.4)
```

## Defined in

[lib/color-conversion/hexAndRgb.ts:186](https://github.com/fxss5201/conversion-library/blob/main/lib/color-conversion/hexAndRgb.ts#L186)
