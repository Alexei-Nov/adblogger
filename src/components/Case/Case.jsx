import React, { useEffect, useRef } from 'react'
import 'swiper/css';
import './case.css'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Case() {
	let wrapper = useRef();

	useEffect(() => {
		if (window.innerWidth > 1200) {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: wrapper.current,
					start: "top 60%",
					end: "bottom bottom",
					scrub: false,
					markers: false,
					pin: false,
				}
			});

			tl.fromTo(wrapper.current, {
				y: 300,
			}, {
				y: 0,
				duration: 2,
				ease: "elastic.out(0.4,0.6)",
			});
		}
	})

	return (
		<section className='section case' ref={wrapper}>
			<div className="container">
				<div className="case__wrapper">
					<div className="case__body">
						<div className="case__title title h2">вдохновляйтесь кейсами</div>
						<div className="case__desc text-32 fw-500">
							Как крупные рекламодатели работают с авторами — узнайте в коротких статьях
							о топовых кейсах
						</div>
					</div>

					<Swiper className='case__slider'
						modules={[Pagination]}
						spaceBetween={24}
						speed={800}
						loop={true}
						loopAdditionalSlides={2}

						slidesPerView={'auto'}
						pagination={{
							el: '.case__pagination',
							clickable: true
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
						<SwiperSlide className='case__slide'>
							<div className="case__name text-32 fw-500">
								Отдых по-авторски
							</div>
							<div className="case__bottom">
								<div className="case__desc">
									Яндекс Путешествия. Как правильно вести блог и получать выгоду вовремя путешествий
								</div>
								<div className="case__icon">
									<img src="/img/case/icon-1.svg" alt="img" />
								</div>
							</div>
							<div className="case__img">
								<img src="/img/case/img-1.png" alt="img" />
							</div>
						</SwiperSlide>
						<SwiperSlide className='case__slide'>
							<div className="case__name text-32 fw-500">
								Просмотры растут
							</div>
							<div className="case__bottom">
								<div className="case__desc">
									Кинопоиск: как сделать CPA дешевле в два раза и причём здесь лимитированные промокоды
								</div>
								<div className="case__icon">
									<img src="/img/case/icon-2.svg" alt="img" />
								</div>
							</div>
							<div className="case__img">
								<img src="/img/case/img-2.png" alt="img" />
							</div>
						</SwiperSlide>
						<SwiperSlide className='case__slide'>
							<div className="case__name text-32 fw-500">
								Розыгрыш автомобиля Тинькофф
							</div>
							<div className="case__bottom">
								<div className="case__desc">
									Подпишись на мой канал, оформи любой продует в Тинькофф и у тебя будет шанс выиграть Tesla Model S
								</div>
								<div className="case__icon">
									<img src="/img/case/icon-3.svg" alt="img" />
								</div>
							</div>
							<div className="case__img">
								<img src="/img/case/img-3.png" alt="img" />
							</div>
						</SwiperSlide>

						<SwiperSlide className='case__slide'>
							<div className="case__name text-32 fw-500">
								Отдых по-авторски
							</div>
							<div className="case__bottom">
								<div className="case__desc">
									Яндекс Путешествия. Как правильно вести блог и получать выгоду вовремя путешествий
								</div>
								<div className="case__icon">
									<img src="/img/case/icon-1.svg" alt="img" />
								</div>
							</div>
							<div className="case__img">
								<img src="/img/case/img-1.png" alt="img" />
							</div>
						</SwiperSlide>
						<SwiperSlide className='case__slide'>
							<div className="case__name text-32 fw-500">
								Просмотры растут
							</div>
							<div className="case__bottom">
								<div className="case__desc">
									Кинопоиск: как сделать CPA дешевле в два раза и причём здесь лимитированные промокоды
								</div>
								<div className="case__icon">
									<img src="/img/case/icon-2.svg" alt="img" />
								</div>
							</div>
							<div className="case__img">
								<img src="/img/case/img-2.png" alt="img" />
							</div>
						</SwiperSlide>
						<SwiperSlide className='case__slide'>
							<div className="case__name text-32 fw-500">
								Розыгрыш автомобиля Тинькофф
							</div>
							<div className="case__bottom">
								<div className="case__desc">
									Подпишись на мой канал, оформи любой продует в Тинькофф и у тебя будет шанс выиграть Tesla Model S
								</div>
								<div className="case__icon">
									<img src="/img/case/icon-3.svg" alt="img" />
								</div>
							</div>
							<div className="case__img">
								<img src="/img/case/img-3.png" alt="img" />
							</div>
						</SwiperSlide>

						<SwiperSlide className='case__slide'>
							<div className="case__name text-32 fw-500">
								Отдых по-авторски
							</div>
							<div className="case__bottom">
								<div className="case__desc">
									Яндекс Путешествия. Как правильно вести блог и получать выгоду вовремя путешествий
								</div>
								<div className="case__icon">
									<img src="/img/case/icon-1.svg" alt="img" />
								</div>
							</div>
							<div className="case__img">
								<img src="/img/case/img-1.png" alt="img" />
							</div>
						</SwiperSlide>
						<SwiperSlide className='case__slide'>
							<div className="case__name text-32 fw-500">
								Просмотры растут
							</div>
							<div className="case__bottom">
								<div className="case__desc">
									Кинопоиск: как сделать CPA дешевле в два раза и причём здесь лимитированные промокоды
								</div>
								<div className="case__icon">
									<img src="/img/case/icon-2.svg" alt="img" />
								</div>
							</div>
							<div className="case__img">
								<img src="/img/case/img-2.png" alt="img" />
							</div>
						</SwiperSlide>
						<SwiperSlide className='case__slide'>
							<div className="case__name text-32 fw-500">
								Розыгрыш автомобиля Тинькофф
							</div>
							<div className="case__bottom">
								<div className="case__desc">
									Подпишись на мой канал, оформи любой продует в Тинькофф и у тебя будет шанс выиграть Tesla Model S
								</div>
								<div className="case__icon">
									<img src="/img/case/icon-3.svg" alt="img" />
								</div>
							</div>
							<div className="case__img">
								<img src="/img/case/img-3.png" alt="img" />
							</div>
						</SwiperSlide>
					</Swiper>

					<div className="case__pagination slider-pagination"></div>

				</div>
			</div>
		</section>
	)
}
