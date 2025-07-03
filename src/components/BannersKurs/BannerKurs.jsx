import React, { useRef, useEffect, useState } from 'react'
import 'swiper/css';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './bannerKurs.css'
import { NavLink } from 'react-router-dom'

export default function BannerKurs({ block_state }) {
	const swiperRef = useRef(null);
	const [swiperInstance, setSwiperInstance] = useState(null);
	const [autoplayStarted, setAutoplayStarted] = useState(false);

	const handleSwiper = (swiper) => {
		setSwiperInstance(swiper);
		swiper.autoplay.stop();
	};

	useEffect(() => {
		if (!swiperInstance || !swiperRef.current) return;

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting && !autoplayStarted) {
					swiperInstance.autoplay.start();
					setAutoplayStarted(true);
					
					observer.unobserve(entry.target);
				}
			});
		}, {
			threshold: 0.5,
			rootMargin: '50px' 
		});

		observer.observe(swiperRef.current);

		return () => {
			observer.disconnect();
		};
	}, [swiperInstance, autoplayStarted]);

	return (
		<>
			<section className='section banner-kurs'>
				<div className="container">
					<Swiper
						ref={swiperRef}
						onSwiper={handleSwiper}
						className="banner-kurs__slider"
						modules={[Pagination, Autoplay]}
						spaceBetween={24}
						speed={800}
						slidesPerView={1}
						centeredSlides={true}
						autoplay={{
							delay: 7000,
							disableOnInteraction: false
						}}
						pagination={{
							el: '.banner-kurs__pagination',
							clickable: true
						}}
						breakpoints={{
							0: {
								slidesPerView: 1,
								centeredSlides: true
							},
						}}
					>
						{block_state.banners.map((banner, i) => (
							<SwiperSlide key={i} className={"banner-kurs__wrapper" + (banner.modificator ? ` banner-kurs__wrapper_${banner.modificator}` : '')} >
								<div className="banner-kurs__body">
									<div className="banner-kurs__title text-50" dangerouslySetInnerHTML={{ __html: banner.title }}></div>
									{banner.desc &&
										<div className="banner-kurs__desc text-28" dangerouslySetInnerHTML={{ __html: banner.desc }}></div>
									}
									<a href={banner.btn_link} className="banner-kurs__btn btn btn_border btn_small text-28 fw-500" target='_blank'>
										{banner.btn_text}
									</a>
								</div>
								<picture className="banner-kurs__img">
									<source media="(max-width: 1024px)" srcSet={banner.img_tablet} />
									<img src={banner.img} alt="img" />
								</picture>
							</SwiperSlide>
						))}
						<div className="banner-kurs__pagination slider-pagination"></div>
					</Swiper>
				</div>
			</section>
		</>
	)
}
