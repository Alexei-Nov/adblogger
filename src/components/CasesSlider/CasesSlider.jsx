import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Navigation } from 'swiper/modules';
import { handleTracking } from 'utils/tracking';
import 'swiper/css';
import './casesSlider.css'


export default function CasesSlider({ block_state }) {
	return (
		<>
			<section className='section cases-slider'>
				<div className="container">
					<div className="cases-slider__title text-40 fw-600" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
				</div>
				<Swiper
					className="cases-slider__slider"
					modules={[EffectCoverflow, Pagination, Navigation]}
					spaceBetween={8}
					speed={1000}
					slidesPerView={1}
					centeredSlides={true}
					allowTouchMove={false}
					loop={true}
					loopAdditionalSlides={2}
					pagination={{
						el: '.cases-slider__pagination',
						clickable: true
					}}
					navigation={{
						prevEl: '.cases-slider__prev',
						nextEl: '.cases-slider__next'
					}}
					breakpoints={{
						0: {
							spaceBetween: 10,
							allowTouchMove: true,
						},
						769: {
							spaceBetween: 8,
							allowTouchMove: false,
						},
					}}
				>
					{block_state.gallery.map((slide, i) => {
						return (
							<SwiperSlide key={i} className="cases-slider__slide">
								<div className="cases-slider__slide-img">
									<img src={slide.img} alt="img" />
								</div>
								<div className="cases-slider__slide-icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
										<path d="M16.942 24.9688C17.2914 26.9501 15.9684 28.8395 13.9871 29.1889C12.0057 29.5382 10.1163 28.2153 9.76698 26.2339C9.54452 24.9723 9.35915 23.921 9.21087 23.08C6.05046 22.5545 3.64258 19.807 3.64258 16.497C3.64258 12.8086 6.63268 9.81845 10.3212 9.81845H19.9351L24.7576 6.74813C26.4547 5.66763 28.7064 6.1675 29.7869 7.86463C30.1592 8.44927 30.3569 9.12797 30.3569 9.82105V23.173C30.3569 25.1849 28.7259 26.8159 26.714 26.8159C26.0209 26.8159 25.3422 26.6181 24.7576 26.2459L19.9351 23.1756L16.6257 23.175C16.7157 23.6851 16.8211 24.283 16.942 24.9688ZM12.1587 25.8122C12.2751 26.4727 12.9049 26.9137 13.5654 26.7972C14.2258 26.6807 14.6668 26.0509 14.5503 25.3905C14.3986 24.5301 14.2683 23.7912 14.1595 23.1739L11.6935 23.1744C11.8208 23.8963 11.9759 24.7756 12.1587 25.8122ZM26.0619 8.79675L20.6426 12.247V20.747L26.0619 24.1973C26.2568 24.3214 26.483 24.3873 26.714 24.3873C27.3846 24.3873 27.9283 23.8436 27.9283 23.173V9.82105C27.9283 9.59002 27.8624 9.36379 27.7383 9.16891C27.3781 8.6032 26.6276 8.43658 26.0619 8.79675ZM18.214 12.2467L10.3212 12.247C7.97394 12.247 6.07115 14.1498 6.07115 16.497C6.07115 18.8442 7.97394 20.747 10.3212 20.747L18.214 20.7467V12.2467Z" fill="black" />
									</svg>
								</div>
							</SwiperSlide>
						)
					})}
					<div className="cases-slider__pagination slider-pagination"></div>
					<div className="cases-slider__navigation ">
						<div className="cases-slider__prev">
							<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
								<circle cx="29.664" cy="29.664" r="28.664" transform="matrix(-1 0 0 1 59.3281 0.0214844)" fill="black" stroke="white" strokeWidth="2" />
								<path d="M14.9319 28.6843C14.3788 29.2374 14.3788 30.1342 14.9319 30.6873L25.4475 41.2029C26.0006 41.756 26.8974 41.756 27.4505 41.2029C28.0036 40.6498 28.0036 39.7531 27.4505 39.2L19.3518 31.1006L43.3908 31.1021C44.1129 31.1021 44.7087 30.5618 44.7961 29.8635L44.8072 29.6858C44.8072 28.9036 44.1731 28.2695 43.3908 28.2695L19.3538 28.2684L27.4505 20.1717C27.9641 19.6581 28.0008 18.8482 27.5605 18.2922L27.4505 18.1687C26.8974 17.6156 26.0006 17.6156 25.4475 18.1687L14.9319 28.6843Z" fill="white" />
							</svg>
						</div>
						<div className="cases-slider__next">
							<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
								<circle cx="29.9921" cy="29.6855" r="28.664" fill="black" stroke="white" strokeWidth="2" />
								<path d="M44.7224 28.6843C45.2755 29.2374 45.2755 30.1342 44.7224 30.6873L34.2068 41.2029C33.6537 41.756 32.7569 41.756 32.2038 41.2029C31.6507 40.6498 31.6507 39.7531 32.2038 39.2L40.3025 31.1006L16.2634 31.1021C15.5414 31.1021 14.9456 30.5618 14.8582 29.8635L14.8471 29.6858C14.8471 28.9036 15.4812 28.2695 16.2634 28.2695L40.3005 28.2684L32.2038 20.1717C31.6902 19.6581 31.6535 18.8482 32.0938 18.2922L32.2038 18.1687C32.7569 17.6156 33.6537 17.6156 34.2068 18.1687L44.7224 28.6843Z" fill="white" />
							</svg>
						</div>
					</div>
				</Swiper>
			</section>
		</>
	)
}
