import React from 'react'
import './partners.css'

export default function Partners({ partnersState }) {
	const rowCount = partnersState.rowsCount
	return (
		<>
			<section className='section partners'>
				<div className="container">
					<div className="partners__title title h2">{partnersState.title}</div>
				</div>

				<div className="partners__wrapper">
					{[...Array(rowCount)].map((row, i) => {
						return (
							<div key={i} className={"partners__row partners__row_animate" + (i % 2 === 0 ? '-reverse' : '')}>
								{partnersState.imgList.map((img, j) => {
									return (
										<div key={j} className="partners__img">
											<img src={img} alt="img" />
										</div>
									)
								})}
								<div className="partners__row partners__row_cloned">
									{partnersState.imgList.map((img, j) => {
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
			</section>
		</>
	)
}
