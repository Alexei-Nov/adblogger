import React, { useEffect, useRef } from 'react'
import 'swiper/css';
import './tile.css'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Tile() {

	let wrapper = useRef()
	useEffect(() => {
		if (window.innerWidth > 1200) {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: wrapper.current,
					start: "top 95%",
					end: "bottom 80%",
					scrub: false,
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
		<section className='section tile' ref={wrapper}>
			<div className="container">
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
					<SwiperSlide className='tile__slide'>
						<div className="tile__img">
							<img src="/img/tile/img1-1.png" alt="img" />
							<img src="/img/tile/img1-2.png" alt="img" />
						</div>
						<div className="tile__body ">
							<div className="tile__subtitle text-32 fw-500">
								Размещайте рекламу в клипах или постах
							</div>
							<div className="tile__desc">
								Работайте в форматах,к которым привыкли ваши подписчики
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className='tile__slide'>
						<div className="tile__img">
							<img src="/img/tile/img2-1.png" alt="img" />
						</div>
						<div className="tile__body ">
							<div className="tile__subtitle text-32 fw-500">
								Выпускайте готовую рекламу или по брифу
							</div>
							<div className="tile__desc">
								Размещайте готовые креативы от рекламодателя или создавайте посты в своём стиле
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className='tile__slide'>
						<div className="tile__img">
							<img src="/img/tile/img3-1.png" alt="img" />
							<img src="/img/tile/img3-2.png" alt="img" />
							<img src="/img/tile/img3-3.png" alt="img" />
						</div>
						<div className="tile__body ">
							<div className="tile__subtitle text-32 fw-500">
								Занимайтесь творчеством, а не ОРД и бумагами
							</div>
							<div className="tile__desc">
								Документооборот, маркировка и оплата рекламы — автоматические.
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className='tile__slide'>
						<div className="tile__img">
							<img src="/img/tile/img4-1.png" alt="img" />
							<img src="/img/tile/img4-2.png" alt="img" />
						</div>
						<div className="tile__body ">
							<div className="tile__subtitle text-32 fw-500">
								Рекламируйте то, что интересно подписчикам
							</div>
							<div className="tile__desc">
								Выбирайте, какие заявки принять, а какие — отклонить. Либо настройте автоматический постинг.
							</div>
						</div>
					</SwiperSlide>
					<div className="tile__pagination slider-pagination"></div>
				</Swiper>
				<a href='/' className="tile__btn btn">Подключить сообщество</a>
			</div>
		</section>
	)
}
