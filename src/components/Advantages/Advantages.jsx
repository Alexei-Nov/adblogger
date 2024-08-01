import React, { useEffect, useRef } from 'react'
import './advantages.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Advantages() {

	let wrapper = useRef()
	useEffect(() => {
		if (window.innerWidth > 1200) {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: wrapper.current,
					start: "top center",
					end: "bottom 80%",
					scrub: false,
					markers: false,
					pin: false,
					onEnter: () => wrapper.current.classList.add('advantages_active')
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
					монетизируйте сообщество <br />
					<span className='blue-text'>от&nbsp;1&nbsp;000 подписчиков</span>
				</div>
				<div className="advantages__wrapper" >
					<div className="advantages__item" style={{ transform: 'translateY(-16px)' }}>
						<div className="advantages__num ">
							<div className="advantages__num-count h2" data-num="7"></div>
							<div className='advantages__num-label h3'>тыс.</div>
						</div>
						<div className="advantages__desc text-21">
							блогеров и сообществ уже с нами
						</div>
					</div>
					<div className="advantages__item" style={{ transform: 'translateY(152px)' }}>
						<div className="advantages__num">
							<div className="advantages__num-count h2" data-num="100+"></div>
						</div>
						<div className="advantages__desc text-21">
							рекламодателей
							на платформе
						</div>
					</div>
					<div className="advantages__item" style={{ transform: 'translateY(44px)' }}>
						<div className="advantages__num">
							<div className="advantages__num-count h2" data-num="300+"></div>
						</div>
						<div className="advantages__desc text-21">
							активных заявок
							от рекламодателей
						</div>
					</div>
					<div className="advantages__item" style={{ transform: 'translateY(152px)' }}>
						<div className="advantages__num ">
							<div className="advantages__num-count h2" data-num="5,5"></div>
							<div className='advantages__num-label h3'>млрд ₽</div>
						</div>
						<div className="advantages__desc text-21">
							<a href="/">заработали</a> авторы ВКонтакте в 2024 году
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
