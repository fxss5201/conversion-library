[conversion-library](../globals.md) / romanArrayToIntArray

# Function: romanArrayToIntArray()

```ts
function romanArrayToIntArray(s: string[]): number[]
```

**romanArrayToIntArray**

<Badge type="tip" text="version: v0.0.11+" />

## Parameters

• **s**: `string`[]

## Returns

`number`[]

int array

## Example

```ts
romanArrayToIntArray(['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M', 'MM'])
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000]
```

## Defined in

[lib/intAndRoman.ts:94](https://github.com/fxss5201/conversion-library/blob/main/lib/intAndRoman.ts#L94)
