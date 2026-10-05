import fs from 'node:fs'
import path from 'node:path'

export function onBeforePrerenderStart() {
  const dir = path.resolve(process.cwd(), 'public/data/cases')
  const indexPath = path.join(dir, 'index.json')

  const files = JSON.parse(
    fs.readFileSync(indexPath, 'utf-8')
  )

  return files.map(file => {
    const article = JSON.parse(
      fs.readFileSync(path.join(dir, file), 'utf-8')
    )

    return `/top-cases/${article.slug}`
  })
}