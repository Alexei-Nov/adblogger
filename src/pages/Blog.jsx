import React from 'react'
import AllBlocks from '../components/AllBlocks/AllBlocks'
import TitleAndMetaTags from 'components/TitleAndMetaTags/TitleAndMetaTags'

const title = "Полезные материалы"
const description = "Описание описание описание описание описание описание"

export default function Blog() {
	return (
		<>
			<TitleAndMetaTags title={title} description={description} />
			<AllBlocks />
		</>
	)
}
