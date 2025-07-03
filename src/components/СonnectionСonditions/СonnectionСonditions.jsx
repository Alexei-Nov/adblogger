import React from 'react'
import './connectionСonditions.css'
import { handleTracking } from 'utils/tracking';

export default function СonnectionСonditions({ block_state }) {
	return (
		<>
			<section className='section connection-conditions'>
				<div className="container">
					<div className="connection-conditions__title text-40 fw-600" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
					<div className="connection-conditions__wrapper">
						<div className="connection-conditions__left">
							<div className="connection-conditions__list">
								{block_state.list.map((item, i) => {
									return (
										<div key={i} className="connection-conditions__list-item">
											<div className="connection-conditions__list-icon">
												<svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
													<path d="M17.3487 2.55965C18.4932 0.370091 21.5069 0.370091 22.6514 2.55965L26.8399 10.5723C27.2742 11.4032 28.0431 11.987 28.9346 12.1612L37.5333 13.8409C39.8828 14.3 40.8141 17.2903 39.1719 19.1026L33.1622 25.7345C32.539 26.4222 32.2446 27.3662 32.3614 28.3048L33.4874 37.3555C33.7949 39.8288 31.3567 41.677 29.1973 40.6075L21.295 36.6934C20.4755 36.2876 19.5246 36.2876 18.7051 36.6934L10.8018 40.6075C8.64247 41.6766 6.20517 39.8287 6.51275 37.3555L7.63872 28.3048C7.75545 27.3662 7.46115 26.4222 6.83794 25.7345L0.828177 19.1026C-0.814018 17.2903 0.117315 14.3 2.46685 13.8409L11.0655 12.1612C11.957 11.9869 12.7259 11.4032 13.1602 10.5723L17.3487 2.55965ZM30.1153 17.1358C29.4071 16.3804 28.2204 16.3418 27.4649 17.0499L18.7891 25.1827L13.8233 20.2169L13.6807 20.0889C12.9443 19.4881 11.8575 19.5303 11.1709 20.2169C10.4848 20.9035 10.4422 21.9903 11.043 22.7266L11.1709 22.8692L17.4209 29.1192C18.1363 29.8346 19.291 29.8528 20.0293 29.1612L30.0293 19.7862C30.7848 19.078 30.8234 17.8913 30.1153 17.1358Z" fill="black" />
												</svg>
											</div>
											<div className="connection-conditions__list-text" dangerouslySetInnerHTML={{ __html: item.text }}></div>
										</div>
									)
								})}

							</div>
							<a href={block_state.btn_link} className="connection-conditions__btn btn btn_border-black btn_wide btn_rounded fw-500">{block_state.btn_text}</a>
						</div>
						<div className="connection-conditions__right">
							<div className="connection-conditions__right-text" dangerouslySetInnerHTML={{ __html: block_state.desc }}></div>
							<a href={block_state.btn_right_link} className="connection-conditions__right-btn btn btn_border btn_rounded btn_wide fw-500">{block_state.btn_right_text}</a>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
