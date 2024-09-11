import React, { useEffect, useState } from 'react'
import Money from '../components/Money/Money'
import { useParams } from 'react-router-dom';
import Article from '../components/Article/Article';

export default function DetailCase() {
	const { slug } = useParams();

	const [cases, setCases] = useState()
	const [articleState, setArticleState] = useState()

	useEffect(() => {
		fetch("/casesState.json")
			.then(res => res.json())
			.then(
				(result) => {
					setCases(result.cases)
					setArticleState(cases.filter((caseItem) => caseItem.slug == slug)[0])
				},
				(error) => {
					console.log(error);
				}
			)
			.catch(err => console.error(err))

	})


	const moneyState = {
		title: 'Зарабатывайте </br> на&nbsp;своём контенте'
	}

	return (
		<>
			<Article article={articleState} />
			<Money moneyState={moneyState} />
		</>
	)
}
