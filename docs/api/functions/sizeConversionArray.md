[conversion-library](../globals.md) / sizeConversionArray

# Function: sizeConversionArray()

```ts
function sizeConversionArray(value: number, fromUnit: SizeUnitType): SizeConversionArrayItemType[]
```

**sizeConversionArray**

<Badge type="tip" text="version: v0.0.12+" />

## Parameters

• **value**: `number`

Enter value

• **fromUnit**: [`SizeUnitType`](../type-aliases/SizeUnitType.md)

Enter value unit B/KB/MB/GB/TB/PB/EB/ZB/YB

## Returns

[`SizeConversionArrayItemType`](../type-aliases/SizeConversionArrayItemType.md)[]

size array, { value: number, unit: SizeUnitType, label: string }[]

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
