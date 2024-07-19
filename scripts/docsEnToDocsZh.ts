import { type DefaultTheme } from 'vitepress'
import { consola } from 'consola'
import { writeFile, readdir, readFile, copyFile, constants } from 'fs/promises'
import path from 'path'
import enToZhMd from './enToZhMd'
import enFunctionToZh from './enFunctionToZh'
import sidebar from '../docs/api/typedoc-sidebar.json'

async function main () {
  const docsEnPath = path.resolve(path.resolve(), 'docs/api/functions')
  const enMdList = await readdir(docsEnPath)
  const docsZhPath = path.resolve(path.resolve(), 'docs/zh/api/functions')
  const zhMdList = await readdir(docsZhPath)
  const needCopyList: string[] = []
  enMdList.forEach(item => {
    if (!zhMdList.includes(item)) {
      needCopyList.push(item)
    }
  })
  needCopyList.forEach(async item => {
    const readPath = path.resolve(docsEnPath, item)
    const writePath = path.resolve(docsZhPath, item)
    let readContent = await readFile(readPath, { encoding: 'utf-8' })
    const enToZhMdKeys = Object.keys(enToZhMd)
    enToZhMdKeys.forEach(key => {
      readContent = readContent.replace(key, enToZhMd[key])
    })
    await writeFile(writePath, readContent)
  })

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

main()
