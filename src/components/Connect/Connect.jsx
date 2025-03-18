import React, { useEffect, useRef } from 'react'
import 'swiper/css';
import './connect.css'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function Connect({ block_state }) {
	let wrapper = useRef();

	useEffect(() => {
		if (window.innerWidth > 1200) {
			let slidesArr = gsap.utils.selector(wrapper)('.connect__slide')

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
				}, index);
				tlCard.to(card, {
					borderRadius: 28,
					duration: 2,
				}, index);
			})
		}
	})

	return (
		<>
			<section className='section connect' >
				<div className="container" ref={wrapper}>
					<div className="connect__title title h2" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>

					<Swiper className='connect__slider'
						modules={[Pagination]}
						spaceBetween={24}
						speed={800}
						slidesPerView={3}
						centeredSlides={false}
						pagination={{
							el: '.connect__pagination',
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
						{block_state.items_list.map((connect_item, i) => {
							return (
								<SwiperSlide key={i} className='connect__slide'>
									<div className="connect__icon">
										<img src={connect_item.icon_path} alt="img" />
									</div>
									<div className="connect__name text-32 fw-500">{connect_item.title}</div>
									<div className="connect__desc text-21" dangerouslySetInnerHTML={{ __html: connect_item.desc }}></div>
								</SwiperSlide>
							)
						})}

						<div className="connect__pagination slider-pagination"></div>
					</Swiper>
				</div>
			</section>
		</>
	)
}
