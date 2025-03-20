import React, { useEffect, useRef } from 'react'
import 'swiper/css';
import './steps.css'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from 'react-redux';
import { handleTracking } from 'utils/tracking';

gsap.registerPlugin(ScrollTrigger);


export default function Steps({ block_state }) {
	const btnState = useSelector(state => state.toolkit.registrationBtn)

	let wrapper = useRef();
	let title = useRef();

	useEffect(() => {
		if (window.innerWidth > 1200) {
			// let tlTitle = gsap.timeline({
			// 	scrollTrigger: {
			// 		trigger: wrapper.current,
			// 		start: "top 60%",
			// 		end: "+=" + window.innerHeight,
			// 		scrub: true,
			// 		markers: false,
			// 		pin: false,
			// 	}
			// });

			// tlTitle.fromTo(title.current, {
			// 	y: 160,
			// }, {
			// 	y: 0,
			// 	duration: 1.5,
			// 	ease: "elastic.out(0.8,0.4)",
			// });

			let slidesArr = gsap.utils.selector(wrapper)('.steps__slide')

			let tlCard = gsap.timeline({
				scrollTrigger: {
					trigger: wrapper.current,
					start: "top 80px",
					end: "+=" + window.innerHeight * slidesArr.length,
					scrub: true,
					markers: false,
					pin: true,
				}
			});


			slidesArr.forEach((card, index) => {
				tlCard.fromTo(card, {
					y: 300 * (index + 1),
					opacity: index > 0 ? 0.2 : 1
				}, {
					y: 0,
					opacity: 1,
					duration: 2,
					ease: "elastic.out(0.4,0.6)",
				}, index).to(card.querySelector('.steps__num'), {
					color: '#00D3E6',
					borderColor: '#00D3E6',
					duration: 2,
				}, index).to(card.querySelector('.steps__body'), {
					borderRadius: 28,
					duration: 2,
				}, index).to(card.querySelector('.steps__img'), {
					borderRadius: 28,
					duration: 2,
				}, index);
			})

			tlCard.to(gsap.utils.selector(wrapper)('.steps__img'), {
				marginTop: '-340px'
			}, slidesArr.length + 1).to(gsap.utils.selector(wrapper)('.steps__num'), {
				color: '#fff',
				borderColor: '#fff',
			}, slidesArr.length + 1).to(gsap.utils.selector(wrapper)('.steps__desc'), {
				marginTop: 0
			}, slidesArr.length + 1).to(gsap.utils.selector(wrapper)('.steps__btn'), {
				marginBottom: 0,
				opacity: 1
			}, slidesArr.length + 1);

			tlCard.to(wrapper.current.closest('.pin-spacer'), {
				// marginBottom: '-340px'
			})
		}
	})

	return (
		<>
			<section className='section steps' >
				<div className="container" ref={wrapper}>
					{window.location.pathname === "/for-authors" &&
						<h2 className="steps__title title h2" ref={title}> <span className='tt-lc'>Станьте</span>  автором в VK AdBlogger</h2>
					}
					<Swiper className='steps__slider'
						modules={[Pagination]}
						spaceBetween={24}
						speed={800}
						slidesPerView={3}
						centeredSlides={false}
						pagination={{
							el: '.steps__pagination',
							clickable: true
						}}

						breakpoints={{
							0: {
								slidesPerView: 1,
								centeredSlides: true
							},
							571: {
								slidesPerView: 'auto',
								centeredSlides: true
							},
							1201: {
								slidesPerView: 3,
								centeredSlides: false
							},
						}}
					>
						{block_state.stepsList.map((stepItem, i) => {
							return (
								<SwiperSlide key={i} className='steps__slide'>
									<div className="steps__body">
										<div className="steps__num text-24">{i + 1}</div>
										<div className="steps__name text-32 fw-500">{stepItem.title}</div>
										<div className="steps__desc text-21">{stepItem.desc}</div>
										{i === 2 &&
											<a
												href={btnState.link}
												className="steps__btn btn btn_border btn_wide"
												onClick={() => handleTracking('registration_other')}
											>
												{btnState.text}
											</a>
										}
									</div>
									<div className="steps__img">
										<img src={stepItem.imgPath} alt="img" />
									</div>
								</SwiperSlide>
							)
						})}

						<div className="steps__pagination slider-pagination"></div>
					</Swiper>
				</div>
			</section>
		</>
	)
}
