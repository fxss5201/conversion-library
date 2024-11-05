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
intToMoney(3749)
// MMMDCCXLIX
```

## Defined in

lib/intAndMoney.ts:18
