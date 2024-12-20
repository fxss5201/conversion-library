---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "conversion-library"
  text: "转换库"
  tagline: 包含多种格式转换方法
  actions:
    - theme: brand
      text: 指南
      link: /zh/guide/
    - theme: alt
      text: 函数方法
      link: /zh/api/globals

features:
  - title: 进制转换
    details: 二进制、八进制、十进制等36进制之间的转换，例如：octalToBinary, eightToTwo, binaryToOctal, twoToEight, decimalToBinary, tenToTwo, binaryToDecimal, twoToTen, decimalToOtherBase, tenToOther, otherBaseToDecimal, otherToTen
    link: /zh/api/globals.html#decimal-conversion
  - title: 数据转转
    details: 数据转转，例如：ListNode, arrayToListNode, listNodeToArray, combinationArrangement, elTableRowSpan, arrayToTree, treeToArray
    link: /zh/api/globals.html#data-structure
  - title: 颜色转换
    details: 颜色转换，例如：hexRrggbbToHexRgb, hexRgbToHexRrggbb, hexRgbsToRgbArray, hexRgbsToRgbObject, hexRgbsToRgb, rgbToRgbArray, rgbToRgbObject, rgbToHexRgbs
    link: /zh/api/globals.html#color-conversion
  - title: 整数和罗马数字
    details: 整数和罗马数字互相转换，例如：intToRoman, intArrayToRomanArray, romanToInt, romanArrayToIntArray
    link: /zh/api/globals.html#int-and-roman
  - title: 整数和金额
    details: 整数转换为千分位金额展示，例如：intToMoney
    link: /zh/api/globals.html#int-and-money
  - title: 温度转换
    details: 温度转换，例如：fahrenheitToCelsius, celsiusToFahrenheit
    link: /zh/api/globals.html#fahrenheit-and-celsius
  - title: 大小内存转换
    details: B/KB/MB/GB/TB/PB/EB/ZB/YB 转换，例如：sizeConversionBase, sizeConversionArray, sizeConversionString
    link: /zh/api/globals.html#size-conversion
  - title: 长度转换
    details: nm/纳米/um/微米/mm/毫米/cm/厘米/dm/分米/m/米/km/千米/公里/mile/英里/yd/码/ft/英尺/in/英寸/里/丈/尺/寸/分/n mile/海里 转换，例如：lengthConversionBase
    link: /zh/api/globals.html#length-conversion
  - title: 面积转换
    details: m㎡/平方毫米/c㎡/平方厘米/d㎡/平方分米/㎡/平方米/h㎡/公顷/k㎡/平方千米/sq.in/平方英寸/sq.ft/平方英尺/sq.yd/平方码/acre/英亩/sq.mi/平方英里/平方丈/平方尺/平方寸/亩/分 转换，例如：areaConversionBase
    link: /zh/api/globals.html#area-conversion
  - title: 重量转换
    details: μg/微克/mg/毫克/g/克/kg/千克/t/吨/lb/磅/oz/盎司/担/斤/两/钱/克拉 转换，例如：weightConversionBase
    link: /zh/api/globals.html#weight-conversion
  - title: 数字转换
    details: 数字 转换，例如：numberToExponential (数字转为科学计数法字符串), exponentialToNumber (科学计数法字符串转为数字)
    link: /zh/api/globals.html#number-conversion
  - title: 速度转换
    details: 速度转换，例如：speedConversionBase
    link: /zh/api/globals.html#speed-conversion
  - title: 字符串转换
    details: 引自 change-case, change-case/keys, sponge-case, swap-case, title-case
    link: /zh/api/namespaces/changeCase/
---

