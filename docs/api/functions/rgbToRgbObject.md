[conversion-library](../globals.md) / rgbToRgbObject

# Function: rgbToRgbObject()

```ts
function rgbToRgbObject(color: string): {
  a: number;
  b: number;
  g: number;
  r: number;
}
```

**rgbToRgbObject**

<Badge type="tip" text="version: v0.0.7+" />

## Parameters

• **color**: `string`

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
rgbToRgbObject('rgb(255, 255, 255)')
// { r: 255, g: 255, b: 255}
rgbToRgbObject('rgba(51, 68, 85, 0.4)')
// { r: 51, g: 68, b: 85, a: 0.4}
```

## Defined in

[lib/color-conversion/hexAndRgb.ts:242](https://github.com/fxss5201/conversion-library/blob/f6fab6ca6761147d1f6fa1253d4c6904c568e06d/lib/color-conversion/hexAndRgb.ts#L242)
