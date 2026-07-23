import React, { useEffect, useState } from 'react'
import './entranceVideo.css'
import { handleTracking } from 'utils/tracking'

export default function EntranceVideo({ block_state }) {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};

	}, []);
	return (
		<section className='entrance-video'>
			<div className="container">
				<div className="entrance-video__wrapper">
					<div className="entrance-video__body">
						<div className="entrance-video__title" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
						<div className="entrance-video__desc text-30" dangerouslySetInnerHTML={{ __html: block_state.desc }}></div>
						<div className="entrance-video__label" dangerouslySetInnerHTML={{ __html: block_state.label }}></div>

						<div className="entrance-video__media">
							<video src={(window.innerWidth > 1024 ? block_state.media : block_state.media_mob)} autoPlay muted playsInline></video>
						</div>

						<div className="entrance-video__bottom">
							<a href={block_state.btn_link}
								className="entrance-video__btn btn btn_big btn_rounded btn_border text-26 fw-500"
								onClick={() => handleTracking('registration_all')}
							>{block_state.btn_text}</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
