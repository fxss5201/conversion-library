import { describe, expect, test } from 'vitest'
import { ListNode, arrayToListNode } from '../../lib/main'

test(`ListNode`, () => {
  expect(new ListNode({ name: 'aaa', age: 1 })).toEqual({ value: { name: 'aaa', age: 1 }, next: null })
})

describe('arrayToListNode', () => {
  test(`arrayToListNode([1, 2, 3])`, () => {
    expect(arrayToListNode([1, 2, 3])).toEqual({ value: 1, next: { value: 2, next: { value: 3, next: null } } })
  })

  test(`arrayToListNode([{ name: 'aaa', age: 1 }, { name: 'bbb', age: 2 }])`, () => {
    expect(arrayToListNode([{ name: 'aaa', age: 1 }, { name: 'bbb', age: 2 }])).toEqual({ value: { name: 'aaa', age: 1 }, next: { value: { name: 'bbb', age: 2 }, next: null } })
  })

  test(`arrayToListNode([])`, () => {
    expect(arrayToListNode([])).toBe(null)
  })
})
