[conversion-library](../globals.md) / ArrayToTreeReturnItemType

# Type Alias: ArrayToTreeReturnItemType\<T\>

```ts
type ArrayToTreeReturnItemType<T>: T & {
  children: ArrayToTreeReturnItemType<T>[];
};
```

## Type declaration

### children

```ts
children: ArrayToTreeReturnItemType<T>[];
```

## Type Parameters

• **T**

## Defined in

[lib/data-structure/arrayAndTree.ts:5](https://github.com/fxss5201/conversion-library/blob/main/lib/data-structure/arrayAndTree.ts#L5)
