/**
 * **[en:ListNode][zh:链表]**
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
 * @param value - [en:Enter value][zh:输入值]
 * @param next - [en:next ListNode][zh:`next` 属性对应的 `ListNode`]
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
 * **[en:arrayToListNode][zh:数组转链表]**
 * 
 * <Badge type="tip" text="version: v0.0.4+" />
 * 
 * @group data-structure
 *
 * @param arr - [en:Enter array][zh:输入数组]
 * @returns [en:Return ListNode or null][zh:返回链表或者 `null`]
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
