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
		desc: 'VK AdBlogger — платформа для&nbsp;сотрудничества авторов и&nbsp;рекламодателей, на&nbsp;которой можно продавать рекламу в&nbsp;сообществах ВКонтакте '
	},
	pages: [
		{
			"page_slug": "for-authors",
			"page_title": "Авторам",
			"blocks": [
				{
					"block_slug": "preloader",
					"block_state": {}
				},
				// {
				// 	"block_slug": "entrance",
				// 	"block_state": {
				// 		"title": "<span class='tt-lc'>Зарабатывайте</span> на&nbsp;своём контенте",
				// 		"videoPath": "/video/video-2.mp4"
				// 	}
				// },



				{
					"block_slug": "tabs_block",
					"block_state": {
						"title": "зарабатывайте <br> на своём контенте",
						"tabs": [
							{
								"tab_name": "Шопсы",
								"title": "Больше <span style='color:#00D3E6;'>шопсов</span>&nbsp;— больше <span style='color:#00D3E6;'>денег</span>: зарабатывайте ВКонтакте на&nbsp;рекламе товаров ",
								"desc": "<p><span style='color:#00D3E6;'>Шопсы</span>&nbsp;&mdash; новый формат рекламного контента ВКонтакте: посты и&nbsp;клипы, в&nbsp;которых есть ссылка на&nbsp;товар</p> <p>Зарабатывайте на&nbsp;продажах до&nbsp;50% от&nbsp;стоимости товара</p>",
								"btn_text": "Узнать больше",
								"btn_link": "/shops",
								"img": "/img/tabs-block/img-1.png",
								"img_mob": "/img/tabs-block/img-1_mob.png",
							},
							{
								"tab_name": "Посевы",
								"title": "Зарабатывайте <br> на&nbsp;готовом контенте&nbsp;— <br> <span style='color:#00D3E6;'>посевах</span> от&nbsp;рекламодателей",
								"desc": "<p>Размещайте полностью оформленные посты от&nbsp;рекламодателей. Всё что вам нужно сделать&nbsp;— установить цену</p><p>Принимайте заявки вручную или&nbsp;настройте автопостинг, чтобы они сразу шли &nbsp;работу</p>",
								"btn_text": "Начать зарабатывать",
								"btn_link": "/app",
								"img": "/img/tabs-block/img-2.png",
								"img_mob": "/img/tabs-block/img-2_mob.png",
							},
							{
								"tab_name": "Контент на заказ",
								"title": "<span style='color:#00D3E6;'>Контент на&nbsp;заказ</span>&nbsp;— реклама, которую вы создаёте <br> в&nbsp;своём стиле",
								"desc": "<p>От заказчика&nbsp;— бриф, с вас&nbsp;— классный креатив</p><p>А&nbsp;документооборот, маркировка рекламы и&nbsp;другие заботы остаются на&nbsp;нас</p>",
								"btn_text": "Начать зарабатывать",
								"btn_link": "/app",
								"img": "/img/tabs-block/img-3.png",
								"img_mob": "/img/tabs-block/img-3_mob.png",
							}
						]
					}
				},
				{
					"block_slug": "tile",
					"block_state": {
						"title": "зарабатывайте с&nbsp;VK&nbsp;AdBlogger",
						"btn_text": "Начать зарабатывать",
						"btn_link": "/app",
						"items": [
							{
								"id": 7,
								"title": "Выбирайте, какой контент публиковать",
								"desc": "Размещайте авторский контент или&nbsp;готовые публикации от&nbsp;заказчиков ",
								"imgList": [
									{
										"desktop": "/img/tile/img7-2.png",
										"mobile": ""
									},
									{
										"desktop": "/img/tile/img7-1.png",
										"mobile": "/img/tile/img7-1_mob.png"
									}

								]
							},
							{
								"id": 8,
								"title": "Не думайте о&nbsp;маркировке и&nbsp;документах",
								"desc": "Всё автоматизировано&nbsp;— вы сможете <br class='br-desktop'>уделять больше времени творчеству ",
								"imgList": [
									{
										"desktop": "/img/tile/img8-1.png",
										"mobile": "/img/tile/img8-1_mob.png"
									}
								]
							},
							{
								"id": 9,
								"title": "Решайте сами, какую рекламу размещать ",
								"desc": "Или настройте автоматический постинг, чтобы&nbsp;публиковать все заявки",
								"imgList": [
									{
										"desktop": "/img/tile/img9-1.png",
										"mobile": "/img/tile/img9-1_mob.png"
									}
								]
							}
						]
					}
				},
				// {
				// 	"block_slug": "advantages",
				// 	"block_state": {
				// 		"titleWhite": "<span class='tt-lc'>Монетизируйте</span> сообщество",
				// 		"titleBlue": "от&nbsp;1&nbsp;000 подписчиков",
				// 		"items": [
				// 			{
				// 				"numPrev": "59",
				// 				"numCurrent": "60",
				// 				"numAfter": "",
				// 				"numLabel": "тыс.",
				// 				"desc": "блогеров и&nbsp;сообществ <br> уже с&nbsp;нами"
				// 			},
				// 			{
				// 				"numPrev": "9999",
				// 				"numCurrent": "10000",
				// 				"numAfter": "+",
				// 				"numLabel": "",
				// 				"desc": "рекламных <br> интеграций в&nbsp;неделю"
				// 			},
				// 			{
				// 				"numPrev": "7,0",
				// 				"numCurrent": "7,1  ",
				// 				"numAfter": "",
				// 				"numLabel": "млрд ₽",
				// 				"desc": "<a href='https://vk.com/press/content-2024' target='_blank'>заработали</a> авторы <br> ВКонтакте в&nbsp;2024 году"
				// 			}
				// 		]
				// 	}
				// },
				{
					"block_slug": "steps",
					"block_state": {
						"title": "3 шага до первой прибыли",
						"stepsList": [
							{
								"title": "Зарегистрируйтесь как&nbsp;автор",
								"desc": "Подключите своё сообщество и&nbsp;укажите реквизиты",
								"imgPath": "/img/steps/img-1.png",
								"btn_text": "",
								"btn_link": ""
							},
							{
								"title": "Рекламируйте товары",
								"desc": "Снимайте контент с&nbsp;товарами, которые выбрали сами, или&nbsp;получайте заявки от&nbsp;рекламодателей",
								"imgPath": "/img/steps/img-2.png",
								"btn_text": "",
								"btn_link": ""
							},
							{
								"title": "Начинайте зарабатывать",
								"desc": "Получайте деньги за&nbsp;рекламу и&nbsp;выводите их на&nbsp;свой счёт",
								"imgPath": "/img/steps/img-3.png",
								"btn_text": "Перейти в кабинет",
								"btn_link": "/app"
							}
						]
					}
				},
				{
					"block_slug": "channels",
					"block_state": {
						"title": "<span class='tt-lc'>65&nbsp;000</span> сообществ уже подключились",
						"tags": [],
						"channels": [
							{
								"name": "Саша Белькович РЕЦЕПТЫ / ПРОСТО КУХНЯ",
								"photoPath": "/img/channels/img-6.png",
								"desc": "Рецепты",
								"subscribers": "1,2M подписчиков",
								"tags": [
									"Рецепты"
								]
							},
							{
								"name": "Bistrovi",
								"photoPath": "/img/channels/img-7.png",
								"desc": "Юмор",
								"subscribers": "642K подписчиков",
								"tags": [
									"Юмор"
								]
							},
							{
								"name": "Gudim.",
								"photoPath": "/img/channels/img-8.png",
								"desc": "Юмор",
								"subscribers": "307К подписчиков",
								"tags": [
									"Юмор"
								]
							},
							// {
							// 	"name": "Книга животных",
							// 	"photoPath": "/img/channels/img-9.png",
							// 	"desc": "Животные",
							// 	"subscribers": "588К подписчиков",
							// 	"tags": [
							// 		"Животные"
							// 	]
							// },
							{
								"name": "я живу в россии и мне не страшно",
								"photoPath": "/img/channels/img-10.png",
								"desc": "Russian vibes",
								"subscribers": "995К подписчиков",
								"tags": [
									"Путешествия"
								]
							},
							{
								"name": "GOAL24 | ФУТБОЛ | ЛИГА ЧЕМПИОНОВ",
								"photoPath": "/img/channels/img-11.png",
								"desc": "Футбол",
								"subscribers": "489К подписчиков",
								"tags": [
									"Футбол"
								]
							},
							{
								"name": "Раздетый стилист Лена Червова",
								"photoPath": "/img/channels/img-12.png",
								"desc": "Стилист",
								"subscribers": "533К подписчиков",
								"tags": [
									"Стиль"
								]
							},
							{
								"name": "Люба Бич",
								"photoPath": "/img/channels/img-13.png",
								"desc": "Лайфстайл",
								"subscribers": "263К подписчиков",
								"tags": [
									"Лайфстайл"
								]
							}
						]
					}
				},
				// {
				// 	"block_slug": "partners",
				// 	"block_state": {
				// 		"title": "<span class='tt-lc'>Заказывают</span> рекламу у авторов",
				// 		"rowsCount": 4,
				// 		"imgList": [
				// 			"/img/partners/img-1.png",
				// 			"/img/partners/img-2.png",
				// 			"/img/partners/img-3.png",
				// 			"/img/partners/img-4.png",
				// 			"/img/partners/img-5.png",
				// 			"/img/partners/img-6.png",
				// 			"/img/partners/img-7.png",
				// 			"/img/partners/img-8.png",
				// 			"/img/partners/img-9.png",
				// 			"/img/partners/img-10.png",
				// 			"/img/partners/img-11.png",
				// 			"/img/partners/img-12.png"
				// 		]
				// 	}
				// },

				{
					"block_slug": "case",
					"block_state": {
						"title": "большой бизнес тоже делает это",
						"desc": "Узнайте, как крупные рекламодатели работают с&nbsp;авторами "
					}
				},
				{
					"block_slug": "money",
					"block_state": {
						"title": "не стоит откладывать, пора...",
						"has_border": "true",
						"btn_text": "начать зарабатывать",
						"btn_link": "/app"
					}
				},
				{
					"block_slug": "faq",
					"block_state": {
						"faqList": [
							{
								"question": "Кто может монетизировать сообщества в&nbsp;VK&nbsp;AdBlogger?",
								"answer": "Важно: монетизировать сообщество в&nbsp;VK&nbsp;AdBlogger могут только самозанятые, ИП и&nbsp;юридические лица с&nbsp;российским ИНН, являющиеся налоговыми резидентами Российской Федерации.<br><br>Это&nbsp;связано с&nbsp;отчётностью: физические лица не&nbsp;могут принимать заявки рекламодателей и&nbsp;выводить доход без&nbsp;регистрации в&nbsp;ФНС. Если&nbsp;вы физическое лицо и&nbsp;хотите подключить сообщество к&nbsp;VK&nbsp;AdBlogger, зарегистрируйтесь как&nbsp;самозанятый в&nbsp;приложении «Мой&nbsp;налог»: <a href='https://npd.nalog.ru' target='_blank'>https://npd.nalog.ru</a>.<br><br><b>Можно&nbsp;ли одновременно работать по&nbsp;трудовому договору и&nbsp;быть самозанятым?</b><br>Да, можно. Законодательство не&nbsp;запрещает одновременно быть самозанятым и&nbsp;работать по&nbsp;трудовому договору."
							},
							{
								"question": "Как&nbsp;добавить реквизиты?",
								"answer": "<p>Если у&nbsp;вас уже&nbsp;указаны реквизиты в&nbsp;Кабинете выплат ВКонтакте, то&nbsp;при&nbsp;регистрации личного кабинета в&nbsp;VK&nbsp;AdBlogger можно в&nbsp;один клик выбрать уже&nbsp;заполненные реквизиты.</p> <p>Если у&nbsp;вас нет профиля в&nbsp;Кабинете выплат ВКонтакте, нужно будет указать юридические и&nbsp;финансовые реквизиты в&nbsp;VK&nbsp;AdBlogger. Поля для&nbsp;заполнения будут отличаться у&nbsp;пользователей с&nbsp;разными типами предпринимательской деятельности (ООО, ИП, самозанятость).</p> <p>Когда реквизиты заполнены и&nbsp;проверены, можно добавить сообщества и&nbsp;получать предложения от&nbsp;рекламодателей. Заполненные данные будут отображаться во&nbsp;вкладке «Реквизиты».</p>"
							},
							{
								"question": "Есть&nbsp;ли особые требования к&nbsp;сообществам?",
								"answer": "Чтобы&nbsp;подключить сообщество к&nbsp;VK&nbsp;AdBlogger, оно должно соответствовать этим&nbsp;требованиям:<ul><li>сообщество должно быть открытым;</li><li>у&nbsp;него должно быть больше 1000&nbsp;подписчиков;</li><li>на&nbsp;странице сообщества была хотя&nbsp;бы одна запись за&nbsp;последние 30&nbsp;дней.</li></ul>"
							},
							{
								"question": "Кто назначает цену рекламы?",
								"answer": "Автор сам устанавливает стоимость рекламы в&nbsp;своём сообществе. Он указывает стоимость авторского поста или&nbsp;клипа&nbsp;— то&nbsp;есть контента, который он создаёт самостоятельно по&nbsp;ТЗ рекламодателя.<br><br>А&nbsp;также устанавливает стоимость посева&nbsp;— публикации готового поста рекламодателя."
							},
							{
								"question": "Какую цену поставить?",
								"answer": "Выберите оптимальную для&nbsp;вас стоимость рекламного поста в&nbsp;сообществе, лучше не&nbsp;завышать её&nbsp;— это&nbsp;может снизить число заявок от&nbsp;рекламодателей.<br><br>Если&nbsp;у&nbsp;вас уже есть кабинет на&nbsp;Маркет-платформе, то&nbsp;лучше выставить аналогичную цену в&nbsp;VK&nbsp;AdBlogger."
							},
							{
								"question": "Какая комиссия у&nbsp;VK&nbsp;AdBlogger?",
								"answer": "Автор не&nbsp;платит комиссию. За&nbsp;размещение одной рекламной записи вы будете получать ровно ту&nbsp;сумму, которую указали в&nbsp;VK&nbsp;AdBlogger. Комиссия платформы и&nbsp;НДС будут оплачиваться рекламодателем."
							},
							{
								"question": "Чем посевы отличаются от&nbsp;заказа контента?",
								"answer": "Авторы видят все заявки от&nbsp;рекламодателей прямо в&nbsp;разделах «Посевы» и&nbsp;«Контент на&nbsp;заказ».<br><br>В&nbsp;разделе «Посевы» авторы увидят заявки с&nbsp;готовым контентом от&nbsp;рекламодателя: текстовый пост с&nbsp;картинкой или&nbsp;видео. В&nbsp;этом случае автор может принять пост и&nbsp;запланировать его публикацию либо&nbsp;отклонить его.<br><br>Есть две опции постинга посевов в&nbsp;сообществе:<ul><li><b>вручную:</b><br> вы получаете заявки от&nbsp;рекламодателей, просматриваете посевы и&nbsp;даты публикации, корректируете при&nbsp;необходимости и&nbsp;отправляете рекламу на&nbsp;постинг;</li><li><b>автоматически:</b><br> все заявки от рекламодателей сразу отправляются в&nbsp;«отложку» и&nbsp;публикуются автоматически, а&nbsp;вы не&nbsp;тратите время на&nbsp;проверку.</li></ul><br>В&nbsp;раздел «Контент на&nbsp;заказ» поступают заявки от&nbsp;рекламодателей с&nbsp;заданием на&nbsp;создание поста или&nbsp;клипа. Здесь автор увидит описание рекламного поста, который рекламодатель хочет заказать, пожелания по&nbsp;содержанию и&nbsp;картинке. В&nbsp;этом&nbsp;случае, если автор принимает заявку, он создаёт пост или&nbsp;клип по&nbsp;заданию, согласует его с&nbsp;рекламодателем и, если все правки учтены и&nbsp;одобрены, отправляет его на&nbsp;проверку и&nbsp;планирует постинг."
							},
							{
								"question": "Как принять заявку?",
								"answer": "В&nbsp;личном кабинете автора в&nbsp;разделах «Посевы» и&nbsp;«Контент на&nbsp;заказ» будут отображаться все заявки, которые поступили от&nbsp;рекламодателей. Автор здесь&nbsp;же может перейти к&nbsp;карточке заявки на&nbsp;посев или&nbsp;заказ контента, принять её или&nbsp;отклонить, сортировать все заявки по&nbsp;статусам: принятые, отклонённые, ожидающие ответа, отправленные на&nbsp;публикацию.<br><br><b>Как&nbsp;автор узнает, что&nbsp;заявка пришла?</b><br>Автор получит сообщение от&nbsp;сообщества VK&nbsp;AdBlogger, когда рекламодатель отправит заявку на&nbsp;рекламу."
							},
							{
								"question": "Влияют&nbsp;ли рекламные посты на&nbsp;доход от&nbsp;Партнёрской программы?",
								"answer": "Все&nbsp;посты с&nbsp;рекламной меткой (Маркет-Платформа, VK&nbsp;AdBlogger, самостоятельное размещение) влияют на&nbsp;доходы от&nbsp;партнёрской программы:<br><br>0 рекламных постов = 100% дохода Партнёрской программы<br>1 рекламный пост = 80% дохода Партнёрской программы<br>2+ рекламных постов = 0 % дохода Партнёрской программы"
							},
							{
								"question": "Через сколько можно удалить рекламный пост?",
								"answer": "Посевы автоматически удаляются через 24&nbsp;часа после публикации&nbsp;— таковы требования отчётности ОРД. В&nbsp;некоторых случаях посты могут дольше оставаться на&nbsp;странице сообщества, чтобы&nbsp;корректно собрать статистику.<br><br>Контент на&nbsp;заказ (пост или&nbsp;клип) автор может удалить вручную через 7&nbsp;дней после публикации. Автоматически рекламная публикация удаляется на&nbsp;30&nbsp;день после выхода."
							},
							{
								"question": "Как вывести деньги?",
								"answer": "Процессы вывода денежных средств у&nbsp;ООО, ИП и&nbsp;самозанятых отличаются.<br><br> <b>ООО и&nbsp;ИП<br> Если автор&nbsp;— ООО или&nbsp;ИП:</b> система (Кабинет выплат) будет автоматически выводить все заработанные деньги три раза в&nbsp;месяц и&nbsp;переводить их по&nbsp;указанным банковским реквизитам.  В&nbsp;блоке «Баланс» автор видит актуальный баланс. Деньги будут поступать автоматически на&nbsp;указанный счёт в&nbsp;платёжные даты&nbsp;— 10-е, 20-е и&nbsp;последнее число месяца. Минимальная сумма&nbsp;— 500&nbsp;₽ для&nbsp;выплат 10-го и&nbsp;20-го числа, в&nbsp;конце месяца — вывод любого остатка на&nbsp;балансе.<br><br> <b>Самозанятые</b><br> Самозанятый, может вывести заработанные деньги в&nbsp;разделе «Бюджет», нажав на&nbsp;кнопку «Вывести средства».<br><br> После нажатия появится окно, где&nbsp;можно выбрать существующий способ выплаты или&nbsp;добавить новый. После выбора способа выплаты автор нажимает «Далее» и&nbsp;видит модальное окно с&nbsp;текстом: «Доступно к&nbsp;выводу ХХ&nbsp;рублей». Автор может нажать кнопку «Отмена» или&nbsp;«Вывести». Вывести можно средства за&nbsp;полные дни, сразу всю&nbsp;сумму. Минимальная сумма вывода&nbsp;— 25&nbsp;руб. Средства поступят на&nbsp;счёт в&nbsp;течение 24&nbsp;часов."
							},
							{
								"question": "Есть&nbsp;ли в&nbsp;рекламе маркировка?",
								"answer": "Процесс регистрации автора в&nbsp;ОРД полностью автоматизирован, регистрироваться самостоятельно не&nbsp;нужно.<br><br>Маркировка рекламы и&nbsp;получения токена (erid) полностью автоматизированы со&nbsp;стороны VK&nbsp;AdBlogger. Автору не&nbsp;нужно самостоятельно регистрировать креатив через ОРД.<br><br><b>Передача Актов</b><br>Автору не&nbsp;нужно передавать акты и&nbsp;статистику в&nbsp;ОРД, достаточно заполнить реквизиты."
							},
							{
								"question": "Сколько времени уйдёт на&nbsp;проверку реквизитов?",
								"answer": "<p>Для&nbsp;самозанятых, ИП и&nbsp;юридических лиц проверка длится максимум 24&nbsp;часа. Если&nbsp;проверка длится дольше, напишите в&nbsp;поддержку VK: <a href='https://vk.cc/cz8Vyk' target='_blank'> https://vk.cc/cz8Vyk</a></p>"
							},
							{
								"question": "Через сколько времени можно удалить рекламный пост?",
								"answer": "<p>Посевы автоматически удаляются через 24&nbsp;часа после публикации.</p> <p>Контент на&nbsp;заказ (пост или&nbsp;клип) автоматически удаляется <br class='br-desktop'>на&nbsp;30-й&nbsp;день после выхода.</p>"
							},
							{
								"question": "Могу&nbsp;ли я рекламировать своё сообщество через VK&nbsp;AdBlogger или&nbsp;VK&nbsp;Реклама?",
								"answer": "<p>Да, на&nbsp;обеих рекламных площадках автор может продвигать своё&nbsp;сообщество и&nbsp;привлекать новых подписчиков. Для&nbsp;этого&nbsp;ему потребуется создать рекламный кабинет в&nbsp;VK&nbsp;AdBlogger или&nbsp;<a href='https://ads.vk.com/promo/firstbonus?utm_source=vk_adblogger_site_authors' target='_blank'>VK&nbsp;Реклама</a>.</p> <p>Дополнительно новые пользователи <a href='https://ads.vk.com/promo/firstbonus?utm_source=vk_adblogger_site_authors' target='_blank'>VK&nbsp;Реклама</a> могут получить приветственный  бонус до&nbsp;10&nbsp;000&nbsp;₽ на&nbsp;первую рекламу. Его можно использовать, чтобы&nbsp;продвигать своё&nbsp;сообщество или&nbsp;товары и&nbsp;услуги в&nbsp;нём.</p>"
							}
						]
					}
				}
			]
		},
		{
			"page_slug": "for-advertisers",
			"page_title": "Рекламодателям",
			"blocks": [
				{
					"block_slug": "preloader",
					"block_state": {}
				},
				{
					"block_slug": "entrance",
					"block_state": {
						"title": "продажи ждут&nbsp;— в&nbsp;рекламе у&nbsp;блогеров",
						"videoPath": "/video/video-2.mp4"
					}
				},
				// {
				// 	"block_slug": "entrance_event",
				// 	"block_state": {
				// 		"title": "<span class='tt-lc'>Удвоим бюджет</span> — до&nbsp;10&nbsp;000&nbsp;₽ на&nbsp;рекламу",
				// 		"desc": "Пополните баланс в&nbsp;кабинете VK&nbsp;AdBlogger, а&nbsp;мы&nbsp;добавим бонусы на&nbsp;посевы и&nbsp;нативную рекламу в&nbsp;сообществах",
				// 		"btn_text": "Запустить рекламу",
				// 		"btn_link": "/app",
				// 		"label": "Сроки акции «Удвоим бонусами»: с 24.02.2025 по 30.04.2025. Подробнее об&nbsp;условиях акции по&nbsp;<a href='https://vk.cc/cILJWw' target='_blank'>ссылке</a>. *VK AdBlogger – ВК ЭдБлоггер. 12+",
				// 		"media": "/video/video-3.mp4",
				// 		"media_mob": "/img/entrance-event/img_mob.png"
				// 	}
				// },
				// {
				// 	"block_slug": "advantages",
				// 	"block_state": {
				// 		"titleWhite": "",
				// 		"titleBlue": "",
				// 		"items": [
				// 			{
				// 				"numPrev": "54",
				// 				"numCurrent": "55",
				// 				"numAfter": "",
				// 				"numLabel": "тыс.",
				// 				"desc": "блогеров <br> и&nbsp;сообществ"
				// 			},
				// 			{
				// 				"numPrev": "9999",
				// 				"numCurrent": "10000",
				// 				"numAfter": "+",
				// 				"numLabel": "",
				// 				"desc": "рекламных <br> интеграций в&nbsp;неделю"
				// 			},
				// 			{
				// 				"numPrev": "499",
				// 				"numCurrent": "500",
				// 				"numAfter": "",
				// 				"numLabel": "тыс.",
				// 				"desc": "опубликованных <br> рекламных интеграций"
				// 			}
				// 		]
				// 	}
				// },
				{
					"block_slug": "channels",
					"block_state": {
						"title": "<span class='tt-lc'>найдите</span> авторов под любые задачи",
						"tags": [
							"Лайфстайл",
							"Юмор",
							"Гейминг",
							"Путешествия",
							"Стиль"
						],
						"channels": [
							{
								"name": "RAVILOVA",
								"photoPath": "/img/channels/lifestyle-1.png",
								"desc": "Блогер и артистка Катя Равилова",
								"subscribers": "188K подписчиков",
								"tags": [
									"Лайфстайл"
								]
							},
							{
								"name": "Настя Рыжик",
								"photoPath": "/img/channels/lifestyle-2.png",
								"desc": "Хитрая лиса, блогер и артистка",
								"subscribers": "349K подписчиков",
								"tags": [
									"Лайфстайл"
								]
							},
							{
								"name": "Люба Бич",
								"photoPath": "/img/channels/lifestyle-3.png",
								"desc": "Лайфстайл",
								"subscribers": "263К подписчиков",
								"tags": [
									"Лайфстайл"
								]
							},
							{
								"name": "vasha.milasha | ISKRA",
								"photoPath": "/img/channels/lifestyle-4.png",
								"desc": "Жизненные видео от блогера Миланы Гасымовой",
								"subscribers": "186K подписчиков",
								"tags": [
									"Лайфстайл"
								]
							},
							{
								"name": "TWIXI",
								"photoPath": "/img/channels/lifestyle-5.png",
								"desc": "Про блогинг и юмор от близняшек",
								"subscribers": "230K подписчиков",
								"tags": [
									"Лайфстайл"
								]
							},
							{
								"name": "Дина Мирная",
								"photoPath": "/img/channels/lifestyle-6.png",
								"desc": "Королева лайфхаков",
								"subscribers": "69K подписчиков",
								"tags": [
									"Лайфстайл"
								]
							},
							{
								"name": "Штепс",
								"photoPath": "/img/channels/lifestyle-7.png",
								"desc": "Про семью, про музыку и про кино",
								"subscribers": "54K подписчиков",
								"tags": [
									"Лайфстайл"
								]
							},
							{
								"name": "POLI | Полина Дубкова",
								"photoPath": "/img/channels/lifestyle-8.png",
								"desc": "Поёт, шикарно танцует и ведёт блог",
								"subscribers": "157K подписчиков",
								"tags": [
									"Лайфстайл"
								]
							},
							{
								"name": "Аня Абрамова",
								"photoPath": "/img/channels/lifestyle-9.png",
								"desc": "О семье, материнстве и полезных покупках",
								"subscribers": "178K подписчиков",
								"tags": [
									"Лайфстайл"
								]
							},
							{
								"name": "Tobolator",
								"photoPath": "/img/channels/lifestyle-10.png",
								"desc": "Папа-блогер",
								"subscribers": "313K подписчиков",
								"tags": [
									"Лайфстайл"
								]
							},
							{
								"name": "МХК",
								"photoPath": "/img/channels/humor-1.png",
								"desc": "Тот самый паблик с мемами",
								"subscribers": "5.6M подписчиков",
								"tags": [
									"Юмор"
								]
							},
							{
								"name": "Шпильки | Женский Журнал",
								"photoPath": "/img/channels/humor-2.png",
								"desc": "И мейк-ап советы, и стиль, и юмор",
								"subscribers": "3.9M подписчиков",
								"tags": [
									"Юмор"
								]
							},
							{
								"name": "БОРЩ",
								"photoPath": "/img/channels/humor-3.png",
								"desc": "Здесь смеются над актуальным",
								"subscribers": "4.7M подписчиков",
								"tags": [
									"Юмор"
								]
							},
							{
								"name": "Мозги трески",
								"photoPath": "/img/channels/humor-4.png",
								"desc": "Мини-комиксы про твою жизнь",
								"subscribers": "137K подписчиков",
								"tags": [
									"Юмор"
								]
							},
							{
								"name": "мемы про работу",
								"photoPath": "/img/channels/humor-5.png",
								"desc": "Смеёмся работе в лицо",
								"subscribers": "319К подписчиков",
								"tags": [
									"Юмор"
								]
							},
							{
								"name": "котямбусы",
								"photoPath": "/img/channels/humor-6.png",
								"desc": "Обязательный паблик с котами",
								"subscribers": "129K подписчиков",
								"tags": [
									"Юмор"
								]
							},
							{
								"name": "Мудрый волк | Нейронный клык | Ауф цитаты",
								"photoPath": "/img/channels/humor-7.png",
								"desc": "Цитаты на все случаи жизни",
								"subscribers": "110K подписчиков",
								"tags": [
									"Юмор"
								]
							},
							{
								"name": "Да, Но / Yes, But",
								"photoPath": "/img/channels/humor-8.png",
								"desc": "Те самые комиксы «Да, Но»",
								"subscribers": "175K подписчиков",
								"tags": [
									"Юмор"
								]
							},
							{
								"name": "еда не еда",
								"photoPath": "/img/channels/humor-9.png",
								"desc": "Бытовые зарисовки на языке еды",
								"subscribers": "444K подписчиков",
								"tags": [
									"Юмор"
								]
							},
							{
								"name": "Эшкрек фром Кряков | Escape from Tarkov",
								"photoPath": "/img/channels/gaming-1.png",
								"desc": "Игровые мемы",
								"subscribers": "44K подписчиков",
								"tags": [
									"Гейминг"
								]
							},
							{
								"name": "Всё о Minecraft",
								"photoPath": "/img/channels/gaming-2.png",
								"desc": "Карты, моды, текстуры и всё-всё в Minecraft",
								"subscribers": "82K подписчиков",
								"tags": [
									"Гейминг"
								]
							},
							{
								"name": "Tavern | Dota",
								"photoPath": "/img/channels/gaming-3.png",
								"desc": "Коммьюнити игроков Dota",
								"subscribers": "49K подписчиков",
								"tags": [
									"Гейминг"
								]
							},
							{
								"name": "Новости GTA Online и GTA 6",
								"photoPath": "/img/channels/gaming-4.png",
								"desc": "Cообщество для игроков в GTA",
								"subscribers": "32K подписчиков",
								"tags": [
									"Гейминг"
								]
							},
							{
								"name": "ЧЕЛОВЕК-САМОВАР | DOTA 2",
								"photoPath": "/img/channels/gaming-5.png",
								"desc": "Новости и мемы по Dota 2",
								"subscribers": "90K подписчиков",
								"tags": [
									"Гейминг"
								]
							},
							{
								"name": "Gaming за 30",
								"photoPath": "/img/channels/gaming-6.png",
								"desc": "Геймер с хорошим стажем",
								"subscribers": "47K подписчиков",
								"tags": [
									"Гейминг"
								]
							},
							{
								"name": "Tavern | Tarkov",
								"photoPath": "/img/channels/gaming-7.png",
								"desc": "Ищем тиммейтов и общаемся",
								"subscribers": "38K подписчиков",
								"tags": [
									"Гейминг"
								]
							},
							{
								"name": "МАЙНКРАФТ | Роменский",
								"photoPath": "/img/channels/gaming-8.png",
								"desc": "Группа настоящего майнкрафтера",
								"subscribers": "64K подписчиков",
								"tags": [
									"Гейминг"
								]
							},
							{
								"name": "FC25 | Карьера | Перспективные футболисты",
								"photoPath": "/img/channels/gaming-9.png",
								"desc": "Настоящие фанаты FC25",
								"subscribers": "94K подписчиков",
								"tags": [
									"Гейминг"
								]
							},
							{
								"name": "Traveler - Путешествия и туризм",
								"photoPath": "/img/channels/travel-1.png",
								"desc": "Вокруг света за пару постов",
								"subscribers": "2.4M подписчиков",
								"tags": [
									"Путешествия"
								]
							},
							{
								"name": "Россия | Путешествия, фото, Крым, туризм",
								"photoPath": "/img/channels/travel-2.png",
								"desc": "Еду по России, вижу красоту",
								"subscribers": "277K подписчиков",
								"tags": [
									"Путешествия"
								]
							},
							{
								"name": "Александр Михайленко",
								"photoPath": "/img/channels/travel-3.png",
								"desc": "Самое красивое с Крымского полуострова",
								"subscribers": "273К подписчиков",
								"tags": [
									"Путешествия"
								]
							},
							{
								"name": "Traveler's blog",
								"photoPath": "/img/channels/travel-4.png",
								"desc": "Контент со всего света",
								"subscribers": "818K подписчиков",
								"tags": [
									"Путешествия"
								]
							},
							{
								"name": "В поисках света | Александр Мазуров",
								"photoPath": "/img/channels/travel-5.png",
								"desc": "Фотограф-путешественник в поисках света",
								"subscribers": "103K подписчиков",
								"tags": [
									"Путешествия"
								]
							},
							{
								"name": "Романтика русских деревень",
								"photoPath": "/img/channels/travel-6.png",
								"desc": "О жизни русской глубинки",
								"subscribers": "419K подписчиков",
								"tags": [
									"Путешествия"
								]
							},
							{
								"name": "Дотошный турист",
								"photoPath": "/img/channels/travel-7.png",
								"desc": "Чек-лист для новичков по Питеру",
								"subscribers": "111K подписчиков",
								"tags": [
									"Путешествия"
								]
							},
							{
								"name": "Путешествия без багажа",
								"photoPath": "/img/channels/travel-8.png",
								"desc": "Были везде и расскажут об этом всё",
								"subscribers": "185K подписчиков",
								"tags": [
									"Путешествия"
								]
							},
							{
								"name": "Раздетый стилист Лена Червова",
								"photoPath": "/img/channels/style-1.png",
								"desc": "Меняет жизни силой стиля",
								"subscribers": "533K подписчиков",
								"tags": [
									"Стиль"
								]
							},
							{
								"name": "Стилист Оксана Самарина",
								"photoPath": "/img/channels/style-2.png",
								"desc": "Вдохновляет на модные эксперименты",
								"subscribers": "41K подписчиков",
								"tags": [
									"Стиль"
								]
							},
							{
								"name": "Яркий Nail блогер - Alena Lavrenteva",
								"photoPath": "/img/channels/style-3.png",
								"desc": "Настоящий эксперт в ногтевом сервисе",
								"subscribers": "166K подписчиков",
								"tags": [
									"Стиль"
								]
							},
							{
								"name": "Стиль с Катей Гершуни",
								"photoPath": "/img/channels/style-4.png",
								"desc": "Бодипозитивный стилист",
								"subscribers": "130K подписчиков",
								"tags": [
									"Стиль"
								]
							},
							{
								"name": "Ok. Love",
								"photoPath": "/img/channels/style-5.png",
								"desc": "Место, где глаза отдыхают",
								"subscribers": "100K подписчиков",
								"tags": [
									"Стиль"
								]
							},
							{
								"name": "Алла Смирнова",
								"photoPath": "/img/channels/style-6.png",
								"desc": "Художник по гриму, визажист и гораздо больше",
								"subscribers": "51K подписчиков",
								"tags": [
									"Стиль"
								]
							},
							{
								"name": "Советы по стилю, тренды, мода",
								"photoPath": "/img/channels/style-7.png",
								"desc": "Фэшн-эскизы и советы по стилю",
								"subscribers": "254K подписчиков",
								"tags": [
									"Стиль"
								]
							},
							{
								"name": "Разговоры с Ириной Муромцевой",
								"photoPath": "/img/channels/style-8.png",
								"desc": "Про здоровье, красоту и саморазвитие",
								"subscribers": "170K подписчиков",
								"tags": [
									"Стиль"
								]
							},
							{
								"name": "Академия Леди",
								"photoPath": "/img/channels/style-9.png",
								"desc": "Медиа о благородном воспитании девушек",
								"subscribers": "313K подписчиков",
								"tags": [
									"Стиль"
								]
							},
							{
								"name": "Tina Bukreeva",
								"photoPath": "/img/channels/style-10.png",
								"desc": "Бьюти-лайфхаки от профи мейк-апа",
								"subscribers": "54K подписчиков",
								"tags": [
									"Стиль"
								]
							}
						]
					}
				},
				{
					"block_slug": "tile",
					"block_state": {
						"title": "",
						"btn_text": "Увеличить продажи",
						"btn_link": "/app",
						"items": [
							{
								"id": 5,
								"title": "Выбирайте среди 65&nbsp;тысяч авторов",
								"desc": "Подбирайте сообщества по&nbsp;тематике, качеству аудитории и&nbsp;параметрам, которые важны для&nbsp;вас",
								"imgList": [
									{
										"desktop": "/img/tile/img5-1.png",
										"mobile": "/img/tile/img5-1_mob.png"
									}
								]
							},
							{
								"id": 1,
								"title": "Создавайте рекламу сами или&nbsp;заказывайте контент",
								"desc": "Размещайте готовые креативы или&nbsp;отправляйте исполнителю бриф",
								"imgList": [
									{
										"desktop": "/img/tile/img1-1.png",
										"mobile": ""
									},
									{
										"desktop": "/img/tile/img1-2.png",
										"mobile": "/img/tile/img1-2_mob.png"
									}
								]
							},
							{
								"id": 6,
								"title": "Оценивайте результаты рекламы",
								"desc": "Детальная аналитика, UTM-метки <br class='br-desktop'>и&nbsp;другие инструменты помогут понять, <br class='br-desktop'>как&nbsp;отработали креативы",
								"imgList": [
									{
										"desktop": "/img/tile/img6-1.png",
										"mobile": "/img/tile/img6-1_mob.png"
									}
								]
							},
							{
								"id": 3,
								"title": "Не думайте об ОРД и&nbsp;документах",
								"desc": "Всё автоматизировано, вам нужно только заполнить юридические данные",
								"imgList": [
									{
										"desktop": "/img/tile/img3-1.png",
										"mobile": "/img/tile/img3-1_mob.png"
									},
									{
										"desktop": "/img/tile/img3-2.png",
										"mobile": ""
									},
									{
										"desktop": "/img/tile/img3-3.png",
										"mobile": ""
									}
								]
							}
						]
					}
				},
				{
					"block_slug": "steps",
					"block_state": {
						"title": "",
						"stepsList": [
							{
								"title": "Создайте кабинет",
								"desc": "Зарегистрируйтесь как&nbsp;рекламодатель или&nbsp;агентство",
								"imgPath": "/img/steps/img-4.png",
								"btn_text": "",
								"btn_link": ""
							},
							{
								"title": "Размещайте рекламу",
								"desc": "Создайте креатив или&nbsp;бриф, выберите авторов и&nbsp;оплатите размещение",
								"imgPath": "/img/steps/img-5.png",
								"btn_text": "",
								"btn_link": ""
							},
							{
								"title": "Оценивайте результат",
								"desc": "По статистике UTM-меток <br class='br-desktop'>и&nbsp;другим показателям можно <br class='br-desktop'>понять, как&nbsp;отработал креатив",
								"imgPath": "/img/steps/img-6.png",
								"btn_text": "",
								"btn_link": ""
							}
						]
					}
				},
				{
					"block_slug": "partners",
					"block_state": {
						"title": "<span class='tt-lc'>С нами уже работают</span>",
						"rowsCount": 4,
						"imgList": [
							"/img/partners/img-1.png",
							"/img/partners/img-2.png",
							"/img/partners/img-3.png",
							"/img/partners/img-4.png",
							"/img/partners/img-5.png",
							"/img/partners/img-6.png",
							"/img/partners/img-7.png",
							"/img/partners/img-8.png",
							"/img/partners/img-9.png",
							"/img/partners/img-10.png",
							"/img/partners/img-11.png",
							"/img/partners/img-12.png"
						]
					}
				},
				{
					"block_slug": "case",
					"block_state": {
						"title": "<span class='tt-lc'>большой бизнес <br> уже делает это</span>",
						"desc": "Узнайте, как крупные рекламодатели работают с&nbsp;авторами "
					}
				},
				// {
				// 	"block_slug": "money",
				// 	"block_state": {
				// 		"title": "Запускайте рекламу у&nbsp;блогеров и&nbsp;в&nbsp;сообществах ВКонтакте",
				// 		"has_border": "true",
				// 		"btn_text": "Перейти в кабинет",
				// 		"btn_link": "/app"
				// 	}
				// },
				// {
				// 	"block_slug": "banner_sellers",
				// 	"block_state": {
				// 		"title": "Превращайте <br> клики — в&nbsp;кэш",
				// 		"desc": "",
				// 		"btn_text": "К обучению",
				// 		"btn_link": "https://expert.vk.com/marathon/kliki-v-kesh/landing/",
				// 		"img": "./img/banner-sellers-2/img.png",
				// 		"img_tablet": "./img/banner-sellers-2/img_tablet.png",
				// 	}
				// },
				{
					"block_slug": "banner_kurs",
					"block_state": {
						"banners": [
							{
								"title": "Пройдите сертификацию от&nbsp;VK AdBlogger",
								"desc": "Подтвердите свою экспертизу и&nbsp;получите&nbsp;сертификат",
								"btn_text": "Узнать больше",
								"btn_link": "https://vk.cc/cNhTjJ",
								"img": "./img/banner-kurs/img2.png",
								"img_tablet": "./img/banner-kurs/img2_tablet.png",
								"modificator": "type-2"
							},
							{
								"title": "Превращайте <br> клики — в&nbsp;кэш",
								"desc": "Научитесь продвигать продукты быстро и&nbsp;эффективно на&nbsp;бесплатном курсе для&nbsp;рекламодателей",
								"btn_text": "К обучению",
								"btn_link": "https://vk.cc/cMyz6F",
								"img": "./img/banner-kurs/img.png",
								"img_tablet": "./img/banner-kurs/img.png"
							}
						]
					}
				},
				{
					"block_slug": "faq",
					"block_state": {
						"faqList": [
							{
								"question": "Зачем заполнять реквизиты?",
								"answer": "После регистрации личного кабинета или авторизации и перед тем, как пополнить баланс рекламного кабинета и создать посев, рекламодателю нужно указать свои юридические реквизиты.<br><br>Все рекламодатели без исключения должны заполнить реквизиты. Набор полей здесь отличается в зависимости от типа аккаунта: ООО, ИП.<br><br>Заполнение реквизитов необходимо для:  <ul><li>получения закрывающих документов;</li> <li>пополнения баланса рекламного кабинета;</li> <li>автоматической маркировки рекламы</li></ul>"
							},
							{
								"question": "Как работает маркировка рекламы? ",
								"answer": "В VK AdBlogger процесс маркировки креатива и получения токена (erid) полностью автоматизирован. Рекламодателям не нужно ежемесячно отчитываться в ОРД, акты и статистика по ним отправляются автоматически."
							},
							{
								"question": "Как изменить реквизиты?",
								"answer": "Чтобы внести изменения в реквизиты, нужно обратиться в техподдержку: <a href='https://vk.me/club225265420'>vk.cc/cyEF76</a>. Самостоятельно изменить их в личном кабинете нельзя."
							},
							{
								"question": "Как пополнить баланс?",
								"answer": "Если кабинет рекламодателя зарегистрирован на ООО или ИП, то пополнить бюджет можно, выставив счёт. Для этого нужно перейти на страницу «Бюджет», нажать на кнопку «Выставить счёт».<br><br>После этого будет сформирован счёт на оплату. Счёт можно скачать на устройство или отправить на email («Отправить счёт на почту»). Чтобы скопировать только номер счёта, нужно нажать «Копировать».<br><br>Минимальная сумма, которую может внести рекламодатель: 600 рублей. На счёт поступит сумма после вычета НДС (20%)."
							},
							{
								"question": "Что такое заказ контента?",
								"answer": "В разделе «Контент на заказ» рекламодатель может создать бриф (задание) на заказ у автора нативной рекламы. Он описывает задачу, уточняет пожелания по содержанию рекламного поста, сроки выхода.<br><br>Если автор принимает заявку на пост, он создаёт контент и согласует его с рекламодателем. Когда пост согласован, он отправляется на модерацию, а после — его можно запланировать на нужную дату или опубликовать сразу."
							},
							{
								"question": "В каких форматах можно разместить рекламу? ",
								"answer": "В разделе «Посевы» рекламодатель создаёт креатив в формате поста с картинкой или видео, автор размещает его в своём сообществе.<br><br> В разделе «Заказ контента» рекламодатель создаёт бриф на пост или клип, а автор создаёт контент по ТЗ рекламодателя и размещает в своём сообществе."
							},
							{
								"question": "Как автор и рекламодатель общаются в разделе «Заказ контента»? ",
								"answer": "Рекламодатель указывает в брифе контакты, по которым автор может обратиться к нему и уточнить всю нужную информацию по будущему рекламному посту. "
							},
							{
								"question": "Можно ли отменить рекламную заявку? ",
								"answer": "Отменить заявку на размещение креатива и рекламодатель, и автор могут не позже, чем за 1 час до публикации.<br><br>Если автор не отвечает на заявку, она автоматически отменяется за час до конца указанных сроков выхода поста. "
							},
							{
								"question": "Через сколько времени удаляется рекламная публикация?",
								"answer": "<p>Посевы будут автоматически удалены через 24 часа после публикации.</p> <p>Контент на заказ (пост или клип) автоматически удаляется на 30-й день после выхода.</p>"
							},
							{
								"question": "Могу ли я одновременно рекламироваться через VK AdBlogger и VK Реклама?",
								"answer": "<p>Да, вы&nbsp;можете одновременно завести два рекламных кабинета. <br> Для&nbsp;регистрации в&nbsp;VK&nbsp;AdBlogger можно использовать тот&nbsp;же&nbsp;VK&nbsp;ID или&nbsp;почту, что&nbsp;и&nbsp;в&nbsp;<a href='https://ads.vk.com/promo/firstbonus?utm_source=vk_adblogger_site_advertisers' target='_blank'>VK&nbsp;Реклама</a>.</p>"
							}
						]
					}
				}
			]
		},
		{
			"page_slug": "for-sellers",
			"page_title": "Селлерам",
			"blocks": [
				{
					"block_slug": "preloader",
					"block_state": {}
				},
				// {
				// 	"block_slug": "popup_seller",
				// 	"block_state": {
				// 		"title": "А&nbsp;ещё мы&nbsp;удвоим бюджет — до&nbsp;10&nbsp;000&nbsp;₽ на&nbsp;рекламу",
				// 		"desc": "Пополните впервые баланс в&nbsp;кабинете VK&nbsp;AdBlogger, а&nbsp;мы&nbsp;добавим бонусы",
				// 		"btn_text": "Подробнее",
				// 		"btn_link": "/for-advertisers",
				// 		"img": "./img/popup-seller/img-1.png",
				// 	}
				// },
				{
					"block_slug": "entrance_seller",
					"block_state": {
						"title": "реклама <br class='br-mobile'>у авторов <br>ВКонтакте&nbsp;— для&nbsp;роста <br> <span class='blue-text'>продаж на маркетплейсах</span>",
						"btn_text": "Попробовать",
						"btn_link": "/app",
						"img_list": [
							{
								"img": "./img/entrance-seller/img-1.png"
							},
							{
								"img": "./img/entrance-seller/img-4.png"
							},
							{
								"img": "./img/entrance-seller/img-2.png"
							},
							{
								"img": "./img/entrance-seller/img-5.png"
							},
							{
								"img": "./img/entrance-seller/img-3.png",
							}
						]
					}
				},
				{
					"block_slug": "vertical_slider",
					"block_state": {
						"title": "делайте рекламу, которая работает",
						"slides_list": [
							{
								"title": "Продвигайте товары нативно",
								"desc": "70% пользователей покупают товары по&nbsp;рекомендации блогеров",
								"img": "./img/vertical-slider-1/img-1.png",
								"img_mob": "./img/vertical-slider-1/img-1_mob.png",
								"btn_text": "",
								"btn_link": "",
							},
							{
								"title": "Получайте <br> целевые действия по&nbsp;низкой цене",
								"desc": "Можно подобрать блогера или&nbsp;сообщество ВКонтакте под&nbsp;любой бюджет",
								"img": "./img/vertical-slider-1/img-2.png",
								"img_mob": "./img/vertical-slider-1/img-2_mob.png",
								"btn_text": "",
								"btn_link": "",
							},
							{
								"title": "Попадайте <br> точно в&nbsp;целевую аудиторию",
								"desc": "В&nbsp;базе есть нишевые и&nbsp;региональные сообщества&nbsp;— сможете найти своих клиентов",
								"img": "./img/vertical-slider-1/img-3.png",
								"img_mob": "./img/vertical-slider-1/img-3_mob.png",
								"btn_text": "",
								"btn_link": "",
							}
						]
					}
				},
				{
					"block_slug": "number_seller",
					"block_state": {
						"title": "разные тематики — <br>под любые задачи бизнеса",
						"number": "60000",
						"number_after": "+",
						"label": "сообществ<br> для<br class='br-desktop'> рекламы ",
						"img_list": [
							{
								"img": "./img/number-seller/img-1.png"
							},
							{
								"img": "./img/number-seller/img-2.png"
							},
							{
								"img": "./img/number-seller/img-3.png"
							},
							{
								"img": "./img/number-seller/img-4.png"
							},
							{
								"img": "./img/number-seller/img-5.png"
							},
							{
								"img": "./img/number-seller/img-6.png"
							},
							{
								"img": "./img/number-seller/img-7.png"
							},
							{
								"img": "./img/number-seller/img-8.png"
							}
						]
					}
				},
				{
					"block_slug": "vertical_slider",
					"block_state": {
						"title": "",
						"slides_list": [
							{
								"title": "Мгновенный запуск",
								"desc": "Запускайте рекламу за&nbsp;пару кликов сразу в&nbsp;нескольких сообществахв",
								"img": "./img/vertical-slider-2/img-1.png",
								"img_mob": "./img/vertical-slider-2/img-1_mob.png",
								"btn_text": "",
								"btn_link": "",
							},
							{
								"title": "Простой выбор сообществ",
								"desc": "Все авторы&nbsp;— в&nbsp;едином каталоге с&nbsp;удобной фильтрацией",
								"img": "./img/vertical-slider-2/img-2.png",
								"img_mob": "./img/vertical-slider-2/img-2_mob.png",
								"btn_text": "",
								"btn_link": "",
							},
							{
								"title": "Автоматическая маркировка рекламы",
								"desc": "Токены и&nbsp;отчёты в&nbsp;ОРД — на&nbsp;стороне VK&nbsp;AdBlogger",
								"img": "./img/vertical-slider-2/img-3.png",
								"img_mob": "./img/vertical-slider-2/img-3_mob.png",
								"btn_text": "Запустить кампанию",
								"btn_link": "/app",
							}
						]
					}
				},
				{
					"block_slug": "tile_sellers",
					"block_state": {
						"title": "гид по&nbsp;форматам рекламы для&nbsp;селлеров",
						"elems_list": [
							{
								"img": "./img/tile-sellers/img-1.png",
								"title": "Посевы",
								"desc": "Вы создаёте рекламный контент, а&nbsp;авторы публикуют его в&nbsp;своём сообществе",
								"content": "<ul class='list-stars'> <li>Получите охваты, размещая рекламу у&nbsp;десятка авторов одновременно</li> <li>Найдёте сообщества с&nbsp;низкой стоимостью рекламы и&nbsp;масштабируете кампанию без&nbsp;больших расходов</li> </ul>"
							},
							{
								"img": "./img/tile-sellers/img-2.png",
								"title": "Заказ контента",
								"desc": "Вы пишете бриф на&nbsp;рекламу, а&nbsp;авторы создают контент&nbsp;— в&nbsp;своём стиле и&nbsp;под&nbsp;ваши задачи",
								"content": "<ul class='list-stars'> <li>Получите высокую вовлечённость: как&nbsp;правило, аудитория хорошо реагирует на&nbsp;авторскую рекламу</li> <li>Сможете сотрудничать с&nbsp;крупными авторами&nbsp;— по&nbsp;выгодным ценам, без&nbsp;рисков и&nbsp;бумажной волокиты</li> </ul>"
							}
						]
					}
				},
				{
					"block_slug": "sales_improvement",
					"block_state": {
						"title": "как выросли <br> продажи селлеров",
						"cases_list": [
							{
								"img": "./img/sales-improvement/img-1.png",
								"link": "/top-cases/case-6",
								"title": "EveLux",
								"desc": "<p>Молодой бренд профессиональных средств для&nbsp;волос</p> <p><b>Цель:</b> стоимость заказа ниже 111 рублей, стабильные 30&nbsp;продаж в&nbsp;день</p>",
								"subtitle": "После рекламной кампании",
								"elems_list": [
									{
										"label": "Среднее число продаж",
										"text": "выросло до&nbsp;35 в&nbsp;день",
									},
									{
										"label": "Стоимость привлечения одного заказа стала",
										"text": "ниже на 40%",
									}
								]
							},
							{
								"img": "./img/sales-improvement/img-2.png",
								"link": "/top-cases/case-5",
								"title": "Levrana",
								"desc": "<p>Компания, которая занимается производством косметических средств, БАДов и&nbsp;бытовой нехимии</p> <p><b>Цель:</b> увеличить продажи продуктов на&nbsp;Wildberries</p>",
								"subtitle": "После рекламной кампании",
								"elems_list": [
									{
										"label": "Число продаж на&nbsp;Wildberries",
										"text": "выросло на&nbsp;20%",
									},
									{
										"label": "Цена за&nbsp;клик составила",
										"text": "6,5 рублей",
									}
								]
							}
						]
					}
				},
				{
					"block_slug": "connect",
					"block_state": {
						"title": "увеличьте продажи с&nbsp;VK&nbsp;AdBlogger",
						"items_list": [
							{
								"icon_path": "./img/connect/icon-1.svg",
								"title": "Простой запуск <br> кампаний",
								"desc": "Запускайте рекламу <br> с&nbsp;быстрым и&nbsp;удобным <br> масштабированием",
							},
							{
								"icon_path": "./img/connect/icon-2.svg",
								"title": "Эффективные <br>вложения",
								"desc": "Инвестиции брендов в рекламу у&nbsp;авторов окупаются&nbsp;— об&nbsp;этом говорят наши кейсы",
							},
							{
								"icon_path": "./img/connect/icon-3.svg",
								"title": "Конкурентное <br>преимущество",
								"desc": "Используйте <br> новый канал продаж <br> и&nbsp;опережайте конкурентов",
							}
						]
					}
				},
				{
					"block_slug": "money",
					"block_state": {
						"title": "пора <br class='br-mobile'>действовать <br class='br-mobile'>— <br>и&nbsp;пусть <br class='br-mobile'>продажи <br class='br-mobile'>взлетят",
						"has_border": "true",
						"btn_text": "Увеличить продажи",
						"btn_link": "/app"
					}
				},
				// {
				// 	"block_slug": "banner_sellers",
				// 	"block_state": {
				// 		"title": "удвоим бюджет — до&nbsp;10&nbsp;000&nbsp;₽ на&nbsp;рекламу",
				// 		"desc": "Пополните впервые баланс в&nbsp;кабинете VK&nbsp;AdBlogger, а&nbsp;мы&nbsp;добавим бонусы на&nbsp;посевы и&nbsp;нативную рекламу товаров в&nbsp;сообществах",
				// 		"btn_text": "Подробнее",
				// 		"btn_link": "/for-advertisers",
				// 		"img": "./img/banner-sellers/img.png",
				// 		"img_tablet": "./img/banner-sellers/img_tablet.png",
				// 	}
				// },
				{
					"block_slug": "faq",
					"block_state": {
						"faqList": [
							{
								"question": "Зачем заполнять реквизиты?",
								"answer": "После регистрации личного кабинета или авторизации и перед тем, как пополнить баланс рекламного кабинета и создать посев, рекламодателю нужно указать свои юридические реквизиты.<br><br>Все рекламодатели без исключения должны заполнить реквизиты. Набор полей здесь отличается в зависимости от типа аккаунта: ООО, ИП.<br><br>Заполнение реквизитов необходимо для:  <ul><li>получения закрывающих документов;</li> <li>пополнения баланса рекламного кабинета;</li> <li>автоматической маркировки рекламы</li></ul>"
							},
							{
								"question": "Как работает маркировка рекламы? ",
								"answer": "В VK AdBlogger процесс маркировки креатива и получения токена (erid) полностью автоматизирован. Рекламодателям не нужно ежемесячно отчитываться в ОРД, акты и статистика по ним отправляются автоматически."
							},
							{
								"question": "Как изменить реквизиты?",
								"answer": "Чтобы внести изменения в реквизиты, нужно обратиться в техподдержку: <a href='https://vk.me/club225265420'>vk.cc/cyEF76</a>. Самостоятельно изменить их в личном кабинете нельзя."
							},
							{
								"question": "Как пополнить баланс?",
								"answer": "Если кабинет рекламодателя зарегистрирован на ООО или ИП, то пополнить бюджет можно, выставив счёт. Для этого нужно перейти на страницу «Бюджет», нажать на кнопку «Выставить счёт».<br><br>После этого будет сформирован счёт на оплату. Счёт можно скачать на устройство или отправить на email («Отправить счёт на почту»). Чтобы скопировать только номер счёта, нужно нажать «Копировать».<br><br>Минимальная сумма, которую может внести рекламодатель: 600 рублей. На счёт поступит сумма после вычета НДС (20%)."
							},
							{
								"question": "Что такое заказ контента?",
								"answer": "В разделе «Контент на заказ» рекламодатель может создать бриф (задание) на заказ у автора нативной рекламы. Он описывает задачу, уточняет пожелания по содержанию рекламного поста, сроки выхода.<br><br>Если автор принимает заявку на пост, он создаёт контент и согласует его с рекламодателем. Когда пост согласован, он отправляется на модерацию, а после — его можно запланировать на нужную дату или опубликовать сразу."
							},
							{
								"question": "В каких форматах можно разместить рекламу? ",
								"answer": "В разделе «Посевы» рекламодатель создаёт креатив в формате поста с картинкой или видео, автор размещает его в своём сообществе.<br><br> В разделе «Заказ контента» рекламодатель создаёт бриф на пост или клип, а автор создаёт контент по ТЗ рекламодателя и размещает в своём сообществе."
							},
							{
								"question": "Как автор и рекламодатель общаются в разделе «Заказ контента»? ",
								"answer": "Рекламодатель указывает в брифе контакты, по которым автор может обратиться к нему и уточнить всю нужную информацию по будущему рекламному посту. "
							},
							{
								"question": "Можно ли отменить рекламную заявку? ",
								"answer": "Отменить заявку на размещение креатива и рекламодатель, и автор могут не позже, чем за 1 час до публикации.<br><br>Если автор не отвечает на заявку, она автоматически отменяется за час до конца указанных сроков выхода поста. "
							}

						]
					}
				}
			]
		},
		{
			"page_slug": "shops",
			"page_title": "Шопсы",
			"blocks": [
				{
					"block_slug": "preloader",
					"block_state": {}
				},
				{
					"block_slug": "cards_slider",
					"block_state": {
						"title": "<span class='blue-text'>шопсы-шопсы-шопсы!</span><br> новый формат контента ВКонтакте, на котором можно <span class='blue-text'>зарабатывать</span>",
						"btn_link": "/app",
						"btn_text": "Подключиться",
						"gallery": [
							{
								"img": "./img/cards-slider/img-1.png"
							},
							{
								"img": "./img/cards-slider/img-2.png"
							},
							{
								"img": "./img/cards-slider/img-3.png"
							},
							{
								"img": "./img/cards-slider/img-4.png"
							},
							{
								"img": "./img/cards-slider/img-6.png"
							},
							{
								"img": "./img/cards-slider/img-7.png"
							},
							{
								"img": "./img/cards-slider/img-8.png"
							},
						],
						"items_list": [
							{
								"icon": "./img/cards-slider/icon-1.svg",
								"name": "<span style='color: #00D3E6;'>Автоматическая</span> </br> маркировка рекламы",
								"dropdownn_text": "",
							},
							{
								"icon": "./img/cards-slider/icon-2.svg",
								"name": "<span style='color: #00D3E6;'>Заработок с продаж </br> до 50% </span> от стоимости товара",
								"dropdownn_text": "<p>На&nbsp;старте доход за&nbsp;рекламу товара с&nbsp;Ozon состоит из&nbsp;процента от&nbsp;его продажи. В&nbsp;будущем условия выплат могут измениться</p>",
							},
							{
								"icon": "./img/cards-slider/icon-3.svg",
								"name": "<span style='color: #00D3E6;'>Большой каталог</span></br> товаров Ozon",
								"desc": "",
								"dropdownn_text": "",
							},
							{
								"icon": "./img/cards-slider/icon-4.svg",
								"name": "<span style='color: #00D3E6;'>Быстрое размещение</span></br> без&nbsp;согласований с&nbsp;рекламодателем",
								"dropdownn_text": "",
							}
						],

					}
				},
				{
					"block_slug": "tovary_about",
					"block_state": {
						"title": "Что такое <span style='color:#00D3E6;'>шопсы</span> ВКонтакте?",
						"desc": "<p><b style='color:#00D3E6;'>Шопсы</b> — это рекламные посты и клипы со ссылкой на товар. Пользователи могут сразу перейти по ней к покупке, а вы получите процент с продажи каждого товара</p>",
						"img": "./img/tovary-about/img.png",
						"img_mob": "./img/tovary-about/img_mob.png",
					}
				},
				{
					"block_slug": "steps_tovary",
					"block_state": {
						"title": "подключайтесь к&nbsp;VK&nbsp;AdBlogger и&nbsp;зарабатывайте ",
						"desc": "",
						"gallery": [
							{
								"img": "./img/steps-tovary/img-4.png"
							},
							{
								"img": "./img/steps-tovary/img-1.png"
							},
							{
								"img": "./img/steps-tovary/img-2.png"
							},
							{
								"img": "./img/steps-tovary/img-3.png"
							}
						],
						"steps": [
							{
								"text": "<b>Зарегистрируйтесь</b> как автор, подключите своё сообщество и&nbsp;укажите реквизиты"
							},
							{
								"text": "Когда сообщество одобрят, сможете выбирать товары в каталоге и создавать шопсы со ссылками на товары Ozon"
							},
							{
								"text": "<b>Получайте выплаты</b>  за продажи — чем больше продаж, тем выше ваш доход"
							}
						],
						"btn_link": "/app",
						"btn_text": "Подключиться",
					}
				},
				{
					"block_slug": "connection_conditions",
					"block_state": {
						"title": "чек-лист для&nbsp;подключения </br> к&nbsp;программе",
						"desc": "Сообщество пока не&nbsp;подходит под все условия? Мы поможем <span class='blue-text fw-600'>это&nbsp;изменить</span>",
						"list": [
							{
								"text": "У&nbsp;вас есть самозанятость, <br class='br-mobile'>ИП <br class='br-desktop'> или&nbsp;юридическое лицо"
							},
							{
								"text": "Открытое сообщество <br>от&nbsp;1&nbsp;000 подписчиков"
							},
							{
								"text": "Хотя&nbsp;бы одна публикация <br>за&nbsp;последние 30&nbsp;дней"
							},
							{
								"text": "Тематика сообщества <br>соответствует <a href='https://adblogger.vk.com/documents/groups_moderation' target='_blank'>требованиям модерации</a> и&nbsp;<a href='https://adblogger.vk.com/documents/offer_creator_products' target='_blank'>оферте</a> VK&nbsp;AdBlogger"
							}
						],
						"btn_right_link": "https://vk.com/commerce-for-creators",
						"btn_right_text": "Узнать больше",
						"btn_link": "https://vk.com/commerce-for-creators",
						"btn_text": "Подключиться",
					}
				},
				// {
				// 	"block_slug": "calculator",
				// 	"block_state": {
				// 		"title": "калькулятор вашего дохода",
				// 		"desc": "Пара кликов — и вы увидите, сколько можно зарабатывать с VK AdBlogger",
				// 		"calc_table": [
				// 			{
				// 				'postType': 'post',
				// 				'followersCountStep': 1,
				// 				'viewCondition': '0-874',
				// 				'totalIncome': 0
				// 			},
				// 			{
				// 				'postType': 'post',
				// 				'followersCountStep': 1,
				// 				'viewCondition': '875-3499',
				// 				'totalIncome': 200
				// 			},
				// 			{
				// 				'postType': 'post',
				// 				'followersCountStep': 1,
				// 				'viewCondition': '3500-',
				// 				'totalIncome': 700
				// 			},
				// 			{
				// 				'postType': 'post',
				// 				'followersCountStep': 2,
				// 				'viewCondition': '0-2624',
				// 				'totalIncome': 0
				// 			},
				// 			{
				// 				'postType': 'post',
				// 				'followersCountStep': 2,
				// 				'viewCondition': '2625-10499',
				// 				'totalIncome': 500
				// 			},
				// 			{
				// 				'postType': 'post',
				// 				'followersCountStep': 2,
				// 				'viewCondition': '10500-',
				// 				'totalIncome': 2100
				// 			},
				// 			{
				// 				'postType': 'post',
				// 				'followersCountStep': 3,
				// 				'viewCondition': '0-4624',
				// 				'totalIncome': 0
				// 			},
				// 			{
				// 				'postType': 'post',
				// 				'followersCountStep': 3,
				// 				'viewCondition': '4625-18499',
				// 				'totalIncome': 900
				// 			},
				// 			{
				// 				'postType': 'post',
				// 				'followersCountStep': 3,
				// 				'viewCondition': '18500-',
				// 				'totalIncome': 3700
				// 			},
				// 			{
				// 				'postType': 'post',
				// 				'followersCountStep': 4,
				// 				'viewCondition': '0-8749',
				// 				'totalIncome': 0
				// 			},
				// 			{
				// 				'postType': 'post',
				// 				'followersCountStep': 4,
				// 				'viewCondition': '8750-34999',
				// 				'totalIncome': 1800
				// 			},
				// 			{
				// 				'postType': 'post',
				// 				'followersCountStep': 4,
				// 				'viewCondition': '35000-',
				// 				'totalIncome': 7000
				// 			},
				// 			{
				// 				'postType': 'post',
				// 				'followersCountStep': 5,
				// 				'viewCondition': '0-13749',
				// 				'totalIncome': 0
				// 			},
				// 			{
				// 				'postType': 'post',
				// 				'followersCountStep': 5,
				// 				'viewCondition': '13750-54999',
				// 				'totalIncome': 2800
				// 			},
				// 			{
				// 				'postType': 'post',
				// 				'followersCountStep': 5,
				// 				'viewCondition': '55000-',
				// 				'totalIncome': 11000
				// 			},
				// 			{
				// 				'postType': 'post',
				// 				'followersCountStep': 6,
				// 				'viewCondition': '0-23749',
				// 				'totalIncome': 0
				// 			},
				// 			{
				// 				'postType': 'post',
				// 				'followersCountStep': 6,
				// 				'viewCondition': '23750-94999',
				// 				'totalIncome': 4800
				// 			},
				// 			{
				// 				'postType': 'post',
				// 				'followersCountStep': 6,
				// 				'viewCondition': '95000-',
				// 				'totalIncome': 19000
				// 			},
				// 			{
				// 				'postType': 'post',
				// 				'followersCountStep': 7,
				// 				'viewCondition': '0-44999',
				// 				'totalIncome': 0
				// 			},
				// 			{
				// 				'postType': 'post',
				// 				'followersCountStep': 7,
				// 				'viewCondition': '45000-179999',
				// 				'totalIncome': 9000
				// 			},
				// 			{
				// 				'postType': 'post',
				// 				'followersCountStep': 7,
				// 				'viewCondition': '180000-',
				// 				'totalIncome': 36000
				// 			},
				// 			{
				// 				'postType': 'clip',
				// 				'followersCountStep': 1,
				// 				'viewCondition': '0-499',
				// 				'totalIncome': 0
				// 			},
				// 			{
				// 				'postType': 'clip',
				// 				'followersCountStep': 1,
				// 				'viewCondition': '500-1999',
				// 				'totalIncome': 600
				// 			},
				// 			{
				// 				'postType': 'clip',
				// 				'followersCountStep': 1,
				// 				'viewCondition': '2000-',
				// 				'totalIncome': 2500
				// 			},
				// 			{
				// 				'postType': 'clip',
				// 				'followersCountStep': 2,
				// 				'viewCondition': '0-1624',
				// 				'totalIncome': 0
				// 			},
				// 			{
				// 				'postType': 'clip',
				// 				'followersCountStep': 2,
				// 				'viewCondition': '1625-6499',
				// 				'totalIncome': 1600
				// 			},
				// 			{
				// 				'postType': 'clip',
				// 				'followersCountStep': 2,
				// 				'viewCondition': '6500-',
				// 				'totalIncome': 6500
				// 			},
				// 			{
				// 				'postType': 'clip',
				// 				'followersCountStep': 3,
				// 				'viewCondition': '0-2624',
				// 				'totalIncome': 0
				// 			},
				// 			{
				// 				'postType': 'clip',
				// 				'followersCountStep': 3,
				// 				'viewCondition': '2625-10499',
				// 				'totalIncome': 2500
				// 			},
				// 			{
				// 				'postType': 'clip',
				// 				'followersCountStep': 3,
				// 				'viewCondition': '10500-',
				// 				'totalIncome': 10000
				// 			},
				// 			{
				// 				'postType': 'clip',
				// 				'followersCountStep': 4,
				// 				'viewCondition': '0-4249',
				// 				'totalIncome': 0
				// 			},
				// 			{
				// 				'postType': 'clip',
				// 				'followersCountStep': 4,
				// 				'viewCondition': '4250-16999',
				// 				'totalIncome': 4500
				// 			},
				// 			{
				// 				'postType': 'clip',
				// 				'followersCountStep': 4,
				// 				'viewCondition': '17000-',
				// 				'totalIncome': 18000
				// 			},
				// 			{
				// 				'postType': 'clip',
				// 				'followersCountStep': 5,
				// 				'viewCondition': '0-6749',
				// 				'totalIncome': 0
				// 			},
				// 			{
				// 				'postType': 'clip',
				// 				'followersCountStep': 5,
				// 				'viewCondition': '6750-26999',
				// 				'totalIncome': 5000
				// 			},
				// 			{
				// 				'postType': 'clip',
				// 				'followersCountStep': 5,
				// 				'viewCondition': '27000-',
				// 				'totalIncome': 20000
				// 			},
				// 			{
				// 				'postType': 'clip',
				// 				'followersCountStep': 6,
				// 				'viewCondition': '0-9749',
				// 				'totalIncome': 0
				// 			},
				// 			{
				// 				'postType': 'clip',
				// 				'followersCountStep': 6,
				// 				'viewCondition': '9750-38999',
				// 				'totalIncome': 6800
				// 			},
				// 			{
				// 				'postType': 'clip',
				// 				'followersCountStep': 6,
				// 				'viewCondition': '39000-',
				// 				'totalIncome': 27500
				// 			},
				// 			{
				// 				'postType': 'clip',
				// 				'followersCountStep': 7,
				// 				'viewCondition': '0-12499',
				// 				'totalIncome': 0
				// 			},
				// 			{
				// 				'postType': 'clip',
				// 				'followersCountStep': 7,
				// 				'viewCondition': '12500-49999',
				// 				'totalIncome': 12500
				// 			},
				// 			{
				// 				'postType': 'clip',
				// 				'followersCountStep': 7,
				// 				'viewCondition': '50000-',
				// 				'totalIncome': 50000
				// 			},
				// 		]
				// 	}
				// },
				{
					"block_slug": "timer",
					"block_state": {
						"title": "станьте лидером <br> <span class='blue-text'>шопс-чарта</span> ",
						"desc": "<p> Это рейтинг с денежными призами для авторов шопсов. Каждая продажа из публикаций продвигает автора в рейтинге и повышает шанс на вознаграждение </p> <p> Чтобы узнать о старте шопс&#8209;чарта, следите за <a href='http://vk.com/adblogger' target='_blank' class='blue-text'>сообществом</a> </p>",
						"img": "./img/timer/img.png",
						"date_start": "2025-10-15T00:00:00Z",
					}
				},
				{
					"block_slug": "advices",
					"block_state": {
						"title": "советы по&nbsp;созданию <br> продающего контента",
						"items_list": [
							{
								"img": "./img/advices/img-1.png",
								"name": "подсвечивайте плюсы товара",
								"list": [
									{
										"text": "Снимайте видеообзоры и&nbsp;ролики в&nbsp;формате «до&nbsp;—&nbsp;после» "
									},
									{
										"text": "Показывайте товар с&nbsp;разных ракурсов"
									},
									{
										"text": "Делитесь личным опытом&nbsp;— это&nbsp;вызывает доверие"
									},
								],
								"btn_link": "https://vk.com/@adblogger-kak-snyat-prodauschii-klip-top-9-scenariev",
								"btn_text": "Читать статью",
							},
							{
								"img": "./img/advices/img-2.png",
								"name": "применяйте сторителлинг",
								"list": [
									{
										"text": "Начните с&nbsp;интриги, чтобы <br class='br-mobile'>захватить <br class='br-desktop'>внимание зрителя"
									},
									{
										"text": "Определите боль, которую <br class='br-mobile'>закрывает товар, <br class='br-desktop'>и&nbsp;расскажите, <br class='br-mobile'>как&nbsp;он это&nbsp;делает "
									},
									{
										"text": "Захватите внимание: <br class='br-mobile'>используйте <br class='br-desktop'>динамичную музыку <br class='br-mobile'>и&nbsp;смену кадров"
									},
								],
								"btn_link": "https://vk.com/@adblogger-kak-ispolzovat-storitelling-chtoby-povysit-prodazhi",
								"btn_text": "Читать статью",
							}
						],
						"bottom_text": "больше идей и&nbsp;лайфхаков",
						"bottom_btn_link": "https://vk.com/@adblogger-baza-znanii-soco",
						"bottom_btn_text": "Узнать",
					}
				},
				{
					"block_slug": "review",
					"block_state": {
						"title": "это работает -- авторы проверяли",
						"review_list": [
							{
								"photo": "./img/review/img-6.png",
								"name": "Анастасия Крекова",
								"tags": [
									{
										"text": "заработала 162К ₽",
										"color": "blue"
									},
									{
										"text": "115К подписчиков",
										"color": "black"
									}
								],
								"text": "<p>Я&nbsp;выбирала товары для своей женской аудитории: средства для дома, косметику. Анализировала реакцию и&nbsp;меняла подход к&nbsp;публикациям. Самыми успешными стали видео <span class='blue-text'>с&nbsp;юмором и&nbsp;примерами из&nbsp;жизни</span>, где я&nbsp;не&nbsp;упоминала товар первые 10&nbsp;секунд. </p> <p> Лучше всего по&nbsp;продажам сработал простой клип с&nbsp;витаминным средством для лица <span class='blue-text'>ценой около 300&nbsp;рублей</span>. </p>",
							},
							{
								"photo": "./img/review/img-4.png",
								"name": "СЕНЯ В ДЕЛЕ",
								"tags": [
									{
										"text": "заработал 110К ₽",
										"color": "blue"
									},
									{
										"text": "526К подписчиков",
										"color": "black"
									}
								],
								"text": "<p>Я&nbsp;выбирал <span class='blue-text'>товары на&nbsp;кулинарную тематику</span> : чай, кофе, мини-принтер для заготовок, мёд, лимонад. Придерживался единой стратегии: <span class='blue-text'>интегрировал рекламу в&nbsp;видеорецепт</span>. Например, готовил кабачковую икру и&nbsp;показывал мини-принтер для заготовок в&nbsp;деле.</p><p>Ролики, которые набрали много просмотров, сгенерировали много продаж.</p>",
							},
							{
								"photo": "./img/review/img-3.png",
								"name": "Николай Трошин",
								"tags": [
									{
										"text": "заработал 65К ₽",
										"color": "blue"
									},
									{
										"text": "4,8К подписчиков",
										"color": "black"
									}
								],
								"text": "<p>Большинство подписчиков младше&nbsp;30, поэтому брал близкие им&nbsp;товары. <br> Мой контент состоит из&nbsp;видео, поэтому <span class='blue-text'>рекламу делал в&nbsp;клипах</span>. </p> <p> Публикаций было много, <span class='blue-text'>менял подход и&nbsp;подводки</span>: для кружки&nbsp;&mdash; про чаепитие, для одежды&nbsp;&mdash; про&nbsp;то, как собрать лук. </p> <p> Самый удачный клип&nbsp;&mdash; с&nbsp;рекламой кофейных зёрен: показал своё утро, как готовлю кофе: <span class='blue-text'>личная история всегда цепляет</span>.</p>",
							},
							{
								"photo": "./img/review/img-2.png",
								"name": "Kiwihealthy",
								"tags": [
									{
										"text": "заработала 60К ₽",
										"color": "blue"
									},
									{
										"text": "30К подписчиков",
										"color": "black"
									}
								],
								"text": "<p>Я&nbsp;веду сообщество о&nbsp;питании, поэтому брала товары по&nbsp;теме и&nbsp;пробовала другие. Лучше всего зашла реклама <span class='blue-text'>крабика для волос</span> : я&nbsp;выкупила его и&nbsp;сняла клип, где мы&nbsp;готовим с&nbsp;дочкой. Её&nbsp;волосы собрала крабиком и&nbsp;сделала на&nbsp;нём акцент. </p> <p> Дальше тоже старалась выкупать товары и&nbsp;внедрять в&nbsp;сюжет. Классно, что <span class='blue-text'>продажи идут спустя время после публикации</span>.</p>",
							},
							{
								"photo": "./img/review/img-1.png",
								"name": "Katya Klon",
								"tags": [
									{
										"text": "заработала 60К ₽",
										"color": "blue"
									},
									{
										"text": "275К подписчиков",
										"color": "black"
									}
								],
								"text": "<p>Когда выбирала товары для рекламы, опиралась на&nbsp;их&nbsp;практичность и&nbsp;актуальность для моего блога. Аудитория хорошо приняла и&nbsp;посты, и&nbsp;клипы, но&nbsp;мне <span class='blue-text'>проще включать рекламу в&nbsp;скетчи</span>&nbsp;&mdash; короткие юмористические сценки на&nbsp;актуальные темы. </p> <p> Это самый популярный формат у&nbsp;подписчиков: именно клипы-скетчи набрали больше всего просмотров&nbsp;&mdash; <span class='blue-text'>и&nbsp;с&nbsp;них случились продажи.</span></p>",
							},
							// {
							// 	"photo": "./img/review/img-5.png",
							// 	"name": "Беречь речь",
							// 	"tags": [
							// 		{
							// 			"text": "120К подписчиков",
							// 			"color": "black"
							// 		}
							// 	],
							// 	"text": "<p>Мой блог&nbsp;&mdash; о&nbsp;русском языке: думала, будет сложно интегрировать товары. </p> <p> Оказалось, женская аудитория готова воспринимать рекламу со&nbsp;знакомыми вещами: <span class='blue-text'>чаще всего покупали одежду</span>. Для выбора следующего продукта я&nbsp;анализировала отклик, репосты, переходы и&nbsp;покупки, а&nbsp;лучшая реакция была на&nbsp;<span class='blue-text'>клип с&nbsp;неожиданной концовкой</span>. </p>",
							// },
						]
					}
				},
				// {
				// 	"block_slug": "case_preview",
				// 	"block_state": {
				// 		"title": "это работает — мы проверяли",
				// 		"subtitle": "Как авторы ВКонтакте за&nbsp;месяц увеличили заработок <br class='br-desktop'>на&nbsp;6,5&nbsp;млн&nbsp;₽ за&nbsp;счёт нативного контента",
				// 		"name": "Ролик на миллион",
				// 		"img": "./img/case-preview/img.png",
				// 		"img_mob": "./img/case-preview/img_mob.png",
				// 		"desc": "Как авторы ВКонтакте заработали больше 7&nbsp;млн на&nbsp;рекламе товаров Ozon",
				// 		"number_list": [
				// 			{
				// 				"number": "1 568 авторов",
				// 				"label": "разместили рекламу",
				// 				"icon": "./img/case-preview/icon-1.svg",
				// 			},
				// 			{
				// 				"number": "4,9 млн рублей",
				// 				"label": "заработали на клипах",
				// 				"icon": "./img/case-preview/icon-2.svg",
				// 			},
				// 			{
				// 				"number": "1,6 млн рублей",
				// 				"label": "заработали на постах",
				// 				"icon": "./img/case-preview/icon-3.svg",
				// 			},
				// 			{
				// 				"number": "12 млн просмотров",
				// 				"label": "собрал контент",
				// 				"icon": "./img/case-preview/icon-4.svg",
				// 			},

				// 		],
				// 		"text": "Авторы выбирали товары Ozon для&nbsp;рекламы и&nbsp;создавали с&nbsp;ними публикации, прикрепляя ссылку на&nbsp;покупку. По&nbsp;результатам рекламной кампании мы выяснили, что&nbsp;пользователи кликают по&nbsp;нативной рекламе на&nbsp;188% чаще, чем по&nbsp;обычной. Подробности&nbsp;— в&nbsp;кейсе.",
				// 		"btn_link": "/top-cases/case-for-authors",
				// 		"btn_text": "Подробнее",
				// 	}
				// },
				{
					"block_slug": "cases_slider",
					"block_state": {
						"title": "взгляните на&nbsp;шопсы в&nbsp;деле",
						"gallery": [
							{
								"video": "./video/clips/8.mp4",
								"poster": "./img/cases-slider/img-8.png",
							},
							{
								"video": "./video/clips/6.mp4",
								"poster": "./img/cases-slider/img-6.png",
							},
							{
								"video": "./video/clips/7.mp4",
								"poster": "./img/cases-slider/img-7.png",
							},
							{
								"video": "./video/clips/1.mp4",
								"poster": "./img/cases-slider/img-1.png",
							},
							{
								"video": "./video/clips/2.mp4",
								"poster": "./img/cases-slider/img-2.png",
							},
							{
								"video": "./video/clips/3.mp4",
								"poster": "./img/cases-slider/img-3.png",
							},
							{
								"video": "./video/clips/4.mp4",
								"poster": "./img/cases-slider/img-4.png",
							},
							{
								"video": "./video/clips/5.mp4",
								"poster": "./img/cases-slider/img-5.png",
							},
							{
								"video": "./video/clips/9.mp4",
								"poster": "./img/cases-slider/img-9.png",
							},
						],
					}
				},

				{
					"block_slug": "money",
					"block_state": {
						"title": "пора пробовать&nbsp;— <br>и&nbsp;получать деньги",
						"has_border": "false",
						"btn_text": "начать зарабатывать",
						"btn_link": "/app"
					}
				},
				{
					"block_slug": "faq",
					"block_state": {
						"faqList": [
							{
								"question": "Что&nbsp;такое шопсы ВКонтакте?",
								"answer": "Шопсы&nbsp;&mdash; это рекламные посты и&nbsp;клипы, в&nbsp;которых есть ссылка на&nbsp;товар. По&nbsp;ней пользователи могут сразу перейти к&nbsp;покупке."
							},
							{
								"question": "Какие сообщества могут использовать инструмент?",
								"answer": "<ul> <li>Сообщество подключено к&nbsp;VK&nbsp;AdBlogger</li> <li>В&nbsp;нём больше 1000&nbsp;подписчиков</li> <li>Есть хотя&nbsp;бы одна публикация за&nbsp;последние 30&nbsp;дней</li> <li>Cоответствует <a href='https://adblogger.vk.com/documents/groups_moderation' target='_blank'>требованиям модерации</a> и <a href='https://adblogger.vk.com/documents/offer_creator_products' target='_blank'>оферте</a> VK AdBlogger </li> <li>В сообществе публикуется качественный контент</li> <li>У&nbsp;автора есть самозанятость, ИП или&nbsp;юрлицо с&nbsp;российским ИНН</li> </ul> <p>Если сообщество перестанет соответствовать условиям или&nbsp;не&nbsp;будет соблюдать правила платформы, в&nbsp;нём нельзя будет рекламировать товары с&nbsp;Ozon через VK&nbsp;AdBlogger.</p>"
							},
							{
								"question": "Можно&nbsp;ли использовать инструмент сразу в&nbsp;нескольких сообществах?",
								"answer": 'Да, вы&nbsp;можете подключить к&nbsp;программе все сообщества, которые соответствуют условиям.'
							},
							{
								"question": "Как начать рекламировать товары в&nbsp;шопсах?",
								"answer": '<ol><li>Создайте кабинет в&nbsp;VK&nbsp;AdBlogger. Как это сделать&nbsp;&mdash; рассказали в&nbsp;<a href="https://vk.com/@adblogger-faq-po-platforme-vk-adblogger" target="_blank">статье</a></li><li>Авторизуйтесь на&nbsp;adblogger.vk.com и&nbsp;найдите раздел &laquo;Товары&raquo; в&nbsp;левом меню</li><li>В&nbsp;каталоге выберите товар для продвижения и&nbsp;нажмите &laquo;Взять в&nbsp;работу&raquo;</li><li>Напишите пост о&nbsp;товаре или снимите клип. В&nbsp;описание добавьте ссылку на&nbsp;товар из&nbsp;заявки&nbsp;&mdash; платформа автоматически прикрепит товар к&nbsp;публикации</li><li>Отправьте контент на&nbsp;модерацию&nbsp;&mdash; обычно она занимает не&nbsp;больше суток</li><li>Когда контент пройдёт модерацию, запланируйте дату публикации</li></ol><p>Кампания по&nbsp;продвижению длится 30&nbsp;дней&nbsp;&mdash; она начинается в&nbsp;тот момент, когда пост или клип будет опубликован. Вы&nbsp;получите проценты за&nbsp;продажи, которые произойдут по&nbsp;вашей ссылке в&nbsp;этот период.</p>'
							},
							{
								"question": "Какие есть ограничения?",
								"answer": '<p> В&nbsp;месяц вы&nbsp;можете брать максимум 10&nbsp;заявок. При этом одновременно в&nbsp;статусе &laquo;В&nbsp;работе&raquo; может быть только 3&nbsp;товара&nbsp;&mdash; как только запланируете публикацию с&nbsp;одним из&nbsp;них, сможете взять новую заявку. </p>'
							},
							{
								"question": "Ограничения действуют во&nbsp;всех сообществах сразу?",
								"answer": '<p> Лимиты распространяются на&nbsp;одно сообщество: </p> <ul> <li>если вы&nbsp;опубликовали за&nbsp;месяц суммарно 5&nbsp;заявок только в&nbsp;одном сообществе, то&nbsp;в&nbsp;нём сможете взять ещё 5&nbsp;заявок, а&nbsp;в&nbsp;остальных&nbsp;&mdash; всё так&nbsp;же 10 </li> <li>если у&nbsp;вас в&nbsp;работе одновременно 3&nbsp;заявки в&nbsp;одном сообществе, то&nbsp;в&nbsp;нём брать новые заявки пока не&nbsp;получится. В&nbsp;других ваших сообществах это сделать можно&nbsp;&mdash; их&nbsp;лимит не&nbsp;расходуется </li> </ul>'
							},
							{
								"question": "Нужно&nbsp;ли согласовывать креатив с&nbsp;рекламодателем?",
								"answer": 'Нет. Посты или&nbsp;клипы с&nbsp;рекламой товаров согласовывать не&nbsp;нужно.'
							},
							{
								"question": "Что&nbsp;делать с&nbsp;обязательной маркировкой рекламы?",
								"answer": 'VK&nbsp;AdBlogger берёт на&nbsp;себя вопросы маркировки и&nbsp;автоматически регистрирует авторов в&nbsp;операторе рекламных данных. С&nbsp;вас&nbsp;&mdash; только качественный контент.'
							},
							{
								"question": "Из&nbsp;чего будет складываться мой доход?",
								"answer": '<p id="anchor-calculator">Доход за&nbsp;продвижение товара Ozon на&nbsp;старте программы складывается из&nbsp;процентов от&nbsp;продажи товара. </p> <ul> <li> Выплачивается через 14&nbsp;дней после продажи&nbsp;&mdash; ровно сколько времени будет у&nbsp;покупателя, чтобы вернуть товар </li> <li> Если покупатель вернёт товар, процент начислен не&nbsp;будет </li> <li> Если товар купят после завершения рекламной кампании, то&nbsp;есть через 30&nbsp;дней после публикации, то&nbsp;проценты не&nbsp;начислятся </li> <li> Цены на&nbsp;один и&nbsp;тот&nbsp;же товар могут отличаться&nbsp;&mdash; на&nbsp;Ozon они зависят от&nbsp;города покупателя и&nbsp;других параметров. Поэтому и&nbsp;процент от&nbsp;продаж одного и&nbsp;того&nbsp;же товара может быть разным </li> </ul> <p> В&nbsp;будущем условия выплат могут измениться. </p>'
							},
							{
								"question": "Как отслеживать продажи товара?",
								"answer": 'Перейдите в&nbsp;личный кабинет автора VK&nbsp;AdBlogger и&nbsp;найдите нужную рекламную публикацию в&nbsp;разделе &laquo;Заявки&raquo;&nbsp;&mdash; здесь будет статистика по&nbsp;совершённым покупкам по&nbsp;вашей ссылке. Данные подгружаются в&nbsp;кабинет в&nbsp;течение 3&ndash;4 часов после оплаты.'
							},
							{
								"question": "Как часто обновляется статистика публикаций?",
								"answer": 'Статистика публикаций обновляется в&nbsp;течение 24&nbsp;часов. Если этого не&nbsp;происходит&nbsp;&mdash; напишите в&nbsp;<a href="https://vk.me/club225265420" target="_blank">Поддержку</a>.'
							},
							{
								"question": "Как удалить рекламную публикацию?",
								"answer": '<ol> <li> Перейдите в&nbsp;раздел &laquo;Заявки&raquo; и&nbsp;найдите&nbsp;ту, которую хотите удалить </li> <li> Откройте заявку и&nbsp;нажмите на&nbsp;три точки в&nbsp;правом верхнем углу, затем &laquo;Отклонить заявку&raquo;. Пост удалится автоматически, а&nbsp;чтобы удалить клип&nbsp;&mdash; напишите в&nbsp;<a href="https://vk.me/club225265420" target="_blank">Поддержку</a>. </li> </ol> <p> После этого вы&nbsp;сможете брать в&nbsp;работу на&nbsp;1&nbsp;заявку меньше&nbsp;&mdash; в&nbsp;месяц и&nbsp;одновременно. Ограничение будет действовать до&nbsp;конца текущего месяца. </p>'
							},
							{
								"question": "Могу&nbsp;ли я&nbsp;использовать инструмент, если уже зарабатываю через другие программы монетизации?",
								"answer": 'Да, вы&nbsp;можете рекламировать товары с&nbsp;Ozon через VK&nbsp;AdBlogger, даже если уже используете другие инструменты монетизации ВКонтакте.'
							},
							{
								"question": "Как&nbsp;создавать качественный контент, набирающий охваты?",
								"answer": '<ul> <li> Создавайте нативный контент: публикации с&nbsp;товарами должны гармонично вписываться в&nbsp;ваше сообщество. Чем креативнее интеграция, тем больше интереса она вызовет. </li> <li> Используйте сторителлинг и&nbsp;рассказывайте о&nbsp;личном опыте: чем&nbsp;вам понравился товар, какие проблемы решил и&nbsp;так далее. Истории вызывают эмоции&nbsp;&mdash; это поможет подписчикам увидеть реальную ценность продукта. </li> <li> Снимайте привлекательные фото и&nbsp;видео: так читатели подробнее изучат товар и&nbsp;быстрее решатся на&nbsp;покупку. Не&nbsp;забывайте показывать товар в&nbsp;действии и&nbsp;снимать его с&nbsp;разных ракурсов. </li> </ul> <p> Больше советов по&nbsp;созданию и&nbsp;продвижению контента можно найти в&nbsp;<a href="https://vk.com/@adblogger-baza-znanii-soco" target="_blank">Базе знаний для авторов</a>. </p>'
							},
							{
								"question": "Куда&nbsp;можно написать, если остались вопросы?",
								"answer": '<p>По&nbsp;любым вопросам о&nbsp;VK AdBlogger можете обращаться в&nbsp;<a href="https://vk.me/club225265420" target="_blank">Поддержку</a>.</p>'
							},
							// {
							// 	"question": "Как&nbsp;начать продвигать контент с&nbsp;товарами Ozon?",
							// 	"answer": '<p>Начать работу можно в&nbsp;личном кабинете VK&nbsp;AdBlogger. Как&nbsp;его создать&nbsp;— рассказали в&nbsp;<a href="https://vk.com/@-225265420-faq-po-platforme-vk-adblogger" target="_blank">статье</a>.</p> <ol> <li>Авторизуйтесь на&nbsp;<a href="https://adblogger.vk.com/for-authors" target="_blank">adblogger.vk.com</a> и&nbsp;найдите раздел «Товары» в&nbsp;левом меню</li> <li>В&nbsp;каталоге выберите товар для&nbsp;продвижения и&nbsp;нажмите «Взять в&nbsp;работу» </li> <li>Напишите пост о&nbsp;товаре или&nbsp;загрузите клип. В&nbsp;описание добавьте ссылку на&nbsp;товар из&nbsp;заявки&nbsp;— платформа автоматически прикрепит товар к&nbsp;публикации </li> <li>Отправьте контент на&nbsp;модерацию&nbsp;— обычно она занимает не&nbsp;больше суток </li> <li>Когда&nbsp;контент пройдёт модерацию, запланируйте дату публикации </li> </ol> <p>Кампания по&nbsp;продвижению длится 30&nbsp;дней&nbsp;— она начинается в&nbsp;тот момент, когда пост или&nbsp;клип будет опубликован. Вы получите проценты за&nbsp;продажи, которые произойдут по&nbsp;вашей ссылке в&nbsp;этот период </p>'
							// },
							// {
							// 	"question": "В&nbsp;каких форматах можно разместить рекламу? ",
							// 	"answer": "В&nbsp;разделе «Посевы» рекламодатель создаёт креатив в&nbsp;формате поста с&nbsp;картинкой или&nbsp;видео, автор размещает его в&nbsp;своём сообществе.<br><br> В&nbsp;разделе «Заказ контента» рекламодатель создаёт бриф на&nbsp;пост или&nbsp;клип, а&nbsp;автор создаёт контент по&nbsp;ТЗ рекламодателя и&nbsp;размещает в&nbsp;своём сообществе."
							// },
							// {
							// 	"question": "Что&nbsp;будет, если опубликовать контент со&nbsp;сторонней ссылкой?",
							// 	"answer": '<p >Опубликовать контент со&nbsp;сторонней ссылкой не&nbsp;получится. В&nbsp;тексте поста и&nbsp;описании клипа может быть только ссылка на&nbsp;товар Ozon, которая прикреплена к&nbsp;заявке в&nbsp;VK&nbsp;AdBlogger. Это&nbsp;нужно, чтобы&nbsp;посчитать количество продаж именно из&nbsp;вашей публикации.</p>'
							// },
							// {
							// 	"question": "Какую выплату я получу, если публикация не&nbsp;наберёт просмотры?",
							// 	"answer": '<p> Вы получите минимальную выплату за&nbsp;первые 3&nbsp;публикации в&nbsp;сообществе, если контент набрал хотя&nbsp;бы 25% от&nbsp;целевых просмотров. Размер зависит от&nbsp;формата контента (пост или&nbsp;клип) и&nbsp;числа подписчиков в&nbsp;сообществе. </p> <img src="/img/faq/img-3.jpg" alt="img" width="100%"> <img src="/img/faq/img-4.jpg" alt="img" width="100%"> <p> Пример. Вы опубликовали в&nbsp;сообществе на&nbsp;64&nbsp;тысячи подписчиков 2&nbsp;рекламных поста и&nbsp;клип, но&nbsp;не&nbsp;набрали нужное число просмотров, чтобы&nbsp;получить фиксированные выплаты. </p> <p> При&nbsp;этом публикации набрали 25% от&nbsp;целевых просмотров, поэтому вам доступна минимальная выплата&nbsp;— она составит 900 + 900 + 2&nbsp;500 = 4&nbsp;300&nbsp;₽. Если&nbsp;у&nbsp;вас несколько сообществ, сможете получить минимальные выплаты за&nbsp;первые 3&nbsp;публикации в&nbsp;каждом из&nbsp;них&nbsp;— при&nbsp;условии, что&nbsp;контент набрал хотя&nbsp;бы 25% от&nbsp;порога просмотров. </p>'
							// },
							// {
							// 	"question": "Зачем заполнять реквизиты?",
							// 	"answer": "После регистрации личного кабинета или авторизации и перед тем, как пополнить баланс рекламного кабинета и создать посев, рекламодателю нужно указать свои юридические реквизиты.<br><br>Все рекламодатели без исключения должны заполнить реквизиты. Набор полей здесь отличается в зависимости от типа аккаунта: ООО, ИП.<br><br>Заполнение реквизитов необходимо для:  <ul><li>получения закрывающих документов;</li> <li>пополнения баланса рекламного кабинета;</li> <li>автоматической маркировки рекламы</li></ul>"
							// },
							// {
							// 	"question": "Как работает маркировка рекламы? ",
							// 	"answer": "В VK AdBlogger процесс маркировки креатива и получения токена (erid) полностью автоматизирован. Рекламодателям не нужно ежемесячно отчитываться в ОРД, акты и статистика по ним отправляются автоматически."
							// },
							// {
							// 	"question": "Как изменить реквизиты?",
							// 	"answer": "Чтобы внести изменения в реквизиты, нужно обратиться в техподдержку: <a href='https://vk.me/club225265420'>vk.cc/cyEF76</a>. Самостоятельно изменить их в личном кабинете нельзя."
							// },
							// {
							// 	"question": "Как пополнить баланс?",
							// 	"answer": "Если кабинет рекламодателя зарегистрирован на ООО или ИП, то пополнить бюджет можно, выставив счёт. Для этого нужно перейти на страницу «Бюджет», нажать на кнопку «Выставить счёт».<br><br>После этого будет сформирован счёт на оплату. Счёт можно скачать на устройство или отправить на email («Отправить счёт на почту»). Чтобы скопировать только номер счёта, нужно нажать «Копировать».<br><br>Минимальная сумма, которую может внести рекламодатель: 600 рублей. На счёт поступит сумма после вычета НДС (20%)."
							// },
							// {
							// 	"question": "Что такое заказ контента?",
							// 	"answer": "В разделе «Контент на заказ» рекламодатель может создать бриф (задание) на заказ у автора нативной рекламы. Он описывает задачу, уточняет пожелания по содержанию рекламного поста, сроки выхода.<br><br>Если автор принимает заявку на пост, он создаёт контент и согласует его с рекламодателем. Когда пост согласован, он отправляется на модерацию, а после — его можно запланировать на нужную дату или опубликовать сразу."
							// },
							// {
							// 	"question": "Как автор и рекламодатель общаются в разделе «Заказ контента»? ",
							// 	"answer": "Рекламодатель указывает в брифе контакты, по которым автор может обратиться к нему и уточнить всю нужную информацию по будущему рекламному посту. "
							// },
							// {
							// 	"question": "Можно ли отменить рекламную заявку? ",
							// 	"answer": "Отменить заявку на размещение креатива и рекламодатель, и автор могут не позже, чем за 1 час до публикации.<br><br>Если автор не отвечает на заявку, она автоматически отменяется за час до конца указанных сроков выхода поста. "
							// },
							// {
							// 	"question": "Могу ли я получить за одну публикацию и минимальную, и фиксированную выплаты?",
							// 	"answer": 'Нет. Если ваша публикация набрала порог просмотров, вы получите только фиксированную выплату. Минимальные выплаты начисляются за первые 3 публикации — и только если пост или клип не набрал нужное число просмотров, но получил 25% от установленного порога.'
							// },
						]
					}
				}
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
		{
			"slug": "case-5",
			"title": "Из&nbsp;ВКонтакте — на&nbsp;маркетплейсы: как&nbsp;Levrana использовала посевы для&nbsp;продажи новых товаров",
			"seo_title": "Кейс производителя косметики Levrana в VK AdBlogger",
			"seo_desc": "«Леврана» использовала VK AdBlogger для продвижения товаров на Wildberries, увеличив продажи на 20% и снизив цену за клик до 6,5 ₽. В ходе теста команда оптимизировала креативы, что привело к улучшению результатов и решению масштабировать кампанию.",
			"desc": "Как Levrana использовала посевы для&nbsp;продажи новых товаров",
			"preview_img": "/img/case/img-5.png",
			"preview_img_main": "/img/case/img-5_main.png",
			"preview_img_small": "/img/case/img-5.png",
			"preview_img_vertical": "/img/case/img-5_vertical.png",
			"logo": "/img/case/icon-5.svg",
			"card_label": "Levrana",
			"brand_name": "Популярный российский бренд косметики",
			"tags": [
				{
					"created_at": "2024-10-17T01:58:12.000000Z",
					"id": 2,
					"laravel_through_key": 4,
					"slug": "for-authors",
					"title": "Авторам",
					"updated_at": "2024-10-17T01:58:12.000000Z"
				}
			],
			"blocks": [
				{
					"block_type": "text",
					"title": "",
					"text": "<p>Команда компании «Леврана» решила использовать инструменты VK AdBlogger для&nbsp;продвижения товаров развивающегося бренда. Они&nbsp;подобрали сообщества из&nbsp;каталога со&nbsp;своей целевой аудиторией и&nbsp;протестировали разные креативы. В&nbsp;итоге&nbsp;получили положительную динамику продаж на&nbsp;маркетплейсе Wildberries.</p>"
				},
				{
					"block_type": "tile",
					"tile_items": [
						{
							"name": "Увеличили количество продаж",
							"desc": "на 20 %",
							"desc_font_size": "48px"
						},
						{
							"name": "Цена за клик",
							"desc": "6,5 рубля",
							"desc_font_size": "48px"
						}
					]
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<p><b>Цели кампании:</b>  увеличить продажи продуктов Levrana на Wildberries.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>О рекламодателе</h2><p>Levrana занимается производством косметических средств, БАДов и&nbsp;бытовой нехимии. Компания на&nbsp;рынке с&nbsp;2014&nbsp;года.</p> <p><br>Проблема: перегретые ставки на&nbsp;маркетплейсах. </br> Решение: посевы ВКонтакте.</b></p> <p>VK AdBlogger — новый инструмент для&nbsp;компании. Команда решила использовать его&nbsp;для&nbsp;посевов ВКонтакте из-за&nbsp;перегретых ставок на&nbsp;маркетплейсах — основном канале продаж продуктов.</p> <p><b>Цель Levrana</b> — повысить продажи на&nbsp;маркетплейсах.</p> <p>Команда следила за&nbsp;динамикой продаж конкретных товаров в&nbsp;кабинете маркетплейса после рекламы. А эффективность самих креативов оценивали по&nbsp;стоимости клика (CPC).</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Что в фокусе?</h2><ul><li>Стоимость клика</li><li>Динамика продаж на маркетплейсе</li></ul>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Креативы бренда</h2>"
				},
				{
					"block_type": "gallery",
					"images": [
						"/img/case/article-5-2.png",
						"/img/case/article-5-1.png"
					]
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<p>Для теста выбрали несколько товаров одного из&nbsp;развивающихся брендов компании.</p> <p>На&nbsp;первых этапах нужно было протестировать креативы и&nbsp;выбрать самые эффективные, поэтому использовали разные тексты: от&nbsp;коротких «кликбейтов» до&nbsp;больших постов с&nbsp;подробными УТП товаров. Визуалы для&nbsp;посевов не&nbsp;создавали специально, а&nbsp;использовали те&nbsp;же, что публиковались в&nbsp;соцсетях бренда.</p> <p>Всего протестировали 16 постов, из&nbsp;них выбрали два самых успешных и&nbsp;запустили посевы с&nbsp;ними в&nbsp;VK&nbsp;AdBlogger. Но&nbsp;в&nbsp;процессе решили, что нужно создать новые креативы с&nbsp;визуалами специально для&nbsp;посевов через нашу платформу.</p> <p><b>Важно было получить максимальный охват при&nbsp;заданном бюджете</b></p> <p>При&nbsp;выборе сообществ настроили фильтр так, чтобы подобрать сообщества с&nbsp;высокими охватами, и&nbsp;добавляли в&nbsp;корзину те, что&nbsp;укладывались в&nbsp;бюджет каждого продвижения.</p> <p>Также подбирали сообщества с&nbsp;целевой аудиторией «женщины старше 35&nbsp;лет». </br> </p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Итог теста — увеличили количество продаж на 20 %</h2> <p><b>Решено масштабировать кампанию и&nbsp;использовать посевы ВКонтакте</b></p> <p>На&nbsp;первом этапе команда Levrana вышла «в&nbsp;ноль» — сколько потратили на&nbsp;продвижение, столько дополнительно и&nbsp;заработали. Такой результат они оценили как&nbsp;положительный, ведь тестировали товары «развивающегося» бренда компании, где&nbsp;главная задача — увеличить оборот. Поэтому важен был любой дополнительный заказ на&nbsp;Wildberries, чтобы поднять позиции карточек в&nbsp;общем каталоге маркетплейса.</br> Далее, когда выделили по-настоящему рабочие креативы и&nbsp;снизили CPO (cost per order — стоимость за заказ), в&nbsp;юнит-экономике появились положительные значения. В&nbsp;итоге&nbsp;Levrana суммарно увеличила количество продаж на&nbsp;20 % и&nbsp;получила цену за&nbsp;клик всего 6,5&nbsp;рубля.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Вывод</h2> <p>«Успех размещений на&nbsp;90 % зависит от&nbsp;креатива. В&nbsp;нашем случае использовать в&nbsp;качестве медиаматериалов то, что “было под рукой”, — скорее ошибка. Сейчас на&nbsp;создание креативов для&nbsp;посевов мы&nbsp;выделяем отдельные ресурсы.</p> <p>И&nbsp;также важно учитывать, что&nbsp;реклама в&nbsp;сообществах ВКонтакте сработает, если у вас действительно есть товар, который заинтересует потребителя. В&nbsp;этом случае посевы — это ещё одна возможность донести такой товар до&nbsp;клиента», — бренд-менеджер компании «Леврана».</p>"
				}
			]
		},
		{
			"slug": "case-6",
			"title": "EveLux: ещё больше продаж, ещё ниже стоимость привлечения",
			"seo_title": "Кейс бренда EveLux Professional в VK AdBlogger",
			"seo_desc": "EveLux Professional увеличил продажи на маркетплейсах Ozon и Wildberries с помощью VK AdBlogger. Кампания снизила стоимость заказа и добавления в корзину на 40-43%, увеличив продажи до 35 в день при бюджете 100 000₽.",
			"desc": "Как увеличить продажи <br class='br-desktop'>на маркетплейсах",
			"preview_img": "/img/case/img-6.png",
			"preview_img_main": "/img/case/img-6.png",
			"preview_img_small": "/img/case/img-6.png",
			"preview_img_vertical": "/img/case/img-6.png",
			"logo": "/img/case/icon-6.svg",
			"card_label": "EveLux",
			"brand_name": "Бренд профессиональных средств для волос",
			"tags": [
				{
					"created_at": "2024-10-17T01:58:12.000000Z",
					"id": 2,
					"laravel_through_key": 4,
					"slug": "for-authors",
					"title": "Авторам",
					"updated_at": "2024-10-17T01:58:12.000000Z"
				}
			],
			"blocks": [
				{
					"block_type": "text",
					"title": "",
					"text": "<p> Для бренда профессиональных средств для&nbsp;волос EveLux Professional маркетплейсы <a href='https://www.ozon.ru/category/uhod-za-volosami-6584/evelux-professional-100987438/?brand_was_predicted=true&category_was_predicted=true&deny_category_prediction=true&from_global=true&text=evelux+professional&abt_att=1' target='_blank'>Ozon</a> и <a href='https://www.wildberries.ru/seller/799611' target='_blank'>Wildberries</a> — основные площадки продаж. <a href='https://vk.com/cerebro_vk' target='_blank'>Команда «Церебро Таргет»</a> протестировала VK AdBlogger, чтобы увеличить продажи бренда на этих площадках и&nbsp;снизить стоимость привлечения клиентов. В итоге — рост числа заказчиков и&nbsp;ниже стоимость целевых действий. </p>"
				},
				{
					"block_type": "tile",
					"tile_items": [
						{
							"name": "Стоимость заказа </br> (cost per order)",
							"desc": "ниже на 40%",
							"desc_font_size": "48px"
						},
						{
							"name": "Стоимость добавления в корзину",
							"desc": "ниже на 43%",
							"desc_font_size": "48px"
						}
					]
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<p><p><b>Цели кампании:</b></p> <ul> <li>стабильные 30 продаж в день при бюджете 100 000 ₽ на один товар; </li> <li>стоимость заказа (CPO — cost per order) ниже 111 ₽ .</li> </ul></p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>О рекламодателе</h2> <p> EveLux Professional — бренд профессиональных средств для&nbsp;волос, основан в&nbsp;2022&nbsp;году. Товары производят на&nbsp;фабриках в&nbsp;Республике Беларусь и&nbsp;в&nbsp;России, а&nbsp;продают на&nbsp;маркетплейсах <a href='https://www.ozon.ru/category/uhod-za-volosami-6584/evelux-professional-100987438/?brand_was_predicted=true&category_was_predicted=true&deny_category_prediction=true&from_global=true&text=evelux+professional' target='_blank'>Ozon</a> и&nbsp;<a href='https://www.wildberries.ru/seller/799611' target='_blank'>Wildberries</a> . </p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Что в фокусе?</h2><ul><li>Стоимость заказа (CPO — cost per order).</li><li>Стоимость добавления товара в корзину.</li></ul>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Креативы бренда</h2><p> Для рекламы выбрали один товар — крем-спрей. Использовали 16 оригинальных креативов, всего размещений было 555. <br> Для рекламы использовали видео в формате обзоров, которые в предыдущих рекламных кампаниях показали максимальную эффективность. В самих роликах обязательно указывали конкретные маркетплейсы, где можно заказать товар. </p> <p> Чтобы увеличить конверсию в целевое действие, в креативы добавили число отзывов на маркетплейсе, среднюю оценку товара. И рассказали о скидке при заказе — это помогло создать для покупателей образ выгодной покупки. </p>"
				},
				{
					"block_type": "gallery",
					"images": [
						"/img/case/article-6-1.png",
						"/img/case/article-6-2.png"
					]
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Аудитория</h2> <p> Сообщества фильтровали по CPM, охватам, проценту женской аудитории, количеству рекламных постов, оптимальной стоимости размещения и числу подписчиков. </p> <p> Ключевой фактор при выборе сообществ — охваты. Стояла задача охватить широкую аудиторию и снизить средний CPM, но также попасть в ЦА, поэтому было важно отобрать сообщества именно с целевой аудиторией. </p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>В итоге: увеличили количество продаж в день и&nbsp;получили стоимость заказа ниже на 40%.</h2> <p> Кампания в VK AdBlogger продолжалась с 4 октября по 8 января. За это время выросло число просмотров карточки товара, добавлений в корзину и продаж, если сравнить те же показатели в момент продвижения через Маркет-платформу ВКонтакте. А главное — снизились стоимости заказа и добавления в корзину. </p>"
				},
				{
					"block_type": "gallery",
					"images": [
						"/img/case/article-6-3.png"
					]
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<p> В VK AdBlogger при меньших затратах бюджета удалось получить больший охват: средний CPM — 45,5 рубля, что на 26% ниже, чем на Маркет-платформе, а стоимость клика в 2 раза меньше — всего 7,2 рубля. </p> <p> Бренд получил больше переходов при меньших охватах и затратах на рекламу, а также больше продаж и добавлений в корзину по более низкой цене. </p> <p><b>В VK&nbsp;AdBlogger при&nbsp;меньших затратах удалось снизить цену за&nbsp;клик, за&nbsp;продажу и&nbsp;добавление в&nbsp;корзину.</b></p> <p> Среднее число продаж в день — 35, что даже выше поставленной цели. К тому же оно будет увеличиваться, так как не все товары заказываются в день добавления в корзину </p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Вывод</h2> <p> «Опыт работы с VK AdBlogger — положительный. Очень понятный дашборд, который помогает анализировать динамику закупок, но самая удобная фишка — возможность купить рекламу в один клик у всей подборки сообществ. </p> <p> VK AdBlogger можно назвать хорошим инструментом для посевов, средний СРМ здесь ниже, чем на Маркет-платформе ВКонтакте, результаты лучше за счёт бо́льшего количества показов за прежние бюджеты. </p> <p> Надеемся, что вскоре на площадке будет ещё больше сообществ, чтобы можно было масштабировать кампании и находить свою ЦА в разных тематических группах», — команда «Церебро Таргет».</p>"
				}
			]
		},
		{
			"slug": "drivee",
			"title": "Drivee: увеличили охваты в&nbsp;2&nbsp;раза за&nbsp;счёт посевов на&nbsp;узкую аудиторию",
			"seo_title": "Кейс бренда Drivee в VK AdBlogger",
			"seo_desc": "Сервис Drivee запустил медийную кампанию с посевами через VK AdBlogger. Запуск помог решить две задачи: сообщить водителям и пассажирам об открытии сервиса в Стрежевом, а также повысить охваты в других городах.",
			"desc": "Повысили охваты и сохранили CPV",
			"preview_img": "/img/case/img-11.png",
			"preview_img_main": "/img/case/img-11.png",
			"preview_img_small": "/img/case/img-11.png",
			"preview_img_vertical": "/img/case/img-11_vertical.png",
			"logo": "/img/case/icon-11.svg",
			"card_label": "Drivee",
			"brand_name": "Cервис заказа городских поездок ",
			"tags": [
				{
					"created_at": "2024-10-17T01:58:12.000000Z",
					"id": 2,
					"laravel_through_key": 4,
					"slug": "for-authors",
					"title": "Авторам",
					"updated_at": "2024-10-17T01:58:12.000000Z"
				}
			],
			"blocks": [
				{
					"block_type": "text",
					"title": "",
					"text": "<p>Сервис Drivee запустил медийную кампанию с&nbsp;посевами через VK&nbsp;AdBlogger. Запуск помог решить две задачи: сообщить водителям и&nbsp;пассажирам об&nbsp;открытии сервиса в&nbsp;Стрежевом, а&nbsp;также повысить охваты в&nbsp;других городах.</p>"
				},
				{
					"block_type": "tile",
					"tile_items": [
						{
							"name": "Увеличили охваты",
							"desc": "в 2 раза",
							"desc_font_size": "48px"
						},
						{
							"name": "Получили CPV",
							"desc": "0,41 ₽",
							"desc_font_size": "48px"
						}
					]
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>О&nbsp;рекламодателе</h2> <p><a href='https://drivee.com/' target='_blank'>Drivee</a> — приложение для&nbsp;заказа городских поездок, где&nbsp;водитель и&nbsp;пассажир договариваются о&nbsp;цене. Пассажир указывает стоимость, которую готов отдать за&nbsp;поездку, а&nbsp;водитель соглашается или&nbsp;предлагает свою цену.</p> <p>PR-департамент сервиса работает над&nbsp;ростом узнаваемости бренда в&nbsp;социальных сетях. До&nbsp;марта 2025&nbsp;года размещали рекламу только в&nbsp;Telegram-каналах через биржу Telega.in. Но, когда сервис запустил работу в&nbsp;городе Стрежевом с&nbsp;населением 39&nbsp;000&nbsp;человек, оказалось, что&nbsp;в&nbsp;Telegram нет городских сообществ&nbsp;— и&nbsp;Drivee нашли их&nbsp;ВКонтакте.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Цели продвижения и&nbsp;KPI</h2><ul><li>Рассказать жителям Стрежевого о&nbsp;запуске Drivee в&nbsp;их&nbsp;городе&nbsp;— чтобы&nbsp;водители и&nbsp;пассажиры скачали приложение</li><li>Повысить охваты в&nbsp;7 городах присутствия&nbsp;— и&nbsp;сохранить CPV не&nbsp;выше 0,5&nbsp;рубля</li></ul>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Целевая аудитория</h2><p>Два сегмента: потенциальные водители и&nbsp;пассажиры сервиса.</p><p>Все они&nbsp;— подписчики городских сообществ Стрежевого, Нижневартовска, Омска, Сургута, Тольятти, Самары, Волгограда и&nbsp;Оренбурга.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": '<h2>Креативы бренда</h2><p>Бренд запускал посевы в&nbsp;рамках двух кампаний, для&nbsp;каждой разработали свой креатив.</p> <div class="row"> <div class="column"> <p style="color: #00D3E6;"><b>Для&nbsp;водителей и&nbsp;пассажиров из&nbsp;Стрежевого</b></p> <p> Цель&nbsp;— мотивировать жителей города скачать приложение. В&nbsp;креативе пассажирам предлагали скидку 50% на&nbsp;первые три поездки, а&nbsp;водителям&nbsp;— нулевую комиссию за&nbsp;использование сервиса. </p> <img src="/img/case/article-11-1.png" alt="img"> </div> <div class="column"> <p style="color: #00D3E6;"><b>Для&nbsp;потенциальных пассажиров из&nbsp;городов, где&nbsp;сервис уже&nbsp;работал</b></p> <p> Цель&nbsp;— мотивировать новых пассажиров в&nbsp;городах присутствия Drivee установить приложение. Офер такой&nbsp;же, как&nbsp;и&nbsp;для&nbsp;жителей Стрежевого: скидка 50% на&nbsp;первые три поездки. </p> <img src="/img/case/article-11-2.png" alt="img" style="margin-top: auto;"> </div> </div>'
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<p>Рекламные офферы выделили на&nbsp;визуале ярким заголовком. В&nbsp;текстах рассказали о&nbsp;сервисе и&nbsp;дали инструкцию, как&nbsp;получить скидку. В&nbsp;конце использовали призыв к&nbsp;действию: «Скачать приложение Drivee».</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Поиск сообществ и&nbsp;запуск посевов</h2><p>Выбирали сообщества по&nbsp;двум критериям: </p><ul><li>CPV <1&nbsp;рубля</li><li>Наличие метки А+&nbsp;— это&nbsp;сообщества, которые зарегистрированы в&nbsp;Роскомнадзоре</li></ul><p>Кампании запускали в&nbsp;несколько итераций: сначала прогревали аудиторию, а&nbsp;затем делали повторные размещения, чтобы&nbsp;повысить запоминаемость. Из&nbsp;поста ВКонтакте вели в&nbsp;приложение Drivee, если&nbsp;оно скачано, и&nbsp;на&nbsp;его загрузку, если&nbsp;пока нет.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Кампания на&nbsp;жителей Стрежевого</h2><p>Посевы размещали в&nbsp;5&nbsp;городских пабликах в&nbsp;несколько итераций. Использовали сообщества по&nbsp;тематике объявлений, вакансий и&nbsp;новостей города&nbsp;— выбор сообществ позволил показать рекламу именно тому сегменту аудитории, которому релевантно предложение Drivee</p><ul><li>Количество публикаций: 27</li><li>Охват: 21&nbsp;778&nbsp;пользователей</li><li>CPV: 1,13&nbsp;рубля</li></ul><p>Хотя цена за&nbsp;просмотр вышла за&nbsp;пределы KPI, Drivee устроил этот&nbsp;результат: посевы принесли органические скачивания.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Кампания на&nbsp;пассажиров других городов</h2><p>Для&nbsp;всех городов отобрали 32&nbsp;сообщества: местные медиа, а&nbsp;также паблики с&nbsp;объявлениями, вакансиями и&nbsp;арендой. Посевы запускали в&nbsp;две итерации: в&nbsp;первую получили охват 214&nbsp;914&nbsp;пользователей, во&nbsp;вторую&nbsp;— 200&nbsp;016. </p><ul><li>Количество публикаций: 64</li><li>Охват: 414&nbsp;930&nbsp;пользователей</li><li>CPV: 0,37&nbsp;рубля</li></ul><p>Команда Drivee отметила, что&nbsp;получила значительный рост охвата и&nbsp;осталась довольна результатами.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Итоги кампаний</h2><p>По&nbsp;обратной связи от&nbsp;PR-департамента сервиса, цель двух рекламных кампаний была достигнута.</p>"
				},
				{
					"block_type": "gallery",
					"images": [
						"/img/case/article-11-3.png"
					]
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Вывод PR-директора Drivee</h2>"
				},
				{
					"block_type": "citation",
					"text": "«Благодаря платформе VK&nbsp;AdBlogger мы смогли не&nbsp;только достичь поставленных целей, но&nbsp;и&nbsp;превысить их. За&nbsp;2&nbsp;месяца кампании удалось увеличить охваты в&nbsp;2&nbsp;раза, привлечь тысячи пользователей с&nbsp;рекордно низким CPV. Это&nbsp;позволило эффективно донести информацию о&nbsp;запуске в&nbsp;Стрежевом и&nbsp;повысить узнаваемость бренда в&nbsp;7&nbsp;городах присутствия. Через локальные паблики ВКонтакте мы охватили узкую, но&nbsp;важную аудиторию: бренд стал ещё более узнаваемым, а&nbsp;приложение скачивают ещё чаще».",
					"autor_name": "Том Соулфул, PR-директор Drivee",
					"autor_photo_path": "/img/case/article-author-11.png"
				}
			]
		},
		{
			"slug": "cerebro-target",
			"title": "Перевыполнили план и&nbsp;снизили CPL на&nbsp;20%: как&nbsp;привлечь несколько тысяч заявок из&nbsp;ВКонтакте",
			"seo_title": "Кейс бренда Церебро в VK AdBlogger",
			"seo_desc": "Команда издательской компании провела рекламную кампанию в агентском кабинете «Церебро Таргет» и смогла еженедельно привлекать по 1500-2000 заявок из ВКонтакте. С помощью платформы VK AdBlogger удалось перевыполнить план по заявкам на звонок и сократить CPL на 20%.",
			"desc": "Несколько тысяч заявок из&nbsp;ВКонтакте",
			"preview_img": "/img/case/img-9.png",
			"preview_img_main": "/img/case/img-9.png",
			"preview_img_small": "/img/case/img-9.png",
			"preview_img_vertical": "/img/case/img-9.png",
			"logo": "/img/case/icon-9.svg",
			"card_label": "Церебро",
			"brand_name": "Клиент Церебро — издательский холдинг",
			"tags": [
				{
					"created_at": "2024-10-17T01:58:12.000000Z",
					"id": 2,
					"laravel_through_key": 4,
					"slug": "for-authors",
					"title": "Авторам",
					"updated_at": "2024-10-17T01:58:12.000000Z"
				}
			],
			"blocks": [
				{
					"block_type": "text",
					"title": "",
					"text": "<p>Команда издательской компании провела рекламную кампанию в&nbsp;агентском кабинете <a href='https://vk.com/cerebro_vk/' target='_blank'>«Церебро Таргет»</a>  и&nbsp;смогла еженедельно привлекать по&nbsp;1500-2000 заявок из&nbsp;ВКонтакте. С&nbsp;помощью платформы VK&nbsp;AdBlogger удалось перевыполнить план по&nbsp;заявкам на&nbsp;звонок и&nbsp;сократить CPL на&nbsp;20%. "
				},
				{
					"block_type": "tile",
					"tile_items": [
						{
							"name": "Стоимость заявки (cost&nbsp;per&nbsp;lead)",
							"desc": "70–120₽",
							"desc_font_size": "48px"
						},
						{
							"name": "Запустили рекламных кампаний",
							"desc": "> 50",
							"desc_font_size": "48px"
						},
						{
							"name": "Уменьшили стоимость заявки",
							"desc": "на 20%",
							"desc_font_size": "48px"
						}
					]
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>О рекламодателе</h2> <p>Издательский холдинг в&nbsp;B2B-сегменте — выпускает периодику, курсы повышения квалификации и&nbsp;справочные системы в&nbsp;нескольких отраслях.</p><p>Целевая аудитория рекламодателя активно пользуется ВКонтакте. Поэтому компания задействует все&nbsp;возможные инструменты, чтобы получить максимум охвата в&nbsp;соцсети.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Цели продвижения</h2><ul><li>Еженедельно привлекать 1500–2000 заявок на&nbsp;обратный звонок через лид-форму ВКонтакте.</li><li>Максимальная цена заявки до&nbsp;150 рублей.</li><li>Конверсия в&nbsp;телефонный звонок дольше минуты от 65% — по внутренней статистике, длительность созвона с&nbsp;менеджером прямо пропорциональна дальнейшим продажам.</li></ul>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Целевая аудитория</h2><p>Директора и&nbsp;завучи школ, заведующие и&nbsp;старшие воспитатели детских садов — аудитория активно пользуется соцсетью ВКонтакте.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Механика лидогенерации</h2><p>В&nbsp;рекламных постах предлагали получить ценные материалы — шаблоны, образцы приказов, планирования для&nbsp;школ и&nbsp;детских садов. Для этого от&nbsp;человека требовалось заполнить форму обратного звонка, после чего с&nbsp;ним связывался менеджер колл-центра. Материалы высылали после диалога.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Креативы и&nbsp;лид-магниты</h2><p>Посевы запускали в&nbsp;формате «Универсальная запись с&nbsp;кнопкой». Большое квадратное изображение длительно фиксирует внимание пользователя — по&nbsp;опыту «Церебро Таргет», это&nbsp;приносит оптимальный результат.</p><p>С&nbsp;изображениями сложность была в&nbsp;том, как&nbsp;обратить внимание не&nbsp;рядовых учителей и&nbsp;воспитателей, а&nbsp;сотрудников администраций. Решили использовать триггерные заголовки: «готовый шаблон», «образец приказа», «циклограмма справок».</p>"
				},
				{
					"block_type": "gallery",
					"images": [
						"/img/case/article-9-1.png",
						"/img/case/article-9-2.png"
					]
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<p>В&nbsp;планах попробовать ещё&nbsp;видео и&nbsp;GIF вместо статичных картинок.</p><p>Лид-магниты меняли каждый месяц. Так как работа школ и&nbsp;детских садов циклична, темы креативов привязаны к&nbsp;учебному графику. Бренд-менеджеры издательства отталкивались от&nbsp;инфоповодов и&nbsp;формировали подборку лид-магнитов. Например, в&nbsp;марте актуальна информация по&nbsp;ВПР (Всероссийской проверочной работе), в&nbsp;августе — по&nbsp;подготовке к&nbsp;педсовету.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Подбор сообществ</h2><p>Специалисты «Церебро Таргет» парсили сообщества, а&nbsp;затем фильтровали их&nbsp;по&nbsp;темам: «Основное образование», «Дополнительное образование», «Семья и&nbsp;дети». Далее отбирали места для&nbsp;размещения объявлений по&nbsp;ключевым словам в&nbsp;названиях сообществ.</p><p>На&nbsp;финальном этапе отбирали сообщества по&nbsp;цене за&nbsp;1&nbsp;тыс. показов (CPM) — средний показатель не&nbsp;должен превышать 200&nbsp;рублей. Обязательно проверяли сообщества вручную — важно, чтобы&nbsp;контент соответствовал названию и&nbsp;теме.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Процесс продвижения</h2><p>За&nbsp;4&nbsp;месяца работы в&nbsp;VK&nbsp;AdBlogger команда запустила 50&nbsp;кампаний, в&nbsp;которых использовала около 20&nbsp;разных инфоповодов. Поскольку заявок требуется много, на&nbsp;один инфоповод чаще создавали по&nbsp;2–3 креатива, чтобы&nbsp;их&nbsp;чередовать. Всего на&nbsp;каждый креатив приходилось от&nbsp;10–15 до&nbsp;100–120 публикаций в&nbsp;разных сообществах.</p><p>Каждая из&nbsp;50 кампаний в&nbsp;среднем длилась по&nbsp;1–2 месяца. Это&nbsp;средний срок, который совпадает с&nbsp;актуальностью инфоповода. Например, ВПР в&nbsp;школах проводят в&nbsp;марте-апреле. В&nbsp;этот период и&nbsp;запускали соответствующие посевы.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Результаты</h2>"
				},
				{
					"block_type": "gallery",
					"images": [
						"/img/case/article-9-3.svg"
					]
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Вывод эксперта о платформе VK AdBlogger</h2>"
				},
				{
					"block_type": "citation",
					"text": "«Это очень удобный инструмент для посевов с простым функционалом и наглядной статистикой. Отдельно отмечу возможность планировать размещение посевов всего за шесть часов. <br> <br> Очень хотелось бы в дальнейшем увидеть в VK AdBlogger новые лид-формы, как в VK Ads, а также сквозную аналитику, которая позволила бы сразу отслеживать цену заявок. В целом, очень благодарна команде ВКонтакте за эту разработку и уверенно могу рекомендовать её коллегам».",
					"autor_name": "Буйлова Анастасия, digital-маркетолог «Церебро Таргет»",
					"autor_photo_path": "/img/case/article-author-9.png"
				}
			]
		},
		{
			"slug": "my-family-school",
			"title": "MyFamilySchool: как посевы помогают продавать обучающие курсы",
			"seo_title": "Кейс бренда MyFamilySchool в VK AdBlogger",
			"seo_desc": "Команда агентства FAQMarketing и клиент MyFamilySchool протестировали VK AdBlogger, чтобы проверить, удастся ли привлечь потенциальных клиентов из ВКонтакте на посадочную страницу и получить регистрации на обучающие курсы по более низкой стоимости.",
			"desc": "Обучающие курсы и&nbsp;посевы",
			"preview_img": "/img/case/img-8.png",
			"preview_img_main": "/img/case/img-8.png",
			"preview_img_small": "/img/case/img-8.png",
			"preview_img_vertical": "/img/case/img-8.png",
			"logo": "/img/case/icon-8.svg",
			"card_label": "FAQMarketing",
			"brand_name": "Общеобразовательные программы и программы дополнительного профессионального образования ",
			"tags": [
				{
					"created_at": "2024-10-17T01:58:12.000000Z",
					"id": 2,
					"laravel_through_key": 4,
					"slug": "for-authors",
					"title": "Авторам",
					"updated_at": "2024-10-17T01:58:12.000000Z"
				}
			],
			"blocks": [
				{
					"block_type": "text",
					"title": "",
					"text": "<p>Команда агентства <a href='https://faqmarketing.ru/' target='_blank'>FAQMarketing</a>  и клиент MyFamilySchool протестировали VK&nbsp;AdBlogger, чтобы проверить, удастся ли привлечь потенциальных клиентов из ВКонтакте на посадочную страницу и получить регистрации на обучающие курсы по более низкой стоимости.</p>"
				},
				{
					"block_type": "tile",
					"tile_items": [
						{
							"name": "Стоимость регистрации",
							"desc": "снизили до 375 ₽",
							"desc_font_size": "48px"
						},
						{
							"name": "ROMI",
							"desc": "повысили до 74,9%",
							"desc_font_size": "48px"
						}
					]
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>О рекламодателе</h2> <p>MyFamilySchool запускает общеобразовательные программы и программы дополнительного профессионального образования: Школа отношений, психологический практикум «Управление своей жизнью» и коучинг. Основная цель <a href='https://coachingacademy.su/kvest-vmeste' target='_blank'>посадочной страницы</a>  проекта — сбор регистраций на бесплатные курсы, в конце которых клиенты могут записаться на платные программы длительностью от 3 месяцев до 1 года.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Что в фокусе?</h2><ul><li>Стоимость регистрации — не более 400 ₽ (с НДС)</li><li>Окупаемость трафика — не менее 70% ROMI</li></ul>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Креативы бренда</h2><p>Всего за 2,5 месяца, которые длилась рекламная кампания, через VK AdBlogger заказали 360 публикаций. Тестировали 12 различных креативов. Целевое действие кампании — регистрация на трёхдневный курс.</p> <p>Использовали 3 формата объявлений — с фото, с видео и просто текст без графического контента. Самыми кликабельными оказались видео, а лучшими по окупаемости — тексты без графического контента.</p>"
				},
				{
					"block_type": "gallery",
					"images": [
						"/img/case/article-8-1.png",
						"/img/case/article-8-2.png"
					]
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<p>Для подбора аудитории использовали три основных механики:</p><ul><li>опираясь на базы клиентов, собирали через парсеры целевые сообщества и далее через массовый поиск создавали подборки сообществ для теста;</li><li>отбирали сообщества по тематикам: отношения и знакомства, философия, эзотерика, семейная психология;</li><li>искали сообщества на платформе по ключам: отношения, замужество, брак и т. д.</li></ul><p>Самые важные факторы при выборе сообществ:</p><ul><li>средний охват от 1 000</li><li>ERV — 1% и более</li><li>ядро аудитории — женщины 25–50 лет</li></ul><p>Как показал опыт размещения на других рекламных площадках — <b> погоня за дешёвым CPM, большими охватами и размещения в крупных группах приводили очень размытую аудиторию, которая плохо покупала</b>. Поэтому в этот раз мы уделяли большее внимание ERV — коэффициенту вовлечённости по просмотрам.</b>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Итоги рекламной кампании в VK AdBlogger</h2>"
				},
				{
					"block_type": "gallery",
					"images": [
						"/img/case/article-8-3.png",
						"/img/case/article-8-4.png"
					]
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Вывод</h2>"
				},
				{
					"block_type": "citation",
					"text": "«Благодаря динамическим UTM-меткам в VK AdBlogger смогли вывести в проекте сквозную аналитику. Это помогло оценивать эффективность рекламы вплоть до конкретных сообществ, что раньше было почти невозможно в посевах.</br> Планируем и далее растить проекты на этой площадке, результаты она даёт очень хорошие»",
					"autor_name": "команда FAQMarketing",
					"autor_photo_path": "/img/case/article-author-8.png"
				}
			]
		},
		{
			"slug": "case-7",
			"title": "Секретный подарок: клики, подписки и&nbsp;заявки — ещё дешевле",
			"seo_title": "Кейс сервиса подарков «Страна в коробочке» в VK AdBlogger",
			"seo_desc": "Сервис «Страна в коробочке» протестировал VK AdBlogger, уменьшив стоимость клика и целевого действия на 20%. Кампания увеличила просмотры, добавления в корзину и продажи, при этом снизив CPM на 49%. В 2025 году сервис планирует полностью перейти на VK AdBlogger для посевов.",
			"desc": "Сервис необычных подарков из&nbsp;разных стран",
			"preview_img": "/img/case/img-7.png",
			"preview_img_main": "/img/case/img-7.png",
			"preview_img_small": "/img/case/img-7.png",
			"preview_img_vertical": "/img/case/img-7.png",
			"logo": "/img/case/icon-7.svg",
			"card_label": "Страна в коробочке",
			"brand_name": "Сервис необычных подарков из&nbsp;разных стран",
			"tags": [
				{
					"created_at": "2024-10-17T01:58:12.000000Z",
					"id": 2,
					"laravel_through_key": 4,
					"slug": "for-authors",
					"title": "Авторам",
					"updated_at": "2024-10-17T01:58:12.000000Z"
				}
			],
			"blocks": [
				{
					"block_type": "text",
					"title": "",
					"text": "<p>Команда сервиса «Страна в коробочке» протестировала платформу VK AdBlogger и&nbsp;уменьшила стоимость клика и&nbsp;целевого действия на&nbsp;20%. Сервис вёл работу над&nbsp;кампанией самостоятельно через агентский кабинет <a href='https://vk.com/cerebro_vk' target='_blank'>«Церебро Таргет»</a>.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<p><b>Цели кампании: снизить стоимость подписки на&nbsp;сообщество и&nbsp;заказа подарка.</b></p>"
				},

				{
					"block_type": "text",
					"title": "",
					"text": "<h2>О рекламодателе</h2> <p> <a href='https://vk.com/countrybox_gifts' target='_blank'>«Страна в коробочке»</a> — это сервис необычных подарков из&nbsp;разных стран. Они собирают сюрприз-боксы с&nbsp;предметами из&nbsp;Европы, Азии, Америки, Африки и&nbsp;отправляют по&nbsp;России и&nbsp;всему миру. Наполнение коробочки подбирается индивидуально по&nbsp;анкете, но&nbsp;что именно окажется внутри — тайна и&nbsp;для&nbsp;заказчика, и&nbsp;для&nbsp;человека, который получит подарок. Именно это и&nbsp;стало главной фишкой сервиса. Все подарки внутри коробочки оформляют вручную — заворачивают в&nbsp;крафт, рисуют флаги стран, откуда были привезены подарки. Так заказчик дарит не&nbsp;просто подарок, а&nbsp;коробочку, внутри которой собрано 5-7 отдельных сюрпризов. Ощущения, прямо как в&nbsp;детстве. </p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Что в фокусе?</h2><ul><li>Подписки на сообщество</li><li>Заказ подарка или заявка на подбор подарка</li></ul>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<p>Основной рекламный трафик идёт в&nbsp;сообщество сервиса ВКонтакте, раньше для&nbsp;рекламы они использовали другие инструменты. Сейчас команда сервиса решила протестировать VK&nbsp;AdBlogger, чтобы выяснить, стоит ли&nbsp;переходить на&nbsp;новый инструмент с&nbsp;сервисом «Страна в&nbsp;коробочке».</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Креативы бренда</h2><p>Для рекламы использовали креативы, которые показали высокую эффективность ранее, а также создавали новые и масштабировали удачные.</p> <p>Например, картинки с коротким текстом и примером оформленных подарков, коллажи с подборками подарков для мамы, парня или других близких людей.</p> <p>Всего сделали 696 публикаций с октября 2024 года по февраль 2025-го.</p> <p>Команда обратила внимание, что лучше всего работают креативы, которые мимикрируют под контент сообществ, где они размещаются. Поэтому они адаптируют изображения и текст в зависимости от площадки.</p> <p>В&nbsp;первых креативах использовали призыв подписаться, но&nbsp;после убрали его, и&nbsp;кликабельность повысилась без потери подписок на&nbsp;сообщество.</p>"
				},
				{
					"block_type": "gallery",
					"images": [
						"/img/case/article-7-1.png",
						"/img/case/article-7-2.png"
					]
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Аудитория</h2> <p>Выбирая сообщества для посевов, ориентировались на: </p> <ul> <li>тематику (юмор, литература, крафт своими руками, рецепты и смежные темы);</li> <li>CPM (отбирали сообщества с наименьшим CPM, не более 100 ₽);</li> <li>пол (ЦА — женщины, поэтому подбирали сообщества, где преобладают подписчицы);</li> <li>возраст (от 20 до 50 лет);</li> <li>контент (отслеживали, что группа активна и размещает не только рекламу).</li> </ul> <p>Также использовали базу сообществ, которая уже показала хорошие результаты в&nbsp;предыдущих размещениях.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Итог теста — ниже стоимость клика, ниже стоимость за&nbsp;1 000 показов и&nbsp;за&nbsp;действие.</h2> <p>Кампания в VK AdBlogger продолжалась с 4 октября по 8 января. За это время выросло число просмотров карточки товара, добавлений в корзину и продаж. А главное — снизились целевые стоимости заказа и добавления в корзину.</p>"
				},
				{
					"block_type": "gallery",
					"images": [
						"/img/case/article-7-3.png"
					]
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Стоимость за 1 000 показов (CPM) — ниже на 49% </br> </br> Стоимость за действие (подписка на сообщество) — ниже на 20%</h2>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<p>В 2025 году они планируют полностью перейти в&nbsp;VK AdBlogger и&nbsp;использовать платформу для&nbsp;посевов, сейчас 90% трафика — идёт из&nbsp;VK&nbsp;AdBlogger, 10% — от&nbsp;наиболее удачных размещений в&nbsp;сообществах в&nbsp;других рекламных инструментах.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Вывод</h2>"
				},
				{
					"block_type": "citation",
					"text": "«Мы начали тестировать VK AdBlogger сразу после запуска платформы. Чувствуем себя первопроходцами, которые в награду за смелость получили впечатляющие результаты, каких не удавалось добиться раньше. С VK AdBlogger закупка рекламы проходит быстрее, а для поиска сообществ для посевов не нужны сторонние программы — достаточно фильтров»",
					"autor_name": "Полина Рылишкина, маркетолог сервиса «Страна в коробочке».",
					"autor_photo_path": "/img/case/article-author-7.png"
				}
			]
		},
		{
			"slug": "case-4",
			"title": "Из школьных сообществ — в&nbsp;подписчиков: как&nbsp;привлечь аудиторию учеников и&nbsp;учителей",
			"seo_title": "Кейс образовательной онлайн-платформы «Школково» в VK AdBlogger",
			"seo_desc": "«Школково» протестировала VK AdBlogger для привлечения подписчиков на рассылку. Кампания достигла охвата в 1,2 млн, стоимость подписки составила от 60 ₽, что ниже запланированного KPI. Оптимальные результаты были получены в небольших и недорогих сообществах.",
			"desc": "Как привлечь аудиторию учеников и&nbsp;учителей",
			"preview_img": "/img/case/img-4.png",
			"preview_img_main": "/img/case/img-4_main.png",
			"preview_img_small": "/img/case/img-4_small.png",
			"preview_img_vertical": "/img/case/img-4_vertical.png",
			"logo": "/img/case/icon-4.svg",
			"card_label": "Школково",
			"brand_name": "Образовательная онлайн-платформа",
			"tags": [
				{
					"created_at": "2024-10-17T01:58:12.000000Z",
					"id": 2,
					"laravel_through_key": 4,
					"slug": "for-authors",
					"title": "Авторам",
					"updated_at": "2024-10-17T01:58:12.000000Z"
				}
			],
			"blocks": [
				{
					"block_type": "text",
					"title": "",
					"text": "<p>Команда образовательной онлайн-платформы «Школково» решила протестировать инструменты VK AdBlogger. Они разместили посевы в развлекательных и учебных сообществах, чтобы привлечь подписчиков рассылки, оценить охваты и реакции аудитории. В итоге стоимость привлечения составила от 60 рублей — ниже запланированного KPI.</p>"
				},
				{
					"block_type": "tile",
					"tile_items": [
						{
							"name": "Охват",
							"desc": "> 1 226 000",
							"desc_font_size": "48px"
						},
						{
							"name": "Всего постов",
							"desc": "> 50",
							"desc_font_size": "48px"
						},
						{
							"name": "Подписчики рассылки",
							"desc": "стоимость привлечения от 60 ₽",
							"desc_font_size": "31px"
						},
						{
							"name": "Подготовка к запуску",
							"desc": "2-3 дня",
							"desc_font_size": "48px"
						}
					]
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<p><b>Цели кампании:</b> Получить максимальное число целевых подписчиков на&nbsp;рассылку в&nbsp;Senler по&nbsp;минимальной цене. И&nbsp;вторично оценить охваты, CTR и&nbsp;реакции аудитории, размещаясь с&nbsp;VK AdBlogger.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>О рекламодателе</h2><p><a href='https://3.shkolkovo.online/' target='_blank'>«Школково»</a> — это онлайн-платформа для подготовки к ЕГЭ, ОГЭ и олимпиадам. Здесь можно подготовиться к экзаменам, пройти курсы по любому направлению, прорешать целую базу задач бесплатно и принять участие в интенсивах. На платформе есть даже курсы повышения квалификации и рекомендации по ведению математических кружков.</p><p><b>Миссия «Школково»</b> — повысить уровень образования и детей, и преподавателей.</p><p><b>Цель — привлечь новых подписчиков полезной рассылки.</b></p><p>«Школково» собирают полезные чеклисты для преподавателей и руководителей кружков, а также шпаргалки для выпускников.</p><p>Все эти материалы они упаковывают в&nbsp;<a href='https://vk.com/app5898182_-215270197#s=2969351&force=1' target='_blank'>короткую рассылку</a> через Senler, которая в&nbsp;будущем поможет привести новых клиентов в&nbsp;образовательный продукт: школьников или учителей.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Что в фокусе?</h2><ul><li>Стоимость подписки на рассылку</li><li>Охваты публикаций и реакции аудитории</li></ul>"
				},
				{
					"block_type": "gallery",
					"images": ['/img/case/article-4-1.png', '/img/case/article-4-2.png']
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<p>Для рекламной кампании подготовили 12 визуалов под разные аудитории, во всех креативах использовали элементы фирменного стиля «Школково» для роста узнаваемости.</p><p>В посевах были и статичные фото, и видео, и креативы с анимированными персонажами, мемами и тематическими изображениями.</p><p>Публикации планировали выпускать циклично — каждую неделю перед выходными.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Call to action — подпишись и&nbsp;получи бесплатные материалы</h2><p>Для посевов на&nbsp;ЦА детей и&nbsp;родителей отобрали сообщества, используя тематические фильтры «школа», «образование», «дополнительное образование».</p><p>Для&nbsp;ЦА преподавателей выбирали предметные сообщества, где&nbsp;среди подписчиков обычно больше учителей-предметников. Ориентировались на&nbsp;возраст аудитории. На&nbsp;составление подборок ушло два дня.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Важно, чтобы не было расхождений с философией «Школково»</h2><p>При выборе сообществ внимательно просматривали контент. В том числе и для того, чтобы каждое размещение подстроить под стилистику постов и добиться максимальной нативности.</p><p><b>Всего опубликовали больше 50 постов. Итог? Хорошие результаты дают небольшие и недорогие паблики.</b></p><p>В неделю размещали не больше 2–3 креативов, чтобы не было пересечений в разных сообществах. На создание одного креатива уходило около 1 часа.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>«Школково» получили подписчиков в&nbsp;Senler по&nbsp;стоимости от&nbsp;60&nbsp;рублей и&nbsp;переходы на&nbsp;сайт по&nbsp;цене ниже планируемой</h2><p><b>Суммарный охват во&nbsp;всех сообществах — 1 226 000.</b></p><p>«Школково» протестировали не&nbsp;только тематические сообщества, связанные с&nbsp;онлайн-образованием, но&nbsp;и&nbsp;развлекательные (юмор, мемы и прочие). Всего они разместили более 50 постов у&nbsp;авторов на&nbsp;суммарный бюджет около 70 000 рублей.</p><p>На&nbsp;аналитику результатов кампании ушло 2–3 часа: просмотрели комментарии, реакции, клики, переходы, число подписок.</p><ul><li>лучший результат получили в&nbsp;небольших и&nbsp;недорогих сообществах: здесь удалось добиться оптимальной стоимости подписчиков — от&nbsp;60&nbsp;рублей, а&nbsp;переходы на&nbsp;сайт оказались по&nbsp;цене ниже планируемой;</li><li>в&nbsp;развлекательных сообществах с&nbsp;целевой аудиторией — высокие охваты и&nbsp;просмотры, однако получилась низкая конверсия в&nbsp;подписку на&nbsp;рассылку.</li></ul><p>Рекламную кампанию запустили 12&nbsp;августа и&nbsp;продолжают по&nbsp;нынешний день.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Вывод</h2><p>«С VK AdBlogger удобно размещаться в&nbsp;крупных сообществах с&nbsp;хорошими охватами и&nbsp;в&nbsp;нишевых сообществах, где&nbsp;получилось добиться оптимальной стоимости подписки. Таких результатов мы не&nbsp;видели на&nbsp;других платформах», — команда «Школково».</p>"
				}
			]
		},
		{
			"slug": "case-1",
			"title": "Как сохранить низкую цену на&nbsp;конверсию в&nbsp;действие",
			"seo_title": "Кейс бренда одежды Chukcha в VK AdBlogger",
			"seo_desc": "Chukcha протестировала VK AdBlogger для привлечения подписчиков и активации промокодов, получив схожие результаты с маркет-платформой. Кампания показала эффективное масштабирование, с удобным поиском и отслеживанием эффективности размещений.",
			"desc": "Посевы и&nbsp;треккинг",
			"preview_img": "/img/case/img-1.png",
			"preview_img_main": "/img/case/img-1_main.png",
			"preview_img_small": "/img/case/img-1_small.png",
			"preview_img_vertical": "/img/case/img-1_vertical.png",
			"logo": "/img/case/icon-1.svg",
			"card_label": "CHUKCHA",
			"brand_name": "Бренд CHUKCHA",
			"tags": [
				{
					"created_at": "2024-10-17T01:58:12.000000Z",
					"id": 2,
					"laravel_through_key": 4,
					"slug": "for-authors",
					"title": "Авторам",
					"updated_at": "2024-10-17T01:58:12.000000Z"
				}
			],
			"blocks": [
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Цель кампании</h2> <p>Опробовать инструменты новой платформы для посевов и сравнить стоимость конверсии в действие, охваты, удобство использования.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>О бренде</h2> <p><b>Chukcha</b> — это бренд одежды для активной жизни и путешествий. У него больше 80 тысяч клиентов по всей стране, а в команде — профессиональные райдеры и спортсмены.</p>"
				},
				{
					"block_type": "gallery",
					"images": [
						"/img/case/article-1-1.png",
						"/img/case/article-1-2.png"
					]
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<p>Они создают горнолыжную одежду, одежду для треккинга, экологичные коллекции из обрезков ткани, популяризуют открытость миру, гармонизацию с природой через путешествия.</p><p>Сам бренд говорит о себе так: «Chukcha соткан природой для открытий и впечатлений, для тех, кто хочет искать свою природу и наслаждаться ею, не теряя комфорта».</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Привлечь путешественников</h2><p><a href='https://chukchas.com/' tartget='_blank'>Chukchas.com</a> — сайт интернет-магазина, где есть и каталог, и акции для путешественников. Также Chukcha направляет рассылки со специальными предложениями.</p><p>Бренду было важно получить новых подписчиков рассылки и побудить их активировать промокоды на покупки.</p><p><b>Что в фокусе?</b></p><ul><li>Стоимость активации промокода</li><li>Стоимость подписки на рассылку</li></ul><p>Эти показатели были ключевыми для бренда. </br> Цель — сравнить результаты продвижения на маркет-платформе и в новом сервисе VK AdBlogger.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Креативы бренда</h2>"
				},
				{
					"block_type": "gallery",
					"images": [
						"/img/case/article-1-3.png",
						"/img/case/article-1-4.png"
					]
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<p>Для тестового запуска использовали две эффективные проверенные рекламные связки. Сообщества с целевой аудиторией выбирали после парсинга аудитории. В тех же сообществах бренд уже закупал рекламу, используя маркет-платформу.</p><p>Подведём итог: в новом рекламном кабинете получили схожие результаты с учётом НДС, что говорит о перспективности масштабирования рекламной кампании.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Какие цели были поставлены при тестировании продукта?</h2> <p>Основная цель — проверить, эффективно ли проводить посевы, используя кабинет VK AdBlogger. К тому же у Chukcha уже были все данные, чтобы протестировать охваты, стоимости перехода и лида относительно внутренних бенчмарков.</p><p>В рекламных постах использовали ссылку на мини-приложение Senler — это позволило интегрировать чат-бота, чтобы в дальнейшем использовать его для дополнительной коммуникации с аудиторией.</p><p>Ниже два основных СТА (call to action), которые использовались в рекламной кампании, — именно они показывали наивысшую конверсию в переход.</p><ul><li><b>Посмотреть каталог</b></li><li><b>Активировать промокод</b></li></ul><p><b>Итог? На новой платформе успешные показатели удалось сохранить.</b></p><p><b>Можно масштабировать.</b></p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<p><b>Вывод бренда</b>: используя инструменты новой платформы, можно быстро и эффективно масштабировать рекламные кампании.</p>"
				},
				{
					"block_type": "citation",
					"text": "«Платформа позволяет размещать рекламу в разы быстрее благодаря удобному поиску сообществ и возможности создания подборок. С новым функционалом удобно отслеживать эффективность размещений. Интерфейс выглядит очень приятно»",
					"autor_name": "Илья Калмыков, сооснователь команды <a href='#link'>«Гибкий Маркетинг»</a>. Проводил рекламную кампанию Chukcha в VK AdBlogger",
					"autor_photo_path": "/img/case/article-author-1.png"
				}
			]
		},
		{
			"slug": "case-2",
			"title": "Космически нативно: как&nbsp;рекламировать мерч у&nbsp;стилистов и&nbsp;в&nbsp;космических сообществах",
			"seo_title": "Кейс бренда одежды КосмоМерч в VK AdBlogger",
			"seo_desc": "КосмоМерч использовал VK AdBlogger для повышения узнаваемости среди новой аудитории, выбрав сообщества моды и космоса. Кампания привела к хорошему отклику, особенно в нишевых сообществах, с планами на нативные интеграции в кино и сериалы.",
			"desc": "Космически нативно",
			"preview_img": "/img/case/img-2.png",
			"preview_img_main": "/img/case/img-2.png",
			"preview_img_small": "/img/case/img-2_small.png",
			"preview_img_vertical": "/img/case/img-2_vertical.png",
			"logo": "/img/case/icon-2.svg",
			"card_label": "КосмоМерч",
			"brand_name": "Бренд КосмоМерч",
			"tags": [
				{
					"created_at": "2024-10-17T01:58:12.000000Z",
					"id": 2,
					"laravel_through_key": 4,
					"slug": "for-authors",
					"title": "Авторам",
					"updated_at": "2024-10-17T01:58:12.000000Z"
				}
			],
			"blocks": [
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Цель кампании</h2> <p>Повысить узнаваемость бренда и опробовать инструменты новой платформы для посевов в тематических сообществах.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>О бренде</h2> <p><a href='https://cosmomerch.ru/page/about-us' target='_blank'>КосмоМерч</a> — это одежда, вдохновлённая идеей исследования и освоения космоса.</p><p>«Классика и оверсайз, фантастические принты и текстуры, секретные коды и дизайнерские шрифты с зашифрованными космическими посланиями — частичку космоса можно найти в каждой из 10 коллекций для взрослых и детей».</p><p style='font-style:italic;color:#7C8A9A;'>Сообщество ВКонтакте: <a href='https://vk.com/cosmomerch' target='_blank'>https://vk.com/cosmomerch</a>.</p>"
				},
				{
					"block_type": "gallery",
					"images": [
						"/img/case/article-2-1.png",
						"/img/case/article-2-2.png"
					]
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Фокус в рекламной кампании</h2> <p><b>Повысить узнаваемость бренда среди новой аудитории</b></p><p>На платформе VK AdBlogger бренд выбрал сообщества и блогеров со своей целевой аудиторией в двух направлениях:</p><p>— стилисты, которые рассказывают о трендах в моде; </br> — сообщества с космической тематикой: наука, фантастика и исследования неизвестного.</p><p>Рекламные посты вели на сайт «КосмоМерча», где можно сделать заказ.</p><p>В фокусе были коллекции, рассчитанные на широкую ЦА.</p>"
				},
				{
					"block_type": "gallery",
					"images": [
						"/img/case/article-2-3.png"
					]
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<p><b>Хороший отклик — у постов в сообществах о стиле и моде.</b></p><p>Для сообществ с космической тематикой «КосмоМерч» адаптировали рекламные посты — добавили футболки и свитшоты со схемами носителей ракет и космических аппаратов.</p>"
				},
				{
					"block_type": "gallery",
					"images": [
						"/img/case/article-2-4.png"
					]
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Как выбирали сообщества?</h2><p>Для рекламной кампании настроили фильтры в VK AdBlogger по тематике. При выборе ориентировались на средний охват, число подписчиков, соотношение мужской и женской аудиторий.</p><p><b>Решающий аспект — качество контента.</b></p><p>Бренду было важно размещаться в тех сообществах, которые публикуют релевантные посты в своём стиле и в подходящей тематике.</p><p><b>На первых этапах тестировали отклик аудитории, реакцию на конкретные посты.</b></p><p>Выяснили, что в сообществах с большим числом подписчиков отклик ниже и реклама не даёт нужных результатов, поэтому концентрировались на более эффективных сообществах с меньшей аудиторией.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<p><b>Вывод бренда</b>:  На новой платформе уже большая выборка качественных сообществ, которые удобно фильтровать и объединять в тематические подборки по ЦА.</p><p><b>В планах — новые тематики и нативные интеграции.</b></p><p>«КосмоМерч» готовятся к новой рекламной кампании — они планируют нативные интеграции в сообществах, связанных с кино и сериалами.</p><p>Выбирать сообщества, слоты для публикаций и отправлять креативы и брифы для рекламных кампаний бренд будет в VK AdBlogger. Он показал себя как удобный и эффективный инструмент для продвижения космического мерча.</p>"
				},
				{
					"block_type": "citation",
					"text": "«Мне очень понравилось, что удобно мониторить весь рынок групп, легко сразу отсмотреть каталог, выбрать нужные сообщества. Ждём, чтобы к публикациям добавилась кнопка для перехода, как в рекламном объявлении».",
					"autor_name": "Максим Язиков, генеральный директор компании ООО «Просто космос»",
					"autor_photo_path": "/img/case/article-author-2.png"
				}
			]
		},
		{
			"slug": "case-3",
			"title": "Как эффективно продвигать креативное образование",
			"seo_title": "Кейс креативной платформы Простор в VK AdBlogger",
			"seo_desc": "Простор привлёк 103 участника для образовательных программ с помощью VK AdBlogger, снизив стоимость привлечения до 604 рубля (по сравнению с 1300 в Telegram). Конверсия в регистрацию составила 77%, что доказало эффективность посевов.",
			"desc": "Простор для контента",
			"preview_img": "/img/case/img-3.png",
			"preview_img_main": "/img/case/img-3.png",
			"preview_img_small": "/img/case/img-3_small.png",
			"preview_img_vertical": "/img/case/img-3_vertical.png",
			"logo": "/img/case/icon-3.svg",
			"card_label": "Простор",
			"brand_name": "Бренд Простор",
			"tags": [
				{
					"created_at": "2024-10-17T01:58:12.000000Z",
					"id": 2,
					"laravel_through_key": 4,
					"slug": "for-authors",
					"title": "Авторам",
					"updated_at": "2024-10-17T01:58:12.000000Z"
				}
			],
			"blocks": [
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>О бренде</h2> <p><b>Простор</b> — это открытая креативная платформа, на которой молодые творческие спецы перенимают опыт у профессионалов индустрии и вместе создают проекты.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Что делает Простор?</h2>"
				},
				{
					"block_type": "gallery",
					"images": [
						"/img/case/article-3-1.png"
					]
				},
				{
					"block_type": "gallery",
					"images": [
						"/img/case/article-3-2.png"
					]
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Аудитория продукта</h2> <p><b>Участники всех направлений Простора — это молодые творческие люди, создающие контент.</b></p><p>Некоторые только начинают творческий путь, у других уже есть база работ. Но все они активно развиваются в индустрии креатива и хотят пополнить портфолио интересными проектами.</p><p>В некоторых программах Простора участвуют даже студенты и школьники. Обычно у них ещё нет опыта в этой сфере, но они уже интересуются творчеством и готовы развивать свои скиллы.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Новый трек — новый вызов</h2> <p>В новом сезоне Простор запустил направление «Контент-маркетинг». Это для тех, кто уже развивается в сфере соцсетей, мечтает попробовать себя в блогинге, social media маркетинге либо ведёт собственные сообщества.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Где искать таких контентмейкеров?</h2> <p>Команда проекта решила искать участников в сообществах, посвящённых социальным сетям, блогингу и работе с текстами:</p><ul><li>в нишевых, где нужно «дотянуться» до профессиональной аудитории SMM-специалистов и администраторов пабликов;</li><li>в сообществах с контентом для широкой аудитории, где подписчики только начинают развиваться в соцсетях и пробуют новые форматы.</li></ul><p><b>Цель</b>: стоимость привлечения одного участника — не выше 700 рублей.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Чего ждали от рекламной кампании?</h2> <p>Важно было охватить разные сегменты аудитории, сохранить низкую стоимость лида, а ещё достать тех, до кого «не дотягиваются» классические рекламные инструменты. В основном интересующая нас ЦА проводит время в социальных сетях и не замечает обычные инструменты performance-маркетинга. Посевы — отличный вариант для такой задачи.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Креативы Простора</h2> <p>Для рекламных постов использовали два формата визуальных креативов.</p>"
				},
				{
					"block_type": "gallery",
					"images": [
						"/img/case/article-3-3.png"
					]
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<p>На баннерах — персонаж в стиле японской анимации, что близко аудитории соцсетей</p>"
				},
				{
					"block_type": "gallery",
					"images": [
						"/img/case/article-3-4.png"
					]
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<p><b>Результаты: CPA ниже, чем ожидали, и выгоднее, чем в других каналах.</b></p><p>Используя VK AdBlogger, разместили посевы в нужных сообществах, смогли привлечь участников и сэкономить.</p><p><b>Стоимость привлечения одного участника составила 604 рубля.</b></p><p>Для сравнения: те же посевы мы размещали в телеграм-каналах, и стоимость привлечения одного участника составляла 1 300 рублей.</p>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<p><b>Итого:</b></p><ul><li>103 участника — удалось привлечь Простору;</li><li>77% — составила конверсия в регистрацию из посевов.</li></ul>"
				},
				{
					"block_type": "text",
					"title": "",
					"text": "<h2>Вывод</h2> <p>Команда проекта убедилась, что VK AdBlogger эффективен не только как охватный, но и как performance-инструмент для продвижения образовательных программ на профессиональные аудитории.</p>"
				}
			]
		}
	]
}


const toolkitSlice = createSlice({
	name: "toolkit",
	initialState: defaultState,
	reducers: {
		setPreloaderInit(state, action) {
			state.preloaderInit = action.payload
		},
		setState(state, action) {
			state.pages = action.payload.pages
		},
		setCases(state, action) {
			state.cases = [...state.cases, ...action.payload]
		},
		setFooterDescText(state, action) {
			state.footer.desc = action.payload
		}
	}
})

export default toolkitSlice.reducer
export const { setPreloaderInit, setState, setCases, setFooterDescText } = toolkitSlice.actions