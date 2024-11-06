/**
 * **combinationArrangement**
 * 
 * <Badge type="tip" text="version: v0.0.8+" />
 * 
 * @group data-structure
 *
 * @param arr - Enter two-dimensional array
 * @returns combination arrangement
 * 
 * @example
 * ```ts
 * combinationArrangement([[1,2],[3,4],[5,6]])
 * [[1,3,5],[1,3,6],[1,4,5],[1,4,6],[2,3,5],[2,3,6],[2,4,5],[2,4,6]]
 * 
 * combinationArrangement([['红色', '蓝色', '黑色'],['6G', '8G', '12G']])
 * [['红色','6G'],['红色','8G'],['红色','12G'],['蓝色','6G'],['蓝色','8G'],['蓝色','12G'],['黑色','6G'],['黑色','8G'],['黑色','12G']]
 * 
 * combinationArrangement<string | number>([['5G', '6G'],[500, 550]])
 * [['5G', 500],['5G', 550],['6G', 500],['6G', 550]]
 * ```
 */
export function combinationArrangement<T>(arr: T[][]): T[][] {
  const res: T[][] = []
  function dfs (curList: T[], idx: number) {
    if (curList.length === arr.length) {
      res.push(curList)
      return
    }
    const nowArr = arr[idx]
    for (let i = 0; i < nowArr.length; i++) {
      dfs([...curList, nowArr[i]], idx + 1)
    }
  }
  dfs([], 0)
  return res
}