import React, { useState } from 'react'
import 'swiper/css';
import './blogCatalog.css'
import { NavLink } from 'react-router-dom'
import { Mousewheel, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';


const tagsList = [
	{
		id: 1,
		name: 'Все',
	},
	{
		id: 2,
		name: 'Новости',
	},
	{
		id: 3,
		name: 'Трафик',
	},
	{
		id: 4,
		name: 'Посевы',
	},
	{
		id: 5,
		name: 'Аудитория',
	}
]

export default function BlogCatalog({ block_state }) {

	const [activeTag, setActiveTag] = useState(1)

	return (
		<>
			<section className='blog-catalog'>
				<div className="container">
					<div className="blog-catalog__entrance">
						<div className="blog-catalog__heading">
							<div className="blog-catalog__title text-50 fw-600" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
							<div className="blog-catalog__desc text-30 fw-500" dangerouslySetInnerHTML={{ __html: block_state.description }}></div>
						</div>
						<picture className="blog-catalog__img">
							<source media="(max-width: 1024px)" srcSet="/img/blog-catalog/img_mob.png" />
							<img src="/img/blog-catalog/img.png" alt="img" />
						</picture>
					</div>
					<div className="blog-catalog__filter">
						<div className="blog-catalog__filter-btn blog-catalog__filter-prev">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M13.4625 17.7772C13.8917 17.4297 13.958 16.8 13.6105 16.3708L8.45323 10L13.6105 3.62923C13.958 3.19997 13.8917 2.57028 13.4625 2.22279C13.0332 1.87529 12.4035 1.94158 12.056 2.37084L6.3894 9.37081C6.09239 9.73769 6.09239 10.2623 6.3894 10.6292L12.056 17.6292C12.4035 18.0584 13.0332 18.1247 13.4625 17.7772Z" fill="#00D3E6" />
							</svg>
						</div>
						<Swiper className='blog-catalog__filter-slider'
							modules={[Navigation, Mousewheel]}
							spaceBetween={20}
							speed={800}
							mousewheel={{
								enabled: true,
								forceToAxis: true
							}}
							navigation={{
								prevEl: '.blog-catalog__filter-prev',
								nextEl: '.blog-catalog__filter-next',
							}}
							slidesPerView='auto'
							breakpoints={{
								0: {
									spaceBetween: 7
								},
								570: {
									spaceBetween: 20
								},
							}}
						>
							{tagsList.map((tag, i) => {
								return (
									<SwiperSlide key={i} className='blog-catalog__filter-slide'>
										<div className={"blog-catalog__filter-tag text-22" + (tag.id == activeTag ? ' blog-catalog__filter-tag_active' : '')}
											onClick={() => setActiveTag(tag.id)}
										>{tag.name}</div>
									</SwiperSlide>
								)
							})}
						</Swiper>
						<div className="blog-catalog__filter-btn blog-catalog__filter-next">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M6.53758 2.22279C6.10832 2.57028 6.04204 3.19997 6.38954 3.62922L11.5468 10L6.38954 16.3708C6.04204 16.8 6.10832 17.4297 6.53758 17.7772C6.96684 18.1247 7.59652 18.0584 7.94402 17.6292L13.6107 10.6292C13.9077 10.2623 13.9077 9.73769 13.6107 9.3708L7.94402 2.37083C7.59652 1.94157 6.96684 1.87529 6.53758 2.22279Z" fill="#00D3E6" />
							</svg>
						</div>
					</div>
					<div className="blog-catalog__search">

					</div>
					<div className="blog-catalog__list">
						{[...Array(12)].map((card, index) => {
							return (
								<BlogCard key={index} cardData={card} />
							)
						})}
					</div>
					<div className="blog-catalog__pagination">
						<div className="blog-catalog__pagination-arrow blog-catalog__pagination-prev">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M13.4625 17.7772C13.8917 17.4297 13.958 16.8 13.6105 16.3708L8.45323 10L13.6105 3.62923C13.958 3.19997 13.8917 2.57028 13.4625 2.22279C13.0332 1.87529 12.4035 1.94158 12.056 2.37084L6.3894 9.37081C6.09239 9.73769 6.09239 10.2623 6.3894 10.6292L12.056 17.6292C12.4035 18.0584 13.0332 18.1247 13.4625 17.7772Z" fill="#00D3E6" />
							</svg>
						</div>
						<div className="blog-catalog__pagination-list text-22">
							<div className="blog-catalog__pagination-btn blog-catalog__pagination-btn_active">1</div>
							<div className="blog-catalog__pagination-btn">2</div>
							<div className="blog-catalog__pagination-btn">3</div>
							<div className="blog-catalog__pagination-btn">4</div>
							<div className="blog-catalog__pagination-btn">5</div>
							<div className="blog-catalog__pagination-btn">6</div>
							<div className="blog-catalog__pagination-btn">7</div>
						</div>
						<div className="blog-catalog__pagination-arrow blog-catalog__pagination-next">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M6.53758 2.22279C6.10832 2.57028 6.04204 3.19997 6.38954 3.62922L11.5468 10L6.38954 16.3708C6.04204 16.8 6.10832 17.4297 6.53758 17.7772C6.96684 18.1247 7.59652 18.0584 7.94402 17.6292L13.6107 10.6292C13.9077 10.2623 13.9077 9.73769 13.6107 9.3708L7.94402 2.37083C7.59652 1.94157 6.96684 1.87529 6.53758 2.22279Z" fill="#00D3E6" />
							</svg>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}


function BlogCard(cardData) {
	return (
		<NavLink to='/blog/article-1' className="blog-card" >
			<div className="blog-card__date text-20">01.01.2026</div>
			<div className="blog-card__img">
				<img src="/img/blog/article-1/preview.png" alt="img" />
			</div>
			<div className="blog-card__title text-28 fw-500">Простая регистрация</div>
		</NavLink>
	)
}