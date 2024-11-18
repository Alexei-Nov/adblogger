import React from 'react'
import './faq.css'

export default function Faq({ faqState }) {

	function toggleItem(e) {
		let item = e.target.closest('.accordion__item')
		let body = item.querySelector('.accordion__body')

		if (!e.target.closest('.accordion__body')) {
			if (!item.closest('.accordion__item_open')) {
				item.classList.add('accordion__item_open')
				body.style.maxHeight = body.scrollHeight + 'px'
			} else {
				item.classList.remove('accordion__item_open')
				body.style.maxHeight = 0
			}
		}
	}

	return (
		<>
			<section className='section faq'>
				<div className="container">
					<div className="faq__title h2">FAQ</div>
					<div className="faq__accordion accordion " >
						{faqState.faqList.map((item, i) => {
							return (
								<div className="accordion__item" key={i} onClick={toggleItem}>
									<div className="accordion__btn text-32 fw-500">
										<div className="accordion__caret"></div>
										{item.question}
									</div>
									<div className="accordion__body content text-21" dangerouslySetInnerHTML={{ __html: item.answer }}></div>
								</div>
							)
						})}
					</div>
				</div>
			</section>
		</>
	)
}
