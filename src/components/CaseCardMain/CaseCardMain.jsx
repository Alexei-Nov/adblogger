import React from 'react'
import './caseCardMain.css'

export default function CaseCardMain({ post }) {
	return (
		<>
			<section className='section case-card-main'>
				<div className="container">
					<div className="case-card-main__title page-title">топ-кейсы</div>
					{post &&
						<a href={'/top-cases/' + post.slug} className="case-card-main__wrapper">
							<div className="case-card-main__logo">
								<img src={post.logo} alt="img" />
							</div>
							<div className="case-card-main__text text-32 fw-500" dangerouslySetInnerHTML={{ __html: post.title }}></div>
							<div className="case-card-main__img">
								<picture>
									<source media="(max-width: 1024px)" srcSet={post.preview_img_vertical} />
									<img src={post.preview_img_main} alt="img" />
								</picture>
							</div>
						</a>
					}
				</div>
			</section>
		</>
	)
}
