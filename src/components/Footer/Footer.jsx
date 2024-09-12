import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import './footer.css'
import { useLocation } from 'react-router-dom';

export default function Footer({ footer }) {
	const [footerState, setFooterState] = useState(footer)

	const btnState = useSelector(state => state.toolkit.registrationBtn)
	let nav = useRef();

	useEffect(() => {
		if (window.innerWidth < 768 && nav.current) {
			let linkLvl1Arr = nav.current.querySelectorAll('.nav__link_lvl1')
			linkLvl1Arr.forEach(link => {
				let item = link.closest('.nav__item_lvl1')
				let body = item.querySelector('.nav__submenu')
				if (!item.closest('.nav__item_open')) {
					body.style.maxHeight = 0
				}
				item.addEventListener('click', (e) => {
					if (!link.closest('.nav__item_open')) {
						e.preventDefault()
					}

					if (!e.target.closest('.nav__submenu')) {
						if (!item.closest('.nav__item_open')) {
							item.classList.add('nav__item_open')
							body.style.maxHeight = body.scrollHeight + 'px'
						} else {
							item.classList.remove('nav__item_open')
							body.style.maxHeight = 0
						}
					}
				})
			})
		}
	})

	const location = useLocation()
	useEffect(() => {
		switch (window.location.pathname) {
			case '/for-authors':
				setFooterState({ ...footerState, desc: 'VK AdBlogger — платформа для сотрудничества авторов и рекламодателей, на которой можно продавать рекламу в сообществах ВКонтакте.' })
				break;
			case '/for-advertisers':
				setFooterState({ ...footerState, desc: 'VK AdBlogger — платформа для сотрудничества авторов и рекламодателей, на которой можно покупать рекламу в сообществах ВКонтакте.' })
				break;
			default:
				setFooterState({ ...footerState, desc: 'VK AdBlogger — платформа для сотрудничества авторов и рекламодателей.' })
				break;
		}
	}, [location])

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
							className="footer__btn btn btn_small btn_border"
							onClick={() => `ym(98108619, 'reachGoal', 'registration_footer');
								_tmr.push({ id: '3536479', type: 'reachGoal', goal: 'registration_footer' });`
							}
						>
							{btnState.text}
						</a>
					</div>
					<div className="footer__wrapper">
						<div className="footer__body">
							<div className="footer__title text-20">{footerState.title}</div>
							<div className="footer__desc text-16">{footerState.desc}</div>
						</div>
						<nav className="footer__nav nav" ref={nav}>
							<ul className='nav__list'>
								<li className='nav__item nav__item_lvl1'>
									<a href="/" className='nav__link nav__link_lvl1 text-20'>Кейсы</a>
									<div className="nav__caret"></div>
									<ul className='nav__submenu text-16'>
										<li className='nav__item nav__item_lvl2'>
											<a href="/" className='nav__link nav__link_lvl2'>Отдых по авторски</a>
										</li>
										<li className='nav__item nav__item_lvl2'>
											<a href="/" className='nav__link nav__link_lvl2'>Просмотры растут</a>
										</li>
										<li className='nav__item nav__item_lvl2'>
											<a href="/" className='nav__link nav__link_lvl2'>Розыгрыш автомобиля Тинькофф</a>
										</li>
										<li className='nav__item nav__item_lvl2'>
											<a href="/" className='nav__link nav__link_lvl2'>Все кейсы</a>
										</li>
									</ul>
								</li>
								<li className='nav__item nav__item_lvl1'>
									<a href="/" className='nav__link nav__link_lvl1 text-20'>Документы</a>
									<div className="nav__caret"></div>

									<ul className='nav__submenu text-16'>
										<li className='nav__item nav__item_lvl2'>
											<a href="/" className='nav__link nav__link_lvl2'>Руководство</a>
										</li>
										<li className='nav__item nav__item_lvl2'>
											<a href="/" className='nav__link nav__link_lvl2'>Лицензионное соглашение</a>
										</li>
									</ul>
								</li>
								<li className='nav__item nav__item_lvl1'>
									<a href="/" className='nav__link nav__link_lvl1 text-20'>Помощь</a>
									<div className="nav__caret"></div>

									<ul className='nav__submenu text-16'>
										<li className='nav__item nav__item_lvl2'>
											<a href="/" className='nav__link nav__link_lvl2'>FAQ</a>
										</li>
										<li className='nav__item nav__item_lvl2'>
											<a href="/" className='nav__link nav__link_lvl2'>Обратная связь</a>
										</li>
									</ul>
								</li>
							</ul>
						</nav>
					</div>

					<div className="footer__bottom text-16">
						<div className="footer__bottom-row">
							<div className="footer__bottom-links ">
								<span>© VK, 2024 г.  Все права защищены.</span>
								<a href='/'>Политика конфиденциальности</a>
								<span>125167, г. Москва, Ленинградский проспект, д. 39, стр. 79</span>
							</div>

							<div className="footer__bottom-item">
								Наше сообщество ВКонтакте
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
									<path fillRule="evenodd" clipRule="evenodd" d="M1.54648 1.54648C0 3.09295 0 5.58197 0 10.56V11.44C0 16.418 0 18.907 1.54648 20.4535C3.09295 22 5.58197 22 10.56 22H11.44C16.418 22 18.907 22 20.4535 20.4535C22 18.907 22 16.418 22 11.44V10.56C22 5.58197 22 3.09295 20.4535 1.54648C18.907 0 16.418 0 11.44 0H10.56C5.58197 0 3.09295 0 1.54648 1.54648ZM3.71245 6.69082C3.83161 12.4108 6.69159 15.8483 11.7058 15.8483H11.99V12.5758C13.8325 12.7591 15.2257 14.1066 15.7849 15.8483H18.3883C17.6733 13.245 15.794 11.8058 14.6207 11.2558C15.794 10.5775 17.444 8.92748 17.8382 6.69082H15.4731C14.9598 8.50582 13.4383 10.1558 11.99 10.3116V6.69082H9.6249V13.0341C8.15824 12.6675 6.3066 10.8891 6.2241 6.69082H3.71245Z" fill="white" />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
