import fs from 'node:fs'
import path from 'node:path'

export default function data(pageContext) {
  const pageSlug = pageContext.urlPathname.replace(/^\/|\/$/g, '')

  const pagesPath = path.resolve(
    process.cwd(),
    'public/data/pages',
    `${pageSlug}.json`
  )

  const data = {
    page: null,
    blog: [],
    cases: [],
    footer: null,
    registrationBtn: {
      text: 'Перейти в кабинет',
      link: '/app'
    }
  }

  if (fs.existsSync(pagesPath)) {
    data.page = JSON.parse(fs.readFileSync(pagesPath, 'utf-8'))
  }

  const blogIndexPath = path.resolve(
    process.cwd(),
    'public/data/blog/index.json'
  )

  if (fs.existsSync(blogIndexPath)) {
    const files = JSON.parse(fs.readFileSync(blogIndexPath, 'utf-8'))

    data.blog = files.map(file =>
      JSON.parse(
        fs.readFileSync(
          path.resolve(process.cwd(), 'public/data/blog', file),
          'utf-8'
        )
      )
    )
  }

  const casesIndexPath = path.resolve(
    process.cwd(),
    'public/data/cases/index.json'
  )

  if (fs.existsSync(casesIndexPath)) {
    const files = JSON.parse(fs.readFileSync(casesIndexPath, 'utf-8'))

    data.cases = files.map(file =>
      JSON.parse(
        fs.readFileSync(
          path.resolve(process.cwd(), 'public/data/cases', file),
          'utf-8'
        )
      )
    )
  }

  const footerPath = path.resolve(
    process.cwd(),
    'public/data/footer/nav.json'
  )

  if (fs.existsSync(footerPath)) {
    data.footer = JSON.parse(
      fs.readFileSync(footerPath, 'utf-8')
    )
  }

  return data
}