import React, { useEffect, useRef } from 'react'
import 'swiper/css';
import './channels.css'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Channels() {
	let swiper = useRef();
	useEffect(() => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: swiper.current,
				start: "bottom bottom",
				end: "bottom bottom",
				scrub: false,
				markers: false,
				pin: false,
			}
		});

		tl.fromTo(gsap.utils.selector(swiper)('.swiper-wrapper'), {
			xPercent: 50,
		}, {
			xPercent: 0,
			duration: 1.5,
			ease: "elastic.out(0.8,0.4)",
		});
	})

	return (
		<section className='section channels'>
			<div className="container">
				<div className="channels__title title h2">уже подключились к VK AdBlogger</div>
				<Swiper className='channels__slider'
					ref={swiper}
					modules={[Navigation, Pagination]}
					spaceBetween={24}
					speed={800}
					navigation={{
						prevEl: '.channels__prev',
						nextEl: '.channels__next',
					}}
					slidesPerView='auto'
					pagination={{
						el: '.channels__pagination',
						clickable: true
					}}
					centeredSlides={true}
					loop={true}
					loopAdditionalSlides={3}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						570: {
							slidesPerView: 'auto'
						},
					}}
				>
					<SwiperSlide className='channels__slide'>
						<div className="channels__card">
							<div className="channels__img">
								<img src="/img/channels/img-1.png" alt="img" />
								<div className="channels__icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
										<path d="M4.33609 13.8392L5.07712 13.1677L4.33609 13.8392C4.41679 13.9282 4.4623 14.061 4.44491 14.2008L3.93836 18.2738C3.71257 20.0893 5.54097 21.6302 7.30487 20.7566L10.8611 18.9953C10.9502 18.9512 11.0498 18.9512 11.1389 18.9953L14.6951 20.7566C16.459 21.6303 18.2874 20.0893 18.0616 18.2738L17.5551 14.2008L16.5627 14.3242L17.5551 14.2008C17.5377 14.061 17.5832 13.9282 17.6639 13.8392L20.3683 10.8547C21.5954 9.50044 20.9532 7.19977 19.0817 6.83411L15.2125 6.07811C15.1203 6.06011 15.024 5.99623 14.964 5.88156L13.0792 2.27573C12.1901 0.574753 9.80986 0.57476 8.92075 2.27573L7.03596 5.88156C6.97602 5.99622 6.87967 6.06011 6.78755 6.07811L2.91826 6.83411C1.04676 7.19977 0.404559 9.50044 1.63167 10.8547L4.33609 13.8392ZM14.8298 9.76088L14.8296 9.76111L14.8298 9.76088Z"
											fill="white" stroke="black" strokeWidth="2" />
									</svg>
								</div>
							</div>
							<div className="channels__name h3">
								Катя Дима
							</div>
							<div className="channels__desc">Семья блогеров <br /> и их лайфстайл</div>
							<div className="channels__bottom">334K подписчиков</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className='channels__slide'>
						<div className="channels__card">
							<div className="channels__img">
								<img src="/img/channels/img-2.png" alt="img" />
								<div className="channels__icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
										<path d="M4.33609 13.8392L5.07712 13.1677L4.33609 13.8392C4.41679 13.9282 4.4623 14.061 4.44491 14.2008L3.93836 18.2738C3.71257 20.0893 5.54097 21.6302 7.30487 20.7566L10.8611 18.9953C10.9502 18.9512 11.0498 18.9512 11.1389 18.9953L14.6951 20.7566C16.459 21.6303 18.2874 20.0893 18.0616 18.2738L17.5551 14.2008L16.5627 14.3242L17.5551 14.2008C17.5377 14.061 17.5832 13.9282 17.6639 13.8392L20.3683 10.8547C21.5954 9.50044 20.9532 7.19977 19.0817 6.83411L15.2125 6.07811C15.1203 6.06011 15.024 5.99623 14.964 5.88156L13.0792 2.27573C12.1901 0.574753 9.80986 0.57476 8.92075 2.27573L7.03596 5.88156C6.97602 5.99622 6.87967 6.06011 6.78755 6.07811L2.91826 6.83411C1.04676 7.19977 0.404559 9.50044 1.63167 10.8547L4.33609 13.8392ZM14.8298 9.76088L14.8296 9.76111L14.8298 9.76088Z"
											fill="white" stroke="black" strokeWidth="2" />
									</svg>
								</div>
							</div>
							<div className="channels__name h3">
								i_am_puma
							</div>
							<div className="channels__desc">Самая дикая кошка ВКонтакте</div>
							<div className="channels__bottom">205K подписчиков</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className='channels__slide'>
						<div className="channels__card">
							<div className="channels__img">
								<img src="/img/channels/img-3.png" alt="img" />
								<div className="channels__icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
										<path d="M4.33609 13.8392L5.07712 13.1677L4.33609 13.8392C4.41679 13.9282 4.4623 14.061 4.44491 14.2008L3.93836 18.2738C3.71257 20.0893 5.54097 21.6302 7.30487 20.7566L10.8611 18.9953C10.9502 18.9512 11.0498 18.9512 11.1389 18.9953L14.6951 20.7566C16.459 21.6303 18.2874 20.0893 18.0616 18.2738L17.5551 14.2008L16.5627 14.3242L17.5551 14.2008C17.5377 14.061 17.5832 13.9282 17.6639 13.8392L20.3683 10.8547C21.5954 9.50044 20.9532 7.19977 19.0817 6.83411L15.2125 6.07811C15.1203 6.06011 15.024 5.99623 14.964 5.88156L13.0792 2.27573C12.1901 0.574753 9.80986 0.57476 8.92075 2.27573L7.03596 5.88156C6.97602 5.99622 6.87967 6.06011 6.78755 6.07811L2.91826 6.83411C1.04676 7.19977 0.404559 9.50044 1.63167 10.8547L4.33609 13.8392ZM14.8298 9.76088L14.8296 9.76111L14.8298 9.76088Z"
											fill="white" stroke="black" strokeWidth="2" />
									</svg>
								</div>
							</div>
							<div className="channels__name h3">
								Всё <br />
								о Minecraft
							</div>
							<div className="channels__desc">Одно из первых сообществ о Майнкрафт</div>
							<div className="channels__bottom">1M подписчиков</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className='channels__slide'>
						<div className="channels__card">
							<div className="channels__img">
								<img src="/img/channels/img-4.png" alt="img" />
								<div className="channels__icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
										<path d="M4.33609 13.8392L5.07712 13.1677L4.33609 13.8392C4.41679 13.9282 4.4623 14.061 4.44491 14.2008L3.93836 18.2738C3.71257 20.0893 5.54097 21.6302 7.30487 20.7566L10.8611 18.9953C10.9502 18.9512 11.0498 18.9512 11.1389 18.9953L14.6951 20.7566C16.459 21.6303 18.2874 20.0893 18.0616 18.2738L17.5551 14.2008L16.5627 14.3242L17.5551 14.2008C17.5377 14.061 17.5832 13.9282 17.6639 13.8392L20.3683 10.8547C21.5954 9.50044 20.9532 7.19977 19.0817 6.83411L15.2125 6.07811C15.1203 6.06011 15.024 5.99623 14.964 5.88156L13.0792 2.27573C12.1901 0.574753 9.80986 0.57476 8.92075 2.27573L7.03596 5.88156C6.97602 5.99622 6.87967 6.06011 6.78755 6.07811L2.91826 6.83411C1.04676 7.19977 0.404559 9.50044 1.63167 10.8547L4.33609 13.8392ZM14.8298 9.76088L14.8296 9.76111L14.8298 9.76088Z"
											fill="white" stroke="black" strokeWidth="2" />
									</svg>
								</div>
							</div>
							<div className="channels__name h3">
								Лера <br />
								Изумруд
							</div>
							<div className="channels__desc">Блогер со вкусом к жизни</div>
							<div className="channels__bottom">151К подписчиков</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className='channels__slide'>
						<div className="channels__card">
							<div className="channels__img">
								<img src="/img/channels/img-5.png" alt="img" />
								<div className="channels__icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
										<path d="M4.33609 13.8392L5.07712 13.1677L4.33609 13.8392C4.41679 13.9282 4.4623 14.061 4.44491 14.2008L3.93836 18.2738C3.71257 20.0893 5.54097 21.6302 7.30487 20.7566L10.8611 18.9953C10.9502 18.9512 11.0498 18.9512 11.1389 18.9953L14.6951 20.7566C16.459 21.6303 18.2874 20.0893 18.0616 18.2738L17.5551 14.2008L16.5627 14.3242L17.5551 14.2008C17.5377 14.061 17.5832 13.9282 17.6639 13.8392L20.3683 10.8547C21.5954 9.50044 20.9532 7.19977 19.0817 6.83411L15.2125 6.07811C15.1203 6.06011 15.024 5.99623 14.964 5.88156L13.0792 2.27573C12.1901 0.574753 9.80986 0.57476 8.92075 2.27573L7.03596 5.88156C6.97602 5.99622 6.87967 6.06011 6.78755 6.07811L2.91826 6.83411C1.04676 7.19977 0.404559 9.50044 1.63167 10.8547L4.33609 13.8392ZM14.8298 9.76088L14.8296 9.76111L14.8298 9.76088Z"
											fill="white" stroke="black" strokeWidth="2" />
									</svg>
								</div>
							</div>
							<div className="channels__name h3">
								Мари <br />
								Добро
							</div>
							<div className="channels__desc">Та самая с классными клипами</div>
							<div className="channels__bottom">470K подписчиков</div>
						</div>
					</SwiperSlide>

					<SwiperSlide className='channels__slide'>
						<div className="channels__card">
							<div className="channels__img">
								<img src="/img/channels/img-1.png" alt="img" />
								<div className="channels__icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
										<path d="M4.33609 13.8392L5.07712 13.1677L4.33609 13.8392C4.41679 13.9282 4.4623 14.061 4.44491 14.2008L3.93836 18.2738C3.71257 20.0893 5.54097 21.6302 7.30487 20.7566L10.8611 18.9953C10.9502 18.9512 11.0498 18.9512 11.1389 18.9953L14.6951 20.7566C16.459 21.6303 18.2874 20.0893 18.0616 18.2738L17.5551 14.2008L16.5627 14.3242L17.5551 14.2008C17.5377 14.061 17.5832 13.9282 17.6639 13.8392L20.3683 10.8547C21.5954 9.50044 20.9532 7.19977 19.0817 6.83411L15.2125 6.07811C15.1203 6.06011 15.024 5.99623 14.964 5.88156L13.0792 2.27573C12.1901 0.574753 9.80986 0.57476 8.92075 2.27573L7.03596 5.88156C6.97602 5.99622 6.87967 6.06011 6.78755 6.07811L2.91826 6.83411C1.04676 7.19977 0.404559 9.50044 1.63167 10.8547L4.33609 13.8392ZM14.8298 9.76088L14.8296 9.76111L14.8298 9.76088Z"
											fill="white" stroke="black" strokeWidth="2" />
									</svg>
								</div>
							</div>
							<div className="channels__name h3">
								Катя Дима
							</div>
							<div className="channels__desc">Семья блогеров <br /> и их лайфстайл</div>
							<div className="channels__bottom">334K подписчиков</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className='channels__slide'>
						<div className="channels__card">
							<div className="channels__img">
								<img src="/img/channels/img-2.png" alt="img" />
								<div className="channels__icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
										<path d="M4.33609 13.8392L5.07712 13.1677L4.33609 13.8392C4.41679 13.9282 4.4623 14.061 4.44491 14.2008L3.93836 18.2738C3.71257 20.0893 5.54097 21.6302 7.30487 20.7566L10.8611 18.9953C10.9502 18.9512 11.0498 18.9512 11.1389 18.9953L14.6951 20.7566C16.459 21.6303 18.2874 20.0893 18.0616 18.2738L17.5551 14.2008L16.5627 14.3242L17.5551 14.2008C17.5377 14.061 17.5832 13.9282 17.6639 13.8392L20.3683 10.8547C21.5954 9.50044 20.9532 7.19977 19.0817 6.83411L15.2125 6.07811C15.1203 6.06011 15.024 5.99623 14.964 5.88156L13.0792 2.27573C12.1901 0.574753 9.80986 0.57476 8.92075 2.27573L7.03596 5.88156C6.97602 5.99622 6.87967 6.06011 6.78755 6.07811L2.91826 6.83411C1.04676 7.19977 0.404559 9.50044 1.63167 10.8547L4.33609 13.8392ZM14.8298 9.76088L14.8296 9.76111L14.8298 9.76088Z"
											fill="white" stroke="black" strokeWidth="2" />
									</svg>
								</div>
							</div>
							<div className="channels__name h3">
								i_am_puma
							</div>
							<div className="channels__desc">Самая дикая кошка ВКонтакте</div>
							<div className="channels__bottom">205K подписчиков</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className='channels__slide'>
						<div className="channels__card">
							<div className="channels__img">
								<img src="/img/channels/img-3.png" alt="img" />
								<div className="channels__icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
										<path d="M4.33609 13.8392L5.07712 13.1677L4.33609 13.8392C4.41679 13.9282 4.4623 14.061 4.44491 14.2008L3.93836 18.2738C3.71257 20.0893 5.54097 21.6302 7.30487 20.7566L10.8611 18.9953C10.9502 18.9512 11.0498 18.9512 11.1389 18.9953L14.6951 20.7566C16.459 21.6303 18.2874 20.0893 18.0616 18.2738L17.5551 14.2008L16.5627 14.3242L17.5551 14.2008C17.5377 14.061 17.5832 13.9282 17.6639 13.8392L20.3683 10.8547C21.5954 9.50044 20.9532 7.19977 19.0817 6.83411L15.2125 6.07811C15.1203 6.06011 15.024 5.99623 14.964 5.88156L13.0792 2.27573C12.1901 0.574753 9.80986 0.57476 8.92075 2.27573L7.03596 5.88156C6.97602 5.99622 6.87967 6.06011 6.78755 6.07811L2.91826 6.83411C1.04676 7.19977 0.404559 9.50044 1.63167 10.8547L4.33609 13.8392ZM14.8298 9.76088L14.8296 9.76111L14.8298 9.76088Z"
											fill="white" stroke="black" strokeWidth="2" />
									</svg>
								</div>
							</div>
							<div className="channels__name h3">
								Всё <br />
								о Minecraft
							</div>
							<div className="channels__desc">Одно из первых сообществ о Майнкрафт</div>
							<div className="channels__bottom">1M подписчиков</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className='channels__slide'>
						<div className="channels__card">
							<div className="channels__img">
								<img src="/img/channels/img-4.png" alt="img" />
								<div className="channels__icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
										<path d="M4.33609 13.8392L5.07712 13.1677L4.33609 13.8392C4.41679 13.9282 4.4623 14.061 4.44491 14.2008L3.93836 18.2738C3.71257 20.0893 5.54097 21.6302 7.30487 20.7566L10.8611 18.9953C10.9502 18.9512 11.0498 18.9512 11.1389 18.9953L14.6951 20.7566C16.459 21.6303 18.2874 20.0893 18.0616 18.2738L17.5551 14.2008L16.5627 14.3242L17.5551 14.2008C17.5377 14.061 17.5832 13.9282 17.6639 13.8392L20.3683 10.8547C21.5954 9.50044 20.9532 7.19977 19.0817 6.83411L15.2125 6.07811C15.1203 6.06011 15.024 5.99623 14.964 5.88156L13.0792 2.27573C12.1901 0.574753 9.80986 0.57476 8.92075 2.27573L7.03596 5.88156C6.97602 5.99622 6.87967 6.06011 6.78755 6.07811L2.91826 6.83411C1.04676 7.19977 0.404559 9.50044 1.63167 10.8547L4.33609 13.8392ZM14.8298 9.76088L14.8296 9.76111L14.8298 9.76088Z"
											fill="white" stroke="black" strokeWidth="2" />
									</svg>
								</div>
							</div>
							<div className="channels__name h3">
								Лера <br />
								Изумруд
							</div>
							<div className="channels__desc">Блогер со вкусом к жизни</div>
							<div className="channels__bottom">151К подписчиков</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className='channels__slide'>
						<div className="channels__card">
							<div className="channels__img">
								<img src="/img/channels/img-5.png" alt="img" />
								<div className="channels__icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
										<path d="M4.33609 13.8392L5.07712 13.1677L4.33609 13.8392C4.41679 13.9282 4.4623 14.061 4.44491 14.2008L3.93836 18.2738C3.71257 20.0893 5.54097 21.6302 7.30487 20.7566L10.8611 18.9953C10.9502 18.9512 11.0498 18.9512 11.1389 18.9953L14.6951 20.7566C16.459 21.6303 18.2874 20.0893 18.0616 18.2738L17.5551 14.2008L16.5627 14.3242L17.5551 14.2008C17.5377 14.061 17.5832 13.9282 17.6639 13.8392L20.3683 10.8547C21.5954 9.50044 20.9532 7.19977 19.0817 6.83411L15.2125 6.07811C15.1203 6.06011 15.024 5.99623 14.964 5.88156L13.0792 2.27573C12.1901 0.574753 9.80986 0.57476 8.92075 2.27573L7.03596 5.88156C6.97602 5.99622 6.87967 6.06011 6.78755 6.07811L2.91826 6.83411C1.04676 7.19977 0.404559 9.50044 1.63167 10.8547L4.33609 13.8392ZM14.8298 9.76088L14.8296 9.76111L14.8298 9.76088Z"
											fill="white" stroke="black" strokeWidth="2" />
									</svg>
								</div>
							</div>
							<div className="channels__name h3">
								Мари <br />
								Добро
							</div>
							<div className="channels__desc">Та самая с классными клипами</div>
							<div className="channels__bottom">470K подписчиков</div>
						</div>
					</SwiperSlide>

					<div className="channels__pagination slider-pagination"></div>
					<div className="channels__navigation slider-navigation">
						<div className="channels__prev slider-prev">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path fillRule="evenodd" clipRule="evenodd" d="M14.7365 17.7364C15.088 17.3849 15.088 16.8151 14.7365 16.4636L10.2729 12L14.7365 7.53639C15.088 7.18492 15.088 6.61507 14.7365 6.2636C14.385 5.91213 13.8152 5.91213 13.4637 6.26361L8.3637 11.3636C8.01223 11.7151 8.01223 12.285 8.3637 12.6364L13.4637 17.7364C13.8152 18.0879 14.385 18.0879 14.7365 17.7364Z" fill="#7C8A9A" />
							</svg>
						</div>
						<div className="channels__next slider-next">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path fillRule="evenodd" clipRule="evenodd" d="M9.2635 6.26361C8.91203 6.61508 8.91203 7.18493 9.26351 7.5364L13.7271 12L9.2635 16.4636C8.91203 16.8151 8.91203 17.3849 9.26351 17.7364C9.61498 18.0879 10.1848 18.0879 10.5363 17.7364L15.6363 12.6364C15.9878 12.2849 15.9878 11.715 15.6363 11.3636L10.5363 6.2636C10.1848 5.91213 9.61498 5.91213 9.2635 6.26361Z" fill="#7C8A9A" />
							</svg>
						</div>
					</div>
				</Swiper>
			</div>
		</section>
	)
}
