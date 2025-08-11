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

		if (tableItem) {
			setTotalIncome(tableItem[0].totalIncome)
		}
	}


	const windowWidth = window.innerWidth
	const [totalCostTooltip, setTotalCostTooltip] = useState(false)

	return (
		<>
			<section className='section calculator'>
				<div className="container">
					<div className="calculator__wrapper">
						<div className="calculator__title text-40 fw-600" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
						<div className="calculator__body">
							<div className="calculator__form">
								<div className="calculator__subtitle text-24" dangerouslySetInnerHTML={{ __html: block_state.desc }}></div>
								<div className="calculator__item">
									<div className="calculator__row calculator__row_mob">
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
										<style>
											{`.range-slider-label:nth-child(` + followersCountStep + `){
												color:#fff;
											}`}
										</style>
										<CRangeSlider
											step={1}
											min={1}
											max={7}
											value={followersCountStep}
											labels={['1—20К', '20—50К', '50—100К', '100—250К', '250—500К', '500К—1М', '>1М']}
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
											value={viewCount.toLocaleString("ru-RU")}
											onChange={(e) => {
												const currentNum = parseInt(e.target.value.replace(/\s/g, ''))
												if (!Number.isNaN(currentNum)) {
													setViewCount(currentNum)
												}
												if (e.target.value === '') {
													setViewCount('')
												}
											}}
											onFocus={(e) => { setViewCount('') }}
										/>
									</div>
								</div>
								<div className="calculator__submit btn btn_rounded btn_wide text-20 fw-500" onClick={finalCalc}>Посчитать</div>
							</div>
							<div className="calculator__results">
								<div className="calculator__results-img">
									<img src="./img/calculator/img.png" alt="img" />
								</div>
								<div className={"calculator__results-bottom" + (totalCostTooltip ? ' calculator__results-bottom_open' : '')}>
									<div className="calculator__results-bottom-bg">
										<picture>
											<source media="(max-width: 440px)" srcSet="/img/calculator/mask-1_mob.svg" />
											<img src="/img/calculator/mask-1.svg" alt="img" />
										</picture>
										<picture>
											<source media="(max-width: 440px)" srcSet="/img/calculator/mask-2_mob.svg" />
											<img src="/img/calculator/mask-2.svg" alt="img" />
										</picture>
									</div>
									<div className="calculator__results-bottom-tooltip"
										onClick={() => setTotalCostTooltip(!totalCostTooltip)}
									>
										<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M9.26143 11.4863C9.69828 11.4863 9.93824 11.2416 10.0305 10.8211C10.1105 10.2941 10.2951 10.0242 11.1134 9.54105C11.981 9.02023 12.4301 8.37391 12.4301 7.42639C12.4301 5.96433 11.2549 4.98543 9.50754 4.98543C8.18469 4.98543 7.20024 5.5188 6.80646 6.3471C6.6834 6.58555 6.62187 6.824 6.62187 7.09382C6.62187 7.57072 6.92336 7.87819 7.40943 7.87819C7.78475 7.87819 8.06163 7.70249 8.21545 7.30089C8.41234 6.74242 8.81843 6.44122 9.4214 6.44122C10.0982 6.44122 10.5658 6.86792 10.5658 7.48287C10.5658 8.06016 10.3259 8.37391 9.53216 8.85708C8.80612 9.29006 8.4308 9.7795 8.4308 10.5199V10.6078C8.4308 11.1223 8.73844 11.4863 9.26143 11.4863Z" fill="#0D6871" />
											<path fillRule="evenodd" clipRule="evenodd" d="M9.29368 3.24053C5.76508 3.24053 2.90459 6.10102 2.90459 9.62961C2.90459 13.1582 5.76508 16.0187 9.29368 16.0187C12.8223 16.0187 15.6828 13.1582 15.6828 9.62961C15.6828 6.10102 12.8223 3.24053 9.29368 3.24053ZM1.16211 9.62961C1.16211 5.13867 4.80274 1.49805 9.29368 1.49805C13.7846 1.49805 17.4252 5.13867 17.4252 9.62961C17.4252 14.1206 13.7846 17.7612 9.29368 17.7612C4.80274 17.7612 1.16211 14.1206 1.16211 9.62961Z" fill="#0D6871" />
											<path d="M10.3391 13.2307C10.3391 13.8081 9.87105 14.2762 9.29365 14.2762C8.71624 14.2762 8.24816 13.8081 8.24816 13.2307C8.24816 12.6533 8.71624 12.1852 9.29365 12.1852C9.87105 12.1852 10.3391 12.6533 10.3391 13.2307Z" fill="#0D6871" />
										</svg>
									</div>
									<div className="calculator__results-tooltip-body content">
										<p>Доход за продвижение товара с Ozon состоит из фиксированной выплаты и процента от продажи товара</p>
										<p>Подробнее <a href="#anchor-calculator">здесь</a></p>
									</div>
									<div className="calculator__results-num fw-600">
										<span>{totalIncome.toLocaleString("ru-RU")}</span>&nbsp;₽
									</div>
									<div className="calculator__results-label text-24 fw-500">Ваш прогнозируемый доход</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
