[conversion-library](../globals.md) / combinationArrangement

# Function: combinationArrangement()

```ts
function combinationArrangement<T>(arr: T[][]): T[][]
```

**combinationArrangement**

<Badge type="tip" text="version: v0.0.8+" />

## Type Parameters

• **T**

## Parameters

• **arr**: `T`[][]

Enter two-dimensional array

## Returns

`T`[][]

combination arrangement

## Example

```ts
combinationArrangement([[1,2],[3,4],[5,6]])
[[1,3,5],[1,3,6],[1,4,5],[1,4,6],[2,3,5],[2,3,6],[2,4,5],[2,4,6]]

combinationArrangement([['红色', '蓝色', '黑色'],['6G', '8G', '12G']])
[['红色','6G'],['红色','8G'],['红色','12G'],['蓝色','6G'],['蓝色','8G'],['蓝色','12G'],['黑色','6G'],['黑色','8G'],['黑色','12G']]

combinationArrangement<string | number>([['5G', '6G'],[500, 550]])
[['5G', 500],['5G', 550],['6G', 500],['6G', 550]]
```

## Defined in

[lib/data-structure/combinationArrangement.ts:23](https://github.com/fxss5201/conversion-library/blob/main/lib/data-structure/combinationArrangement.ts#L23)
