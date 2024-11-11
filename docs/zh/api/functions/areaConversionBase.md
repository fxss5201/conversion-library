[conversion-library](../globals.md) / areaConversionBase

# Function: areaConversionBase()

```ts
function areaConversionBase(
   value: number, 
   fromUnit: AreaUnitType, 
   toUnit: AreaUnitType): number
```

**areaConversionBase**

<Badge type="tip" text="version: v0.0.13+" />

## Parameters

• **value**: `number`

输入值

• **fromUnit**: [`AreaUnitType`](../type-aliases/AreaUnitType.md)

输入值的单位：m㎡/平方毫米/c㎡/平方厘米/d㎡/平方分米/㎡/平方米/h㎡/公顷/k㎡/平方千米/sq.in/平方英寸/sq.ft/平方英尺/sq.yd/平方码/acre/英亩/sq.mi/平方英里/平方丈/平方尺/平方寸/亩/分

• **toUnit**: [`AreaUnitType`](../type-aliases/AreaUnitType.md)

目标单位：m㎡/平方毫米/c㎡/平方厘米/d㎡/平方分米/㎡/平方米/h㎡/公顷/k㎡/平方千米/sq.in/平方英寸/sq.ft/平方英尺/sq.yd/平方码/acre/英亩/sq.mi/平方英里/平方丈/平方尺/平方寸/亩/分

## Returns

`number`

目标值

## Example

```ts
areaConversionBase(100, 'c㎡', '㎡')
// 0.01
areaConversionBase(1, '㎡', 'c㎡')
// 10000
```

## Defined in

[lib/area-conversion/areaConversionBase.ts:23](https://github.com/fxss5201/conversion-library/blob/main/lib/area-conversion/areaConversionBase.ts#L23)
