import React from 'react'
import './tovaryAbout.css'


export default function TovaryAbout({ block_state }) {
	return (
		<>
			<section className='section tovary-about'>
				<div className="container">
					<div className="tovary-about__wrapper">
						<div className="tovary-about__body">
							<div className="tovary-about__title text-40 fw-600" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
							<div className="tovary-about__desc content text-24 fw-500" dangerouslySetInnerHTML={{ __html: block_state.desc }}></div>
						</div>
						<picture className="tovary-about__img">
							<source media="(max-width: 768px)" srcSet={block_state.img_mob} />
							<img src={block_state.img} alt="img" />
						</picture>
					</div>
				</div>
			</section>
		</>
	)
}
