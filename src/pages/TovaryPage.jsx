import React from 'react'
import { useSelector } from 'react-redux'
import AllBlocks from '../components/AllBlocks/AllBlocks'
import TitleAndMetaTags from 'components/TitleAndMetaTags/TitleAndMetaTags'

const title = "Шопсы ВКонтакте --рассказывайте о товарах и зарабатывайте с VK AdBlogger"
const description = "Создавайте шопсы в VK AdBlogger, публикуйте контент о товарах и зарабатывайте на рекламе ВКонтакте. Подключайте шопсы и развивайтесь в шопс-чарте."

export default function TovaryPage() {
	const pageState = useSelector(state => state.toolkit.pages).filter((item) => item.page_slug === 'shops')[0]

	return (
		<>
			<TitleAndMetaTags title={title} description={description} />
			<AllBlocks pageState={pageState} />
		</>
	)
}
