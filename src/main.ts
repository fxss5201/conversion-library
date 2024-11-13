import { tenToTwo, changeCase, changeCaseKeys, spongeCase, swapCase, titleCase, intArrayToRomanArray, arrayToTree, treeToArray } from '../lib/main'

console.log(tenToTwo(10))
console.log(changeCase.camelCase("TEST_VALUE"))
console.log(changeCaseKeys.camelCase({ "TEST_VALUE": "test"}))
console.log(spongeCase.spongeCase('string'))
console.log(swapCase.swapCase('string'))
console.log(titleCase.titleCase('follow step-by-step instructions'))
console.log(intArrayToRomanArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000]))

const arr = [
  { id: 1, parentId: null, name: 'aaa' },
  { id: 2, parentId: 1, name: 'bbb' },
  { id: 3, parentId: 1, name: 'ccc' },
  { id: 4, parentId: 2, name: 'ddd' },
]
console.log('arrayToTree', arrayToTree(arr))

const tree = [
  { id: 1, name: 'aaa', children: [
    { id: 2, name: 'bbb', children: [
      { id: 4, name: 'ddd' }
    ]},
    { id: 3, name: 'ccc' }
  ]}
]
console.log('treeToArray', treeToArray(tree))
