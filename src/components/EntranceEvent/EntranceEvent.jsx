import React from 'react'
import './entranceEvent.css'
import { handleTracking } from 'utils/tracking'

export default function EntranceEvent({ block_state }) {
	return (
		<section className='section entrance-event'>
			<div className="container">
				<div className="entrance-event__wrapper">
					<div className="entrance-event__body">
						<div className="entrance-event__title text-50" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
						<div className="entrance-event__desc text-24 fw-500" dangerouslySetInnerHTML={{ __html: block_state.desc }}></div>

						<picture className="entrance-event__media">
							{/* <video src={block_state.media_path} autoPlay muted playsInline loop></video> */}
							<source media="(max-width: 1024px)" srcSet={block_state.media_mob} />
							<img src={block_state.media} alt="img" />
						</picture>

						<div className="entrance-event__bottom">
							<a href={block_state.btn_link}
								className="entrance-event__btn btn btn_big text-28 fw-500"
								onClick={() => handleTracking('launch_advertising_black_friday_*')}
							>{block_state.btn_text}</a>
							<div className="entrance-event__label text-17" dangerouslySetInnerHTML={{ __html: block_state.label }}></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
