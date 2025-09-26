import React from 'react'
import './timer.css'

export default function Timer({ block_state }) {
	return (
		<>
			<section className='section timer'>
				<div className="container">
					<div className="timer__wrapper">
						<div className="timer__body">
							<div className="timer__info">
								<div className="timer__title text-40 fw-600" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
								<div className="timer__desc content text-22" dangerouslySetInnerHTML={{ __html: block_state.desc }}></div>
							</div>
							<div className="timer__img">
								<img src={block_state.img} alt="img" />
							</div>
						</div>
						<div className="timer__bottom">
							<div className="timer__bottom-title text-40 fw-600">До старта:</div>
							<div className="timer__list">
								<div className="timer__item">
									<div className="timer__count">
										<div className="timer__count-num">1</div>
										<div className="timer__count-num">4</div>
									</div>
									<div className="timer__label text-32 fw-600">дней</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
