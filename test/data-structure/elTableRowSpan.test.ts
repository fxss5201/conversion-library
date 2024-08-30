import { describe, expect, test } from 'vitest'
import { elTableRowSpan } from '../../lib/main'

describe('elTableRowSpan', () => {
  const testTable = [
    {name: '显示器', id: '1', subId: '1-1', position: '一楼101'},
    {name: '显示器', id: '1', subId: '1-2', position: '一楼101'},
    {name: '显示器', id: '1', subId: '1-2', position: '一楼102'},
    {name: '显示器', id: '2', subId: '2-1', position: '一楼102'},
    {name: '文化衫', id: '3', subId: '3-1', position: '一楼102'}
  ]
  const resTable1 = [
    {name: '显示器', id: '1', subId: '1-1', position: '一楼101', row0col0: [3, 1], row0col1: [3, 1]},
    {name: '显示器', id: '1', subId: '1-2', position: '一楼101', row1col0: [0, 0], row1col1: [0, 0]},
    {name: '显示器', id: '1', subId: '1-2', position: '一楼102', row2col0: [0, 0], row2col1: [0, 0]},
    {name: '显示器', id: '2', subId: '2-1', position: '一楼102', row3col0: [1, 1], row3col1: [1, 1]},
    {name: '文化衫', id: '3', subId: '3-1', position: '一楼102', row4col0: [1, 1], row4col1: [1, 1]}
  ]
  const resTable2 = [
    {name: '显示器', id: '1', subId: '1-1', position: '一楼101', row0col0: [3, 1], row0col1: [3, 1], row0col2: [1, 1], row0col3: [1, 1]},
    {name: '显示器', id: '1', subId: '1-2', position: '一楼101', row1col0: [0, 0], row1col1: [0, 0], row1col2: [2, 1], row1col3: [2, 1]},
    {name: '显示器', id: '1', subId: '1-2', position: '一楼102', row2col0: [0, 0], row2col1: [0, 0], row2col2: [0, 0], row2col3: [0, 0]},
    {name: '显示器', id: '2', subId: '2-1', position: '一楼102', row3col0: [1, 1], row3col1: [1, 1], row3col2: [1, 1], row3col3: [1, 1]},
    {name: '文化衫', id: '3', subId: '3-1', position: '一楼102', row4col0: [1, 1], row4col1: [1, 1], row4col2: [1, 1], row4col3: [1, 1]}
  ]
  const handleTable1 = elTableRowSpan(testTable, 'id', [0, 1])
  const handleTable2 = elTableRowSpan(resTable1, 'subId', [2, 3], 1)

  test(`elTableRowSpan(testTable, 'id', [0, 1])`, () => {
    expect(handleTable1).toEqual(resTable1)
  })

  test(`elTableRowSpan(handleTable1, 'subId', [2, 3], 1)`, () => {
    expect(handleTable2).toEqual(resTable2)
  })
})
