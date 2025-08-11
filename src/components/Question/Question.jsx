import React from 'react'
import './question.css'
import { NavLink } from "react-router-dom";
import { handleTracking } from 'utils/tracking'

export default function Question() {
	return (
		<section className='section question'>
			<div className="container">
				<div className="question__wrapper">
					<div className="question__title h2">выберите роль</div>
					<div className="question__btns">
						<div className="question__card">
							<div className="question__card-title">Автор</div>
							<div className="question__card-img">
								<img src="./img/question/img-1.png" alt="img" />
							</div>
							<div className="question__card-desc">Буду создавать <br className='br-mobile' /> рекламные посты и&nbsp;клипы</div>
							<NavLink
								to='for-authors'
								className="question__card-btn btn btn_border btn_rounded btn_wide text-20 fw-500"
								onClick={() => handleTracking('create-content')}
								end
							>
								Перейти
							</NavLink>
						</div>
						<div className="question__card">
							<div className="question__card-title">Рекламодатель</div>
							<div className="question__card-img">
								<img src="./img/question/img-2.png" alt="img" />
							</div>
							<div className="question__card-desc">Буду заказывать <br /> рекламу у&nbsp;авторов</div>
							<NavLink
								to='for-advertisers'
								className="question__card-btn btn btn_border btn_rounded btn_wide text-20 fw-500"
								onClick={() => handleTracking('order-adv')}
								end
							>
								Перейти
							</NavLink>
						</div>
					</div>
					<a href='/app' className="question__link">Перейти в кабинет</a>
				</div>
			</div>
		</section>
	)
}
