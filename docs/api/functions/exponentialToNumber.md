[conversion-library](../globals.md) / exponentialToNumber

# Function: exponentialToNumber()

```ts
function exponentialToNumber(value: string): number
```

**exponentialToNumber**

<Badge type="tip" text="version: v0.0.15+" />

## Parameters

• **value**: `string`

Enter a exponential string

## Returns

`number`

A number

## Example

```ts
exponentialToNumber(1.23456e+5)
// 123456
exponentialToNumber(1.23e+5)
// 123000
exponentialToNumber(1.2345678e+5)
// 123456.78
```

## Defined in

[lib/number-conversion/numberAndExponential.ts:46](https://github.com/fxss5201/conversion-library/blob/main/lib/number-conversion/numberAndExponential.ts#L46)
