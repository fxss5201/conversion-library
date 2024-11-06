[conversion-library](../globals.md) / elTableRowSpan

# Function: elTableRowSpan()

```ts
function elTableRowSpan<T, K>(
   table: T[], 
   key: K, 
   columns: number[], 
   parentColumn: null | number): T[]
```

**elTableRowSpan**

<Badge type="tip" text="version: v0.0.7+" />

表格行合并应用于 Element/Element Plus

## Type Parameters

• **T**

• **K** *extends* `string` \| `number` \| `symbol`

## Parameters

• **table**: `T`[]

输入表格数据

• **key**: `K`

需要合并的列对应的key

• **columns**: `number`[]

需要合并的列的索引

• **parentColumn**: `null` \| `number` = `null`

需要合并的列的父列索引，第一次勿传

## Returns

`T`[]

## Example

```ts
let testTable = [
  {name: '显示器', id: '1', subId: '1-1', position: '一楼101'},
  {name: '显示器', id: '1', subId: '1-2', position: '一楼101'},
  {name: '显示器', id: '1', subId: '1-2', position: '一楼102'},
  {name: '显示器', id: '2', subId: '2-1', position: '一楼102'},
  {name: '文化衫', id: '3', subId: '3-1', position: '一楼102'}
]
testTable = elTableRowSpan(testTable, 'id', [0, 1])
[
  {name: '显示器', id: '1', subId: '1-1', position: '一楼101', row0col0: [3, 1], row0col1: [3, 1]},
  {name: '显示器', id: '1', subId: '1-2', position: '一楼101', row1col0: [0, 0], row1col1: [0, 0]},
  {name: '显示器', id: '1', subId: '1-2', position: '一楼102', row2col0: [0, 0], row2col1: [0, 0]},
  {name: '显示器', id: '2', subId: '2-1', position: '一楼102', row3col0: [1, 1], row3col1: [1, 1]},
  {name: '文化衫', id: '3', subId: '3-1', position: '一楼102', row4col0: [1, 1], row4col1: [1, 1]}
]
testTable = elTableRowSpan(testTable, 'subId', [2, 3], 1)
[
  {name: '显示器', id: '1', subId: '1-1', position: '一楼101', row0col0: [3, 1], row0col1: [3, 1], row0col2: [1, 1], row0col3: [1, 1]},
  {name: '显示器', id: '1', subId: '1-2', position: '一楼101', row1col0: [0, 0], row1col1: [0, 0], row1col2: [2, 1], row1col3: [2, 1]},
  {name: '显示器', id: '1', subId: '1-2', position: '一楼102', row2col0: [0, 0], row2col1: [0, 0], row2col2: [0, 0], row2col3: [0, 0]},
  {name: '显示器', id: '2', subId: '2-1', position: '一楼102', row3col0: [1, 1], row3col1: [1, 1], row3col2: [1, 1], row3col3: [1, 1]},
  {name: '文化衫', id: '3', subId: '3-1', position: '一楼102', row4col0: [1, 1], row4col1: [1, 1], row4col2: [1, 1], row4col3: [1, 1]}
]
```

## Defined in

[lib/data-structure/elTableRowSpan.ts:44](https://github.com/fxss5201/conversion-library/blob/main/lib/data-structure/elTableRowSpan.ts#L44)
