import { tenToTwo, changeCase, changeCaseKeys, spongeCase, swapCase, titleCase } from '../lib/main'

console.log(tenToTwo(10))
console.log(changeCase.camelCase("TEST_VALUE"))
console.log(changeCaseKeys.camelCase({ "TEST_VALUE": "test"}))
console.log(spongeCase.spongeCase('string'))
console.log(swapCase.swapCase('string'))
console.log(titleCase.titleCase('follow step-by-step instructions'))
