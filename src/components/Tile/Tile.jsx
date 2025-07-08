import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import 'swiper/css';
import './tile.css'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { handleTracking } from 'utils/tracking'

gsap.registerPlugin(ScrollTrigger);

export default function Tile({ block_state }) {

	const btnState = useSelector(state => state.toolkit.registrationBtn)

	let wrapper = useRef()
	useEffect(() => {
		if (window.innerWidth > 1200 && wrapper.current) {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: wrapper.current,
					start: "top 95%",
					end: "+=" + window.innerHeight,
					scrub: true,
					markers: false,
					pin: false,
				}
			});

			tl.fromTo(wrapper.current, {
				y: '152px'
			}, {
				y: 0,
				duration: 1.5,
				ease: "elastic.out(0.8,0.4)",
			});
		}
	})


	return (
		<>
			<section className='section tile' ref={wrapper}>
				<div className="container">
					{block_state.title &&
						<div className="tile__title title h2" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
					}
					<Swiper className='tile__slider'
						modules={[Pagination]}
						spaceBetween={0}
						slidesPerView={1}
						speed={800}
						pagination={{
							el: '.tile__pagination',
							clickable: true
						}}
						breakpoints={{
							0: {
								spaceBetween: 24,
								slidesPerView: 1,
								allowTouchMove: true
							},
							700: {
								spaceBetween: 0,
								slidesPerView: 1,
								allowTouchMove: false
							},
						}}
					>
						{block_state.items.map((item, i) => {
							return (
								<SwiperSlide key={i} className={'tile__slide tile__slide_' + item.id}>
									<div className="tile__img">
										{item.imgList.map((img, j) => {
											return (
												<picture key={j}>
													{img.mobile &&
														<source media="(max-width: 1024px)" srcSet={img.mobile} />
													}
													<img src={img.desktop} alt="img" />
												</picture>
											)
										})}
									</div>
									<div className="tile__body ">
										<div className="tile__subtitle text-32 fw-500" dangerouslySetInnerHTML={{ __html: item.title }}></div>
										<div className="tile__desc" dangerouslySetInnerHTML={{ __html: item.desc }}></div>
									</div>
								</SwiperSlide>
							)
						})}

						<div className="tile__pagination slider-pagination"></div>
					</Swiper>
					<a
						href={btnState.link}
						className="tile__btn btn fw-500"
						onClick={() => {
							handleTracking('registration_other')
							handleTracking('registration_all')
						}}
					>
						{btnState.text}
					</a>
				</div>
			</section>
		</>
	)
}
