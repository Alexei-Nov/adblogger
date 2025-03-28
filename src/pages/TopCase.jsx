import React from 'react'
import CaseCardMain from '../components/CaseCardMain/CaseCardMain'
import CasesCatalog from '../components/CasesCatalog/CasesCatalog'
import { useSelector } from 'react-redux'
import TitleAndMetaTags from '../components/TitleAndMetaTags/TitleAndMetaTags'

export default function TopCase() {
	const cardsArr = useSelector(state => state.toolkit.cases)

	return (
		<>
			<TitleAndMetaTags />
			<CaseCardMain post={cardsArr[0]} />
			<CasesCatalog posts={cardsArr} />
		</>
	)
}
