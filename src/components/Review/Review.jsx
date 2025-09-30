import React from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import './review.css'

export default function Review({ block_state }) {
	return (
		<>
			<section className='section review'>
				<div className="container">
					<div className="review__title text-40 fw-600" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
					<Swiper className='review__slider'
						modules={[Autoplay, Pagination]}
						spaceBetween={24}
						speed={800}
						slidesPerView={1}
						loop={true}
						pagination={{
							el: '.review__pagination',
							clickable: true
						}}
						autoplay={{
							delay: 15000,
							disableOnInteraction: false,
						}}
					>
						{block_state.review_list.map((review_item, i) => {
							return (
								<SwiperSlide key={i} className='review__slide'>
									<div className="review__slide-top">
										<div className="review__photo">
											<img src={review_item.photo} alt="img" />
										</div>
										<div className="review__info">
											<div className="review__name text-28 fw-600" dangerouslySetInnerHTML={{ __html: review_item.name }}></div>
											<div className="review__tags text-22 fw-600">
												{review_item.tags.map((tag, j) => {
													return (
														<div key={j} className={"review__tag" + (tag.color == 'black' ? ' review__tag_border' : '')} dangerouslySetInnerHTML={{ __html: tag.text }}></div>
													)
												})}
											</div>
										</div>
									</div>
									<div className="review__text text-22 content" dangerouslySetInnerHTML={{ __html: review_item.text }}></div>
								</SwiperSlide>
							)
						})}

						<div className="review__pagination slider-pagination"></div>
					</Swiper>
				</div>
			</section>
		</>
	)
}
