import React, { useState } from 'react'
import './calculator.css'

export default function Calculator({ block_state }) {

	const [contentType, setContentType] = useState('clip')

	return (
		<>
			<section className='section calculator'>
				<div className="container">
					<div className="calculator__wrapper">
						<div className="calculator__title text-40 fw-600" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
						<div className="calculator__body">
							<div className="calculator__form">
								<div className="calculator__subtitle text-24">
									Выберите тип контента, количество подписчиков в&nbsp;своём сообществе и&nbsp;количество просмотров
								</div>
								<div className="calculator__item">
									<div className="calculator__row">
										<div className="calculator__item-title text-32 fw-500">
											Тип контента
										</div>
										<div className="calculator__btns">
											<div className={"calculator__btn " + (contentType == 'post' ? 'calculator__btn_active' : '')}>Пост</div>
											<div className={"calculator__btn " + (contentType == 'clip' ? 'calculator__btn_active' : '')}>Клип</div>
										</div>
									</div>
								</div>
								<div className="calculator__item">
									<div className="calculator__item-title">
										Количество подписчиков в&nbsap;сообществе
									</div>
									<div className="calculator__range">

									</div>
								</div>
								<div className="calculator__item">
									<div className="calculator__row">
										<div className="calculator__item-title">
											Количество
											просмотров
										</div>
										<input type="text" className='calculator__input' />
									</div>
								</div>
								<div className="calculator__submit btn btn_rounded btn_wide">Посчитать</div>
							</div>
							<div className="calculator__results">
								<div className="calculator__results-img">
									<img src="./img/calculator/img.png" alt="img" />
								</div>
								<div className="calculator__results-bottom">
									<div className="calculator__results-label text-24 fw-500">Ваш прогнозируемый доход</div>
									<div className="calculator__results-num fw-600">
										<span>18 000</span> ₽
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
