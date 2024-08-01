import React from 'react'
import './tile.css'
import { Swiper, SwiperSlide } from 'swiper/react';


export default function Tile() {
	return (
		<section className='section tile'>
			<div className="container">
				<Swiper className='tile__slider'
					spaceBetween={0}
					slidesPerView={1}
					breakpoints={{
						0: {
							spaceBetween: 24,
							slidesPerView: 1,
						},
						571: {
							spaceBetween: 0,
							slidesPerView: 1
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

				</Swiper>
				<a href='/' className="tile__btn btn">Подключить сообщество</a>
			</div>
		</section>
	)
}
