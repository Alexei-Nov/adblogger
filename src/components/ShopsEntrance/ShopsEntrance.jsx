import React from 'react'
import './shopsEntrance.css'

export default function ShopsEntrance({ block_state }) {

	const windowWidth = window.innerWidth

	function toggleItem(e) {
		let item = e.target.closest('.shops-entrance__list-item')
		let body = item.querySelector('.shops-entrance__list-tooltip-body')

		if (!item.closest('.shops-entrance__list-item_open')) {
			item.classList.add('shops-entrance__list-item_open')
			body.style.height = body.scrollHeight + 'px'
		} else {
			item.classList.remove('shops-entrance__list-item_open')
			body.style.height = '100%'
		}
	}

	let zoomValue = 1
	if (window.innerWidth <= 450) {
		zoomValue = (window.innerWidth - 48) / 314
	}

	return (
		<>
			<section className='section shops-entrance snow'>
				{[...Array(200)].map((item, i) => {
					return (
						<div key={i} className="snow__elem"></div>
					)
				})}

				<div className="container">
					<div className="shops-entrance__wrapper">
						<div className="shops-entrance__body">
							<div className="shops-entrance__title text-55 fw-600" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
							<div className="shops-entrance__desc text-26 fw-500" dangerouslySetInnerHTML={{ __html: block_state.desc }}></div>
							<a href={block_state.btn_link} className="shops-entrance__btn btn btn_rounded btn_border text-20 fw-500" target='_blank'>{block_state.btn_text}</a>

							<div className="shops-entrance__list" style={{ zoom: zoomValue }}>
								{block_state.items_list.map((item, i) => {
									return (
										<div key={i} className="shops-entrance__list-item">
											<div className={"shops-entrance__list-item-body " + (item.dropdownn_text ? 'shops-entrance__list-item-body_bg' : '')}>
												{item.dropdownn_text &&
													<picture className='shops-entrance__list-item-bg'>
														<source media="(max-width: 450px)" srcSet="/img/cards-slider/bg_mob.svg" />
														<img src="/img/shops-entrance/bg.svg" alt="img" />
													</picture>
												}
												<div className="shops-entrance__list-icon">
													<img src={item.icon} alt="img" />
												</div>
												<div className="shops-entrance__list-name text-16" dangerouslySetInnerHTML={{ __html: item.name }}></div>
												{item.dropdownn_text &&
													<div className="shops-entrance__list-tooltip"
														onMouseEnter={windowWidth > 570 ? toggleItem : null}
														onMouseLeave={windowWidth > 570 ? toggleItem : null}
														onClick={windowWidth <= 570 ? toggleItem : null}
													>
														<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
															<path d="M10.0778 11.1499C10.5147 11.1499 10.7546 10.9051 10.8469 10.4847C10.9269 9.95762 11.1115 9.6878 11.9298 9.20463C12.7974 8.68381 13.2465 8.03749 13.2465 7.08997C13.2465 5.6279 12.0714 4.64901 10.3239 4.64901C9.00109 4.64901 8.01664 5.18238 7.62286 6.01067C7.49981 6.24912 7.43828 6.48757 7.43828 6.75739C7.43828 7.23429 7.73977 7.54176 8.22584 7.54176C8.60116 7.54176 8.87804 7.36607 9.03186 6.96447C9.22875 6.406 9.63483 6.1048 10.2378 6.1048C10.9146 6.1048 11.3822 6.5315 11.3822 7.14644C11.3822 7.72374 11.1423 8.03749 10.3486 8.52066C9.62253 8.95363 9.24721 9.44308 9.24721 10.1835V10.2714C9.24721 10.7859 9.55485 11.1499 10.0778 11.1499Z" fill="currentColor" fillOpacity="0.6" />
															<path fillRule="evenodd" clipRule="evenodd" d="M10.1101 2.9041C6.58149 2.9041 3.72099 5.76459 3.72099 9.29319C3.72099 12.8218 6.58149 15.6823 10.1101 15.6823C13.6387 15.6823 16.4992 12.8218 16.4992 9.29319C16.4992 5.76459 13.6387 2.9041 10.1101 2.9041ZM1.97852 9.29319C1.97852 4.80225 5.61914 1.16162 10.1101 1.16162C14.601 1.16162 18.2416 4.80225 18.2416 9.29319C18.2416 13.7841 14.601 17.4248 10.1101 17.4248C5.61914 17.4248 1.97852 13.7841 1.97852 9.29319Z" fill="currentColor" fillOpacity="0.6" />
															<path d="M11.1555 12.8943C11.1555 13.4717 10.6875 13.9398 10.1101 13.9398C9.53265 13.9398 9.06457 13.4717 9.06457 12.8943C9.06457 12.3169 9.53265 11.8488 10.1101 11.8488C10.6875 11.8488 11.1555 12.3169 11.1555 12.8943Z" fill="currentColor" fillOpacity="0.6" />
														</svg>
													</div>
												}
											</div>
											<div className="shops-entrance__list-tooltip-body content" dangerouslySetInnerHTML={{ __html: item.dropdownn_text }}></div>
										</div>
									)
								})}
							</div>
						</div>
						<div className="shops-entrance__img">
							<div className="shops-entrance__img-item">
								<img src="./img/shops-entrance/img-2.png" alt="img" />
							</div>
							<div className="shops-entrance__img-item">
								<img src="./img/shops-entrance/img-3.png" alt="img" />
							</div>
							<div className="shops-entrance__img-item">
								<img src="./img/shops-entrance/img-1.png" alt="img" />
							</div>
							<div className="shops-entrance__img-panel">
								<img src="./img/shops-entrance/img-4.png" alt="img" />
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
