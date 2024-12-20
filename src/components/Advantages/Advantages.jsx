import React, { useEffect, useRef } from 'react'
import './advantages.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Advantages({ block_state }) {

	let wrapper = useRef()
	useEffect(() => {
		if (window.innerWidth > 1200 && wrapper.current) {
			// let tlCards = gsap.timeline({
			// 	scrollTrigger: {
			// 		trigger: wrapper.current,
			// 		start: "top 70%",
			// 		end: "+=" + window.innerHeight,
			// 		scrub: true,
			// 		markers: false,
			// 		pin: false,
			// 	}
			// });
			let tlCounter = gsap.timeline({
				scrollTrigger: {
					trigger: wrapper.current,
					start: "top 70%",
					end: "+=" + window.innerHeight / 3,
					scrub: false,
					markers: false,
					pin: false,
				}
			});

			// tlCards.to(gsap.utils.selector(wrapper)('.advantages__item'), {
			// 	y: 0,
			// 	ease: "elastic.out(0.8,0.4)",
			// });

			tlCounter.to(gsap.utils.selector(wrapper)('.advantages__num-prev'), {
				y: 0,
			}, 0).to(gsap.utils.selector(wrapper)('.advantages__num-current'), {
				y: 0,
			}, 0)
		}
	})


	return (
		<>
			<section className='section advantages' ref={wrapper}>
				<div className="container">
					{(block_state.titleWhite || block_state.titleBlue) &&
						<div className="advantages__title title h2">
							{block_state.titleWhite} <br />
							{block_state.titleBlue &&
								<span className='blue-text' dangerouslySetInnerHTML={{ __html: block_state.titleBlue }} ></span>
							}
						</div>
					}
					<div className="advantages__wrapper" >
						{block_state.items.map((item, i) => {
							return (
								<div key={i} className="advantages__item" >
									<div className="advantages__num ">
										<div className="advantages__num-count h2" >
											<div className="advantages__num-prev">{item.numPrev}</div>
											<div className="advantages__num-current">{item.numCurrent}</div>
											{item.numAfter &&
												item.numAfter
											}
										</div>
										{item.numLabel &&
											<div className='advantages__num-label h3'>{item.numLabel}</div>
										}
									</div>
									<div className="advantages__desc text-21" dangerouslySetInnerHTML={{ __html: item.desc }}></div>
								</div>
							)
						})}
					</div>
				</div>
			</section>
		</>
	)
}
