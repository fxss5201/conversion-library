import cloneDeep from "lodash.clonedeep"

/**
 * **[en:elTableRowSpan:][zh:Table 表格合并:]**
 * 
 * <Badge type="tip" text="version: v0.0.7+" />
 * 
 * [en:Table row merging applied to Element/Element Plus:][zh:应用于 Element/Element Plus 的 Table 行合并:]
 * 
 * @group data-structure
 *
 * @param table - [en:Enter table data:][zh:表格数据:]
 * @param key - [en:Merge based on field key:][zh:根据字段 key 进行合并:]
 * @param columns - [en:Which columns should the merge be applied to:][zh:合并应用于哪些列:]
 * @param parentColumn - [en:Merge again based on which parent merge, do not upload for the first merge:][zh:在哪个父合并基础上再次合并，初次合并勿传:]
 * 
 * @example
 * ```ts
 * let testTable = [
 *   {name: '显示器', id: '1', subId: '1-1', position: '一楼101'},
 *   {name: '显示器', id: '1', subId: '1-2', position: '一楼101'},
 *   {name: '显示器', id: '1', subId: '1-2', position: '一楼102'},
 *   {name: '显示器', id: '2', subId: '2-1', position: '一楼102'},
 *   {name: '文化衫', id: '3', subId: '3-1', position: '一楼102'}
 * ]
 * testTable = elTableRowSpan(testTable, 'id', [0, 1])
 * [
 *   {name: '显示器', id: '1', subId: '1-1', position: '一楼101', row0col0: [3, 1], row0col1: [3, 1]},
 *   {name: '显示器', id: '1', subId: '1-2', position: '一楼101', row1col0: [0, 0], row1col1: [0, 0]},
 *   {name: '显示器', id: '1', subId: '1-2', position: '一楼102', row2col0: [0, 0], row2col1: [0, 0]},
 *   {name: '显示器', id: '2', subId: '2-1', position: '一楼102', row3col0: [1, 1], row3col1: [1, 1]},
 *   {name: '文化衫', id: '3', subId: '3-1', position: '一楼102', row4col0: [1, 1], row4col1: [1, 1]}
 * ]
 * testTable = elTableRowSpan(testTable, 'subId', [2, 3], 1)
 * [
 *   {name: '显示器', id: '1', subId: '1-1', position: '一楼101', row0col0: [3, 1], row0col1: [3, 1], row0col2: [1, 1], row0col3: [1, 1]},
 *   {name: '显示器', id: '1', subId: '1-2', position: '一楼101', row1col0: [0, 0], row1col1: [0, 0], row1col2: [2, 1], row1col3: [2, 1]},
 *   {name: '显示器', id: '1', subId: '1-2', position: '一楼102', row2col0: [0, 0], row2col1: [0, 0], row2col2: [0, 0], row2col3: [0, 0]},
 *   {name: '显示器', id: '2', subId: '2-1', position: '一楼102', row3col0: [1, 1], row3col1: [1, 1], row3col2: [1, 1], row3col3: [1, 1]},
 *   {name: '文化衫', id: '3', subId: '3-1', position: '一楼102', row4col0: [1, 1], row4col1: [1, 1], row4col2: [1, 1], row4col3: [1, 1]}
 * ]
 * ```
 */
export function elTableRowSpan<T, K extends keyof T>(table: T[], key: K, columns: number[], parentColumn: number | null = null): T[] {
  table = cloneDeep(table)
  if (parentColumn === null) {
    for (let row = 0; row < table.length; row++) {
      let oldRow = row
      while (row + 1 < table.length && table[row + 1][key] === table[row][key]) {
        row++
        columns.forEach(col => {
          table[row] = {
            ...table[row],
            [`row${row}col${col}`]: [0, 0]
          }
        })
      }
      columns.forEach(col => {
        table[oldRow] = {
          ...table[oldRow],
          [`row${oldRow}col${col}`]: [row - oldRow + 1, 1]
        }
      })
    }
  } else {
    for (let row = 0; row < table.length; row++) {
      let nowRows = (table[row] as any)[`row${row}col${parentColumn}`][0]
      let maxRow = row + nowRows - 1
      for (let rowJ = row; rowJ <= maxRow; rowJ++) {
        let oldJ = rowJ
        while (rowJ + 1 <= maxRow && table[rowJ + 1][key] === table[rowJ][key]) {
          row++
          rowJ++
          columns.forEach(col => {
            table[rowJ] = {
              ...table[rowJ],
              [`row${rowJ}col${col}`]: [0, 0]
            }
          })
        }
        columns.forEach(col => {
          table[oldJ] = {
            ...table[oldJ],
            [`row${oldJ}col${col}`]: [rowJ - oldJ + 1, 1]
          }
        })
      }
    }
  }
  return table
}
