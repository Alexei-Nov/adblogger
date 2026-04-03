import React, { useEffect, useRef } from 'react'
import './entranceEvent.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { handleTracking } from 'utils/tracking'

export default function EntranceEvent({ block_state }) {
	let wrapper = useRef();

	useEffect(() => {
		let itemsArr = gsap.utils.selector(wrapper)('.entrance-event__title-animated-item')

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: wrapper.current,
				start: "top bottom",
				end: "top top",
				scrub: false,
				markers: false,
				pin: false,
			},
			repeat: -1,
			repeatDelay: 2,
		});


		tl.fromTo(itemsArr[0], {
			opacity: 1,
			duration: 0.3,
			delay: 1,
		}, {
			opacity: 0,
			duration: 0.3,
			delay: 1,
		}, 0);
		tl.fromTo(itemsArr[1], {
			opacity: 0,
			xPercent: 50,
			delay: 1,
		}, {
			opacity: 1,
			xPercent: 0,
			delay: 1,
		}, 0);

		tl.set(itemsArr[0], {
			xPercent: 50,
			delay: 1.5,
			duration: 0,
		}, 1);

		tl.to(itemsArr[1], {
			opacity: 0,
			duration: 0.3,
			delay: 2,
		}, 2);
		tl.to(itemsArr[0], {
			opacity: 1,
			xPercent: 0,
			delay: 3,
		}, 2);
	})

	return (
		<section className='section entrance-event' ref={wrapper}>
			<div className="container">
				<div className="entrance-event__wrapper">
					<div className="entrance-event__body">
						<div className="entrance-event__title">
							<div className="entrance-event__title-main" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
							<div className="entrance-event__title-animated">
								<div className="entrance-event__title-animated-item">
									<div className="entrance-event__title-animated-text">
										публикациях <br />
										с&nbsp;товарами
									</div>
								</div>
								<div className="entrance-event__title-animated-item">
									<div className="entrance-event__title-animated-text">
										шопсах

										<svg width="337" height="24" viewBox="0 0 337 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M0.275135 21.6066C95.5981 8.38952 263.842 3.02829 336.048 1.9998" stroke="#00D3E6" strokeWidth="4" />
										</svg>
									</div>
									<div className="entrance-event__title-animated-label text-20 fw-500">
										новый формат контента с товарами ВКонтакте, который приносит деньги
									</div>
								</div>
							</div>
						</div>

						{/* <div className="entrance-event__media">
							<video src={block_state.media} autoPlay muted playsInline loop></video>
						</div> */}

						<picture className="entrance-event__media">
							<source media="(max-width: 1024px)" srcSet={block_state.media_mob} />
							<img src={block_state.media} alt="img" />
						</picture>

						<div className="entrance-event__desc text-30 fw-500" dangerouslySetInnerHTML={{ __html: block_state.desc }}></div>
						<div className="entrance-event__bottom">
							<a href={block_state.btn_link}
								className="entrance-event__btn btn btn_big btn_rounded btn_border text-26 fw-500"
								onClick={() => handleTracking('launch_advertising_black_friday_*')}
							>{block_state.btn_text}</a>
							{/* <div className="entrance-event__label text-17" dangerouslySetInnerHTML={{ __html: block_state.label }}></div> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
