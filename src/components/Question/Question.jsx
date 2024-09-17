import React from 'react'
import './question.css'
import { NavLink } from "react-router-dom";
import { handleTracking } from 'utils/tracking'

export default function Question() {
	return (
		<section className='section question'>
			<div className="container">
				<div className="question__wrapper">
					<div className="question__title h2">Вы автор или рекламодатель?</div>
					<div className="question__btns">
						<NavLink
							to='for-authors'
							className="question__btn btn btn_border"
							onClick={() => handleTracking('create-content')}
							end
						>Создаю контент</NavLink>
						<NavLink
							to='for-advertisers'
							className="question__btn btn btn_border"
							onClick={() => handleTracking('order-adv')}
							end
						>Размещаю рекламу</NavLink>
					</div>
				</div>
			</div>
		</section>
	)
}
