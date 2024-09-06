import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
	try {
		const stateStr = localStorage.getItem('state');
		return stateStr ? JSON.parse(stateStr) : undefined;
	} catch (e) {
		console.error(e);
		return undefined;
	}
};

const defaultState = {
	preloaderInit: false,
	registrationBtn: {
		text: 'Зарегистрироваться',
		link: '#registration'
	},
	pages: [
		{
			page_slug: 'for-authors',
			page_title: 'Авторам',
			blocks: [
				{
					block_slug: 'preloader',
					block_state: {}
				},
				{
					block_slug: 'entrance',
					block_state: {
						title: 'запускайте рекламу у&nbsp;блогеров',
						videoPath: '/video/video-1.mp4'
					}
				},
				{
					block_slug: 'advantages',
					block_state: {
						titleWhite: 'монетизируйте сообщество',
						titleBlue: 'от&nbsp;1&nbsp;000 подписчиков',
						items: [
							{
								numPrev: '19',
								numCurrent: '20',
								numAfter: '',
								numLabel: 'тыс.',
								desc: 'блогеров и&nbsp;сообществ уже с&nbsp;нами'
							},
							{
								numPrev: '99',
								numCurrent: '100',
								numAfter: '+',
								numLabel: '',
								desc: 'рекламодателей на&nbsp;платформе'
							},
							{
								numPrev: '499',
								numCurrent: '500',
								numAfter: '+',
								numLabel: '',
								desc: 'активных заявок от&nbsp;рекламодателей'
							},
							{
								numPrev: '5,4',
								numCurrent: '5,5',
								numAfter: '',
								numLabel: 'млрд ₽',
								desc: '<a href="/">заработали</a> авторы ВКонтакте в 2024 году'
							},
						]
					}
				},
				{
					block_slug: 'tile',
					block_state: {
						items: [
							{
								id: 1,
								title: 'Размещайте рекламу в клипах или постах',
								desc: 'Работайте в форматах, к которым привыкли ваши подписчики',
								imgList: [
									{
										desktop: '/img/tile/img1-1.png',
										mobile: ''
									},
									{
										desktop: '/img/tile/img1-2.png',
										mobile: '/img/tile/img1-2_mob.png'
									}
								],
							}, {
								id: 2,
								title: 'Выпускайте готовую рекламу или по брифу',
								desc: 'Размещайте готовые креативы от рекламодателя или создавайте посты в своём стиле',
								imgList: [
									{
										desktop: '/img/tile/img2-1.png',
										mobile: ''
									}
								],
							}, {
								id: 3,
								title: 'Занимайтесь творчеством, а не ОРД и бумагами',
								desc: 'Документооборот, маркировка и оплата рекламы — автоматические',
								imgList: [
									{
										desktop: '/img/tile/img3-1.png',
										mobile: ''
									},
									{
										desktop: '/img/tile/img3-2.png',
										mobile: ''
									},
									{
										desktop: '/img/tile/img3-2.png',
										mobile: ''
									}
								],
							}, {
								id: 4,
								title: 'Рекламируйте то, что интересно подписчикам',
								desc: 'Выбирайте, какие заявки принять, а какие — отклонить. Либо настройте автоматический постинг',
								imgList: [
									{
										desktop: '/img/tile/img4-1.png',
										mobile: ''
									},
									{
										desktop: '/img/tile/img4-2.png',
										mobile: ''
									}
								],
							}
						],
					}
				},
				{
					block_slug: 'channels',
					block_state: {
						title: 'уже подключились к VK AdBlogger',
						tags: [],
						channels: [
							{
								name: 'Катя Дима',
								photoPath: '/img/channels/img-1.png',
								desc: 'Семья блогеров <br /> и&nbsp;их&nbsp;лайфстайл',
								subscribers: '334K подписчиков',
								tags: ['Лайфстайл', 'Юмор']
							},
							{
								name: 'i_am_puma',
								photoPath: '/img/channels/img-2.png',
								desc: 'Самая дикая кошка ВКонтакте',
								subscribers: '205K подписчиков',
								tags: ['Лайфстайл']
							},
							{
								name: 'Всё <br /> о Minecraft',
								photoPath: '/img/channels/img-3.png',
								desc: 'Одно из первых сообществ о Майнкрафт',
								subscribers: '1M подписчиков',
								tags: ['Юмор']
							},
							{
								name: 'Лера <br /> Изумруд',
								photoPath: '/img/channels/img-4.png',
								desc: 'Блогер со вкусом к жизни',
								subscribers: '151K подписчиков',
								tags: ['Путешествия', 'Стиль']
							},
							{
								name: 'Мари <br /> Добро',
								photoPath: '/img/channels/img-5.png',
								desc: 'Та самая с классными клипами',
								subscribers: '470K подписчиков',
								tags: ['Фитнес', 'Стиль']
							},
							{
								name: 'Саша Белькович РЕЦЕПТЫ / ПРОСТО КУХНЯ',
								photoPath: '/img/channels/img-6.png',
								desc: 'Рецепты',
								subscribers: '1,1M подписчиков',
								tags: ['Рецепты']
							},
							{
								name: 'Bistrovi',
								photoPath: '/img/channels/img-7.png',
								desc: 'Юмор',
								subscribers: '501K подписчиков',
								tags: ['Юмор']
							},
							{
								name: 'Gudim.',
								photoPath: '/img/channels/img-8.png',
								desc: 'Юмор',
								subscribers: '261К подписчиков',
								tags: ['Юмор']
							},
							{
								name: 'Книга животных',
								photoPath: '/img/channels/img-9.png',
								desc: 'Животные',
								subscribers: '588К подписчиков',
								tags: ['Животные']
							},
							{
								name: 'я живу в россии и мне не страшно',
								photoPath: '/img/channels/img-10.png',
								desc: 'Russian vibes',
								subscribers: '1,1M подписчиков',
								tags: ['Путешествия']
							},
							{
								name: 'GOAL24 | ФУТБОЛ | ЛИГА ЧЕМПИОНОВ',
								photoPath: '/img/channels/img-11.png',
								desc: 'Футбол',
								subscribers: '498К подписчиков',
								tags: ['Футбол']
							},
							{
								name: 'Раздетый стилист Лена Червова',
								photoPath: '/img/channels/img-12.png',
								desc: 'Стилист',
								subscribers: '394К подписчиков',
								tags: ['Стиль']
							},
							{
								name: 'Люба Бич',
								photoPath: '/img/channels/img-13.png',
								desc: 'Лайфстайл',
								subscribers: '206К подписчиков',
								tags: ['Лайфстайл']
							},
						]
					}
				},
				{
					block_slug: 'partners',
					block_state: {
						title: 'заказывают рекламу у авторов',
						rowsCount: 4,
						imgList: [
							'/img/partners/img-1.png',
							'/img/partners/img-2.png',
							'/img/partners/img-3.png',
							'/img/partners/img-4.png',
							'/img/partners/img-5.png',
							'/img/partners/img-6.png',
							'/img/partners/img-7.png'
						]
					}
				},
				{
					block_slug: 'steps',
					block_state: {
						stepsList: [
							{
								title: 'Подключитесь',
								desc: 'Зарегистрируйтесь как автор, подключите своё сообщество и укажите реквизиты',
								imgPath: '/img/steps/img-1.png',
							},
							{
								title: 'Принимайте заявки',
								desc: 'Включайте монетизацию и получайте заявки от рекламодателей',
								imgPath: '/img/steps/img-2.png',
							},
							{
								title: 'Зарабатывайте',
								desc: 'Получайте деньги за рекламу и выводите их на свой счёт',
								imgPath: '/img/steps/img-3.png',
							},
						]
					}
				},
				{
					block_slug: 'case',
					block_state: {
						title: 'вдохновляйтесь кейсами',
						desc: 'Как крупные рекламодатели работают с авторами — узнайте в коротких статьях о топовых кейсах',
						cases: [
							{
								name: 'Отдых по-авторски',
								desc: 'Яндекс Путешествия. Как правильно вести блог и получать выгоду вовремя путешествий',
								iconPath: '/img/case/icon-1.svg',
								imgPath: '/img/case/img-1.png',
							},
							{
								name: 'Просмотры растут',
								desc: 'Кинопоиск: как сделать CPA дешевле в два раза и причём здесь лимитированные промокоды',
								iconPath: '/img/case/icon-2.svg',
								imgPath: '/img/case/img-2.png',
							},
							{
								name: 'Розыгрыш автомобиля Тинькофф',
								desc: 'Подпишись на мой канал, оформи любой продует в Тинькофф и у тебя будет шанс выиграть Tesla Model S',
								iconPath: '/img/case/icon-3.svg',
								imgPath: '/img/case/img-3.png',
							}
						]
					}
				},
				{
					block_slug: 'money',
					block_state: {
						title: 'Зарабатывайте </br> на&nbsp;своём контенте',
					}
				},
				{
					block_slug: 'faq',
					block_state: {
						faqList: [
							{
								question: 'Нужно ли мне решать юридические вопросы?',
								answer: 'Вы можете сосредоточиться на&nbsp;развитии сообщества и&nbsp;контенте. А&nbsp;маркировка рекламы, документооборот и&nbsp;процесс оплаты — автоматизированы.'
							},
							{
								question: 'Сколько я могу заработать?',
								answer: 'Вы можете сосредоточиться на&nbsp;развитии сообщества и&nbsp;контенте. А&nbsp;маркировка рекламы, документооборот и&nbsp;процесс оплаты — автоматизированы.'
							},
							{
								question: 'Как формируется цена за пост?',
								answer: 'Вы можете сосредоточиться на&nbsp;развитии сообщества и&nbsp;контенте. А&nbsp;маркировка рекламы, документооборот и&nbsp;процесс оплаты — автоматизированы.'
							},
							{
								question: 'Какая модель оплаты?',
								answer: 'Вы можете сосредоточиться на&nbsp;развитии сообщества и&nbsp;контенте. А&nbsp;маркировка рекламы, документооборот и&nbsp;процесс оплаты — автоматизированы.'
							},
							{
								question: 'Нужно ли мне маркировать рекламу?',
								answer: 'Вы можете сосредоточиться на&nbsp;развитии сообщества и&nbsp;контенте. А&nbsp;маркировка рекламы, документооборот и&nbsp;процесс оплаты — автоматизированы.'
							},
						]
					}
				},
			]
		},
		{
			page_slug: 'for-advertisers',
			page_title: 'Рекламодателям',
			blocks: [
				{
					block_slug: 'preloader',
					block_state: {}
				},
				{
					block_slug: 'entrance',
					block_state: {
						title: 'запускайте рекламу у&nbsp;блогеров',
						videoPath: '/video/video-1.mp4'
					}
				},
				{
					block_slug: 'advantages',
					block_state: {
						titleWhite: '',
						titleBlue: '',
						items: [
							{
								numPrev: '19',
								numCurrent: '20',
								numAfter: '',
								numLabel: 'тыс.',
								desc: 'блогеров </br> и сообществ'
							},
							{
								numPrev: '99',
								numCurrent: '100',
								numAfter: '+',
								numLabel: '',
								desc: 'рекламодателей </br> на платформе'
							},
							{
								numPrev: '499',
								numCurrent: '500',
								numAfter: '+',
								numLabel: '',
								desc: 'опубликованных рекламных интеграций'
							}
						]
					}
				},
				{
					block_slug: 'channels',
					block_state: {
						title: 'выбирайте авторов под ваши задачи',
						tags: [
							'Лайфстайл',
							'Юмор',
							'Путешествия',
							'Фитнес',
							'Стиль',
						],
						channels: [
							{
								name: 'Катя Дима',
								photoPath: '/img/channels/img-1.png',
								desc: 'Семья блогеров <br /> и&nbsp;их&nbsp;лайфстайл',
								subscribers: '334K подписчиков',
								tags: ['Лайфстайл', 'Юмор']
							},
							{
								name: 'i_am_puma',
								photoPath: '/img/channels/img-2.png',
								desc: 'Самая дикая кошка ВКонтакте',
								subscribers: '205K подписчиков',
								tags: ['Лайфстайл']
							},
							{
								name: 'Всё <br /> о Minecraft',
								photoPath: '/img/channels/img-3.png',
								desc: 'Одно из первых сообществ о Майнкрафт',
								subscribers: '1M подписчиков',
								tags: ['Юмор']
							},
							{
								name: 'Лера <br /> Изумруд',
								photoPath: '/img/channels/img-4.png',
								desc: 'Блогер со вкусом к жизни',
								subscribers: '151K подписчиков',
								tags: ['Путешествия', 'Стиль']
							},
							{
								name: 'Мари <br /> Добро',
								photoPath: '/img/channels/img-5.png',
								desc: 'Та самая с классными клипами',
								subscribers: '470K подписчиков',
								tags: ['Фитнес', 'Стиль']
							},
						]
					}
				},
				{
					block_slug: 'tile',
					block_state: {
						items: [
							{
								id: 5,
								title: 'Пользуйтесь каталогом авторов',
								desc: 'Подбирайте сообщества с вовлечённой аудиторией по фильтрам и подробной аналитике',
								imgList: [
									{
										desktop: '/img/tile/img5-1.png',
										mobile: ''
									}
								]
							}, {
								id: 1,
								title: 'Работайте в эффективных форматах',
								desc: 'Размещайте готовую рекламу в клипах и постах или отправляйте ТЗ авторам на создание креативов',
								imgList: [
									{
										desktop: '/img/tile/img1-1.png',
										mobile: ''
									},
									{
										desktop: '/img/tile/img1-2.png',
										mobile: '/img/tile/img1-2_mob.png'
									}
								]
							}, {
								id: 6,
								title: 'Оценивайте результаты рекламы',
								desc: 'Все рекламные посты можно разметить автоматически, чтобы лучше анализировать их эффективность',
								imgList: [
									{
										desktop: '/img/tile/img6-1.png',
										mobile: ''
									}
								]
							}, {
								id: 3,
								title: 'Экономьте рабочее время',
								desc: 'ОРД, документооборот и платежи — автоматизированы. Достаточно внести юридические данные',
								imgList: [
									{
										desktop: '/img/tile/img3-1.png',
										mobile: ''
									},
									{
										desktop: '/img/tile/img3-2.png',
										mobile: ''
									},
									{
										desktop: '/img/tile/img3-3.png',
										mobile: ''
									}
								]
							}
						],
					}
				},
				{
					block_slug: 'steps',
					block_state: {
						stepsList: [
							{
								title: 'Создайте кабинет',
								desc: 'Зарегистрируйтесь как рекламодатель или менеджер агентства',
								imgPath: '/img/steps/img-4.png',
							},
							{
								title: 'Выберите сообщества',
								desc: 'Добавьте креатив и оплатите посты у подходящих авторов',
								imgPath: '/img/steps/img-5.png',
							},
							{
								title: 'Отслеживайте выход рекламы',
								desc: 'Оценивайте эффективность вышедших постов',
								imgPath: '/img/steps/img-6.png',
							},
						]
					}
				},
				{
					block_slug: 'partners',
					block_state: {
						title: 'с нами уже работают',
						rowsCount: 4,
						imgList: [
							'/img/partners/img-1.png',
							'/img/partners/img-2.png',
							'/img/partners/img-3.png',
							'/img/partners/img-4.png',
							'/img/partners/img-5.png',
							'/img/partners/img-6.png',
							'/img/partners/img-7.png'
						]
					}
				},
				{
					block_slug: 'case',
					block_state: {
						title: 'топ-кейсы с&nbsp;блогерами',
						desc: 'Как авторы помогают бизнесу — узнайте в коротких статьях об успешных кейсах',
						cases: [
							{
								name: 'Отдых по-авторски',
								desc: 'Яндекс Путешествия. Как правильно вести блог и получать выгоду вовремя путешествий',
								iconPath: '/img/case/icon-1.svg',
								imgPath: '/img/case/img-1.png',
							},
							{
								name: 'Просмотры растут',
								desc: 'Кинопоиск: как сделать CPA дешевле в два раза и причём здесь лимитированные промокоды',
								iconPath: '/img/case/icon-2.svg',
								imgPath: '/img/case/img-2.png',
							},
							{
								name: 'Розыгрыш автомобиля Тинькофф',
								desc: 'Подпишись на мой канал, оформи любой продует в Тинькофф и у тебя будет шанс выиграть Tesla Model S',
								iconPath: '/img/case/icon-3.svg',
								imgPath: '/img/case/img-3.png',
							}
						]
					}
				},
				{
					block_slug: 'money',
					block_state: {
						title: 'Запускайте рекламу у&nbsp;блогеров и&nbsp;в&nbsp;сообществах ВКонтакте',
					}
				},
				{
					block_slug: 'faq',
					block_state: {
						faqList: [
							{
								question: 'Какая модель оплаты?',
								answer: 'На старте — фиксированная стоимость поста в сообществе, но позже добавятся и другие модели.'
							},
							{
								question: 'Какая комиссия у платформы? ',
								answer: 'На старте — фиксированная стоимость поста в сообществе, но позже добавятся и другие модели.'
							},
							{
								question: 'Смогу ли я найти на платформе сообщества, которые мне подходят? ',
								answer: 'На старте — фиксированная стоимость поста в сообществе, но позже добавятся и другие модели.'
							},
							{
								question: 'Есть ли отдельный рекламный кабинет для агентств? ',
								answer: 'На старте — фиксированная стоимость поста в сообществе, но позже добавятся и другие модели.'
							}
						]
					}
				},
			]
		},
	]
}


const toolkitSlice = createSlice({
	name: "toolkit",
	initialState: loadFromLocalStorage() && loadFromLocalStorage().toolkit ? loadFromLocalStorage().toolkit : defaultState,
	reducers: {
		setPreloaderInit(state, action) {
			state.preloaderInit = action.payload
		},
		setState(state, action) {
			state.pages = action.payload.pages
		}
	}
})

export default toolkitSlice.reducer
export const { setPreloaderInit, setState } = toolkitSlice.actions