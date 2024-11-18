import React from 'react'
import './textVideo.css'
import { handleTracking } from 'utils/tracking'

export default function TextVideo({ textVideoState }) {
	return (
		<section className='section text-video'>
			<div className="container">
				<div className="text-video__wrapper">
					<div className="text-video__body">
						<div className="text-video__title text-50" dangerouslySetInnerHTML={{ __html: textVideoState.title }}></div>
						<div className="text-video__desc text-24 fw-500" dangerouslySetInnerHTML={{ __html: textVideoState.desc }}></div>

						<div className="text-video__video">
							<video src={textVideoState.video_path} autoPlay muted playsInline loop></video>
						</div>

						<div className="text-video__bottom">
							<a href={textVideoState.btn_link}
								className="text-video__btn btn btn_big text-28 fw-500"
								onClick={() => handleTracking('launch_advertising_black_friday_*')}
							>{textVideoState.btn_text}</a>
							<div className="text-video__label text-17" dangerouslySetInnerHTML={{ __html: textVideoState.label }}></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
