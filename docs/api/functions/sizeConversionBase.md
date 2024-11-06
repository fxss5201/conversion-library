[conversion-library](../globals.md) / sizeConversionBase

# Function: sizeConversionBase()

```ts
function sizeConversionBase(
   value: number, 
   fromUnit: SizeUnitType, 
   toUnit: SizeUnitType): number
```

**sizeConversionBase**

<Badge type="tip" text="version: v0.0.12+" />

## Parameters

• **value**: `number`

Enter value

• **fromUnit**: [`SizeUnitType`](../type-aliases/SizeUnitType.md)

Enter value unit B/KB/MB/GB/TB/PB/EB/ZB/YB

• **toUnit**: [`SizeUnitType`](../type-aliases/SizeUnitType.md)

Enter target unit B/KB/MB/GB/TB/PB/EB/ZB/YB

## Returns

`number`

target value

## Example

```ts
sizeConversionBase(1024, 'B', 'KB')
// 1
sizeConversionBase(20 * 1024, 'KB', 'MB')
// 20
sizeConversionBase(512, 'MB', 'GB')
// 0.5
```

## Defined in

[lib/size-conversion/index.ts:24](https://github.com/fxss5201/conversion-library/blob/main/lib/size-conversion/index.ts#L24)
