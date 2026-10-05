import React from 'react'
import Money from '../components/Money/Money'
import Article from '../components/Article/Article'
import { useData } from 'vike-react/useData'
import { usePageContext } from 'vike-react/usePageContext'
import TitleAndMetaTags from '../components/TitleAndMetaTags/TitleAndMetaTags'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'

export default function DetailCase() {
  const { cases = [] } = useData()
  const { slug } = usePageContext().routeParams

  const articleState = cases.find(caseItem => caseItem.slug === slug)

  const moneyState = {
    title: 'Запускайте рекламу у&nbsp;блогеров и&nbsp;в&nbsp;сообществах ВКонтакте',
    has_border: 'true',
    btn_text: 'Перейти в кабинет',
    btn_link: '/app',
  }

  if (articleState?.slug === 'case-for-authors') {
    moneyState.title = 'Зарабатывайте <br> на&nbsp;своём контенте'
  }

  const breadcrumbsState = [
    {
      title: 'Главная',
      link: '/',
    },
    {
      title: 'Топ-кейсы',
      link: '/top-cases',
    },
    {
      title: articleState?.title,
      link: '/top-cases/' + articleState?.slug,
    },
  ]

  return (
    <>
      <TitleAndMetaTags
        {...(articleState?.seo_title
          ? { title: articleState.seo_title }
          : {})}
        {...(articleState?.seo_desc
          ? { description: articleState.seo_desc }
          : {})}
      />

      <Breadcrumbs breadcrumbsState={breadcrumbsState} />

      <Article article={articleState} />

      <Money block_state={moneyState} />
    </>
  )
}