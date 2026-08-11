import React, { useEffect } from 'react'
import Money from '../components/Money/Money'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TitleAndMetaTags from '../components/TitleAndMetaTags/TitleAndMetaTags';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import BlogArticle from 'components/BlogArticle/BlogArticle';

export default function BlogDetail() {
	const { slug } = useParams();
	const articleState = useSelector(state => state.toolkit.blog).filter((blogItem) => blogItem.slug == slug)[0]
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!articleState) {
			fetch("/data/blog/" + slug + ".json")
				.then((res) => res.json())
				.then((data) => {
					// dispatch(setCase(data))
				})
				.catch((err) => {
					console.log(err.message);
					navigate("/404", { replace: true });
				});
		}
	}, []);

	const moneyState = {
		title: 'пора пробовать — и&nbsp;получать деньги',
		has_border: 'true',
		btn_text: "начать зарабатывать",
		btn_link: "/app"
	}

	const breadcrumbsState = [
		{
			title: 'Рекламодателям',
			link: "/for-advertisers"
		},
		{
			title: 'Полезные материалы',
			link: "/for-advertisers"
		},
		{
			title: articleState && articleState?.title,
			link: "/" + articleState && articleState?.slug
		},
	]

	return (
		<>
			<TitleAndMetaTags
				{...(articleState && articleState.seo_title ? { title: articleState.seo_title } : {})}
				{...(articleState && articleState.seo_desc ? { description: articleState.seo_desc } : {})}
			/>
			<Breadcrumbs breadcrumbsState={breadcrumbsState} />
			<BlogArticle article={articleState} />
			<Money block_state={moneyState} />
		</>
	)
}
