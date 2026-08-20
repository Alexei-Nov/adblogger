import React from 'react'
import AllBlocks from '../components/AllBlocks/AllBlocks'
import TitleAndMetaTags from 'components/TitleAndMetaTags/TitleAndMetaTags'

const title = "Монетизируйте свой контент во ВКонтакте и зарабатывайте вместе с VK AdBlogger"
const description = "Подключайте монетизацию ВК и зарабатывайте на контенте: получайте заказы на рекламу от бизнеса через платформу VK AdBlogger"

export default function ForAuthors() {
	return (
		<>
			<TitleAndMetaTags title={title} description={description} />
			<AllBlocks />
		</>
	)
}
