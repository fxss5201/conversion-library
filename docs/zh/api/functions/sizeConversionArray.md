[conversion-library](../globals.md) / sizeConversionArray

# Function: sizeConversionArray()

```ts
function sizeConversionArray(value: number, fromUnit: SizeUnitType): SizeConversionArrayItemType[]
```

**sizeConversionArray**

<Badge type="tip" text="version: v0.0.12+" />

## Parameters

• **value**: `number`

输入值

• **fromUnit**: [`SizeUnitType`](../type-aliases/SizeUnitType.md)

输入值的单位，B/KB/MB/GB/TB/PB/EB/ZB/YB

## Returns

[`SizeConversionArrayItemType`](../type-aliases/SizeConversionArrayItemType.md)[]

输出值, { value: number, unit: SizeUnitType, label: string }[]

## Example

```ts
sizeConversionArray(5000, 'GB')
[
  { value: 4, unit: 'TB', label: '4TB' },
  { value: 904, unit: 'GB', label: '904GB' }
]
```

## Defined in

[lib/size-conversion/sizeConversionArray.ts:25](https://github.com/fxss5201/conversion-library/blob/main/lib/size-conversion/sizeConversionArray.ts#L25)
