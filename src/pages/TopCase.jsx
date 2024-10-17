import React, { useEffect } from 'react'
import CaseCardMain from '../components/CaseCardMain/CaseCardMain'
import CasesCatalog from '../components/CasesCatalog/CasesCatalog'
import { useSelector } from 'react-redux'

export default function TopCase() {
	const cardsArr = useSelector(state => state.toolkit.cases)

	return (
		<>
			<CaseCardMain post={cardsArr[0]} />
			<CasesCatalog posts={cardsArr} />
		</>
	)
}
