import React from 'react'
import './entrance.css'

export default function Entrance({ entranceState }) {
	return (
		<section className='section entrance'>
			<div className="entrance__wrapper">
				<div className="entrance__title h1">
					{entranceState.titleWhite} <br />

					{entranceState.titleBlue &&
						<span className='blue-text' dangerouslySetInnerHTML={{ __html: entranceState.titleBlue }} ></span>
					}
				</div>
				<div className="entrance__img">
					<img src={entranceState.imgPath} alt="img" />
				</div>
			</div>
			<a href='/' className="entrance__btn btn fw-500 text-20">Подключить сообщество</a>
		</section>
	)
}
