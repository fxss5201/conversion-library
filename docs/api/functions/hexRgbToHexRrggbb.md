[conversion-library](../globals.md) / hexRgbToHexRrggbb

# Function: hexRgbToHexRrggbb()

```ts
function hexRgbToHexRrggbb(color: string): string
```

**hexRgbToHexRrggbb**

<Badge type="tip" text="version: v0.0.6+" />

## Parameters

• **color**: `string`

Enter #rgb

## Returns

`string`

Return #rrggbb

## Example

```ts
hexRgbToHexRrggbb('#fff')
// #ffffff
hexRgbToHexRrggbb('#3456')
// #33445566
hexRgbToHexRrggbb('#334455')
// #334455
```

## Defined in

[lib/color-conversion/hexAndRgb.ts:68](https://github.com/fxss5201/conversion-library/blob/main/lib/color-conversion/hexAndRgb.ts#L68)
