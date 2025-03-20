import React from 'react'
import './bannerSellers.css'
import { NavLink } from 'react-router-dom'

export default function BannerSellers({ block_state }) {
	return (
		<>
			<section className='section banner-sellers'>
				<div className="container">
					<div className="banner-sellers__wrapper">
						<div className="banner-sellers__body">
							<div className="banner-sellers__title h2" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
							<div className="banner-sellers__desc text-21" dangerouslySetInnerHTML={{ __html: block_state.desc }}></div>
							<NavLink
								to={block_state.btn_link}
								className="banner-sellers__btn btn btn_border btn_small text-20 fw-500"
							>{block_state.btn_text}</NavLink>
						</div>
						<picture className="banner-sellers__img">
							<source media="(max-width: 1024px)" srcSet={block_state.img_tablet} />
							<img src={block_state.img} alt="img" />
						</picture>
					</div>
				</div>
			</section>
		</>
	)
}
