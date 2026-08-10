import React from 'react'
import AllBlocks from '../components/AllBlocks/AllBlocks'
import TitleAndMetaTags from 'components/TitleAndMetaTags/TitleAndMetaTags'

const title = "Полезные материалы"
const description = "Описание описание описание описание описание описание"

export default function Blog() {
	return (
		<>
			<TitleAndMetaTags title={title} description={description} />

			<section className='blog-page-entrance'>
				<div className="container">
					<div className="blog-page-entrance__wrapper">
						<div className="blog-page-entrance__heading">
							<div className="blog-page-entrance__title">{title}</div>
							<div className="blog-page-entrance__desc">{description}</div>
						</div>
						<picture className="blog-page-entrance__img">
							<source media="(max-width: 768px)" srcset="" />
							<img src="" alt="img" />
						</picture>
					</div>
				</div>
			</section>

			<AllBlocks />
		</>
	)
}
