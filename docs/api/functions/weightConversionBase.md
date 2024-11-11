[conversion-library](../globals.md) / weightConversionBase

# Function: weightConversionBase()

```ts
function weightConversionBase(
   value: number, 
   fromUnit: WeightUnitType, 
   toUnit: WeightUnitType): number
```

**weightConversionBase**

<Badge type="tip" text="version: v0.0.13+" />

## Parameters

• **value**: `number`

Enter value

• **fromUnit**: [`WeightUnitType`](../type-aliases/WeightUnitType.md)

Enter value unit μg/微克/mg/毫克/g/克/kg/千克/t/吨/lb/磅/oz/盎司/担/斤/两/钱/克拉

• **toUnit**: [`WeightUnitType`](../type-aliases/WeightUnitType.md)

Enter target unit μg/微克/mg/毫克/g/克/kg/千克/t/吨/lb/磅/oz/盎司/担/斤/两/钱/克拉

## Returns

`number`

target value

## Example

```ts
weightConversionBase(100, 'g', 'kg')
// 0.1
weightConversionBase(1, 'kg', 'g')
// 1000
```

## Defined in

[lib/weight-conversion/weightConversionBase.ts:23](https://github.com/fxss5201/conversion-library/blob/main/lib/weight-conversion/weightConversionBase.ts#L23)