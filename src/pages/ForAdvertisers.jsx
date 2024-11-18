import React from 'react'
import { useSelector } from 'react-redux'
import AllBlocks from '../components/AllBlocks/AllBlocks'


export default function ForAdvertisers() {
	const pageState = useSelector(state => state.toolkit.pages).filter((item) => item.page_slug === 'for-advertisers')[0]

	return (
		<>
			<AllBlocks pageState={pageState} />
		</>
	)
}
