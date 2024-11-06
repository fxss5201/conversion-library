[conversion-library](../globals.md) / listNodeToArray

# Function: listNodeToArray()

```ts
function listNodeToArray<T>(node: null | ListNode<T>): T[]
```

**listNodeToArray**

<Badge type="tip" text="version: v0.0.6+" />

## Type Parameters

• **T**

## Parameters

• **node**: `null` \| [`ListNode`](../classes/ListNode.md)\<`T`\>

输入 ListNode 或者 null

## Returns

`T`[]

返回数组

## Example

```ts
listNodeToArray({ value: { name: 'aaa', age: 1 }, next: { value: { name: 'bbb', age: 2 }, next: null } })
// [{ name: 'aaa', age: 1 }, { name: 'bbb', age: 2 }]
```

## Defined in

[lib/data-structure/arrayAddListNode.ts:80](https://github.com/fxss5201/conversion-library/blob/main/lib/data-structure/arrayAddListNode.ts#L80)
