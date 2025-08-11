import React, { useEffect, useRef, useState } from 'react'
import './casePreview.css'

export default function CasePreview({ block_state }) {
	const wrapper = useRef()
	const textBody = useRef()
	// const [showStatus, setShowStatus] = useState(false)

	// useEffect(() => {
	// 	if (showStatus) {
	// 		wrapper.current.classList.add('case-preview__bottom_active')
	// 		textBody.current.style.maxHeight = textBody.current.scrollHeight + 'px'
	// 	} else {
	// 		wrapper.current.classList.remove('case-preview__bottom_active')
	// 		textBody.current.style.maxHeight = 0
	// 	}
	// }, [showStatus])

	// function toggleShowStatus() {
	// 	setShowStatus(!showStatus)
	// }

	return (
		<>
			<section className='section case-preview'>
				<div className="container">
					<div className="case-preview__title title text-40 fw-600" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
					<div className="case-preview__wrapper">
						<div className="case-preview__subtitle text-32 fw-500" dangerouslySetInnerHTML={{ __html: block_state.subtitle }}></div>
						<div className="case-preview__card">
							<picture className="case-preview__img">
								<source media="(max-width: 570px)" srcSet={block_state.img_mob} />
								<img src={block_state.img} alt="img" />
							</picture>
							{/* <div className="case-preview__name text-32 fw-500">{block_state.name}</div>
							<div className="case-preview__desc" dangerouslySetInnerHTML={{ __html: block_state.desc }}></div> */}
						</div>
						<div className="case-preview__bottom" ref={wrapper}>
							<div className="case-preview__bottom-body" ref={textBody}>
								<div className="case-preview__list">
									{block_state.number_list.map((item, i) => {
										return (
											<div key={i} className="case-preview__list-item">
												<div className="case-preview__list-icon">
													<img src={item.icon} alt="img" />
												</div>
												<div className="case-preview__list-num">{item.number}</div>
												<div className="case-preview__list-label" >{item.label}</div>
											</div>
										)
									})}
								</div>
								<div className="case-preview__text" dangerouslySetInnerHTML={{ __html: block_state.text }}></div>
								<a href={block_state.btn_link} className="case-preview__btn btn btn_wide btn_border btn_rounded text-20 fw-500">{block_state.btn_text}</a>
							</div>
							{/* <div className="case-preview__bottom-btn"
								onClick={toggleShowStatus}>
								<svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
									<path d="M20 21.922L28.409 13.513C29.2877 12.6343 30.7123 12.6343 31.591 13.513C32.4697 14.3917 32.4697 15.8163 31.591 16.695L21.591 26.695C20.7123 27.5737 19.2877 27.5737 18.409 26.695L8.40901 16.695C7.53033 15.8163 7.53033 14.3917 8.40901 13.513C9.28769 12.6343 10.7123 12.6343 11.591 13.513L20 21.922Z" fill="black" />
								</svg>
							</div> */}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
