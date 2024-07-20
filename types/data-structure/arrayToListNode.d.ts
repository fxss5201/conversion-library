/**
 * **[en:ListNode][zh:链表]**
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
export declare class ListNode<T> {
    value: T;
    next: ListNode<T> | null;
    constructor(value: T, next?: ListNode<T> | null);
}
/**
 * **[en:arrayToListNode][zh:数组转链表]**
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
export declare function arrayToListNode<T>(arr: T[]): ListNode<T> | null;
