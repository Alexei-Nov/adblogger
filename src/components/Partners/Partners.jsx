import React from 'react'
import './partners.css'
import { useSelector } from 'react-redux'
import { handleTracking } from 'utils/tracking'

export default function Partners({ block_state }) {
	const btnState = useSelector(state => state.toolkit.registrationBtn)

	const rowCount = block_state.rowsCount
	return (
		<>
			<section className='section partners'>
				<div className="container">
					<h2 className="partners__title title h2" dangerouslySetInnerHTML={{ __html: block_state.title }}></h2>
				</div>

				<div className="partners__wrapper">
					{[...Array(rowCount)].map((row, i) => {
						return (
							<div key={i} className={"partners__row partners__row_animate" + (i % 2 === 0 ? '-reverse' : '')}>
								{block_state.imgList.map((img, j) => {
									return (
										<div key={j} className="partners__img">
											<img src={img} alt="img" />
										</div>
									)
								})}
								<div className="partners__row partners__row_cloned">
									{block_state.imgList.map((img, j) => {
										return (
											<div key={j} className="partners__img">
												<img src={img} alt="img" />
											</div>
										)
									})}
								</div>
							</div>
						)
					})}
				</div>

				<div className="container">
					<a
						href={btnState.link}
						className="partners__btn btn text-20"
						onClick={() => {
							handleTracking('registration_other')
							handleTracking('registration_all')
						}}
					>
						{btnState.text}
					</a>
				</div>
			</section>
		</>
	)
}
