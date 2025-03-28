import React from 'react'
import { useSelector } from 'react-redux'
import AllBlocks from '../components/AllBlocks/AllBlocks'
import TitleAndMetaTags from '../components/TitleAndMetaTags/TitleAndMetaTags'


export default function ForSellers() {
	const pageState = useSelector(state => state.toolkit.pages).filter((item) => item.page_slug === 'for-sellers')[0]

	return (
		<>
			<TitleAndMetaTags />
			<AllBlocks pageState={pageState} />
		</>
	)
}
