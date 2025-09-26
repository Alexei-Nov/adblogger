import React, { useEffect, useState } from 'react'
import './timer.css'

export default function Timer({ block_state }) {
	const [distance, setDistance] = useState(1)

	useEffect(() => {
		const timerInterval = setInterval(() => {
			const currentTime = new Date().getTime();
			const countDownDate = new Date(block_state.date_start).getTime();

			setDistance((time) => {
				if (time <= 0) {
					clearInterval(timerInterval);
					return 0;
				} else {
					return countDownDate - currentTime
				}
			});
		}, 1000);
	}, [])


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
							<div className="timer__bottom-title text-40 fw-600">До старта: </div>
							<div className="timer__list">
								<div className="timer__item">
									<div className="timer__count">
										{Math.floor(distance / (1000 * 60 * 60 * 24)) < 10 &&
											<>
												<div className="timer__count-num">0</div>
												<div className="timer__count-num">{Math.floor(distance / (1000 * 60 * 60 * 24)).toString().charAt(0)}</div>
											</>
										}
										{Math.floor(distance / (1000 * 60 * 60 * 24)) >= 10 &&
											<>
												<div className="timer__count-num">{Math.floor(distance / (1000 * 60 * 60 * 24)).toString().charAt(0)}</div>
												<div className="timer__count-num">{Math.floor(distance / (1000 * 60 * 60 * 24)).toString().charAt(1)}</div>
											</>
										}
									</div>
									<div className="timer__label text-32 fw-600">дней</div>
								</div>
								<div className="timer__item">
									<div className="timer__count">
										{Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) < 10 &&
											<>
												<div className="timer__count-num">0</div>
												<div className="timer__count-num">{Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().charAt(0)}</div>
											</>
										}
										{Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) >= 10 &&
											<>
												<div className="timer__count-num">{Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().charAt(0)}</div>
												<div className="timer__count-num">{Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().charAt(1)}</div>
											</>
										}
									</div>
									<div className="timer__label text-32 fw-600">часа</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
