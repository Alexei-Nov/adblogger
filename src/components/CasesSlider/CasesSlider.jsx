import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Navigation } from 'swiper/modules';
import { handleTracking } from 'utils/tracking';
import 'swiper/css';
import './casesSlider.css'


export default function CasesSlider({ block_state }) {
	const slider = useRef()

	const [mutedVideo, setMutedVideo] = useState(true)

	useEffect(() => {
		const viewportStart = window.innerHeight / 2;
		const viewportEnd = window.innerHeight / 3;
		window.addEventListener('scroll', (e) => {
			let elementCenterY = slider.current.getBoundingClientRect().top;
			if (elementCenterY < viewportStart &&
				elementCenterY > viewportEnd &&
				!slider.current.classList.contains('cases-slider__slider_view')
			) {
				slider.current.classList.add('cases-slider__slider_view')
				slider.current.querySelector('.swiper-slide-active video').play()
			}
		})
	}, [])


	return (
		<>
			<section className='section cases-slider'>
				<div className="container">
					<div className="cases-slider__title text-40 fw-600" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
				</div>
				<Swiper
					ref={slider}
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
					onRealIndexChange={(swiper) => {
						swiper.slides[swiper.previousIndex].querySelector('video').pause()
						swiper.slides[swiper.activeIndex].querySelector('video').play()
					}}
				>
					{block_state.gallery.map((slide, i) => {
						return (
							<SwiperSlide key={i} className="cases-slider__slide">
								<div className="cases-slider__slide-video">
									<video src={slide.video} muted={mutedVideo} controls playsInline preload="none" poster={slide.poster}></video>
								</div>
								<div className="cases-slider__slide-icon"
									onClick={(e) => { setMutedVideo(!mutedVideo) }}>
									{
										!mutedVideo &&
										<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M15.8125 5.5C16.94 5.5 17.9997 6.36736 18 7.6106V23.3894C17.9997 24.6326 16.94 25.5 15.8125 25.5C14.8598 25.5 13.9305 25.1499 13.2332 24.5027L7.93286 19.5833H5.67456C4.27801 19.5833 3 18.5129 3 17.0198V13.9802C3 12.4871 4.27801 11.4167 5.67456 11.4167H7.93286L13.2332 6.49731C13.9305 5.85013 14.8598 5.5 15.8125 5.5ZM15.7502 7.75098C15.3667 7.76554 15.015 7.91346 14.7639 8.14648L9.14014 13.3662C8.93208 13.5593 8.65859 13.6665 8.37476 13.6665H5.67456C5.50022 13.6665 5.24976 13.7735 5.24976 13.9802V17.0198C5.24976 17.2265 5.50022 17.3335 5.67456 17.3335H8.37476C8.65859 17.3335 8.93208 17.4407 9.14014 17.6338L14.7639 22.8535C15.015 23.0866 15.3667 23.2344 15.7502 23.249V7.75098Z" fill="black" />
											<path d="M26.2043 12.2041C26.6437 11.7649 27.3568 11.7648 27.7961 12.2041C28.2354 12.6434 28.2353 13.3566 27.7961 13.7959L25.9663 15.6245L27.7961 17.4543L27.873 17.5398C28.2332 17.9817 28.2079 18.6344 27.7961 19.0461C27.3844 19.4579 26.7316 19.4832 26.2898 19.123L26.2043 19.0461L24.3745 17.2163L22.5459 19.0461L22.4592 19.123C22.0174 19.4829 21.3658 19.4578 20.9541 19.0461C20.5424 18.6344 20.5172 17.9817 20.8772 17.5398L20.9541 17.4543L22.7827 15.6245L20.9541 13.7959C20.5148 13.3566 20.5148 12.6434 20.9541 12.2041C21.3934 11.7648 22.1066 11.7648 22.5459 12.2041L24.3745 14.0327L26.2043 12.2041Z" fill="black" />
										</svg>
									}
									{
										mutedVideo &&
										<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M15.8125 5.5C16.94 5.5 17.9997 6.36736 18 7.6106V23.3894C17.9997 24.6326 16.94 25.5 15.8125 25.5C14.8598 25.5 13.9305 25.1499 13.2332 24.5027L7.93286 19.5833H5.67456C4.27801 19.5833 3 18.5129 3 17.0198V13.9802C3 12.4871 4.27801 11.4167 5.67456 11.4167H7.93286L13.2332 6.49731C13.9305 5.85013 14.8598 5.5 15.8125 5.5ZM15.7502 7.75098C15.3667 7.76554 15.015 7.91346 14.7639 8.14648L9.14014 13.3662C8.93208 13.5593 8.65859 13.6665 8.37476 13.6665H5.67456C5.50022 13.6665 5.24976 13.7735 5.24976 13.9802V17.0198C5.24976 17.2265 5.50022 17.3335 5.67456 17.3335H8.37476C8.65859 17.3335 8.93208 17.4407 9.14014 17.6338L14.7639 22.8535C15.015 23.0866 15.3667 23.2344 15.7502 23.249V7.75098Z" fill="black" />
											<path d="M25.4225 8.33148C27.3217 10.2401 28.5 12.7396 28.5 15.5C28.5 18.2604 27.3217 20.7599 25.4225 22.6685C24.9843 23.109 24.2719 23.1108 23.8315 22.6725C23.391 22.2343 23.3893 21.5219 23.8275 21.0815C25.3614 19.54 26.25 17.5929 26.25 15.5C26.25 13.4071 25.3614 11.46 23.8275 9.91853C23.3893 9.4781 23.391 8.76579 23.8315 8.32754C24.2719 7.88929 24.9843 7.89105 25.4225 8.33148ZM22.2335 12.1479C23.016 13.0719 23.5 14.2286 23.5 15.5C23.5 16.7714 23.016 17.9281 22.2335 18.8521C21.8319 19.3263 21.122 19.385 20.6479 18.9835C20.1738 18.5819 20.115 17.872 20.5165 17.3979C20.9947 16.8334 21.25 16.1804 21.25 15.5C21.25 14.8196 20.9947 14.1666 20.5165 13.6021C20.115 13.128 20.1738 12.4181 20.6479 12.0165C21.122 11.615 21.8319 11.6738 22.2335 12.1479Z" fill="black" />
										</svg>
									}
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
