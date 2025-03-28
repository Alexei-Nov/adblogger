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
					<h1 className="entrance__title h2" dangerouslySetInnerHTML={{ __html: block_state.title }}></h1>
					<div className="entrance__video">
						<video src={block_state.videoPath} autoPlay muted playsInline loop></video>
					</div>
				</div>
				<a
					href={btnState.link}
					className="entrance__btn btn btn_small fw-500 text-20"
					onClick={() => {
						handleTracking('registration_other')
						handleTracking('registration_all')
					}}
				>
					{btnState.text}
				</a>
			</section>
		</>
	)
}
