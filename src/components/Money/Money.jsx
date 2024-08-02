import React, { useEffect, useRef } from 'react'
import './money.css'

export default function Money() {

	let imgWrapper = useRef()

	useEffect(() => {
		if (window.innerWidth > 1024) {
			window.addEventListener('mousemove', function (e) {
				let x = e.clientX / window.innerWidth - 0.5;
				let y = e.clientY / window.innerHeight - 0.5;

				imgWrapper.current.querySelectorAll('.money__img img').forEach((img, index) => {
					img.style.transform = 'translate(calc(-50% + ' + x * 30 * (index + 1) + 'px), calc(-50% + ' + y * 30 * (index + 1) + 'px))';
				});
			});
		}
	})


	return (
		<section className='section money'>
			<div className="container">
				<div className="money__wrapper" >
					<div className="money__title title h2">Зарабатывайте на&nbsp;своём контенте</div>
					<a href='/' className="money__btn btn btn_border">Подключить сообщество</a>

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
	)
}
