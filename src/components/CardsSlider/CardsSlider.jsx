import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import './cardsSlider.css'

export default function CardsSlider({ block_state }) {
	const windowWidth = window.innerWidth

	function toggleItem(e) {
		let item = e.target.closest('.cards-slider__list-item')
		let body = item.querySelector('.cards-slider__list-tooltip-body')

		if (!item.closest('.cards-slider__list-item_open')) {
			item.classList.add('cards-slider__list-item_open')
			body.style.height = body.scrollHeight + 'px'
		} else {
			item.classList.remove('cards-slider__list-item_open')
			body.style.height = '100%'
		}
	}

	return (
		<>
			<section className='section cards-slider'>
				<div className="container">
					<div className="cards-slider__heading">
						<div className="cards-slider__title text-40 fw-600" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
						<a href={block_state.btn_link} className="cards-slider__btn btn btn_rounded btn_border">{block_state.btn_text}</a>
					</div>

					<Swiper
						className="cards-slider__slider"
						modules={[Autoplay]}

						spaceBetween={24}
						speed={5000}
						slidesPerView={'auto'}
						loop={true}
						loopAdditionalSlides={2}
						draggable={false}
						grabCursor={false}
						allowTouchMove={false}
						watchSlidesProgress={true}
						centeredSlides={true}
						autoplay={{
							delay: 0,
							reverseDirection: false,
							disableOnInteraction: false,
							pauseOnMouseEnter: false
						}}
						onInitialSlide={
							(swiper) => {
								Math.floor(swiper.slides.length / 4)
							}
						}

						onProgress={(swiper) => {
							const sizesGrid = swiper.slidesSizesGrid;
							const rotate = 17;
							const angleModifier = 1 / (180 / rotate);

							for (let i = 0; i < swiper.slides.length; i += 1) {
								const slideEl = swiper.slides[i];
								const slideProgress = slideEl.progress;
								const slideSize = sizesGrid[i];
								const angleCos = 1 - Math.cos(slideProgress * angleModifier * Math.PI);
								const rotateY = slideProgress * rotate * 1;
								const translateX = slideProgress * (slideSize / rotate) * angleCos / 100;
								const scale = 0.98 + Math.abs((rotateY * 0.004) * slideProgress) / 1.5
								const opacity = 1 - Math.abs((rotateY * 0.004) * slideProgress);
								Object.assign(slideEl.style, {
									opacity,
									zIndex: `${slideProgress}`,
									perspective: "1500px",
									transformOrigin: "center",
									backfaceVisibility: "hidden",
									transform: `translateX(${translateX}px)`
								});

								const img = slideEl.querySelector(".cards-slider__slide-img");
								Object.assign(img.style, {
									transformOrigin: "center",
									backfaceVisibility: "hidden",
									transform: `rotateY(${rotateY}deg) scale(${scale})`
								});
							}
						}}
						onSetTransition={(swiper, speed) => {
							const { slides } = swiper;
							for (let i = 0, length = slides.length; i < length; i++) {
								const slide = slides[i];
								const img = slide.querySelector(".cards-slider__slide-img");
								img.style.setProperty('transition', `transform ${speed}ms linear 0s`);
								slide.style.setProperty('transition', `transform ${speed}ms linear 0s, opacity ${speed}ms linear 0s`);
							}
						}}

						breakpoints={{
							0: {
								spaceBetween: 0,
							},
							769: {
								spaceBetween: 10,
							},
						}}
					>
						{block_state.gallery.map((slide, i) => {
							return (
								<SwiperSlide key={i} className="cards-slider__slide">
									<div className="cards-slider__slide-img">
										<img src={slide.img} alt="img" />
									</div>
								</SwiperSlide>
							)
						})}
					</Swiper>

					<div className="cards-slider__list">
						{block_state.items_list.map((item, i) => {
							return (
								<div key={i} className="cards-slider__list-item">
									<div className="cards-slider__list-item-body">
										<div className="cards-slider__list-icon">
											<img src={item.icon} alt="img" />
										</div>
										<div className="cards-slider__list-name" dangerouslySetInnerHTML={{ __html: item.name }}></div>
										{item.dropdownn_text &&
											<div className="cards-slider__list-tooltip"

												onMouseEnter={windowWidth > 570 ? toggleItem : null}
												onMouseLeave={windowWidth > 570 ? toggleItem : null}
												onClick={windowWidth <= 570 ? toggleItem : null}
											>
												<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
													<path d="M10.0778 11.1499C10.5147 11.1499 10.7546 10.9051 10.8469 10.4847C10.9269 9.95762 11.1115 9.6878 11.9298 9.20463C12.7974 8.68381 13.2465 8.03749 13.2465 7.08997C13.2465 5.6279 12.0714 4.64901 10.3239 4.64901C9.00109 4.64901 8.01664 5.18238 7.62286 6.01067C7.49981 6.24912 7.43828 6.48757 7.43828 6.75739C7.43828 7.23429 7.73977 7.54176 8.22584 7.54176C8.60116 7.54176 8.87804 7.36607 9.03186 6.96447C9.22875 6.406 9.63483 6.1048 10.2378 6.1048C10.9146 6.1048 11.3822 6.5315 11.3822 7.14644C11.3822 7.72374 11.1423 8.03749 10.3486 8.52066C9.62253 8.95363 9.24721 9.44308 9.24721 10.1835V10.2714C9.24721 10.7859 9.55485 11.1499 10.0778 11.1499Z" fill="white" fillOpacity="0.6" />
													<path fillRule="evenodd" clipRule="evenodd" d="M10.1101 2.9041C6.58149 2.9041 3.72099 5.76459 3.72099 9.29319C3.72099 12.8218 6.58149 15.6823 10.1101 15.6823C13.6387 15.6823 16.4992 12.8218 16.4992 9.29319C16.4992 5.76459 13.6387 2.9041 10.1101 2.9041ZM1.97852 9.29319C1.97852 4.80225 5.61914 1.16162 10.1101 1.16162C14.601 1.16162 18.2416 4.80225 18.2416 9.29319C18.2416 13.7841 14.601 17.4248 10.1101 17.4248C5.61914 17.4248 1.97852 13.7841 1.97852 9.29319Z" fill="white" fillOpacity="0.6" />
													<path d="M11.1555 12.8943C11.1555 13.4717 10.6875 13.9398 10.1101 13.9398C9.53265 13.9398 9.06457 13.4717 9.06457 12.8943C9.06457 12.3169 9.53265 11.8488 10.1101 11.8488C10.6875 11.8488 11.1555 12.3169 11.1555 12.8943Z" fill="white" fillOpacity="0.6" />
												</svg>
											</div>
										}
									</div>
									<div className="cards-slider__list-tooltip-body content" dangerouslySetInnerHTML={{ __html: item.dropdownn_text }}></div>
								</div>
							)
						})}
					</div>
				</div>
			</section >
		</>
	)
}
