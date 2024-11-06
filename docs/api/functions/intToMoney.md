[conversion-library](../globals.md) / intToMoney

# Function: intToMoney()

```ts
function intToMoney(num: number, symbol?: string): string
```

**intToMoney**

<Badge type="tip" text="version: v0.0.12+" />

## Parameters

• **num**: `number`

Enter int

• **symbol?**: `string`

symbol, example: ￥, $

## Returns

`string`

money

## Example

```ts
intToMoney(1234567)
// '1,234,567'
intToMoney(1234567, '$')
// '$ 1,234,567'
```

## Defined in

[lib/intAndMoney.ts:20](https://github.com/fxss5201/conversion-library/blob/main/lib/intAndMoney.ts#L20)
