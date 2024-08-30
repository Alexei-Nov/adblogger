import React from 'react'
import Entrance from '../components/Entrance/Entrance'
import Advantages from '../components/Advantages/Advantages'
import Tile from '../components/Tile/Tile'
import Channels from '../components/Channels/Channels'
import Partners from '../components/Partners/Partners'
import Steps from '../components/Steps/Steps'
import Case from '../components/Case/Case'
import Money from '../components/Money/Money'
import Faq from '../components/Faq/Faq'
import Preloader from '../components/Preloader/Preloader'

export default function ForAuthors() {

	const entranceState = {
		title: 'зарабатывайте на&nbsp;своём контенте',
		videoPath: '/video/video-1.mp4'
	}
	const advantagesState = {
		titleWhite: 'монетизируйте сообщество',
		titleBlue: 'от&nbsp;1&nbsp;000 подписчиков',
		items: [
			{
				numPrev: '6',
				numCurrent: '7',
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
				numPrev: '299',
				numCurrent: '300',
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
	const channelsState = {
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
		]
	}
	const tileState = {
		items: [
			{
				id: 1,
				title: 'Размещайте рекламу в клипах или постах',
				desc: 'Работайте в форматах,к которым привыкли ваши подписчики',
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
				desc: 'Документооборот, маркировка и оплата рекламы — автоматические.',
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
				desc: 'Выбирайте, какие заявки принять, а какие — отклонить. Либо настройте автоматический постинг.',
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
		btnText: 'Зарегестрироваться'
	}
	const partnersState = {
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
	const stepsState = [
		{
			title: 'Подключитесь',
			desc: 'Зарегистрируйтесь как автор, подключите своё сообщество и укажите реквизиты',
			imgPath: '/img/steps/img-1.png',
		},
		{
			title: 'Принимайте заявки',
			desc: 'Укажите свободные слоты для размещения и получайте заявки от рекламодателей',
			imgPath: '/img/steps/img-2.png',
		},
		{
			title: 'Зарабатывайте',
			desc: 'Получайте деньги за рекламу и выводите их на свой счёт',
			imgPath: '/img/steps/img-3.png',
		},
	]
	const caseState = {
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
	const moneyState = {
		title: 'Зарабатывайте </br> на&nbsp;своём контенте',
		btnText: 'Зарегестрироваться'
	}
	const faqState = [
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

	return (
		<>
			<Preloader />
			<Entrance entranceState={entranceState} />
			<Advantages advantagesState={advantagesState} />
			<Tile tileState={tileState} />
			<Channels channelsState={channelsState} />
			<Partners partnersState={partnersState} />
			<Steps stepsState={stepsState} />
			<Case caseState={caseState} />
			<Money moneyState={moneyState} />
			<Faq faqState={faqState} />
		</>
	)
}
