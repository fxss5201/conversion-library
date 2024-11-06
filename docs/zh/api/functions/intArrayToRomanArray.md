[conversion-library](../globals.md) / intArrayToRomanArray

# Function: intArrayToRomanArray()

```ts
function intArrayToRomanArray(nums: number[]): string[]
```

**intArrayToRomanArray**

<Badge type="tip" text="version: v0.0.11+" />

## Parameters

• **nums**: `number`[]

输入整数数组

## Returns

`string`[]

返回罗马数字数组

## Example

```ts
intArrayToRomanArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000])
// ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M', 'MM']
```

## Defined in

[lib/intAndRoman.ts:46](https://github.com/fxss5201/conversion-library/blob/main/lib/intAndRoman.ts#L46)
