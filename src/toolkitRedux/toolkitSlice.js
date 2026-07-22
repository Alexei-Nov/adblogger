import { createSlice } from "@reduxjs/toolkit";

// const loadFromLocalStorage = () => {
// 	try {
// 		const stateStr = localStorage.getItem('state');
// 		return stateStr ? JSON.parse(stateStr) : undefined;
// 	} catch (e) {
// 		console.error(e);
// 		return undefined;
// 	}
// };

const defaultState = {
	preloaderInit: false,
	registrationBtn: {
		text: 'Перейти в кабинет',
		link: '/app'
	},
	footer: {
		title: 'О компании',
		desc: 'VK AdBlogger — платформа для&nbsp;сотрудничества авторов и&nbsp;рекламодателей, на&nbsp;которой можно продавать рекламу в&nbsp;сообществах ВКонтакте ',
		nav: [],
	},
	pages: [
		{
			"page_slug": "shops-chart",
			"page_title": "Шопс-чарты",
			"blocks": [
				{
					"block_slug": "preloader",
					"block_state": {}
				},
				{
					"block_slug": "iframe",
					"block_state": {
						"src": "https://adbloggers-landing.ktsprod.ru/",
					}
				},
			]
		},
	],
	cases: [
		// {
		// 	"slug": "case-for-authors",
		// 	"title": "Как авторы ВКонтакте <br> за&nbsp;месяц увеличили заработок на&nbsp;6,5&nbsp;млн&nbsp;рублей за&nbsp;счёт&nbsp;нативного контента",
		// 	"seo_title": "Кейс для авторов в VK AdBlogger",
		// 	"seo_desc": "Нативный контент — это когда реклама больше похожа на дружеский совет, искреннюю рекомендацию или живой отзыв блогера, которому доверяют и прислушиваются.",
		// 	"desc": "Нативно и&nbsp;креативно",
		// 	"preview_img": "/img/case/img-10.png",
		// 	"preview_img_main": "/img/case/img-10.png",
		// 	"preview_img_small": "/img/case/img-10.png",
		// 	"preview_img_vertical": "/img/case/img-10.png",
		// 	"logo": "/img/case/icon-10.svg",
		// 	"card_label": "",
		// 	"brand_name": "",
		// 	"tags": [
		// 		{
		// 			"created_at": "2024-10-17T01:58:12.000000Z",
		// 			"id": 2,
		// 			"laravel_through_key": 4,
		// 			"slug": "for-authors",
		// 			"title": "Авторам",
		// 			"updated_at": "2024-10-17T01:58:12.000000Z"
		// 		}
		// 	],
		// 	"blocks": [
		// 		{
		// 			"block_type": "text",
		// 			"title": "",
		// 			"text": "<p>Нативный контент — это реклама, которая больше похожа на дружеский совет, искреннюю рекомендацию или живой отзыв блогера, которому доверяют и прислушиваются. Именно такие публикации не раздражают пользователей и гармонично вписываются в ленту, вызывая настоящий интерес и желание узнать больше.</p> <p>В нашей недавней кампании мы убедились в этом не просто на словах, а на цифрах: </p>"
		// 		},
		// 		{
		// 			"block_type": "gallery",
		// 			"images": [
		// 				"/img/case/article-10-6.png"
		// 			]
		// 		},
		// 		{
		// 			"block_type": "text",
		// 			"title": "",
		// 			"text": "<p>И это неудивительно, ведь такой формат вызывает гораздо меньше негатива у аудитории, потому что вы сами выбираете рекламируемый товар или услугу, идеально соответствующую тематике вашего блога и интересам ваших читателей.</p> <p>Весной 2025 года авторы небольших и крупных сообществ приняли участие в рекламной кампании на платформе VK AdBlogger. В рамках тестирования нового инструмента монетизации контента авторы выбирали товары Ozon для рекламы и создавали с ними нативные публикации, прикрепляя ссылку на покупку. Так авторы получили дополнительный заработок, а рекламодатель — более 12 млн просмотров рекламного контента за период.</p>"
		// 		},
		// 		{
		// 			"block_type": "gallery",
		// 			"images": [
		// 				"/img/case/article-10-1.png"
		// 			]
		// 		},
		// 		{
		// 			"block_type": "text",
		// 			"title": "",
		// 			"text": "<h2>Как это работает</h2><p>Авторам была предложена подборка товаров, из которых они могли выбрать один по желанию. Далее авторы заказывали выбранный продукт на Ozon — оплачивали покупку с помощью промокода. Чаще всего авторы выбирали протеиновое печенье — его нужно было показать на камеру в упаковке и без, показать начинку. В подборке также были товары из категорий «Бьюти», «Фэшн», «Дом»,«Семья и дети», «Хобби», «Спорт».</p>"
		// 		},

		// 		{
		// 			"block_type": "text",
		// 			"title": "",
		// 			"text": "<h2>Примеры клипов с нативной рекламой:</h2>"
		// 		},
		// 		{
		// 			"block_type": "clips",
		// 			"videos": [
		// 				"/video/clips/article-10-1.mp4",
		// 				"/video/clips/article-10-2.mp4",
		// 			]
		// 		},
		// 		{
		// 			"block_type": "text",
		// 			"title": "",
		// 			"text": "<p>Платформа автоматически маркирует публикацию — можно быть спокойным за соблюдение закона о рекламе и быть защищённым от штрафов.</p>"
		// 		},
		// 		{
		// 			"block_type": "text",
		// 			"title": "",
		// 			"text": "<h2>Заказы не только у «миллионников»</h2><p>Чтобы создавать рекламный контент и зарабатывать на нем, необязательно иметь миллионную аудиторию. Рекламировать товары Ozon смогли как крупные авторы, так и авторы небольших сообществ. Из 1 568 сообществ, принявших участие в рекламной кампании, 1 206 насчитывают менее 50 тыс. подписчиков.</p>"
		// 		},
		// 		{
		// 			"block_type": "gallery",
		// 			"images": [
		// 				"/img/case/article-10-3.png"
		// 			]
		// 		},
		// 		{
		// 			"block_type": "text",
		// 			"title": "",
		// 			"text": "<h2>Сколько заработали авторы</h2><p>За месяц рекламной кампании 1568 авторов за публикацию одного поста или клипа в сумме заработали более 6,5 млн рублей:</p>"
		// 		},
		// 		{
		// 			"block_type": "gallery",
		// 			"images": [
		// 				"/img/case/article-10-4.png"
		// 			]
		// 		},
		// 		{
		// 			"block_type": "text",
		// 			"title": "",
		// 			"text": "<h2>Топ-5 категорий сообществ, выставивших максимальные цены за рекламу:</h2>"
		// 		},
		// 		{
		// 			"block_type": "gallery",
		// 			"images": [
		// 				"/img/case/article-10-5.png"
		// 			]
		// 		},
		// 		{
		// 			"block_type": "text",
		// 			"title": "",
		// 			"text": "<p>Если вы пишете атмосферные посты, снимаете яркие клипы или делитесь полезными лайфхаками — вы уже готовы к сотрудничеству с крупными брендами! Начните монетизировать свой талант и контент вместе с платформой VK AdBlogger уже сегодня.</p>"
		// 		},
		// 	]
		// },
	]
}


const toolkitSlice = createSlice({
	name: "toolkit",
	initialState: defaultState,
	reducers: {
		setPreloaderInit(state, action) {
			state.preloaderInit = action.payload
		},
		setPages(state, action) {
			state.pages = [...state.pages, action.payload]
		},
		setCases(state, action) {
			state.cases = action.payload
		},
		setCase(state, action) {
			state.cases = [...state.cases, action.payload]
		},
		setFooterNav(state, action) {
			state.footer.nav = action.payload
		},
	}
})

export default toolkitSlice.reducer
export const { setPreloaderInit, setPages, setCase, setCases, setFooterNav } = toolkitSlice.actions