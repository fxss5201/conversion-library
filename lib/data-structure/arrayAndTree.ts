export type ArrayToTreeOptionsType<IdK = string, parentIdK = string> = {
  idKey?: IdK
  parentIdKey?: parentIdK
}
export type ArrayToTreeReturnItemType<T> = T & { children: ArrayToTreeReturnItemType<T>[] }

/**
 * **arrayToTree**
 * 
 * <Badge type="tip" text="version: v0.0.14+" />
 * 
 * @group data-structure
 *
 * @param array - Enter array
 * @param options - Options
 *  - `idKey` - id key, default `id`
 *  - `parentIdKey` - parent id key, default `parentId`
 * @returns Return tree
 * 
 * @example
 * ```ts
 * const array = [
 *   { id: 1, parentId: null, name: 'aaa' },
 *   { id: 2, parentId: 1, name: 'bbb' },
 *   { id: 3, parentId: 1, name: 'ccc' },
 *   { id: 4, parentId: 2, name: 'ddd' },
 * ]
 * console.log(arrayToTree(array))
 * // [
 * //   { id: 1, parentId: null, name: 'aaa', children: [
 * //     { id: 2, parentId: 1, name: 'bbb', children: [
 * //       { id: 4, parentId: 2, name: 'ddd' }
 * //     ]},
 * //     { id: 3, parentId: 1, name: 'ccc' }
 * //   ]}
 * // ]
 * ```
 */
export function arrayToTree<T, IdK extends keyof T, parentIdK extends keyof T>(array: T[], options: ArrayToTreeOptionsType<IdK, parentIdK> = {}) {
  const { idKey = 'id' as IdK, parentIdKey = 'parentId' as parentIdK } = options
  const childrenKey = 'children'

  const map = array.reduce((accumulator, currentValue) => {
    accumulator[String(currentValue[idKey])] = currentValue
    return accumulator
  }, {} as Record<string, T>)

  Object.values(map).forEach((currentValue) => {
    const parentId = currentValue[parentIdKey]
    if (parentId) {
      // @ts-ignore
      const parent = map[parentId]
      if (!parent[childrenKey]) {
        parent[childrenKey] = []
      }
      parent[childrenKey].push(currentValue)
    }
  })

  const tree = Object.values(map).filter((currentValue) =>!currentValue[parentIdKey])
  return tree as ArrayToTreeReturnItemType<T>[]
}

export type TreeToArrayOptionsType<IdK = string> = {
  idKey?: IdK
}
export type TreeToArrayReturnItemType<T, IdK extends keyof T> = Omit<T, 'children'> & { parentId?: T[IdK] | null }

/**
 * **treeToArray**
 * 
 * <Badge type="tip" text="version: v0.0.14+" />
 * 
 * @group data-structure
 *
 * @param tree - Enter tree
 * @param options - Options
 *  - `idKey` - id key, default `id`
 * @returns Return array
 * 
 * @example
 * ```ts
 * const tree = [
 *   { id: 1, name: 'aaa', children: [
 *     { id: 2, name: 'bbb', children: [
 *       { id: 4, name: 'ddd' }
 *     ]},
 *     { id: 3, name: 'ccc' }
 *   ]}
 * ]
 * console.log(treeToArray(tree))
 * // [
 * //   { id: 1, parentId: null, name: 'aaa' },
 * //   { id: 3, parentId: 1, name: 'ccc' },
 * //   { id: 2, parentId: 1, name: 'bbb' },
 * //   { id: 4, parentId: 2, name: 'ddd' },
 * // ]
 * ```
 */
export function treeToArray<T, IdK extends keyof T>(tree: T[], options: TreeToArrayOptionsType<IdK> = {}) {
  const { idKey = 'id' as IdK } = options
  type treeToArrayReturnItemType = TreeToArrayReturnItemType<T, IdK>
  const nodes: treeToArrayReturnItemType[] = []
  const stack: { node: T | null, children: T[], parentId: T[IdK] | null }[] = []
  stack.push({ node: null, children: tree, parentId: null })
  
  while (stack.length) {
    const { node, children, parentId } = stack.pop()!
    if (node) {
      const { children: subChildren, ...rest } = node as any
      const newNode: treeToArrayReturnItemType = rest
      newNode.parentId = parentId
      nodes.push(newNode)
    }
    if (children && children.length) {
      children.forEach((child) => {
        stack.push({ node: child, children: (child as any).children || [], parentId: node ? node[idKey] : null })
      })
    }
  }
  return nodes
}
