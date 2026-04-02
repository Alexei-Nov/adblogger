import React from 'react'
import './shopsExamples.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

export default function ShopsExamples({ block_state }) {
	return (
		<>
			<section className="section shops-examples">
				<div className="container">
					<div className="shops-examples__title text-40 fw-600" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
					<Swiper
						className="shops-examples__slider"
						modules={[Pagination, Navigation]}
						spaceBetween={0}
						speed={800}
						slidesPerView={1}
						centeredSlides={true}
						allowTouchMove={false}
						loop={true}
						pagination={{
							el: '.shops-examples__pagination',
							clickable: true
						}}
						navigation={{
							prevEl: '.shops-examples__prev',
							nextEl: '.shops-examples__next'
						}}
						// breakpoints={{
						// 	0: {
						// 		spaceBetween: 10,
						// 		allowTouchMove: true,
						// 	},
						// 	769: {
						// 		spaceBetween: 8,
						// 		allowTouchMove: false,
						// 	},
						// }}
						onRealIndexChange={(swiper) => {
							swiper.slides[swiper.previousIndex].querySelector('video').pause()
							swiper.slides[swiper.activeIndex].querySelector('video').play()
						}}
					>
						{block_state.cards_list.map((slide, i) => {
							return (
								<SwiperSlide key={i} className="shops-examples__slide">
									<div className="shops-examples__video">
										<video src={slide.video} controls playsInline preload="none" poster={slide.video_preview}></video>
									</div>
									<div className="shops-examples__author">
										<div className="shops-examples__author-top">
											<div className="shops-examples__author-photo">
												<div className="shops-examples__author-photo-img">
													<img src={slide.photo} alt="img" />
												</div>
												<svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M26.612 13.6378L34.3975 14.3549C37.1065 14.6044 37.9373 17.1448 35.8454 18.8138L29.7503 23.6768L32.013 31.5992C32.7561 34.201 30.4506 35.7759 28.1415 34.2102L20.7355 29.1881L13.3295 34.2102C11.0297 35.7696 8.71484 34.2013 9.45803 31.5992L11.7208 23.6768L5.6256 18.8138C3.52496 17.1378 4.35251 14.6055 7.07312 14.3549L14.8572 13.6378L18.2866 6.04722C19.3606 3.67015 22.1111 3.67134 23.1841 6.04747L26.612 13.6378Z" fill="white" />
													<path d="M20.7324 30.596L13.85 34.6316C12.311 35.534 10.3014 35.0679 9.36135 33.5904C8.91166 32.8836 8.7716 32.0347 8.97177 31.2291L10.843 23.6984L4.71825 18.6617C3.34866 17.5355 3.18945 15.5566 4.36265 14.2418C4.9239 13.6128 5.72162 13.2226 6.58158 13.1564L14.6204 12.5377L17.7174 5.38934C18.41 3.79084 20.3213 3.03398 21.9864 3.69883C22.7829 4.01688 23.416 4.62464 23.7473 5.38934L26.8444 12.5377L34.8832 13.1564C36.6808 13.2947 38.0212 14.8059 37.8771 16.5316C37.8082 17.3571 37.4017 18.1229 36.7465 18.6617L30.6218 23.6984L32.493 31.2291C32.9114 32.9131 31.8286 34.6039 30.0744 35.0056C29.2352 35.1977 28.351 35.0633 27.6147 34.6316L20.7324 30.596Z" stroke="black" strokeWidth="3.86453" strokeLinejoin="round" />
												</svg>
											</div>
											<div className="shops-examples__author-info">
												<div className="shops-examples__author-name text-26 fw-600" dangerouslySetInnerHTML={{ __html: slide.name }}></div>
												<div className="shops-examples__author-subscribers text-18 fw-500" dangerouslySetInnerHTML={{ __html: slide.subscribers }}></div>
											</div>
										</div>
										<div className="shops-examples__author-bottom">
											<div className="shops-examples__author-label text-18 fw-500" dangerouslySetInnerHTML={{ __html: slide.label }}></div>
											<div className="shops-examples__author-money text-32 fw-600" dangerouslySetInnerHTML={{ __html: slide.money }}></div>
										</div>
									</div>
									<div className="shops-examples__product">
										<div className="shops-examples__product-img">
											<img src={slide.product_img} alt="img" />
										</div>
										<div className="shops-examples__product-body">
											<div className="shops-examples__product-name fw-500" dangerouslySetInnerHTML={{ __html: slide.product_name }}></div>
											<div className="shops-examples__product-price text-24 fw-500" dangerouslySetInnerHTML={{ __html: slide.product_price }}></div>
											<a href={slide.product_link} className="shops-examples__product-btn" target='_blank'>
												<div className="shops-examples__product-btn-icon">
													<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path fillRule="evenodd" clipRule="evenodd" d="M5.54454 5.54422H4.43571C3.51712 5.54422 2.77246 6.28888 2.77246 7.20747V13.306C2.77246 15.4494 4.51001 17.187 6.65338 17.187H13.3064C15.4497 17.187 17.1873 15.4494 17.1873 13.306V7.20747C17.1873 6.28888 16.4426 5.54422 15.524 5.54422H14.4152C14.4152 3.09465 12.4294 1.10889 9.97988 1.10889C7.53031 1.10889 5.54454 3.09465 5.54454 5.54422ZM13.0292 5.54422C13.0292 3.86014 11.664 2.49493 9.97988 2.49493C8.2958 2.49493 6.93058 3.86014 6.93058 5.54422H13.0292ZM7.06919 8.03909C7.06919 8.49839 6.69686 8.87072 6.23756 8.87072C5.77827 8.87072 5.40594 8.49839 5.40594 8.03909C5.40594 7.5798 5.77827 7.20747 6.23756 7.20747C6.69686 7.20747 7.06919 7.5798 7.06919 8.03909ZM13.7222 8.87072C14.1815 8.87072 14.5538 8.49839 14.5538 8.03909C14.5538 7.5798 14.1815 7.20747 13.7222 7.20747C13.2629 7.20747 12.8906 7.5798 12.8906 8.03909C12.8906 8.49839 13.2629 8.87072 13.7222 8.87072Z" fill="white" />
													</svg>
												</div>
												<div className="shops-examples__product-btn-text">
													Купить
												</div>
											</a>
										</div>
									</div>
								</SwiperSlide>
							)
						})}
						<div className="shops-examples__pagination slider-pagination"></div>
						<div className="shops-examples__navigation ">
							<div className="shops-examples__navigation-btn shops-examples__prev">
								<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M26.6692 31.7627C26.0061 32.4258 24.931 32.4258 24.268 31.7627L14.0806 21.5753C13.4175 20.9123 13.4175 19.8372 14.0806 19.1742L24.268 8.98679C24.931 8.32372 26.0061 8.32372 26.6692 8.98679C27.3322 9.64986 27.3322 10.7249 26.6692 11.388L17.6824 20.3747L26.6692 29.3615C27.3322 30.0246 27.3322 31.0996 26.6692 31.7627Z" fill="#DADADA" />
								</svg>
							</div>
							<div className="shops-examples__navigation-btn shops-examples__next">
								<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M14.0803 31.7627C14.7434 32.4258 15.8184 32.4258 16.4815 31.7627L26.6689 21.5753C27.3319 20.9123 27.3319 19.8372 26.6689 19.1742L16.4815 8.98679C15.8184 8.32372 14.7434 8.32372 14.0803 8.98679C13.4172 9.64986 13.4172 10.7249 14.0803 11.388L23.0671 20.3747L14.0803 29.3615C13.4172 30.0246 13.4172 31.0996 14.0803 31.7627Z" fill="#DADADA" />
								</svg>
							</div>
						</div>
					</Swiper>
					<a href={block_state.btn_link} className="shops-examples__btn btn btn_border btn_rounded btn_big text-24 fw-500">{block_state.btn_text}</a>
				</div>
			</section>
		</>
	)
}
