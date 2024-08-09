import React from 'react'
import './caseCardMain.css'

export default function CaseCardMain() {
	return (
		<section className='section case-card-main'>
			<div className="container">
				<div className="case-card-main__title page-title">топ-кейсы</div>
				<div className="case-card-main__wrapper">
					<div className="case-card-main__logo">
						<picture>
							<source media="(max-width: 570px)" srcSet="/img/caseCardMain/logo_mob.svg" sizes="img" />
							<img src="/img/caseCardMain/logo.svg" alt="img" />
						</picture>
					</div>
					<div className="case-card-main__text text-32 fw-500">
						Кинопоиск: как сделать CPA дешевле в&nbsp;два раза и&nbsp;причём здесь лимитированные промокоды
					</div>
					<div className="case-card-main__img">
						<img src="/img/caseCardMain/img.png" alt="img" />
					</div>
				</div>
			</div>
		</section>
	)
}
