[conversion-library](../globals.md) / hexRrggbbToHexRgb

# Function: hexRrggbbToHexRgb()

```ts
function hexRrggbbToHexRgb(color: string): string
```

**hexRrggbbToHexRgb**

<Badge type="tip" text="version: v0.0.6+" />

## Parameters

• **color**: `string`

Enter #rrggbb

## Returns

`string`

Return #rgb

## Example

```ts
hexRrggbbToHexRgb('#ffffff')
// #fff
hexRrggbbToHexRgb('#33445566')
// #3456
hexRrggbbToHexRgb('#ff0f00')
// #ff0f00
```

## Defined in

[lib/color-conversion/hexAndRgb.ts:25](https://github.com/fxss5201/conversion-library/blob/main/lib/color-conversion/hexAndRgb.ts#L25)
