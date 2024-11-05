import { tenToTwo, changeCase, changeCaseKeys, spongeCase, swapCase, titleCase, intArrayToRomanArray } from '../lib/main'

console.log(tenToTwo(10))
console.log(changeCase.camelCase("TEST_VALUE"))
console.log(changeCaseKeys.camelCase({ "TEST_VALUE": "test"}))
console.log(spongeCase.spongeCase('string'))
console.log(swapCase.swapCase('string'))
console.log(titleCase.titleCase('follow step-by-step instructions'))
console.log(intArrayToRomanArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000]))


