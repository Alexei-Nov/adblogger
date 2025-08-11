import React from 'react'
import './salesImprovement.css'
import { NavLink } from 'react-router-dom'

export default function SalesImprovement({ block_state }) {
	return (
		<>
			<section className='section sales-improvement'>
				<div className="container">
					<div className="sales-improvement__title title h2" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
					<div className="sales-improvement__wrapper">
						{block_state.cases_list.map((case_item, i) => {
							return (
								<div key={i} className="sales-improvement__case">
									<div className="sales-improvement__img">
										<img src={case_item.img} alt="img" />
									</div>
									<div className="sales-improvement__body">
										<NavLink
											to={case_item.link}
											className="sales-improvement__name text-32 fw-500"
										>
											<div className="sales-improvement__name-text">
												{case_item.title}
											</div>
											<div className="sales-improvement__name-caret">
												<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
													<path fillRule="evenodd" clipRule="evenodd" d="M11.75 8C11.75 7.30964 12.3096 6.75 13 6.75H28C28.6904 6.75 29.25 7.30964 29.25 8V23C29.25 23.6904 28.6904 24.25 28 24.25C27.3096 24.25 26.75 23.6904 26.75 23V10.75L9.38388 28.1161C8.89573 28.6043 8.10427 28.6043 7.61612 28.1161C7.12796 27.628 7.12796 26.8365 7.61612 26.3483L24.7145 9.25H13C12.3096 9.25 11.75 8.69036 11.75 8Z" fill="white" />
												</svg>
											</div>
										</NavLink>
										<div className="sales-improvement__desc content" dangerouslySetInnerHTML={{ __html: case_item.desc }}></div>
										<div className="sales-improvement__bottom">
											{/* <div className="sales-improvement__subtitle text-21 fw-700">{case_item.subtitle}</div> */}
											<div className="sales-improvement__list">
												{case_item.elems_list.map((elem, j) => {
													return (
														<div key={j} className="sales-improvement__item">
															<div className="sales-improvement__item-label" dangerouslySetInnerHTML={{ __html: elem.label }}></div>
															<div className="sales-improvement__item-text text-32 fw-600" dangerouslySetInnerHTML={{ __html: elem.text }}></div>
														</div>
													)
												})}
											</div>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</section>
		</>
	)
}
