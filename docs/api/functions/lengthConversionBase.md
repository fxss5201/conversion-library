[conversion-library](../globals.md) / lengthConversionBase

# Function: lengthConversionBase()

```ts
function lengthConversionBase(
   value: number, 
   fromUnit: LengthUnitType, 
   toUnit: LengthUnitType): number
```

**lengthConversionBase**

<Badge type="tip" text="version: v0.0.13+" />

## Parameters

• **value**: `number`

Enter value

• **fromUnit**: [`LengthUnitType`](../type-aliases/LengthUnitType.md)

Enter value unit nm/纳米/um/微米/mm/毫米/cm/厘米/dm/分米/m/米/km/千米/公里/mile/英里/yd/码/ft/英尺/in/英寸/里/丈/尺/寸/分/n mile/海里

• **toUnit**: [`LengthUnitType`](../type-aliases/LengthUnitType.md)

Enter target unit nm/纳米/um/微米/mm/毫米/cm/厘米/dm/分米/m/米/km/千米/公里/mile/英里/yd/码/ft/英尺/in/英寸/里/丈/尺/寸/分/n mile/海里

## Returns

`number`

target value

## Example

```ts
lengthConversionBase(100, 'm', 'km')
// 0.1
lengthConversionBase(10, 'm', 'cm')
// 1000
```

## Defined in

[lib/length-conversion/lengthConversionBase.ts:23](https://github.com/fxss5201/conversion-library/blob/main/lib/length-conversion/lengthConversionBase.ts#L23)
