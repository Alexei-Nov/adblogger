import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './footer.css';
import { NavLink, useLocation } from 'react-router-dom';
import { handleTracking } from 'utils/tracking';
import { NavItem } from './NavItem';

export default function Footer({ footer }) {
	const [footerState, setFooterState] = useState(footer)
	const btnState = useSelector(state => state.toolkit.registrationBtn)
	const location = useLocation()
	const isForAuthors = location.pathname === "/for-authors"
	const isForAdvertisers = location.pathname === "/for-advertisers"
	const isForShops = location.pathname === "/shops"

	// useEffect(() => {
	// 	switch (location.pathname) {
	// 		case '/for-authors':
	// 			setFooterState({ ...footerState, desc: 'VK AdBlogger — платформа для сотрудничества авторов и рекламодателей, на которой можно продавать рекламу в сообществах ВКонтакте.' })
	// 			break;
	// 		case '/for-advertisers':
	// 			setFooterState({ ...footerState, desc: 'VK AdBlogger — платформа для сотрудничества авторов и рекламодателей, на которой можно покупать рекламу в сообществах ВКонтакте.' })
	// 			break;
	// 		default:
	// 			setFooterState({
	// 				...footerState, desc: 'VK AdBlogger — платформа для&nbsp;сотрудничества авторов и&nbsp;рекламодателей, на&nbsp;которой можно покупать рекламу в&nbsp;сообществах ВКонтакте'
	// 			})
	// 			break;
	// 	}
	// }, [location])

	const caseItems = [
		{ text: 'Посевы и треккинг', link: 'top-cases/case-1' },
		{ text: 'Простор для контента', link: 'top-cases/case-3' },
		{ text: 'Космически нативно', link: 'top-cases/case-2' },
		{ text: 'Все кейсы', link: 'top-cases' }
	];

	const documentItems = [
		{ text: 'Пользовательское соглашение', link: 'https://adblogger.vk.com/documents/terms', target: "_blank" },
		{ text: 'Политика конфиденциальности', link: 'https://adblogger.vk.com/documents/privacy', target: "_blank" },
		{ text: 'Правила акции "шопс-чарт"', link: 'https://adblogger.vk.com/documents/shops-chart', target: "_blank" },
		...(isForAuthors
			? [
				{ text: 'Оферта для авторов', link: 'https://adblogger.vk.com/documents/offer_creator_products', target: "_blank" },
				{ text: 'Условия для авторов', link: 'https://adblogger.vk.com/documents/terms_creator', target: "_blank" },
				{ text: 'Правила размещения рекламы', link: 'https://adblogger.vk.com/documents/moderation', target: "_blank" },
			]
			: []),
		...(isForAdvertisers
			? [
				{ text: 'Оферта для рекламодателей', link: 'https://adblogger.vk.com/documents/offer_adv', target: "_blank" },
				{ text: 'Правила оказания рекламных услуг', link: 'https://adblogger.vk.com/documents/rules_adv', target: "_blank" },
				{ text: 'Правила размещения рекламы', link: 'https://adblogger.vk.com/documents/moderation', target: "_blank" },
			]
			: []),
	];

	const helpItems = [
		...(isForAuthors
			? [
				{ text: 'FAQ', link: 'https://vk.com/@-225265420-faq-po-platforme-vk-adblogger', target: "_blank" }
			]
			: []),
		...(isForShops
			? [
				{ text: 'FAQ', link: 'https://vk.com/@adblogger-for-authors-socom', target: "_blank" }
			]
			: []),
		...(!isForShops && !isForAuthors
			? [
				{ text: 'FAQ', link: 'https://adblogger.vk.com/documents/faq_advertiser', target: "_blank" }
			]
			: []),
		{ text: 'Написать в Поддержку', link: 'https://vk.cc/cyEF76', target: "_blank" }
	];


	return (
		<>
			<footer className='footer'>
				<div className="container">
					<div className="footer__top">
						<div className="footer__logo">
							<img src="/img/logo.svg" alt="img" />
						</div>
						<a
							href={btnState.link}
							className={"footer__btn btn btn_small btn_border " + (location.pathname == '/shops' ? 'btn_rounded' : '')}
							onClick={() => {
								handleTracking('registration_footer')
								handleTracking('registration_all')
							}}
						>
							{btnState.text}
						</a>
					</div>
					<div className="footer__wrapper">
						<div className="footer__body">
							<div className="footer__title text-20">{footerState.title}</div>
							<div className="footer__desc text-16" dangerouslySetInnerHTML={{ __html: footerState.desc }}></div>
						</div>
						<nav className="footer__nav nav">
							<ul className='nav__list'>
								<NavLink to='/top-cases/' className='nav__link nav__link_lvl1 text-20'>Кейсы</NavLink>
								{/* <NavItem title={"Кейсы"} submenu={caseItems} /> */}
								<NavItem title={"Документы"} submenu={documentItems} />
								<NavItem title={"Помощь"} submenu={helpItems} />
							</ul>
						</nav>
					</div>

					<div className="footer__bottom text-16">
						<div className="footer__bottom-row">
							<div className="footer__bottom-links ">
								<span>© VK, 2025.  Все права защищены.</span>
								<a href='https://adblogger.vk.com/documents/privacy' target='_blank' rel="noreferrer">Политика конфиденциальности</a>
								<span>125167, г. Москва, Ленинградский проспект, д. 39, стр. 79</span>
							</div>

							<a href='https://vk.cc/cAHxhA' className="footer__bottom-item" target='_blank' rel="noreferrer">
								Наше сообщество ВКонтакте
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
									<path fillRule="evenodd" clipRule="evenodd" d="M1.54648 1.54648C0 3.09295 0 5.58197 0 10.56V11.44C0 16.418 0 18.907 1.54648 20.4535C3.09295 22 5.58197 22 10.56 22H11.44C16.418 22 18.907 22 20.4535 20.4535C22 18.907 22 16.418 22 11.44V10.56C22 5.58197 22 3.09295 20.4535 1.54648C18.907 0 16.418 0 11.44 0H10.56C5.58197 0 3.09295 0 1.54648 1.54648ZM3.71245 6.69082C3.83161 12.4108 6.69159 15.8483 11.7058 15.8483H11.99V12.5758C13.8325 12.7591 15.2257 14.1066 15.7849 15.8483H18.3883C17.6733 13.245 15.794 11.8058 14.6207 11.2558C15.794 10.5775 17.444 8.92748 17.8382 6.69082H15.4731C14.9598 8.50582 13.4383 10.1558 11.99 10.3116V6.69082H9.6249V13.0341C8.15824 12.6675 6.3066 10.8891 6.2241 6.69082H3.71245Z" fill="white" />
								</svg>
							</a>
						</div>
					</div>
				</div >
			</footer >
		</>
	)
}
