import React from 'react'
import './entrance.css'
import { useSelector } from 'react-redux'
import { handleTracking } from 'utils/tracking'

export default function Entrance({ block_state }) {
	const btnState = useSelector(state => state.toolkit.registrationBtn)

	return (
		<>
			<section className='section entrance'>
				<div className="entrance__wrapper">
					<div className="entrance__title h2" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
					<div className="entrance__video">
						<video src={block_state.videoPath} autoPlay muted playsInline loop></video>
					</div>
				</div>
				<a
					href={btnState.link}
					className="entrance__btn btn btn_small fw-500 text-20"
					onClick={() => handleTracking('registration_other')}
				>
					{btnState.text}
				</a>
			</section>
		</>
	)
}
