import React from 'react'
import './blogCatalog.css'

export default function BlogCatalog({ block_state }) {
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
					<div className="blog-catalog__filter"></div>
					<div className="blog-catalog__search"></div>
					<div className="blog-catalog__list"></div>
					<div className="blog-catalog__pagination"></div>
				</div>
			</section>
		</>
	)
}
