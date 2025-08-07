import React from 'react'
import Money from '../components/Money/Money'
import { useParams } from 'react-router-dom';
import Article from '../components/Article/Article';
import { useSelector } from 'react-redux';
import TitleAndMetaTags from '../components/TitleAndMetaTags/TitleAndMetaTags';

export default function DetailCase() {
	const { slug } = useParams();
	const cases = useSelector(state => state.toolkit.cases)
	const articleState = cases.filter((caseItem) => caseItem.slug == slug)[0]


	const moneyState = {
		title: 'Запускайте рекламу у&nbsp;блогеров и&nbsp;в&nbsp;сообществах ВКонтакте',
		has_border: 'true',
	}

	if (articleState.slug == 'case-for-authors') {
		moneyState.title = 'Зарабатывайте <br> на&nbsp;своём контенте'
	}

	return (
		<>
			<TitleAndMetaTags
				{...(articleState.seo_title ? { title: articleState.seo_title } : {})}
				{...(articleState.seo_desc ? { description: articleState.seo_desc } : {})}
			/>
			<Article article={articleState} />
			<Money block_state={moneyState} />
		</>
	)
}