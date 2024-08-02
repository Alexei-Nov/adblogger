import React from 'react'
import './entrance.css'

export default function Entrance() {
	return (
		<section className='section entrance'>
			<div className="entrance__wrapper">
				<div className="entrance__title h2">
					зарабатывайте на&nbsp;своём контенте
				</div>
				<div className="entrance__img">
					<img src="/img/entrance/img-1.png" alt="img" />
				</div>
			</div>
			<a href='/' className="entrance__btn btn fw-500 text-20">Подключить сообщество</a>
		</section>
	)
}
