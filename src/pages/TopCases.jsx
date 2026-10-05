import React from 'react'
import CaseCardMain from '../components/CaseCardMain/CaseCardMain'
import CasesCatalog from '../components/CasesCatalog/CasesCatalog'
import TitleAndMetaTags from '../components/TitleAndMetaTags/TitleAndMetaTags'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import { useData } from 'vike-react/useData'

export default function TopCase() {
  const { cases = [] } = useData()
  const pageSeoTitle = 'Кейсы успешных кампаний в VK AdBlogger'
  const pageSeoDesc = 'Подборка кейсов рекламодателей VK AdBlogger: результаты рекламных кампаний, использованные инструменты, показатели эффективности и опыт продвижения брендов с помощью блогеров.'

  const breadcrumbsState = [
    {
      title: 'Главная',
      link: "/"
    },
    {
      title: 'Топ-кейсы',
      link: "/top-cases"
    },
  ]
  return (
    <>
      <TitleAndMetaTags title={pageSeoTitle} description={pageSeoDesc} />
      <Breadcrumbs breadcrumbsState={breadcrumbsState} />

      <CaseCardMain post={cases[0]} />
      <CasesCatalog posts={cases} />
    </>
  )
}
