import React, { useEffect } from 'react'
import Money from '../components/Money/Money'
import { useDispatch, useSelector } from 'react-redux'
import { usePageContext } from 'vike-react/usePageContext'
import TitleAndMetaTags from '../components/TitleAndMetaTags/TitleAndMetaTags'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import BlogArticle from 'components/BlogArticle/BlogArticle'
import Faq from 'components/Faq/Faq'

export default function BlogDetail() {
  const pageContext = usePageContext()
  const slug = pageContext.routeParams.slug

  const articleState = useSelector(state =>
    state.toolkit.blog.find(blogItem => blogItem.slug == slug)
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (!articleState) {
      fetch("/data/blog/" + slug + ".json")
        .then(res => res.json())
        .then(data => {
          // dispatch(...)
        })
        .catch(err => {
          console.log(err.message)
          window.location.href = '/404'
        })
    }
  }, [slug, articleState, dispatch])

  const moneyState = {
    title: 'пора пробовать — и&nbsp;получать деньги',
    has_border: 'true',
    btn_text: 'начать зарабатывать',
    btn_link: '/app'
  }

  const breadcrumbsState = [
    {
      title: 'Рекламодателям',
      link: '/for-advertisers'
    },
    {
      title: 'Полезные материалы',
      link: '/blog'
    },
    {
      title: articleState?.title,
      link: '/' + articleState?.slug
    },
  ]

  const faq_state = articleState?.faq

  return (
    <>
      <TitleAndMetaTags
        {...(articleState?.seo_title ? { title: articleState.seo_title } : {})}
        {...(articleState?.seo_desc ? { description: articleState.seo_desc } : {})}
      />

      <Breadcrumbs breadcrumbsState={breadcrumbsState} />

      <BlogArticle article={articleState} />

      <Money block_state={moneyState} />

      {faq_state &&
        <Faq block_state={faq_state} />
      }
    </>
  )
}