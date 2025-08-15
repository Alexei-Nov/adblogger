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
					onSlideChange={(swiper) => {
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
										<svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M17.8125 5.24023C18.9401 5.24023 20 6.10783 20 7.35135V23.1291C20 24.3726 18.9401 25.2402 17.8125 25.2402C16.8598 25.2402 15.9308 24.8897 15.2334 24.2425L9.93339 19.3236H7.67447C6.27792 19.3236 5 18.2536 5 16.7605V13.72C5 12.2269 6.27792 11.1569 7.67447 11.1569H9.93339L15.2334 6.23793C15.9308 5.59071 16.8598 5.24023 17.8125 5.24023ZM17.75 7.49142C17.3664 7.50598 17.0151 7.65401 16.764 7.88711L11.1403 13.1065C10.9322 13.2996 10.6589 13.4069 10.375 13.4069H7.67447C7.50014 13.4069 7.25 13.5132 7.25 13.72V16.7605C7.25 16.9672 7.50014 17.0736 7.67447 17.0736H10.375C10.6589 17.0736 10.9322 17.1809 11.1403 17.374L16.764 22.5934C17.0151 22.8265 17.3664 22.9745 17.75 22.9891V7.49142ZM26.9225 8.07171C28.8216 9.98031 30 12.4798 30 15.2402C30 18.0006 28.8216 20.5001 26.9225 22.4087C26.4843 22.8492 25.7719 22.851 25.3315 22.4127C24.891 21.9745 24.8893 21.2621 25.3275 20.8217C26.8614 19.2802 27.75 17.3331 27.75 15.2402C27.75 13.1474 26.8614 11.2003 25.3275 9.65876C24.8893 9.21833 24.891 8.50602 25.3315 8.06777C25.7719 7.62952 26.4843 7.63128 26.9225 8.07171ZM23.7335 11.8881C24.516 12.8121 25 13.9689 25 15.2402C25 16.5116 24.516 17.6684 23.7335 18.5924C23.3319 19.0665 22.622 19.1252 22.1479 18.7237C21.6738 18.3221 21.615 17.6122 22.0165 17.1381C22.4946 16.5736 22.75 15.9206 22.75 15.2402C22.75 14.5599 22.4946 13.9069 22.0165 13.3424C21.615 12.8682 21.6738 12.1583 22.1479 11.7568C22.622 11.3552 23.3319 11.414 23.7335 11.8881Z" fill="black" />
										</svg>
									}
									{
										mutedVideo &&
										<svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M15.3125 5.91016C16.44 5.91016 17.4997 6.77752 17.5 8.02075V23.7996C17.4997 25.0428 16.44 25.9102 15.3125 25.9102C14.3598 25.9102 13.4305 25.56 12.7332 24.9128L7.43286 19.9934H5.17456C3.77801 19.9934 2.5 18.9231 2.5 17.4299V14.3904C2.5 12.8973 3.77801 11.8269 5.17456 11.8269H7.43286L12.7332 6.90747C13.4305 6.26029 14.3598 5.91016 15.3125 5.91016ZM15.2502 8.16113C14.8667 8.17569 14.515 8.32362 14.2639 8.55664L8.64014 13.7764C8.43208 13.9695 8.15859 14.0767 7.87476 14.0767H5.17456C5.00022 14.0767 4.74976 14.1836 4.74976 14.3904V17.4299C4.74976 17.6367 5.00022 17.7437 5.17456 17.7437H7.87476C8.15859 17.7437 8.43208 17.8509 8.64014 18.0439L14.2639 23.2637C14.515 23.4967 14.8667 23.6446 15.2502 23.6592V8.16113Z" fill="black" />
											<path d="M25.7043 12.6143C26.1437 12.175 26.8568 12.175 27.2961 12.6143C27.7354 13.0536 27.7353 13.7667 27.2961 14.2061L25.4663 16.0347L27.2961 17.8645L27.373 17.95C27.7332 18.3918 27.7079 19.0445 27.2961 19.4563C26.8844 19.868 26.2316 19.8933 25.7898 19.5332L25.7043 19.4563L23.8745 17.6265L22.0459 19.4563L21.9592 19.5332C21.5174 19.893 20.8658 19.8679 20.4541 19.4563C20.0424 19.0446 20.0172 18.3918 20.3772 17.95L20.4541 17.8645L22.2827 16.0347L20.4541 14.2061C20.0148 13.7667 20.0148 13.0536 20.4541 12.6143C20.8934 12.175 21.6066 12.175 22.0459 12.6143L23.8745 14.4429L25.7043 12.6143Z" fill="black" />
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
