[conversion-library](../globals.md) / numberToExponential

# Function: numberToExponential()

```ts
function numberToExponential(value: number, fractionDigits?: number): string
```

**numberToExponential**

<Badge type="tip" text="version: v0.0.15+" />

## Parameters

• **value**: `number`

Enter number value

• **fractionDigits?**: `number`

The number of digits after the decimal point, the default setting is the number required to fully represent the number.

## Returns

`string`

A string representing the given Number object in exponential notation with one digit before the decimal point, rounded to fractionDigits digits after the decimal point.

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
