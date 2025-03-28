import React from 'react'
import { useSelector } from 'react-redux'
import AllBlocks from '../components/AllBlocks/AllBlocks'
import TitleAndMetaTags from 'components/TitleAndMetaTags/TitleAndMetaTags'

const title = "Запускайте рекламу у блогеров ВКонтакте с VK AdBlogger"
const description = "Запускайте рекламу у авторов и в сообществах ВКонтакте. Подбирайте нишевые площадки из огромного каталога биржи блогеров ВК. Отслеживайте эффективность каждого размещения с VK AdBlogger."

export default function ForAdvertisers() {
	const pageState = useSelector(state => state.toolkit.pages).filter((item) => item.page_slug === 'for-advertisers')[0]

	return (
		<>
			<TitleAndMetaTags title={title} description={description} />
			<AllBlocks pageState={pageState} />
		</>
	)
}
