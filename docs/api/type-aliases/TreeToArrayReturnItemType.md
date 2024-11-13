[conversion-library](../globals.md) / TreeToArrayReturnItemType

# Type Alias: TreeToArrayReturnItemType\<T, IdK\>

```ts
type TreeToArrayReturnItemType<T, IdK>: Omit<T, "children"> & {
  parentId: T[IdK] | null;
};
```

## Type declaration

### parentId?

```ts
optional parentId: T[IdK] | null;
```

## Type Parameters

• **T**

• **IdK** *extends* keyof `T`

## Defined in

[lib/data-structure/arrayAndTree.ts:67](https://github.com/fxss5201/conversion-library/blob/main/lib/data-structure/arrayAndTree.ts#L67)
