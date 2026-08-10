import React, { useEffect, useRef } from 'react'
import './backpackLink.css'

export default function BackpackLink({ block_state }) {
	const block = useRef()
	const backpack = useRef()
	const panel = useRef()


	useEffect(() => {
		let timeout = setTimeout(() => {
			block.current.classList.add('backpack-link_hide')
			block.current.classList.remove('backpack-link_static')
		}, 2000);

		if (window.innerWidth > 570) {
			backpack.current.addEventListener('mouseenter', (e) => {
				clearTimeout(timeout)
				block.current.classList.remove('backpack-link_hide')
			})

			block.current.addEventListener('mouseleave', (e) => {
				timeout = setTimeout(() => {
					block.current.classList.add('backpack-link_hide')
				}, 2000);
			})
		} else {
			backpack.current.addEventListener('click', (e) => {
				clearTimeout(timeout)
				block.current.classList.remove('backpack-link_hide')
				// timeout = setTimeout(() => {
				// 	block.current.classList.add('backpack-link_hide')
				// }, 2000);
			})
		}

	}, [])

	return (
		<div className='backpack-link backpack-link_static' ref={block}>
			<div className="container">
				<div className="backpack-link__wrapper" >
					<div className="backpack-link__img" ref={backpack}>
						<img src="/img/backpack-link/img.png" alt="img" />
					</div>
					<a href={block_state.link} className="backpack-link__panel" target='_blank' ref={panel}>
						<div className="backpack-link__panel-blur">
							<svg width="0" height="0" preserveAspectRatio="none">
								<defs>
									<clipPath id="glassClip" clipPathUnits="userSpaceOnUse">
										<path
											d="M308 30C308 13.4315 294.569 0 278 0H30C13.4315 0 0 13.4315 0 30V72C0 88.5685 13.4315 102 30 102H278H330C346.016 102 359 89.0163 359 73C359 56.9837 346.016 44 330 44H314C310.686 44 308 41.3137 308 38V30Z"
										/>
									</clipPath>
								</defs>
							</svg>
						</div>
						<div className="backpack-link__panel-bg">
							<svg width="359" height="102" viewBox="0 0 359 102" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
								<path d="M308 30C308 13.4315 294.569 0 278 0H30C13.4315 0 0 13.4315 0 30V72C0 88.5685 13.4315 102 30 102H278H330C346.016 102 359 89.0163 359 73C359 56.9837 346.016 44 330 44H314C310.686 44 308 41.3137 308 38V30Z" fill="black" fillOpacity="0.54" />
								<path d="M30 0.5H278C294.292 0.5 307.5 13.7076 307.5 30V38C307.5 41.5899 310.41 44.5 314 44.5H330C345.74 44.5 358.5 57.2599 358.5 73C358.5 88.7401 345.74 101.5 330 101.5H30C13.7076 101.5 0.5 88.2924 0.5 72V30C0.5 13.7076 13.7076 0.5 30 0.5Z" stroke="url(#paint0_linear_10603_3937)" strokeOpacity="0.7" />
								<defs>
									<linearGradient id="paint0_linear_10603_3937" x1="26.5" y1="-1.58533e-06" x2="359" y2="98.5" gradientUnits="userSpaceOnUse">
										<stop stopColor="white" />
										<stop offset="1" stopColor="#00E4E6" />
									</linearGradient>
								</defs>
							</svg>
						</div>
						<div className="backpack-link__title" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
						<div className="backpack-link__currency">
							<div className="backpack-link__currency-text">₽</div>
							<svg width="77" height="71" viewBox="0 0 77 71" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M72.3221 13.035C54.3232 -2.96526 17.7997 -3.00592 4.7994 22.4939C-9.47568 50.4943 34.2998 80.2208 63.3228 64.0348C80.7988 54.2884 74.7989 31.4942 63.3228 20.9942" stroke="#00D3E6" strokeWidth="4" />
							</svg>
						</div>
						<div className="backpack-link__arrow">
							<svg width="35" height="37" viewBox="0 0 35 37" fill="none" xmlns="http://www.w3.org/2000/svg">
								<line x1="2.01491" y1="18.1218" x2="31.2311" y2="18.1218" stroke="#00D3E6" strokeWidth="4.02982" strokeLinecap="round" />
								<line x1="16.1152" y1="33.4122" x2="31.3999" y2="18.1275" stroke="#00D3E6" strokeWidth="4.02982" strokeLinecap="round" />
								<line x1="2.01491" y1="-2.01491" x2="23.6307" y2="-2.01491" transform="matrix(0.707107 0.707107 0.707107 -0.707107 16.1152 0)" stroke="#00D3E6" strokeWidth="4.02982" strokeLinecap="round" />
							</svg>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}
