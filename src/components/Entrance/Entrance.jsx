import React from 'react'
import './entrance.css'

export default function Entrance({ entranceState }) {
	return (
		<>
			<section className='section entrance'>
				<div className="entrance__wrapper">
					<div className="entrance__title h2" dangerouslySetInnerHTML={{ __html: entranceState.title }}></div>
					<div className="entrance__video">
						{/* <video src={entranceState.videoPath} autoPlay muted playsInline loop></video> */}
					</div>
				</div>
				<a href='/' className="entrance__btn btn fw-500 text-20">Подключить сообщество</a>
			</section>
		</>
	)
}
