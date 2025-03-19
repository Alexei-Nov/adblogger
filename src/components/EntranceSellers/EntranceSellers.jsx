import React, { useEffect, useRef } from 'react'
import './entranceSellers.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function EntranceSellers({ block_state }) {
	let wrapper = useRef();

	useEffect(() => {
		let imgArr = gsap.utils.selector(wrapper)('.entrance-seller__img')
		let left_sticker = gsap.utils.selector(wrapper)('.entrance-seller__sticker_left')
		let right_sticker = gsap.utils.selector(wrapper)('.entrance-seller__sticker_right')

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: wrapper.current,
				start: "top 60px",
				end: "+=" + window.innerHeight,
				scrub: true,
				markers: false,
				pin: true,
			}
		});

		tl.to(left_sticker, {
			xPercent: 48,
			yPercent: -8,
		}, 0)
		tl.to(right_sticker, {
			xPercent: -65,
			yPercent: -20,
		}, 0)

		imgArr.forEach((img, index) => {
			img.style.zIndex = imgArr.length - index

			let top_position = 8 + 20 * Math.round(index / 2)
			let left_position = 30 + 43 * Math.round(index / 2)

			if (window.innerWidth < 570) {
				top_position = 25 + 12 * Math.round(index / 2)
				left_position = 15 + 40 * Math.round(index / 2)
			} else if (window.innerWidth < 1100) {
				top_position = 8 + 10 * Math.round(index / 2)
				left_position = 30 + 43 * Math.round(index / 2)
			}

			if (index != 0) {
				if (index % 2 == 0) {
					tl.fromTo(img, {
						xPercent: left_position,
						yPercent: top_position,
						rotateY: '9deg',
						scale: 0.93,
					}, {
						xPercent: 0,
						yPercent: 0,
						rotateY: '0',
						scale: 1,
					}, 0);

				} else {
					tl.fromTo(img, {
						xPercent: -(left_position),
						yPercent: top_position,
						rotateY: '-9deg',
						scale: 0.93,
					}, {
						xPercent: 0,
						yPercent: 0,
						rotateY: '0',
						scale: 1,
					}, 0);
				}


			}
		})

	})

	return (
		<>
			<section className='section entrance-seller' >
				<div className="container">
					<div className="entrance-seller__heading title">
						<div className="entrance-seller__title h1" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
						<a href={block_state.btn_link} className="entrance-seller__btn btn text-28 fw-500" target='_blank'>{block_state.btn_text}</a>
					</div>
					<div className="entrance-seller__wrapper" ref={wrapper}>
						{block_state.img_list.map((img, i) => {
							return (
								<div key={i} className="entrance-seller__img">
									<img src={img.img} alt="img" />
								</div>
							)
						})}

						<div className="entrance-seller__sticker entrance-seller__sticker_top">
							<img src='./img/entrance-seller/sticker-top.png' alt="img" />
						</div>
						<div className="entrance-seller__sticker entrance-seller__sticker_left">
							<img src='./img/entrance-seller/sticker-1.png' alt="img" />
						</div>
						<div className="entrance-seller__sticker entrance-seller__sticker_right">
							<img src='./img/entrance-seller/sticker-2.png' alt="img" />
						</div>


					</div>
				</div>
			</section>
		</>
	)
}
