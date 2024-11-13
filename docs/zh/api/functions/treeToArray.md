[conversion-library](../globals.md) / treeToArray

# Function: treeToArray()

```ts
function treeToArray<T, IdK>(tree: T[], options: TreeToArrayOptionsType<IdK>): TreeToArrayReturnItemType<T, IdK>[]
```

**treeToArray**

<Badge type="tip" text="version: v0.0.14+" />

## Type Parameters

• **T**

• **IdK** *extends* `string` \| `number` \| `symbol`

## Parameters

• **tree**: `T`[]

输入树形结构

• **options**: [`TreeToArrayOptionsType`](../type-aliases/TreeToArrayOptionsType.md)\<`IdK`\> = `{}`

参数
 - `idKey` - id key, default `id`

## Returns

[`TreeToArrayReturnItemType`](../type-aliases/TreeToArrayReturnItemType.md)\<`T`, `IdK`\>[]

返回数组

## Example

```ts
const tree = [
  { id: 1, name: 'aaa', children: [
    { id: 2, name: 'bbb', children: [
      { id: 4, name: 'ddd' }
    ]},
    { id: 3, name: 'ccc' }
  ]}
]
console.log(treeToArray(tree))
// [
//   { id: 1, parentId: null, name: 'aaa' },
//   { id: 3, parentId: 1, name: 'ccc' },
//   { id: 2, parentId: 1, name: 'bbb' },
//   { id: 4, parentId: 2, name: 'ddd' },
// ]
```

## Defined in

[lib/data-structure/arrayAndTree.ts:100](https://github.com/fxss5201/conversion-library/blob/main/lib/data-structure/arrayAndTree.ts#L100)
