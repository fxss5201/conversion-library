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
      link: /zh/guide/
    - theme: alt
      text: API METHODS
      link: /zh/api/globals

features:
  - title: 进制转换
    details: 二进制、八进制、十进制等36进制之间的转换，例如：octalToBinary, eightToTwo, binaryToOctal, twoToEight, decimalToBinary, tenToTwo, binaryToDecimal, twoToTen, decimalToOtherBase, tenToOther, otherBaseToDecimal, otherToTen
    link: /zh/api/globals.html#decimal-conversion
  - title: 数据转转
    details: 数据转转，例如：ListNode, arrayToListNode, listNodeToArray, combinationArrangement, elTableRowSpan
    link: /zh/api/globals.html#data-structure
  - title: 颜色转换
    details: 颜色转换，例如：hexRrggbbToHexRgb, hexRgbToHexRrggbb, hexRgbsToRgbArray, hexRgbsToRgbObject, hexRgbsToRgb, rgbToRgbArray, rgbToRgbObject, rgbToHexRgbs
    link: /zh/api/globals.html#color-conversion
  - title: 整数和罗马数字
    details: 整数和罗马数字互相转换，例如：intToRoman, intArrayToRomanArray, romanToInt, romanArrayToIntArray
    link: /zh/api/globals.html#int-and-roman
  - title: 字符串转换
    details: 引自 change-case, change-case/keys, sponge-case, swap-case, title-case
    link: /zh/api/namespaces/changeCase/
---

