import { type DefaultTheme } from 'vitepress'
import { consola } from 'consola'
import { writeFile, readdir, readFile, mkdir } from 'fs/promises'
import path from 'path'
import enToZhMd from './enToZhMd'
import enFunctionToZh from './enFunctionToZh'
import functionAlias from './functionAlias'
import sidebar from '../docs/api/typedoc-sidebar.json'

const enToZhMdKeys = Object.keys(enToZhMd)

async function main () {
  await changeMd('functions')
  await changeMd('classes')
  
  const enFunctionToZhKeys = Object.keys(enFunctionToZh)

  const globalsReadPath = path.resolve(path.resolve(), 'docs/api/globals.md')
  const globalswritePath = path.resolve(path.resolve(), 'docs/zh/api/globals.md')
  let globalsReadContent = await readFile(globalsReadPath, { encoding: 'utf-8' })
  enFunctionToZhKeys.forEach(key => {
    globalsReadContent = globalsReadContent.replace(`## ${key}`, `## ${enFunctionToZh[key]}`)
    globalsReadContent = globalsReadContent.replace(`[${key}]`, `[${enFunctionToZh[key]}]`)
  })
  await writeFile(globalswritePath, globalsReadContent)

  function changeText (list: DefaultTheme.SidebarItem[]) {
    list.forEach(item => {
      if (item.link) {
        item.link = `/zh${item.link}`
      }
      if (enFunctionToZhKeys.includes(item.text as string)) {
        item.text = enFunctionToZh[item.text as string]
      }
      if (item.items && item.items.length > 0) {
        changeText(item.items)
      }
    })
  }
  changeText(sidebar)
  await writeFile(path.resolve(path.resolve(), 'docs/zh/api/typedoc-sidebar.json'), `${JSON.stringify(sidebar, null, 2)}`)

  consola.success('转换成功')
}

async function changeMd (type: string) {
  const docsEnPath = path.resolve(path.resolve(), `docs/api/${type}`)
  const enMdList = await readdir(docsEnPath)
  const docsZhPath = path.resolve(path.resolve(), `docs/zh/api/${type}`)
  await mkdir(docsZhPath, { recursive: true })
  enMdList.forEach(async item => {
    const readPath = path.resolve(docsEnPath, item)
    const writePath = path.resolve(docsZhPath, item)
    let readContent = await readFile(readPath, { encoding: 'utf-8' })
    let oldReadContent = readContent
    while (readContent.includes('[zh:')) {
      let zhStartIndex = readContent.indexOf('[zh:')
      let zhEndIndex = zhStartIndex
      while (readContent[zhEndIndex] !== ']') {
        zhEndIndex++
      }
      const zhContent = readContent.slice(zhStartIndex + 4, zhEndIndex)
      zhStartIndex--
      while (readContent[zhStartIndex] !== '[') {
        zhStartIndex--
      }
      const content = readContent.slice(zhStartIndex, zhEndIndex + 1)
      readContent = readContent.replace(content, zhContent)
    }
    while (oldReadContent.includes('[en:')) {
      let enStartIndex = oldReadContent.indexOf('[en:')
      let enEndIndex = enStartIndex
      while (oldReadContent[enEndIndex] !== ']') {
        enEndIndex++
      }
      const enContent = oldReadContent.slice(enStartIndex + 4, enEndIndex)
      enEndIndex++
      while (oldReadContent[enEndIndex] !== ']') {
        enEndIndex++
      }
      const content = oldReadContent.slice(enStartIndex, enEndIndex + 1)
      oldReadContent = oldReadContent.replace(content, enContent)
    }
    const mdName = item.split('.')[0]
    enToZhMdKeys.forEach(key => {
      readContent = readContent.replace(key, enToZhMd[key])
    })
    readContent = readContent.replace(mdName, enFunctionToZh[mdName])
    await writeFile(writePath, readContent)
    oldReadContent = oldReadContent.replace(functionAlias[mdName], mdName)
    await writeFile(readPath, oldReadContent)
  })
}

main()
