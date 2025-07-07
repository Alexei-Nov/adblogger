import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { handleTracking } from 'utils/tracking'

import './money.css'

export default function Money({ block_state }) {
	const btnState = useSelector(state => state.toolkit.registrationBtn)

	let imgWrapper = useRef()

	useEffect(() => {
		if (window.innerWidth > 1024 && window.location.pathname != '/tovary') {
			window.addEventListener('mousemove', function (e) {
				let x = e.clientX / window.innerWidth - 0.5;
				let y = e.clientY / window.innerHeight - 0.5;

				if (imgWrapper.current) {
					imgWrapper.current.querySelectorAll('.money__img img').forEach((img, index) => {
						img.style.transform = 'translate(calc(-50% + ' + x * 30 * (index + 1) + 'px), calc(-50% + ' + y * 30 * (index + 1) + 'px))';
					});
				}
			});
		}
	})


	return (
		<>
			<section className={'section money ' + (block_state.has_border == 'false' ? 'money_without-border' : '')}>
				<div className="container">
					<div className="money__wrapper" >
						<h2 className="money__title title h2" dangerouslySetInnerHTML={{ __html: block_state.title }}></h2>
						<a
							href={btnState.link}
							className={"money__btn btn btn_border " + (window.location.pathname == '/tovary' ? 'btn_rounded' : '')}
							onClick={() => {
								handleTracking('registration_other')
								handleTracking('registration_all')
							}}
						>
							{btnState.text}
						</a>

						<div className="money__img" ref={imgWrapper}>
							<picture>
								<source media="(max-width: 570px)" srcSet="/img/money/img-1_mob.png" sizes="img" />
								<source media="(max-width: 1024px)" srcSet="/img/money/img-1_tablet.png" sizes="img" />
								<img src="/img/money/img-1.png" alt="img" />
							</picture>
							<img src="/img/money/img-2.png" alt="img" />
							<img src="/img/money/img-3.png" alt="img" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
