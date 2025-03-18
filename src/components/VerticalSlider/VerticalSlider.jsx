import React from 'react'
import './verticalSlider.css'

export default function VerticalSlider() {
	return (
		<>
			<section className='section vertical-slider'>
				<div className="container">
					<div className="vertical-slider__title"></div>
					<div className="vertical-slider__wrapper">
						<div className="vertical-slider__gallery swiper">
							<div className="vertical-slider__gallery-wrapper swiper-wrapper">
								<div className="vertical-slider__gallery-slide swiper-slide">
									<img src="" alt="img" />
								</div>
							</div>
						</div>
						<div className="vertical-slider__text-slider swiper">
							<div className="vertical-slider__text-slider-wrapper  swiper-wrapper">
								<div className="vertical-slider__text-slide swiper-slide">
									<div className="vertical-slider__text-title"></div>
									<div className="vertical-slider__text-bottom">
										<div className="vertical-slider__text-desc"></div>
										<a href='' className="vertical-slider__text-btn" target='_blank'></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
