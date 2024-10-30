[conversion-library](../globals.md) / ListNode

# Class: ListNode\<T\>

**ListNode**

<Badge type="tip" text="version: v0.0.4+" />

```ts
class ListNode<T> {
  value: T;
  next: ListNode<T> | null;
  constructor(value: T, next?: ListNode<T> | null);
}
```

## Param

Enter value

## Param

next ListNode

## Example

```ts
new ListNode({ name: 'aaa', age: 1 })
// { value: { name: 'aaa', age: 1 }, next: null }
```

## Type Parameters

• **T**

## Constructors

### new ListNode()

```ts
new ListNode<T>(value: T, next?: null | ListNode<T>): ListNode<T>
```

#### Parameters

• **value**: `T`

• **next?**: `null` \| [`ListNode`](ListNode.md)\<`T`\>

#### Returns

[`ListNode`](ListNode.md)\<`T`\>

#### Defined in

[lib/data-structure/arrayAddListNode.ts:28](https://github.com/fxss5201/conversion-library/blob/f6fab6ca6761147d1f6fa1253d4c6904c568e06d/lib/data-structure/arrayAddListNode.ts#L28)

## Properties

### next

```ts
next: null | ListNode<T>;
```

#### Defined in

[lib/data-structure/arrayAddListNode.ts:27](https://github.com/fxss5201/conversion-library/blob/f6fab6ca6761147d1f6fa1253d4c6904c568e06d/lib/data-structure/arrayAddListNode.ts#L27)

***

### value

```ts
value: T;
```

#### Defined in

[lib/data-structure/arrayAddListNode.ts:26](https://github.com/fxss5201/conversion-library/blob/f6fab6ca6761147d1f6fa1253d4c6904c568e06d/lib/data-structure/arrayAddListNode.ts#L26)
