[conversion-library](../globals.md) / sizeConversionString

# Function: sizeConversionString()

```ts
function sizeConversionString(
   value: number, 
   fromUnit: SizeUnitType, 
   symbol?: string): string
```

**sizeConversionString**

<Badge type="tip" text="version: v0.0.12+" />

## Parameters

• **value**: `number`

输入值

• **fromUnit**: [`SizeUnitType`](../type-aliases/SizeUnitType.md)

输入值的单位，B/KB/MB/GB/TB/PB/EB/ZB/YB

• **symbol**: `string` = `''`

输入分隔符，用于连接字符串，默认是''

## Returns

`string`

size string

## Example

```ts
sizeConversionString(5000, 'GB')
// 4TB904GB
sizeConversionString(5000, 'GB', '-')
// 4TB-904GB
```

## Defined in

[lib/size-conversion/sizeConversionString.ts:24](https://github.com/fxss5201/conversion-library/blob/main/lib/size-conversion/sizeConversionString.ts#L24)
