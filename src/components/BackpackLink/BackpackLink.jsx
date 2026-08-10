import React, { useEffect, useRef } from 'react'
import './backpackLink.css'

export default function BackpackLink({ block_state }) {
	const block = useRef()
	const backpack = useRef()
	const panel = useRef()
	useEffect(() => {
		let timeout = setTimeout(() => {
			block.current.classList.add('backpack-link_hide')
		}, 2000);

		if (window.innerWidth > 570) {
			backpack.current.addEventListener('mouseenter', (e) => {
				clearTimeout(timeout)
				block.current.classList.remove('backpack-link_hide')
			})

			block.current.addEventListener('mouseleave', (e) => {
				timeout = setTimeout(() => {
					block.current.classList.add('backpack-link_hide')
				}, 5000);
			})
		} else {
			backpack.current.addEventListener('click', (e) => {
				clearTimeout(timeout)
				block.current.classList.remove('backpack-link_hide')
				timeout = setTimeout(() => {
					block.current.classList.add('backpack-link_hide')
				}, 5000);
			})
		}

	}, [])

	return (
		<div className='backpack-link' ref={block}>
			<div className="container">
				<div className="backpack-link__wrapper" >
					<div className="backpack-link__img" ref={backpack}>
						<img src="/img/backpack-link/img.png" alt="img" />
					</div>
					<a href={block_state.link} className="backpack-link__panel" target='_blank' ref={panel}>
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
