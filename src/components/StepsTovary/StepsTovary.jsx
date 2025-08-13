import React, { useEffect } from 'react'
import './stepsTovary.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { handleTracking } from 'utils/tracking';


export default function StepsTovary({ block_state }) {
	let zoomValue = 1
	if (window.innerWidth <= 570) {
		zoomValue = (window.innerWidth - 48) / 314
	} else if (window.innerWidth <= 768) {
		zoomValue = (window.innerWidth - 120 - 80) / 314
	}

	return (
		<>
			<section className='section steps-tovary'>
				<div className="container">
					<div className="steps-tovary__wrapper">
						<div className="steps-tovary__heading">
							<div className="steps-tovary__title text-40 fw-600" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
							<div className="steps-tovary__desc fw-500" dangerouslySetInnerHTML={{ __html: block_state.desc }}></div>
						</div>
						<div className="steps-tovary__body">
							<div className="steps-tovary__steps" style={{ zoom: zoomValue }}>
								{block_state.steps.map((item, i) => {
									return (
										<div key={i} className="steps-tovary__steps-item">
											<div className="steps-tovary__steps-num">{i + 1}</div>
											<div className="steps-tovary__steps-body">
												<div className="steps-tovary__steps-desc content text-22" dangerouslySetInnerHTML={{ __html: item.text }}></div>
											</div>
										</div>
									)
								})}

								<a href={block_state.btn_link} className="steps-tovary__btn btn btn_rounded btn_wide btn_border-black text-20 fw-500">{block_state.btn_text}</a>
							</div>
							<Swiper
								className="steps-tovary__slider"
								modules={[Pagination, Autoplay]}
								spaceBetween={8}
								speed={800}
								slidesPerView={1}
								centeredSlides={true}
								autoplay={{
									delay: 4000,
									disableOnInteraction: false
								}}
								pagination={{
									el: '.steps-tovary__pagination',
									clickable: true
								}}
								breakpoints={{
									0: {
										slidesPerView: 1,
										centeredSlides: true
									},
								}}
							>
								{block_state.gallery.map((slide, i) => {
									return (
										<SwiperSlide key={i} className="steps-tovary__slide">
											<div className="steps-tovary__slide-img">
												<img src={slide.img} alt="img" />
											</div>
										</SwiperSlide>
									)
								})}
								<div className="steps-tovary__pagination"></div>
							</Swiper>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
