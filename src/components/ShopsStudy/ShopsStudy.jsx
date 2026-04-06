import React from 'react'
import './shopsStudy.css'

export default function ShopsStudy({ block_state }) {
	return (
		<>
			<section className="section shops-study" id="shops-study">
				<div className="container">
					<div className="shops-study__wrapper">
						<div className="shops-study__title text-40 fw-600" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
						<div className="shops-study__list">
							{block_state.items_list.map((item, index) => {
								return (
									<div className="shops-study__item" key={index}>
										{item.tag &&
											<div className="shops-study__item-tag text-20 fw-700">{item.tag}</div>
										}
										<div className="shops-study__item-name text-32 fw-600" dangerouslySetInnerHTML={{ __html: item.name }}></div>
										<div className="shops-study__item-desc text-20" dangerouslySetInnerHTML={{ __html: item.desc }}></div>
										<a href={item.btn_link} className="shops-study__item-btn btn btn_rounded btn_blue text-24 fw-500" target='_blank'>{item.btn_text}</a>
										{item.img &&
											<div className="shops-study__item-img">
												<img src={item.img} alt="img" />
											</div>
										}
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
