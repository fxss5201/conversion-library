[conversion-library](../globals.md) / speedConversionBase

# Function: speedConversionBase()

```ts
function speedConversionBase(
   value: number, 
   fromUnit: speedUnitType, 
   toUnit: speedUnitType): number
```

**speedConversionBase**

<Badge type="tip" text="version: v0.0.14+" />

## Parameters

• **value**: `number`

输入值

• **fromUnit**: [`speedUnitType`](../type-aliases/speedUnitType.md)

输入值的单位，支持：'km/h' | '千米/小时' | 'km/m' | '千米/分钟' | 'km/s' | '千米/秒' | 'm/h' | '米/小时' | 'm/m' | '米/分钟' | 'm/s' | '米/秒' | 'dm/h' | '分米/小时' | 'dm/m' | '分米/分钟' | 'dm/s' | '分米/秒' | 'cm/h' | '厘米/小时' | 'cm/m' | '厘米/分钟' | 'cm/s' | '厘米/秒' | 'kn' | '节'

• **toUnit**: [`speedUnitType`](../type-aliases/speedUnitType.md)

目标值的单位，支持：'km/h' | '千米/小时' | 'km/m' | '千米/分钟' | 'km/s' | '千米/秒' | 'm/h' | '米/小时' | 'm/m' | '米/分钟' | 'm/s' | '米/秒' | 'dm/h' | '分米/小时' | 'dm/m' | '分米/分钟' | 'dm/s' | '分米/秒' | 'cm/h' | '厘米/小时' | 'cm/m' | '厘米/分钟' | 'cm/s' | '厘米/秒' | 'kn' | '节'

## Returns

`number`

目标值

## Example

```ts
speedConversionBase(10, 'm/s', 'km/h')
// 36
speedConversionBase(500, 'cm/s', 'm/s')
// 5
```

## Defined in

[lib/speed-conversion/speedConversionBase.ts:23](https://github.com/fxss5201/conversion-library/blob/main/lib/speed-conversion/speedConversionBase.ts#L23)
