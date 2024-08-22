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

export default function ForAdvertisers() {

	const entranceState = {
		titleWhite: 'запускайте рекламу',
		titleBlue: 'у&nbsp;блогеров',
		imgPath: '/img/entrance/img-2.png'
	}
	const advantagesState = {
		titleWhite: '',
		titleBlue: '',
		items: [
			{
				numPrev: '31',
				numCurrent: '32',
				numAfter: '',
				numLabel: 'тыс.',
				desc: 'рекламодателей </br> на&nbsp;платформе'
			},
			{
				numPrev: '499',
				numCurrent: '500',
				numAfter: '+',
				numLabel: '',
				desc: 'блогеров </br> и&nbsp;сообществ'
			},
			{
				numPrev: '99',
				numCurrent: '100',
				numAfter: '+',
				numLabel: '',
				desc: 'опубликованных рекламных интеграций'
			}
		]
	}
	const channelsState = {
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
	const tileState = {
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
				desc: 'ОРД, документооборот и платежи — автоматизированы. Достаточно внести юридические данные.',
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
		btnText: 'Зарегистрироваться'
	}
	const stepsState = [
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
	const partnersState = {
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
	const caseState = {
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
	const moneyState = {
		title: 'Запускайте рекламу у&nbsp;блогеров и&nbsp;в&nbsp;сообществах ВКонтакте',
		btnText: 'Зарегистрироваться'
	}
	const faqState = [
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

	return (
		<>
			<Entrance entranceState={entranceState} />
			<Advantages advantagesState={advantagesState} />
			<Channels channelsState={channelsState} />
			<Tile tileState={tileState} />
			<Steps stepsState={stepsState} />
			<Partners partnersState={partnersState} />
			<Case caseState={caseState} />
			<Money moneyState={moneyState} />
			<Faq faqState={faqState} />
		</>
	)
}
