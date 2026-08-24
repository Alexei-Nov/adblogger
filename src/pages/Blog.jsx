import React from 'react'
import AllBlocks from '../components/AllBlocks/AllBlocks'
import TitleAndMetaTags from 'components/TitleAndMetaTags/TitleAndMetaTags'

const title = "Полезные материалы"
const description = "Всё об аналитике рекламных кампаний, работе с блогерами и продвижении бизнеса"

export default function Blog() {
	return (
		<>
			<TitleAndMetaTags title={title} description={description} />
			<AllBlocks />
		</>
	)
}
