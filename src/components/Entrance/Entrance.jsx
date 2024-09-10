import React from 'react'
import './entrance.css'
import { useSelector } from 'react-redux'

export default function Entrance({ entranceState }) {
	const btnState = useSelector(state => state.toolkit.registrationBtn)

	return (
		<>
			<section className='section entrance'>
				<div className="entrance__wrapper">
					<div className="entrance__title h2" dangerouslySetInnerHTML={{ __html: entranceState.title }}></div>
					<div className="entrance__video">
						<video src={entranceState.videoPath} autoPlay muted playsInline loop></video>
					</div>
				</div>
				<a
					href={btnState.link}
					className="entrance__btn btn btn_small fw-500 text-20"
					onClick={() => `ym(98108619,'reachGoal','registration_other');
					_tmr.push({ id: '3536479', type: 'reachGoal', goal: 'registration_other' });`
					}
				>
					{btnState.text}
				</a>
			</section>
		</>
	)
}
