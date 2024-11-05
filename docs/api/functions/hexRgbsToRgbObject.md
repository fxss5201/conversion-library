[conversion-library](../globals.md) / hexRgbsToRgbObject

# Function: hexRgbsToRgbObject()

```ts
function hexRgbsToRgbObject(color: string): {
  a: number;
  b: number;
  g: number;
  r: number;
}
```

**hexRgbsToRgbObject**

<Badge type="tip" text="version: v0.0.7+" />

## Parameters

• **color**: `string`

Enter #rgb / #rrggbb / #rgba / #rrggbbaa

## Returns

```ts
{
  a: number;
  b: number;
  g: number;
  r: number;
}
```

Return object `{r, g, b, a?}`

### a?

```ts
optional a: number;
```

### b

```ts
b: number;
```

### g

```ts
g: number;
```

### r

```ts
r: number;
```

## Example

```ts
hexRgbsToRgbObject('#fff')
// { r: 255, g: 255, b: 255}
hexRgbsToRgbObject('#3456')
// { r: 51, g: 68, b: 85, a: 0.4}
hexRgbsToRgbObject('#33445566')
// { r: 51, g: 68, b: 85, a: 0.4}
```

## Defined in

[lib/color-conversion/hexAndRgb.ts:139](https://github.com/fxss5201/conversion-library/blob/main/lib/color-conversion/hexAndRgb.ts#L139)
