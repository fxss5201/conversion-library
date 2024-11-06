/**
 * **ListNode**
 * 
 * <Badge type="tip" text="version: v0.0.4+" />
 * 
 * ```ts
 * class ListNode<T> {
 *   value: T;
 *   next: ListNode<T> | null;
 *   constructor(value: T, next?: ListNode<T> | null);
 * }
 * ```
 * 
 * @group data-structure
 *
 * @param value - Enter value
 * @param next - next ListNode
 * 
 * @example
 * ```ts
 * new ListNode({ name: 'aaa', age: 1 })
 * // { value: { name: 'aaa', age: 1 }, next: null }
 * ```
 */
export class ListNode<T>{
  value: T
  next: ListNode<T> | null
  constructor(value: T, next?: ListNode<T> | null) {
    this.value = value
    this.next = next ?? null
  }
}

/**
 * **arrayToListNode**
 * 
 * <Badge type="tip" text="version: v0.0.4+" />
 * 
 * @group data-structure
 *
 * @param arr - Enter array
 * @returns Return ListNode or null
 * 
 * @example
 * ```ts
 * arrayToListNode([{ name: 'aaa', age: 1 }, { name: 'bbb', age: 2 }])
 * // { value: { name: 'aaa', age: 1 }, next: { value: { name: 'bbb', age: 2 }, next: null } }
 * ```
 */
export function arrayToListNode<T>(arr: T[]): ListNode<T> | null {
  let res: ListNode<T> | null = null
  let middle: ListNode<T> | null = null
  arr.map(item => {
    if (!res) {
      res = middle = new ListNode(item)
    } else {
      (middle as ListNode<T>).next = new ListNode(item)
      middle = (middle as ListNode<T>).next
    }
  })
  return res
}

/**
 * **listNodeToArray**
 * 
 * <Badge type="tip" text="version: v0.0.6+" />
 * 
 * @group data-structure
 *
 * @param node - Enter ListNode or null
 * @returns Return array
 * 
 * @example
 * ```ts
 * listNodeToArray({ value: { name: 'aaa', age: 1 }, next: { value: { name: 'bbb', age: 2 }, next: null } })
 * // [{ name: 'aaa', age: 1 }, { name: 'bbb', age: 2 }]
 * ```
 */
export function listNodeToArray<T>(node: ListNode<T> | null): T[] {
  const res: T[] = []
  if (node) {
    res.push(node.value)
    while (node?.next) {
      node = node.next
      res.push(node.value)
    }
  }
  return res
}
