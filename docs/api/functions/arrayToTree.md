[conversion-library](../globals.md) / arrayToTree

# Function: arrayToTree()

```ts
function arrayToTree<T, IdK, parentIdK>(array: T[], options: ArrayToTreeOptionsType<IdK, parentIdK>): ArrayToTreeReturnItemType<T>[]
```

**arrayToTree**

<Badge type="tip" text="version: v0.0.14+" />

## Type Parameters

• **T**

• **IdK** *extends* `string` \| `number` \| `symbol`

• **parentIdK** *extends* `string` \| `number` \| `symbol`

## Parameters

• **array**: `T`[]

Enter array

• **options**: [`ArrayToTreeOptionsType`](../type-aliases/ArrayToTreeOptionsType.md)\<`IdK`, `parentIdK`\> = `{}`

Options
 - `idKey` - id key, default `id`
 - `parentIdKey` - parent id key, default `parentId`

## Returns

[`ArrayToTreeReturnItemType`](../type-aliases/ArrayToTreeReturnItemType.md)\<`T`\>[]

Return tree

## Example

```ts
const array = [
  { id: 1, parentId: null, name: 'aaa' },
  { id: 2, parentId: 1, name: 'bbb' },
  { id: 3, parentId: 1, name: 'ccc' },
  { id: 4, parentId: 2, name: 'ddd' },
]
console.log(arrayToTree(array))
// [
//   { id: 1, parentId: null, name: 'aaa', children: [
//     { id: 2, parentId: 1, name: 'bbb', children: [
//       { id: 4, parentId: 2, name: 'ddd' }
//     ]},
//     { id: 3, parentId: 1, name: 'ccc' }
//   ]}
// ]
```

## Defined in

[lib/data-structure/arrayAndTree.ts:39](https://github.com/fxss5201/conversion-library/blob/main/lib/data-structure/arrayAndTree.ts#L39)
