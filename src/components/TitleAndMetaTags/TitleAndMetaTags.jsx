const defaultTitle = "VK AdBlogger — платформа для авторов и рекламодателей ВКонтакте";
const defaultDescription = "Реклама ВКонтакте в сообществах и у блогеров. Эффективная платформа для авторов контента и рекламодателей с удобным личным кабинетом. Больше 45 000 сообществ в каталоге.";
export default function TitleAndMetaTags({ title = defaultTitle, description = defaultDescription }) {
  return (
    <>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
    </>
  );
}