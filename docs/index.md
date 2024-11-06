---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "conversion-library"
  text: "conversion-library"
  tagline: Contains multiple format conversion methods
  actions:
    - theme: brand
      text: guide
      link: /guide/
    - theme: alt
      text: API METHODS
      link: /api/globals

features:
  - title: Decimal conversion
    details: Conversion between 36 base systems such as binary, octal, decimal, etc, example as octalToBinary, eightToTwo, binaryToOctal, twoToEight, decimalToBinary, tenToTwo, binaryToDecimal, twoToTen, decimalToOtherBase, tenToOther, otherBaseToDecimal, otherToTen
    link: /api/globals.html#decimal-conversion
  - title: Data Structure
    details: Data Structure, example as ListNode, arrayToListNode, listNodeToArray, combinationArrangement, elTableRowSpan
    link: /api/globals.html#data-structure
  - title: Color conversion
    details: Color conversion, example as hexRrggbbToHexRgb, hexRgbToHexRrggbb, hexRgbsToRgbArray, hexRgbsToRgbObject, hexRgbsToRgb, rgbToRgbArray, rgbToRgbObject, rgbToHexRgbs
    link: /api/globals.html#color-conversion
  - title: Int and roman
    details: Convert integers and Roman numerals to each other, example as intToRoman, intArrayToRomanArray, romanToInt, romanArrayToIntArray
    link: /api/globals.html#int-and-roman
  - title: String conversion
    details: import change-case, change-case/keys, sponge-case, swap-case, title-case
    link: /api/namespaces/changeCase/
---

