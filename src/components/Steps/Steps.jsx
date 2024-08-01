import React, { useEffect, useRef } from 'react'
import 'swiper/css';
import './steps.css'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Steps() {
	let wrapper = useRef();
	let title = useRef();

	useEffect(() => {
		if (window.innerWidth > 1200) {
			let tlTitle = gsap.timeline({
				scrollTrigger: {
					trigger: wrapper.current,
					start: "top 60%",
					end: "bottom bottom",
					scrub: false,
					markers: false,
					pin: false,
				}
			});

			tlTitle.fromTo(title.current, {
				y: 160,
			}, {
				y: 0,
				duration: 1.5,
				ease: "elastic.out(0.8,0.4)",
			});

			let tlCard = gsap.timeline({
				scrollTrigger: {
					trigger: wrapper.current,
					start: "top 60%",
					end: "bottom bottom",
					scrub: false,
					markers: false,
					pin: false,
				}
			});

			gsap.utils.selector(wrapper)('.steps__slide').forEach((card, index) => {
				tlCard.fromTo(card, {
					y: 300 * (index + 1),
					opacity: index > 0 ? 0.2 : 1
				}, {
					y: 0,
					opacity: 1,
					duration: 2,
					ease: "elastic.out(0.4,0.6)",
				}, 0).to(card.querySelector('.steps__num'), {
					color: '#00D3E6',
					borderColor: '#00D3E6',
					duration: 2,
				}, 0).to(card.querySelector('.steps__body'), {
					borderRadius: 28,
					duration: 2,
				}, 0).to(card.querySelector('.steps__img'), {
					borderRadius: 28,
					duration: 2,
				}, 0);
			})
		}
	})

	return (
		<section className='section steps' ref={wrapper}>
			<div className="container">
				<div className="steps__title title h2" ref={title}>cтаньте автором в VK AdBlogger</div>
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
					<SwiperSlide className='steps__slide'>
						<div className="steps__body">
							<div className="steps__num text-24">1</div>
							<div className="steps__name text-32 fw-500">Подключитесь</div>
							<div className="steps__desc text-21">
								Зарегистрируйтесь как автор, подключите своё сообщество
								и укажите реквизиты
							</div>
						</div>
						<div className="steps__img">
							<img src="/img/steps/img-1.png" alt="img" />
						</div>
					</SwiperSlide>
					<SwiperSlide className='steps__slide'>
						<div className="steps__body">
							<div className="steps__num text-24">2</div>
							<div className="steps__name text-32 fw-500">Принимайте заявки</div>
							<div className="steps__desc text-21">
								Укажите свободные слоты для размещения и получайте заявки
								от рекламодателей
							</div>
						</div>
						<div className="steps__img">
							<img src="/img/steps/img-2.png" alt="img" />
						</div>
					</SwiperSlide>
					<SwiperSlide className='steps__slide'>
						<div className="steps__body">
							<div className="steps__num text-24">3</div>
							<div className="steps__name text-32 fw-500">Зарабатывайте</div>
							<div className="steps__desc text-21">
								Получайте деньги за рекламу
								и выводите их на свой счёт
							</div>
						</div>
						<div className="steps__img">
							<img src="/img/steps/img-3.png" alt="img" />
						</div>
					</SwiperSlide>

					<div className="steps__pagination slider-pagination"></div>
				</Swiper>
			</div>
		</section>
	)
}
