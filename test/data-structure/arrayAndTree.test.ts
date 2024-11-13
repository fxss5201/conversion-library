import { describe, expect, test } from 'vitest'
import { arrayToTree, treeToArray } from '../../lib/main'

describe('arrayToTree', () => {
  const arr = [
    { id: 1, parentId: null, name: 'aaa' },
    { id: 2, parentId: 1, name: 'bbb' },
    { id: 3, parentId: 1, name: 'ccc' },
    { id: 4, parentId: 2, name: 'ddd' },
  ]
  const arrTree = [
    { id: 1, parentId: null, name: 'aaa', children: [
      { id: 2, parentId: 1, name: 'bbb', children: [
        { id: 4, parentId: 2, name: 'ddd' }
      ]},
      { id: 3, parentId: 1, name: 'ccc' }
    ]}
  ]
  test(`arrayToTree(arr)`, () => {
    expect(arrayToTree(arr)).toEqual(arrTree)
  })

  const arr1 = [
    { value: 1, parentValue: null, name: 'aaa' },
    { value: 2, parentValue: 1, name: 'bbb' },
    { value: 3, parentValue: 1, name: 'ccc' },
    { value: 4, parentValue: 2, name: 'ddd' },
  ]
  const arrTree1 = [
    { value: 1, parentValue: null, name: 'aaa', children: [
      { value: 2, parentValue: 1, name: 'bbb', children: [
        { value: 4, parentValue: 2, name: 'ddd' }
      ]},
      { value: 3, parentValue: 1, name: 'ccc' }
    ]}
  ]
  test(`arrayToTree(arr1, { idKey: 'value', parentIdKey: 'parentValue' })`, () => {
    expect(arrayToTree(arr1, { idKey: 'value', parentIdKey: 'parentValue' })).toEqual(arrTree1)
  })
})

describe('treeToArray', () => {
  const tree = [
    { id: 1, parentId: null, name: 'aaa', children: [
      { id: 2, parentId: 1, name: 'bbb', children: [
        { id: 4, parentId: 2, name: 'ddd' }
      ]},
      { id: 3, parentId: 1, name: 'ccc' }
    ]}
  ]
  const treeArr = [
    { id: 1, parentId: null, name: 'aaa' },
    { id: 3, parentId: 1, name: 'ccc' },
    { id: 2, parentId: 1, name: 'bbb' },
    { id: 4, parentId: 2, name: 'ddd' },
  ]
  test(`treeToArray(tree)`, () => {
    expect(treeToArray(tree)).toEqual(treeArr)
  })

  const tree1 = [
    { value: 1, parentId: null, name: 'aaa', children: [
      { value: 2, parentId: 1, name: 'bbb', children: [
        { value: 4, parentId: 2, name: 'ddd' }
      ]},
      { value: 3, parentId: 1, name: 'ccc' }
    ]}
  ]
  const treeArr1 = [
    { value: 1, parentId: null, name: 'aaa' },
    { value: 3, parentId: 1, name: 'ccc' },
    { value: 2, parentId: 1, name: 'bbb' },
    { value: 4, parentId: 2, name: 'ddd' },
  ]
  test(`treeToArray(tree1, { idKey: 'value' })`, () => {
    expect(treeToArray(tree1, { idKey: 'value' })).toEqual(treeArr1)
  })
})
