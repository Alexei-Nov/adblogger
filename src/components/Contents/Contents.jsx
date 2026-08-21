import React, { useState } from 'react'
import './contents.css'

export default function Contents({ className, data }) {
	const [contentsClosed, setContentsClosed] = useState(true)
	const [submenuClosed, setSubmenuClosed] = useState([])

	function handleLinkClick(index) {
		if (submenuClosed.includes(index)) {
			const filteredArr = submenuClosed.filter(item => item !== index);
			setSubmenuClosed(filteredArr)
		} else {
			setSubmenuClosed([index, ...submenuClosed])
		}
	}

	function handleAnchor(id) {
		const element = document.querySelector(id);
		if (!element) return;

		window.scroll({
			top: element.getBoundingClientRect().top + window.scrollY - 102,
			behavior: 'smooth'
		});
	}

	return (
		<>
			<div className={className + " contents" + (contentsClosed ? " contents_closed" : "")}>
				<div className="contents__title text-20 fw-500" onClick={() => { setContentsClosed(!contentsClosed) }}>
					<div className="contents__title-text">Оглавление</div>
					<div className="contents__title-icon">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="20" height="20" rx="6" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 20 1.74846e-06)" fill="#00D3E6" />
							<path fillRule="evenodd" clipRule="evenodd" d="M15.8329 8.27813C15.5723 7.95618 15.1 7.90647 14.7781 8.16709L9.99998 12.0351L5.22188 8.16709C4.89993 7.90647 4.42767 7.95618 4.16704 8.27813C3.90642 8.60007 3.95613 9.07234 4.27808 9.33296L9.52808 13.583C9.80325 13.8057 10.1967 13.8057 10.4719 13.583L15.7219 9.33296C16.0438 9.07234 16.0935 8.60007 15.8329 8.27813Z" fill="black" />
						</svg>
					</div>
				</div>
				<nav className="contents__panel text-18">
					<ul className="contents__list">
						{data && data.map((item, i) => {
							return (
								<li key={i} className={'contents__list-item' + (!submenuClosed.includes(i) ? ' contents__list-item_closed' : "")}>
									<a href={item.link} className='contents__list-link'
										onClick={(e) => {
											e.preventDefault()
											handleAnchor(item.link)
										}}>
										<div className="contents__list-link-icon">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M15.3435 8.48495L19.773 8.90993C21.3143 9.0578 21.787 10.5634 20.5968 11.5525L17.129 14.4347L18.4164 19.13C18.8391 20.6719 17.5275 21.6053 16.2137 20.6773L12 17.701L7.78631 20.6773C6.47785 21.6016 5.16081 20.6721 5.58365 19.13L6.87104 14.4347L3.40318 11.5525C2.20801 10.5592 2.67885 9.05846 4.22675 8.90993L8.65551 8.48495L10.6067 3.98631C11.2177 2.57751 12.7826 2.57822 13.3932 3.98645L15.3435 8.48495Z" fill="currentColor" />
											</svg>
										</div>

										{item.title}

										{item.submenu &&
											<div className='contents__list-link-arrow'
												onClick={(e) => {
													e.preventDefault()
													handleLinkClick(i)
												}}>
												<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M15.8329 8.27813C15.5723 7.95618 15.1 7.90647 14.7781 8.16709L9.99998 12.0351L5.22188 8.16709C4.89993 7.90647 4.42767 7.95618 4.16704 8.27813C3.90642 8.60007 3.95613 9.07234 4.27808 9.33296L9.52808 13.583C9.80325 13.8057 10.1967 13.8057 10.4719 13.583L15.7219 9.33296C16.0438 9.07234 16.0935 8.60007 15.8329 8.27813Z" fill="white" />
												</svg>
											</div>
										}
									</a>

									{
										item.submenu &&
										<ul className='contents__sublist'>
											{item.submenu.map((subItem, j) => {
												return (
													<li key={i + '-' + j} className='contents__list-item'>
														<a href={subItem.link} className='contents__list-link'
															onClick={(e) => {
																e.preventDefault()
																handleAnchor(subItem.link)
															}}>{subItem.title}</a>
													</li>
												)
											})}
										</ul>
									}
								</li>
							)
						})}
					</ul>
				</nav>
			</div>
		</>
	)
}
