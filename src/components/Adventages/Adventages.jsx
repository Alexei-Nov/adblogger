import React from 'react'
import './adventages.css'

export default function Adventages() {
	return (
		<section className='section adventages'>
			<div className="container">
				<div className="adventages__title title h2">
					монетизируйте сообщество <br />
					<span className='blue-text'>от&nbsp;1&nbsp;000 подписчиков</span>
				</div>
				<div className="adventages__wrapper">
					<div className="adventages__item">
						<div className="adventages__num h2">
							7 <br /> <span className='h3'>тыс.</span>
						</div>
						<div className="adventages__desc text-21">
							блогеров и сообществ уже с нами
						</div>
					</div>
					<div className="adventages__item">
						<div className="adventages__num h2">
							100+
						</div>
						<div className="adventages__desc text-21">
							рекламодателей
							на платформе
						</div>
					</div>
					<div className="adventages__item">
						<div className="adventages__num h2">
							300+
						</div>
						<div className="adventages__desc text-21">
							активных заявок
							от рекламодателей
						</div>
					</div>
					<div className="adventages__item">
						<div className="adventages__num h2">
							5,5 <br /> <span className='h3'>млрд ₽</span>
						</div>
						<div className="adventages__desc text-21">
							<a href="/">заработали</a> авторы ВКонтакте в 2024 году
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
