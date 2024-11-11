# conversion-library

[![npm](https://img.shields.io/npm/v/conversion-library)](https://www.npmjs.com/package/conversion-library) [![Coverage Status](https://coveralls.io/repos/github/fxss5201/conversion-library/badge.svg?branch=main)](https://coveralls.io/github/fxss5201/conversion-library?branch=main) [![Download](https://img.shields.io/npm/dm/conversion-library)](https://www.npmjs.com/package/conversion-library)

```sh
npm i conversion-library
```

[转换库](https://fxss5201.github.io/conversion-library/zh/)

```ts
import { tenToTwo } from 'conversion-library'

console.log(tenToTwo(10)) // '1010'
```

## 进制转换

描述： 二进制、八进制、十进制等36进制之间的转换，例如：octalToBinary, eightToTwo, binaryToOctal, twoToEight, decimalToBinary, tenToTwo, binaryToDecimal, twoToTen, decimalToOtherBase, tenToOther, otherBaseToDecimal, otherToTen

## 数据转转

描述：数据转转，例如：ListNode, arrayToListNode, listNodeToArray, combinationArrangement, elTableRowSpan

## 颜色转换

描述：颜色转换，例如：hexRrggbbToHexRgb, hexRgbToHexRrggbb, hexRgbsToRgbArray, hexRgbsToRgbObject, hexRgbsToRgb, rgbToRgbArray, rgbToRgbObject, rgbToHexRgbs

## 整数和罗马数字

描述：整数和罗马数字互相转换，例如：intToRoman, intArrayToRomanArray, romanToInt, romanArrayToIntArray

## 整数和金额

描述：整数转换为千分位金额展示，例如：intToMoney

## 温度转换

描述：温度转换，例如：fahrenheitToCelsius, celsiusToFahrenheit

## 大小内存转换

描述：B/KB/MB/GB/TB/PB/EB/ZB/YB 转换，例如：sizeConversionBase, sizeConversionArray, sizeConversionString

## 长度转换

描述：nm/纳米/um/微米/mm/毫米/cm/厘米/dm/分米/m/米/km/千米/公里/mile/英里/yd/码/ft/英尺/in/英寸/里/丈/尺/寸/分/n mile/海里 转换，例如：lengthConversionBase

## 面积转换

描述：m㎡/平方毫米/c㎡/平方厘米/d㎡/平方分米/㎡/平方米/h㎡/公顷/k㎡/平方千米/sq.in/平方英寸/sq.ft/平方英尺/sq.yd/平方码/acre/英亩/sq.mi/平方英里/平方丈/平方尺/平方寸/亩/分 转换，例如：areaConversionBase

## 重量转换

描述：μg/微克/mg/毫克/g/克/kg/千克/t/吨/lb/磅/oz/盎司/担/斤/两/钱/克拉 转换，例如：weightConversionBase

## 字符串转换

描述：引自 change-case, change-case/keys, sponge-case, swap-case, title-case
