import React from 'react'
import AllBlocks from '../components/AllBlocks/AllBlocks'
import TitleAndMetaTags from 'components/TitleAndMetaTags/TitleAndMetaTags'

const title = "Запускайте рекламу у блогеров ВКонтакте с VK AdBlogger"
const description = "Запускайте рекламу у авторов и в сообществах ВКонтакте. Подбирайте нишевые площадки из огромного каталога биржи блогеров ВК. Отслеживайте эффективность каждого размещения с VK AdBlogger."

export default function ForAdvertisers() {
	return (
		<>
			<TitleAndMetaTags title={title} description={description} />
			<AllBlocks />
		</>
	)
}
