[conversion-library](../globals.md) / intToMoney

# Function: intToMoney()

```ts
function intToMoney(num: number, symbol?: string): string
```

**intToMoney**

<Badge type="tip" text="version: v0.0.12+" />

## Parameters

• **num**: `number`

数组整数

• **symbol?**: `string`

符号，例如：￥, $

## Returns

`string`

千分位字符串

## Example

```ts
intToMoney(1234567)
// '1,234,567'
intToMoney(1234567, '$')
// '$ 1,234,567'
```

## Defined in

[lib/intAndMoney.ts:20](https://github.com/fxss5201/conversion-library/blob/main/lib/intAndMoney.ts#L20)
