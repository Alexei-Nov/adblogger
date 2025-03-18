import React from 'react'
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'
import './header.css'
import { handleTracking } from 'utils/tracking'

export default function Header() {
	const btnState = useSelector(state => state.toolkit.registrationBtn)

	function toggleMenuClass() {
		document.body.classList.toggle('show-menu')
	}
	function removeMenuClass() {
		document.body.classList.remove('show-menu')
	}

	return (
		<>
			<header className='header'>
				<div className="container">
					<div className="header__wrapper">
						<NavLink to='/' className="header__logo" onClick={removeMenuClass}>
							<picture>
								<source media="(max-width: 570px)" srcSet="/img/logo_mob.svg" />
								<img src='/img/logo.svg' alt="logo" />
							</picture>
						</NavLink>

						<nav className="header__nav nav fw-500 text-18">
							<ul className='nav__list'>
								<li className='nav__item'>
									<NavLink
										to='/for-authors'
										className={({ isActive }) => (isActive ? 'nav__link nav__link_active' : 'nav__link')}
										onClick={removeMenuClass}
										end
									>Авторам</NavLink>
								</li>

								<li className='nav__item'>
									<NavLink
										to='/for-advertisers'
										className={({ isActive }) => (isActive ? 'nav__link nav__link_active' : 'nav__link')}
										onClick={removeMenuClass}
										end
									>Рекламодателям</NavLink>
								</li>
								<li className='nav__item'>
									<NavLink
										to='/top-cases'
										className={({ isActive }) => (isActive ? 'nav__link nav__link_active' : 'nav__link')}
										onClick={removeMenuClass}
										end
									>Топ-кейсы</NavLink>
								</li>
								<li className='nav__item'>
									<NavLink
										to='/for-sellers'
										className={({ isActive }) => (isActive ? 'nav__link nav__link_active' : 'nav__link')}
										onClick={removeMenuClass}
										end
									>Селлерам</NavLink>
								</li>
							</ul>
						</nav>
						<a
							href={btnState.link}
							className={"header__btn btn btn_small text-18 fw-500 "}
							onClick={() => handleTracking('registration_header')}
						>
							{btnState.text}
						</a>
						<div className="header__menu-btn" onClick={toggleMenuClass}>
							<span></span>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
