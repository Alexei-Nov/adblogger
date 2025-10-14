import React from 'react'
import { useSelector } from 'react-redux'
import AllBlocks from '../components/AllBlocks/AllBlocks'
import TitleAndMetaTags from 'components/TitleAndMetaTags/TitleAndMetaTags'

const title = "Станьте автором в VK AdBlogger и зарабатывайте на рекламе ВКонтакте"
const description = "Поможем блогерам и сообществам с аудиторией от 1000 подписчиков размещать рекламу ВКонтакте. Маркет-платформа VK AdBlogger позволяет зарабатывать авторам контента ВКонтакте. Автоматический документооборот и выплаты. Маркировка рекламы."

export default function ShopsChart() {
	const pageState = useSelector(state => state.toolkit.pages).filter((item) => item.page_slug === 'shops-chart')[0]

	return (
		<>
			<TitleAndMetaTags title={title} description={description} />
			<AllBlocks pageState={pageState} />
		</>
	)
}
