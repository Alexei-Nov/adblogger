import React, { useEffect } from 'react'
import { NavLink, useLocation } from "react-router-dom";
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

	const location = useLocation();
	useEffect(() => {

	}, [location]);

	return (
		<>
			<header className='header'>
				<div className="container">
					<div className="header__wrapper">
						<NavLink to='/' className="header__logo" onClick={removeMenuClass}>
							<picture>
								{/* <source media="(max-width: 570px)" srcSet="/img/logo_mob.svg" /> */}
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
										to='/shops'
										style={{ color: '#00D3E6' }}
										className={({ isActive }) => 'nav__link fw-400 ' + (isActive ? ' nav__link_active' : '')}
										onClick={removeMenuClass}
										end
									>
										Шопсы
										<div className="nav__link-img">
											<svg width="95" height="48" viewBox="0 0 95 48" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M70.0004 12.9999C15.885 -2.66109 -26.9983 20.4999 25.0008 41.0001C51.6415 51.5029 108 46.4997 89.5006 20.4999C76.1322 1.71131 35.1016 -1.02065 12.0005 3.49985" stroke="#00D3E6" strokeWidth="2" />
											</svg>
										</div>
									</NavLink>
								</li>
								<li className='nav__item'>
									<NavLink
										to='/for-advertisers'
										className={({ isActive }) => (isActive ? 'nav__link nav__link_active' : 'nav__link')}
										onClick={removeMenuClass}
										end
									>Рекламодателям</NavLink>
								</li>
								{/* {location.pathname != '/tovary' &&
									<li className='nav__item'>
										<NavLink
											to='/top-cases'
											className={({ isActive }) => (isActive ? 'nav__link nav__link_active' : 'nav__link')}
											onClick={removeMenuClass}
											end
										>Топ-кейсы</NavLink>
									</li>
								} */}
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
							className={"header__btn btn btn_small text-18 fw-500 " + (location.pathname == '/shops' ? 'btn_rounded btn_border' : '')}
							onClick={() => {
								handleTracking('registration_header')
								handleTracking('registration_all')
							}}
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
