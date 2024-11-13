[conversion-library](../globals.md) / arrayToListNode

# Function: arrayToListNode()

```ts
function arrayToListNode<T>(arr: T[]): ListNode<T> | null
```

**arrayToListNode**

<Badge type="tip" text="version: v0.0.4+" />

## Type Parameters

• **T**

## Parameters

• **arr**: `T`[]

Enter array

## Returns

[`ListNode`](../classes/ListNode.md)\<`T`\> \| `null`

Return ListNode or null

## Example

```ts
arrayToListNode([{ name: 'aaa', age: 1 }, { name: 'bbb', age: 2 }])
// { value: { name: 'aaa', age: 1 }, next: { value: { name: 'bbb', age: 2 }, next: null } }
```

## Defined in

[lib/data-structure/arrayAndListNode.ts:50](https://github.com/fxss5201/conversion-library/blob/main/lib/data-structure/arrayAndListNode.ts#L50)
