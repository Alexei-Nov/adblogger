import React, { useEffect, useState } from 'react'
import CaseCardMain from '../components/CaseCardMain/CaseCardMain'
import CasesCatalog from '../components/CasesCatalog/CasesCatalog'

export default function TopCase() {
	const [cardsArr, setCardsArr] = useState([])

	useEffect(() => {
		fetch("./casesState.json")
			.then(res => res.json())
			.then(
				(result) => {
					setCardsArr(result.cases)
				},
				(error) => {
					console.log(error);
				}
			)
			.catch(err => console.error(err))
	})


	return (
		<>
			<CaseCardMain post={cardsArr[0]} />
			<CasesCatalog posts={cardsArr} />
		</>
	)
}
