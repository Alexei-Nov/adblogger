import { Helmet } from "react-helmet-async";

const defaultTitle = "VK AdBlogger — платформа для авторов и рекламодателей ВКонтакте"
const defaultDescription = "Реклама ВКонтакте в сообществах и у блогеров. Эффективная платформа для авторов контента и рекламодателей с удобным личным кабинетом. Больше 45 000 сообществ в каталоге."

export default function TitleAndMetaTags({ title = defaultTitle, description = defaultDescription }) {
    const canonicalUrl = window.location.origin + window.location.pathname

    return (
        <Helmet title={title}>
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <link rel="canonical" href={canonicalUrl} />
            <meta
                property="og:description"
                content={description}
            />
        </Helmet>
    )
}
