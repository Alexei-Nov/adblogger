import React, { useEffect } from 'react'
import Money from '../components/Money/Money'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TitleAndMetaTags from '../components/TitleAndMetaTags/TitleAndMetaTags';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import BlogArticle from 'components/BlogArticle/BlogArticle';
import Faq from 'components/Faq/Faq';

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
			link: "/blog"
		},
		{
			title: articleState && articleState?.title,
			link: "/" + articleState && articleState?.slug
		},
	]

	const faq_state = {
		"faqList": [
			{
				"question": "Нужно&nbsp;ли маркировать рекламу у&nbsp;блогеров?",
				"answer": "Да. Нужно. Ответственность за&nbsp;отсутствие маркировки несут и&nbsp;рекламодатель, и&nbsp;автор. При размещении через VK&nbsp;AdBlogger реклама маркируется автоматически."
			},
			{
				"question": "Как юридически оформить сотрудничество с&nbsp;блогером?",
				"answer": "Письменно&nbsp;&mdash; договором оказания услуг или через оферту платформы. В&nbsp;документах фиксируют формат, сроки, стоимость и&nbsp;требования к&nbsp;публикации. При работе через платформу документы оформляются в&nbsp;одном окне."
			},
			{
				"question": "Какие товары нельзя рекламировать у&nbsp;блогеров?",
				"answer": "Действуют те&nbsp;же ограничения, что и&nbsp;для любой другой рекламы: категории, запрещённые или ограниченные законом &laquo;О&nbsp;рекламе&raquo;. Дополнительные требования к&nbsp;рекламному контенту устанавливают правила площадки&nbsp;&mdash; перед запуском проверьте, не&nbsp;попадает&nbsp;ли продукт под ограничения."
			},
			{
				"question": "Что делать, если блогер сорвал сроки или изменил формат?",
				"answer": "Опираться на&nbsp;зафиксированные договорённости: чем конкретнее прописаны даты, формат и&nbsp;критерии выполненного размещения, тем проще требовать доработки или возврата. При работе через платформу параметры сделки сохраняются в&nbsp;сервисе&nbsp;&mdash; к&nbsp;ним можно апеллировать в&nbsp;спорной ситуации."
			}
		]
	}

	return (
		<>
			<TitleAndMetaTags
				{...(articleState && articleState.seo_title ? { title: articleState.seo_title } : {})}
				{...(articleState && articleState.seo_desc ? { description: articleState.seo_desc } : {})}
			/>
			<Breadcrumbs breadcrumbsState={breadcrumbsState} />
			<BlogArticle article={articleState} />
			<Money block_state={moneyState} />
			<Faq block_state={faq_state} />
		</>
	)
}
