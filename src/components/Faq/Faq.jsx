import React from 'react'
import './faq.css'

export default function Faq({ block_state }) {

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
					<h2 className="faq__title h2">FAQ</h2>
					<div className="faq__accordion accordion " >
						{block_state.faqList.map((item, i) => {
							return (
								<div className="accordion__item" key={i} onClick={toggleItem} itemScope itemType="https://schema.org/Question">
									<div className="accordion__btn text-32 fw-500" itemProp="name">
										<div className="accordion__caret"></div>
										{item.question}
									</div>
									<div className="accordion__body content text-21" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
										<div dangerouslySetInnerHTML={{ __html: item.answer }} itemProp="text"></div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</section>
		</>
	)
}
