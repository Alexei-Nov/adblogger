import React, { useEffect, useRef, useState } from 'react'
import { CRangeSlider } from '@coreui/react-pro'
import './calculator.css'

export default function Calculator({ block_state }) {
	const rangeSlider = useRef()

	const [contentType, setContentType] = useState('clip')
	const [viewCount, setViewCount] = useState(25000)
	const [followersCountStep, setFollowersCountStep] = useState(4)
	const [totalIncome, setTotalIncome] = useState(18000)


	function finalCalc() {
		const tableItem = block_state.calc_table.filter((item) =>
			item.postType == contentType &&
			item.followersCountStep == followersCountStep &&
			(!item.viewCondition.split('-')[1] || viewCount <= item.viewCondition.split('-')[1]) &&
			viewCount >= item.viewCondition.split('-')[0]
		)

		setTotalIncome(tableItem[0].totalIncome)
	}


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
										<div className="calculator__btns text-20 fw-500">
											<div className={"calculator__btn " + (contentType == 'post' ? 'calculator__btn_active' : '')}
												onClick={(e) => { setContentType('post') }}
											>Пост</div>
											<div className={"calculator__btn " + (contentType == 'clip' ? 'calculator__btn_active' : '')}
												onClick={(e) => { setContentType('clip') }}>Клип</div>
										</div>
									</div>
								</div>
								<div className="calculator__item">
									<div className="calculator__item-title text-32 fw-500">
										Количество подписчиков в&nbsp;сообществе
									</div>
									<div className="calculator__range">
										<CRangeSlider
											step={1}
											min={1}
											max={7}
											value={followersCountStep}
											labels={['1--20К', '20--50К', '50--100К', '100--250К', '250--500К', '500К--1М', '>1М']}
											onChange={(value) => { setFollowersCountStep(value[0]) }}
										/>
									</div>
								</div>
								<div className="calculator__item">
									<div className="calculator__row">
										<div className="calculator__item-title text-32 fw-500">
											Количество просмотров
										</div>
										<input type="text"
											className='calculator__input text-20 fw-500'
											value={viewCount.toLocaleString()}
											onChange={(e) => {
												const currentNum = parseInt(e.target.value.replace(/\s/g, ''))
												if (!Number.isNaN(currentNum)) {
													setViewCount(currentNum)
												}
												if (e.target.value === '') {
													setViewCount('')
												}
											}}
										/>
									</div>
								</div>
								<div className="calculator__submit btn btn_rounded btn_wide text-20 fw-500" onClick={finalCalc}>Посчитать</div>
							</div>
							<div className="calculator__results">
								<div className="calculator__results-img">
									<img src="./img/calculator/img.png" alt="img" />
								</div>
								<div className="calculator__results-bottom">
									<div className="calculator__results-label text-24 fw-500">Ваш прогнозируемый доход</div>
									<div className="calculator__results-num fw-600">
										<span>{totalIncome.toLocaleString()}</span> ₽
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
