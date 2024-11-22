[conversion-library](../globals.md) / numberToExponential

# Function: numberToExponential()

```ts
function numberToExponential(value: number, fractionDigits?: number): string
```

**numberToExponential**

<Badge type="tip" text="version: v0.0.15+" />

## Parameters

• **value**: `number`

传入数字

• **fractionDigits?**: `number`

指定科学计数法的小数位数

## Returns

`string`

科学计数法的字符串

## Example

```ts
numberToExponential(123456)
// 1.23456e+5
numberToExponential(123456, 2)
// 1.23e+5
numberToExponential(123456.78)
// 1.2345678e+5
```

## Defined in

[lib/number-conversion/numberAndExponential.ts:22](https://github.com/fxss5201/conversion-library/blob/main/lib/number-conversion/numberAndExponential.ts#L22)
