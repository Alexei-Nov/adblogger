import React, { useEffect, useRef } from 'react'
import './advantages.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Advantages({ advantagesState }) {

	let wrapper = useRef()
	useEffect(() => {
		if (window.innerWidth > 1200 && wrapper.current) {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: wrapper.current,
					start: "top center",
					end: "bottom 80%",
					scrub: false,
					markers: false,
					pin: false,
					onEnter: () => {
						if (wrapper.current) {
							wrapper.current.classList.add('advantages_active')
						}
					}
				}
			});

			tl.to(gsap.utils.selector(wrapper)('.advantages__item'), {
				y: 0,
				duration: 1.5,
				ease: "elastic.out(0.8,0.4)",
			});
		}
	})


	return (
		<section className='section advantages' ref={wrapper}>
			<div className="container">
				<div className="advantages__title title h2">
					{advantagesState.titleWhite} <br />
					{advantagesState.titleBlue &&
						<span className='blue-text' dangerouslySetInnerHTML={{ __html: advantagesState.titleBlue }} ></span>
					}
				</div>
				<div className="advantages__wrapper" >
					{advantagesState.items.map((item, i) => {
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
	)
}
