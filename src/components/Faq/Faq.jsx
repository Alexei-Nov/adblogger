import React, { useEffect, useRef } from 'react'
import './faq.css'

export default function Faq() {
	let accordion = useRef();

	useEffect(() => {
		let itemArr = accordion.current.querySelectorAll('.accordion__item')
		itemArr.forEach(item => {
			let body = item.querySelector('.accordion__body')
			if (!item.closest('.accordion__item_open')) {
				body.style.maxHeight = 0
			}
			item.addEventListener('click', (e) => {
				if (!e.target.closest('.accordion__body')) {
					if (!item.closest('.accordion__item_open')) {
						item.classList.add('accordion__item_open')
						body.style.maxHeight = body.scrollHeight + 'px'
					} else {
						item.classList.remove('accordion__item_open')
						body.style.maxHeight = 0
					}
				}
			})
		})
	})



	return (
		<section className='section faq'>
			<div className="container">
				<div className="faq__title h2">FAQ</div>
				<div className="faq__accordion accordion " ref={accordion} >
					<div className="accordion__item">
						<div className="accordion__btn text-32 fw-500">
							<div className="accordion__caret"></div>
							Нужно ли мне решать юридические вопросы?
						</div>
						<div className="accordion__body text-21">
							<p>
								Вы можете сосредоточиться на&nbsp;развитии сообщества и&nbsp;контенте. А&nbsp;маркировка рекламы, документооборот и&nbsp;процесс оплаты — автоматизированы.
							</p>
						</div>
					</div>
					<div className="accordion__item">
						<div className="accordion__btn text-32 fw-500">
							<div className="accordion__caret"></div>
							Сколько я могу заработать?
						</div>
						<div className="accordion__body text-21">
							<p>
								Вы можете сосредоточиться на&nbsp;развитии сообщества и&nbsp;контенте. А&nbsp;маркировка рекламы, документооборот и&nbsp;процесс оплаты — автоматизированы.
							</p>
						</div>
					</div>
					<div className="accordion__item">
						<div className="accordion__btn text-32 fw-500">
							<div className="accordion__caret"></div>
							Как формируется цена за пост?
						</div>
						<div className="accordion__body text-21">
							<p>
								Вы можете сосредоточиться на&nbsp;развитии сообщества и&nbsp;контенте. А&nbsp;маркировка рекламы, документооборот и&nbsp;процесс оплаты — автоматизированы.
							</p>
						</div>
					</div>
					<div className="accordion__item">
						<div className="accordion__btn text-32 fw-500">
							<div className="accordion__caret"></div>
							Какая модель оплаты?
						</div>
						<div className="accordion__body text-21">
							<p>
								Вы можете сосредоточиться на&nbsp;развитии сообщества и&nbsp;контенте. А&nbsp;маркировка рекламы, документооборот и&nbsp;процесс оплаты — автоматизированы.
							</p>
						</div>
					</div>
					<div className="accordion__item">
						<div className="accordion__btn text-32 fw-500">
							<div className="accordion__caret"></div>
							Нужно ли мне маркировать рекламу?
						</div>
						<div className="accordion__body text-21">
							<p>
								Вы можете сосредоточиться на&nbsp;развитии сообщества и&nbsp;контенте. А&nbsp;маркировка рекламы, документооборот и&nbsp;процесс оплаты — автоматизированы.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
