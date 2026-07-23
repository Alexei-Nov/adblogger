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
		<section className='section entrance-video'>
			<div className="container">
				<div className="entrance-video__wrapper">
					<div className="entrance-video__body">
						<div className="entrance-video__title" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
						<div className="entrance-video__desc text-30" dangerouslySetInnerHTML={{ __html: block_state.desc }}></div>
						<div className="entrance-video__label" dangerouslySetInnerHTML={{ __html: block_state.label }}></div>

						<div className="entrance-video__media">
							<video src={(window.innerWidth > 1024 ? block_state.media : block_state.media_mob)} autoPlay muted playsInline></video>
							<div className="entrance-video__media-gradient">
								<svg width="1611" height="1721" viewBox="0 0 1611 1721" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g filter="url(#filter0_f_230_1272)">
										<ellipse cx="805.325" cy="860.194" rx="422.594" ry="488.056" transform="rotate(-16.49 805.325 860.194)" fill="#00E8FF" />
									</g>
									<defs>
										<filter id="filter0_f_230_1272" x="-0.000274658" y="-0.00125122" width="1610.65" height="1720.39" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
											<feFlood floodOpacity="0" result="BackgroundImageFix" />
											<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
											<feGaussianBlur stdDeviation="188.485" result="effect1_foregroundBlur_230_1272" />
										</filter>
									</defs>
								</svg>
							</div>
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
