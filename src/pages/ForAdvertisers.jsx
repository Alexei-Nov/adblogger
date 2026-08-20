import React from 'react'
import AllBlocks from '../components/AllBlocks/AllBlocks'
import TitleAndMetaTags from 'components/TitleAndMetaTags/TitleAndMetaTags'

const title = "Реклама у блогеров ВКонтакте, заказать в VK AdBlogger"
const description = "В VK AdBlogger можно купить рекламу у блогеров во Вконтакте, закупка и размещение рекламных интеграций. Поможем заказать продвижение в VK через блогеров с учётом вашей аудитории."

export default function ForAdvertisers() {
	return (
		<>
			<TitleAndMetaTags title={title} description={description} />
			<AllBlocks />
		</>
	)
}
