import React, { useEffect, useState } from 'react'
import './timer.css'

export default function Timer({ block_state }) {
	const [distance, setDistance] = useState(1)
	const [days, setDays] = useState(1)
	const [hours, setHours] = useState(1)
	const [seconds, setSeconds] = useState(1)

	function addZeroToNumber(number) {
		if (number < 10) {
			return '0' + number.toString()
		}
		return number.toString()
	}

	function getDeclension(number, words) {
		number = Math.abs(number) % 100;
		if (number > 10 && number < 20) return words[2];
		if (number % 10 > 1 && number % 10 < 5) return words[1];
		if (number % 10 == 1) return words[0];
		return words[2];
	}

	useEffect(() => {
		const timerInterval = setInterval(() => {
			const currentTime = new Date().getTime();
			const countDownDate = new Date(block_state.date_start).getTime();

			if (distance <= 0) {
				clearInterval(timerInterval);
				setDistance(0);
			} else {
				setDistance(countDownDate - currentTime);
			}

		}, 1000);
	}, [])

	useEffect(() => {
		setDays(addZeroToNumber(Math.floor(distance / (1000 * 60 * 60 * 24))));
		setHours(addZeroToNumber(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))));

		setSeconds(addZeroToNumber(Math.floor((distance % (1000 * 60)) / 1000)));
	}, [distance])


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
										<div className="timer__count-num">{days.toString().charAt(0)}</div>
										<div className="timer__count-num">{days.toString().charAt(1)}</div>
									</div>
									<div className="timer__label text-32 fw-600">{getDeclension(days, ['день', 'дня', 'дней'])}</div>
								</div>
								<div className="timer__item">
									<div className="timer__count">
										<div className="timer__count-num">{hours.toString().charAt(0)}</div>
										<div className="timer__count-num">{hours.toString().charAt(1)}</div>
									</div>
									<div className="timer__label text-32 fw-600">{getDeclension(hours, ['час', 'часа', 'часов'])}</div>
								</div>
								<div className="timer__item">
									<div className="timer__count">
										<div className="timer__count-num">{seconds.toString().charAt(0)}</div>
										<div className="timer__count-num">{seconds.toString().charAt(1)}</div>
									</div>
									<div className="timer__label text-32 fw-600">{getDeclension(seconds, ['сек', 'сек', 'сек'])}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
