import { Helmet } from "react-helmet-async";

const defaultTitle = "VK AdBlogger — платформа для авторов и рекламодателей ВКонтакте"
const defaultDescription = "Реклама ВКонтакте в сообществах и у блогеров. Эффективная платформа для авторов контента и рекламодателей с удобным личным кабинетом. Больше 45 000 сообществ в каталоге."

export default function TitleAndMetaTags({ title = defaultTitle, description = defaultDescription }) {
	const canonicalUrl = window.location.origin + window.location.pathname

	return (
		<Helmet title={title}>
			<meta name="og:title" content={title} />
			<meta name="og:type" content="website" />
			<meta name="og:url" content={canonicalUrl} />
			<link rel="canonical" href={canonicalUrl} />
			<meta name="og:description" content={description} />
			<meta name="description" content={description} />
		</Helmet>
	)
}
