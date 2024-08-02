import React from 'react'
import './header.css'

export default function Header() {

	function toggleMenuClass() {
		document.body.classList.toggle('show-menu')
	}

	return (
		<header className='header'>
			<div className="container">
				<div className="header__wrapper">
					<a href='/' className="header__logo">
						<img src='/img/logo.svg' alt="logo" />
					</a>
					<nav className="header__nav nav fw-500 text-18">
						<ul className='nav__list'>
							<li className='nav__item'>
								<a href="/" className='nav__link'>Авторам</a>
							</li>
							<li className='nav__item'>
								<a href="/" className='nav__link'>Рекламодателям</a>
							</li>
							<li className='nav__item'>
								<a href="/" className='nav__link'>Топ-кейсы</a>
							</li>
						</ul>
					</nav>
					<a href='/' className="header__btn btn btn_small text-18 fw-500">
						Подключить сообщество
					</a>
					<div className="header__menu-btn" onClick={toggleMenuClass}>
						<span></span>
					</div>
				</div>
			</div>
		</header>
	)
}
