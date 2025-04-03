import React, { useEffect, useRef } from 'react'
import 'swiper/css';
import './verticalSlider.css'

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { handleTracking } from 'utils/tracking';
gsap.registerPlugin(ScrollTrigger);

export default function VerticalSlider({ block_state }) {
	let wrapper = useRef();

	useEffect(() => {
		if (window.innerWidth > 700) {
			let slidesArr = wrapper.current.querySelectorAll('.vertical-slider__slide')

			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: wrapper.current,
					start: "top 60px",
					end: "+=" + (window.innerHeight * slidesArr.length - 60),
					scrub: true,
					markers: false,
					pin: true,
				}
			});


			slidesArr.forEach((slide, index) => {
				if (index + 1 < slidesArr.length) {
					let img = slide.querySelector('.vertical-slider__img img')
					let body = slide.querySelector('.vertical-slider__body')

					tl.fromTo(img, {
						xPercent: 0,
					}, {
						xPercent: -100,
					}, index);
					tl.fromTo(body, {
						yPercent: 0,
					}, {
						yPercent: -100,
						opacity: 0
					}, index);
				}

				if (slidesArr[index + 1]) {
					let img_next = slidesArr[index + 1].querySelector('.vertical-slider__img img')
					let body_next = slidesArr[index + 1].querySelector('.vertical-slider__body')

					tl.fromTo(img_next, {
						xPercent: 100,
						pointerEvents: "none",
					}, {
						pointerEvents: "all",
						xPercent: 0,
					}, index);
					tl.fromTo(body_next, {
						yPercent: 100,
						opacity: 0,
						pointerEvents: "none",
					}, {
						pointerEvents: "all",
						yPercent: 0,
						opacity: 1
					}, index);
				}
			})
		}
	})

	return (
		<>
			<section className='section vertical-slider' >
				<div className="container" ref={wrapper}>
					{
						block_state.title &&
						<div className="vertical-slider__title title h2" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
					}
					<Swiper className='vertical-slider__slider'

						spaceBetween={24}
						speed={800}
						slidesPerView={1}

						modules={[Pagination]}
						pagination={{
							el: '.vertical-slider__pagination',
							clickable: true
						}}

						breakpoints={{
							0: {
								allowTouchMove: true
							},
							768: {
								allowTouchMove: false
							}
						}}
					>
						{block_state.slides_list.map((slide, i) => {
							return (
								<SwiperSlide key={i} className='vertical-slider__slide'>
									<picture className="vertical-slider__img">
										<source media="(max-width: 1024px)" srcSet={slide.img_mob} />
										<img src={slide.img} alt="img" />
									</picture>

									<div className="vertical-slider__body">
										<div className="vertical-slider__body-title text-32 fw-500" dangerouslySetInnerHTML={{ __html: slide.title }}></div>
										<div className="vertical-slider__body-bottom">
											<div className="vertical-slider__body-desc text-21" dangerouslySetInnerHTML={{ __html: slide.desc }}></div>
											{slide.btn_link &&
												<a href={slide.btn_link}
													className="vertical-slider__body-btn btn btn_small text-18 fw-500"
													target='_blank'
													onClick={() => { handleTracking('reg_seller_second'); handleTracking('reg_seller_all'); }}

												>{slide.btn_text}</a>
											}
										</div>
									</div>
								</SwiperSlide>
							)
						})}

						<div className="vertical-slider__pagination slider-pagination"></div>
					</Swiper>
				</div>
			</section>
		</>
	)
}
