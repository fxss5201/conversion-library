import { consola } from 'consola'
import { writeFile, readdir, readFile, copyFile, constants } from 'fs/promises'
import path from 'path'
import enToZhConfig from './enToZhConfig'

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
    const enToZhConfigKey = Object.keys(enToZhConfig)
    enToZhConfigKey.forEach(key => {
      readContent = readContent.replace(key, enToZhConfig[key])
    })
    await writeFile(writePath, readContent)
  })
  await copyFile(path.resolve(path.resolve(), 'docs/api/globals.md'), path.resolve(path.resolve(), 'docs/zh/api/globals.md'), constants.COPYFILE_FICLONE)
  await copyFile(path.resolve(path.resolve(), 'docs/api/typedoc-sidebar.json'), path.resolve(path.resolve(), 'docs/zh/api/typedoc-sidebar.json'), constants.COPYFILE_FICLONE)

  consola.success('转换成功')
}

main()
