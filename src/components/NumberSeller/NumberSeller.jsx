import React, { useEffect, useRef } from 'react'
import './numberSeller.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function NumberSeller({ block_state }) {
	let wrapper = useRef();

	useEffect(() => {
		let imgArr = gsap.utils.selector(wrapper)('.number-seller__img')
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: wrapper.current,
				start: "top 30%",
				end: "bottom top",
				scrub: false,
				markers: false,
				pin: false,
			}
		});

		imgArr.forEach((img, index) => {
			tl.fromTo(img, {
				scale: 0,
			}, {
				delay: Math.random(),
				scale: 1,
			}, 0);
		})

		let number = gsap.utils.selector(wrapper)('.number-seller__number')
		tl.from(number, {
			textContent: 48000,
			duration: 1.5,
			ease: "power1.in",
			snap: { textContent: 10 },
			stagger: {
				each: 1.0,
				onUpdate: function () {
					this.targets()[0].innerHTML = (+this.targets()[0].textContent).toLocaleString();
				},
			}
		}, 0);
	})

	return (
		<>
			<section className='section number-seller' ref={wrapper}>
				<div className="container">
					<div className="number-seller__title title h2" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
					<div className="number-seller__wrapper">
						<div className="number-seller__body">
							<div className="number-seller__number">{block_state.number}</div>
							<div className="number-seller__number-after">{block_state.number_after}</div>
						</div>
						<div className="number-seller__label h2" dangerouslySetInnerHTML={{ __html: block_state.label }}></div>

						<div className="number-seller__authors">
							{block_state.img_list.map((img, i) => {
								return (
									<div key={i} className="number-seller__img">
										<img src={img.img} alt="img" />
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
