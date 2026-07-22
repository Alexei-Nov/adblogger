import React, { useEffect } from 'react'
import Money from '../components/Money/Money'
import { useNavigate, useParams } from 'react-router-dom';
import Article from '../components/Article/Article';
import { useDispatch, useSelector } from 'react-redux';
import TitleAndMetaTags from '../components/TitleAndMetaTags/TitleAndMetaTags';
import { setCase } from 'toolkitRedux/toolkitSlice';

export default function DetailCase() {
	const { slug } = useParams();
	const articleState = useSelector(state => state.toolkit.cases).filter((caseItem) => caseItem.slug == slug)[0]
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!articleState) {
			fetch("/data/cases/" + slug + ".json")
				.then((res) => res.json())
				.then((data) => {
					dispatch(setCase(data))
				})
				.catch((err) => {
					console.log(err.message);
					navigate("/404", { replace: true });
				});
		}
	}, []);

	const moneyState = {
		title: 'Запускайте рекламу у&nbsp;блогеров и&nbsp;в&nbsp;сообществах ВКонтакте',
		has_border: 'true',
		btn_text: "Перейти в кабинет",
		btn_link: "/app"
	}

	if (articleState && articleState.slug == 'case-for-authors') {
		moneyState.title = 'Зарабатывайте <br> на&nbsp;своём контенте'
	}

	return (
		<>
			<TitleAndMetaTags
				{...(articleState && articleState.seo_title ? { title: articleState.seo_title } : {})}
				{...(articleState && articleState.seo_desc ? { description: articleState.seo_desc } : {})}
			/>
			<Article article={articleState} />
			<Money block_state={moneyState} />
		</>
	)
}