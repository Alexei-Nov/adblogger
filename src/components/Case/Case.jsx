import React, { useEffect, useRef, useState } from 'react'
import 'swiper/css';
import './case.css'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
gsap.registerPlugin(ScrollTrigger);

export default function Case({ caseState }) {
	let wrapper = useRef();
	// const [cases, setCases] = useState([])
	const cases = useSelector(state => state.toolkit.cases)

	useEffect(() => {
		if (window.innerWidth > 1200) {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: wrapper.current,
					start: "top bottom",
					end: "+=" + window.innerHeight,
					scrub: true,
					markers: false,
					pin: false,
				}
			});

			// tl.fromTo(wrapper.current, {
			// 	y: 300,
			// }, {
			// 	y: 0,
			// 	duration: 2,
			// 	ease: "elastic.out(0.4,0.6)",
			// });
		}

		// fetch("./casesState.json")
		// 	.then(res => res.json())
		// 	.then(
		// 		(result) => {
		// 			setCases(result.cases)
		// 		},
		// 		(error) => {
		// 			console.log(error);
		// 		}
		// 	)
		// 	.catch(err => console.error(err))
	})

	return (
		<>
			<section className='section case' ref={wrapper}>
				<div className="container">
					<div className="case__wrapper">
						<div className="case__body">
							<div className="case__title title h2" dangerouslySetInnerHTML={{ __html: caseState.title }}></div>
							<div className="case__desc text-32 fw-500" dangerouslySetInnerHTML={{ __html: caseState.desc }}></div>
						</div>

						<Swiper className='case__slider'
							modules={[Navigation, Pagination]}
							spaceBetween={24}
							speed={800}
							// loop={true}
							loopAdditionalSlides={2}
							slidesPerView={'auto'}

							pagination={{
								el: '.case__pagination',
								clickable: true
							}}

							navigation={{
								prevEl: '.case__prev',
								nextEl: '.case__next',
							}}

							breakpoints={{
								0: {
									slidesPerView: 1,
								},
								700: {
									slidesPerView: 2,
								},
								1025: {
									slidesPerView: 'auto',
								},
							}}
						>
							{cases.map((caseItem, i) => {
								return (
									<SwiperSlide key={i} className='case__slide'>
										<NavLink to={'/top-cases/' + caseItem.slug} className='case__slide-wrapper'>
											<div className="case__name text-32 fw-500" dangerouslySetInnerHTML={{ __html: caseItem.desc }}></div>
											<div className="case__bottom">
												<div className="case__desc" dangerouslySetInnerHTML={{ __html: caseItem.title }}></div>
												<div className="case__icon">
													<img src={caseItem.logo} alt="img" />
												</div>
											</div>
											<div className="case__img">
												<img src={caseItem.preview_img_vertical} alt="img" />
											</div>
										</NavLink>
									</SwiperSlide>
								)
							})}

							<div className="case__navigation slider-navigation">
								<div className="case__prev slider-prev">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path fillRule="evenodd" clipRule="evenodd" d="M14.7365 17.7364C15.088 17.3849 15.088 16.8151 14.7365 16.4636L10.2729 12L14.7365 7.53639C15.088 7.18492 15.088 6.61507 14.7365 6.2636C14.385 5.91213 13.8152 5.91213 13.4637 6.26361L8.3637 11.3636C8.01223 11.7151 8.01223 12.285 8.3637 12.6364L13.4637 17.7364C13.8152 18.0879 14.385 18.0879 14.7365 17.7364Z" fill="#7C8A9A" />
									</svg>
								</div>
								<div className="case__next slider-next">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path fillRule="evenodd" clipRule="evenodd" d="M9.2635 6.26361C8.91203 6.61508 8.91203 7.18493 9.26351 7.5364L13.7271 12L9.2635 16.4636C8.91203 16.8151 8.91203 17.3849 9.26351 17.7364C9.61498 18.0879 10.1848 18.0879 10.5363 17.7364L15.6363 12.6364C15.9878 12.2849 15.9878 11.715 15.6363 11.3636L10.5363 6.2636C10.1848 5.91213 9.61498 5.91213 9.2635 6.26361Z" fill="#7C8A9A" />
									</svg>
								</div>
							</div>
						</Swiper>

						<div className="case__pagination slider-pagination"></div>
					</div>
				</div>
			</section>
		</>
	)
}
