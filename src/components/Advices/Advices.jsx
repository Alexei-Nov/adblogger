import React from 'react'
import './advices.css'

export default function Advices({ block_state }) {
	return (
		<>
			<section className='section advices'>
				<div className="container">
					<div className="advices__title text-40 fw-600" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
					<div className="advices__wrapper">
						{block_state.items_list.map((item, i) => {
							return (
								<div key={i} className="advices__item">
									<div className="advices__img">
										<img src={item.img} alt="img" />
									</div>
									<div className="advices__name">{item.name}</div>
									<ul className="advices__list">
										{item.list.map((list_item, j) => {
											return (
												<li key={j} className="advices__list-item" dangerouslySetInnerHTML={{ __html: list_item.text }}></li>
											)
										})}

									</ul>
									<a href={item.btn_link} className="advices__btn btn btn_rounded btn_wide btn_border text-20 fw-500" >{item.btn_text}</a>
								</div>
							)
						})}

					</div>
					<div className="advices__bottom">
						<div className="advices__bottom-title" dangerouslySetInnerHTML={{ __html: block_state.bottom_text }}></div>
						<a href={block_state.bottom_btn_link} className="advices__bottom-btn btn btn_rounded btn_border-black fw-500 text-20" >{block_state.bottom_btn_text}</a>
					</div>
				</div>
			</section>
		</>
	)
}
