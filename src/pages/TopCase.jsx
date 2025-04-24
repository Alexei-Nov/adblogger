import React from 'react'
import CaseCardMain from '../components/CaseCardMain/CaseCardMain'
import CasesCatalog from '../components/CasesCatalog/CasesCatalog'
import { useSelector } from 'react-redux'
import TitleAndMetaTags from '../components/TitleAndMetaTags/TitleAndMetaTags'

export default function TopCase() {
	const cardsArr = useSelector(state => state.toolkit.cases)

	const pageSeoTitle = 'Кейсы успешных кампаний в VK AdBlogger'
	const pageSeoDesc = 'Примеры успешных кампаний в VK AdBlogger. Изучите стратегии и результаты, которые помогли брендам снизить стоимость клика, повысить конверсии и достичь максимальных охватов, применяя платформу для продвижения через сообщества и блогеров.'

	return (
		<>
			<TitleAndMetaTags title={pageSeoTitle} description={pageSeoDesc} />
			<CaseCardMain post={cardsArr[0]} />
			<CasesCatalog posts={cardsArr} />
		</>
	)
}
