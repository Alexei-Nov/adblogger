import React from 'react'
import './bannerKurs.css'
import { NavLink } from 'react-router-dom'

export default function BannerKurs({ block_state }) {
	return (
		<>
			<section className='section banner-kurs'>
				<div className="container">
					<div className="banner-kurs__wrapper">
						<div className="banner-kurs__body">
							<div className="banner-kurs__title text-50" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
							{block_state.desc &&
								<div className="banner-kurs__desc text-28" dangerouslySetInnerHTML={{ __html: block_state.desc }}></div>
							}
							<a href={block_state.btn_link} className="banner-kurs__btn btn btn_border btn_small text-28 fw-500" target='_blank'>
								{block_state.btn_text}
							</a>
						</div>
						<picture className="banner-kurs__img">
							<source media="(max-width: 1024px)" srcSet={block_state.img_tablet} />
							<img src={block_state.img} alt="img" />
						</picture>
					</div>
				</div>
			</section>
		</>
	)
}
