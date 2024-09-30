import { describe, expect, test } from 'vitest'
import { combinationArrangement } from '../../lib/main'

describe('combinationArrangement', () => {
  test(`combinationArrangement([[1,2],[3,4],[5,6]])`, () => {
    expect(combinationArrangement([[1,2],[3,4],[5,6]])).toEqual([[1,3,5],[1,3,6],[1,4,5],[1,4,6],[2,3,5],[2,3,6],[2,4,5],[2,4,6]])
  })
  
  test(`combinationArrangement([
    ['红色', '蓝色', '黑色'],
    ['6G', '8G', '12G']
  ])`, () => {
    expect(combinationArrangement([
      ['红色', '蓝色', '黑色'],
      ['6G', '8G', '12G']
    ])).toEqual([
      ['红色', '6G'],
      ['红色', '8G'],
      ['红色', '12G'],
      ['蓝色', '6G'],
      ['蓝色', '8G'],
      ['蓝色', '12G'],
      ['黑色', '6G'],
      ['黑色', '8G'],
      ['黑色', '12G']
    ])
  })

  test(`combinationArrangement([
    ['5G', '6G'],
    [500, 550]
  ])`, () => {
    expect(combinationArrangement<string | number>([
      ['5G', '6G'],
      [500, 550]
    ])).toEqual([
      ['5G', 500],
      ['5G', 550],
      ['6G', 500],
      ['6G', 550]
    ])
  })
})
