import React, { useEffect, useState } from 'react'
import './casesCatalog.css'
import { Link } from 'react-router-dom'

export default function CasesCatalog({ posts }) {
	// posts.shift()

	const tagsArr = ['Авторам', 'Бизнесу']
	const [caseTag, setCaseTag] = useState('Авторам')
	const [currentPage, setCurrentPage] = useState(1)

	const cardsOnPage = 8;
	let currentTagCardsArr = posts.filter((card) => card.tags.some(tag => tag.title == caseTag))

	let resultCardsArr = currentTagCardsArr.slice(0, cardsOnPage * currentPage)
	let remainderCardsArr = currentTagCardsArr.slice(cardsOnPage * currentPage)

	function setFilter(tag) {
		setCaseTag(tag)
		setCurrentPage(1)
	}


	return (
		<>
			<section className='section cases-catalog'>
				<div className="container">
					<div className="cases-catalog__wrapper">
						{resultCardsArr.map((card, i) => {
							return (
								<Link to={'/top-cases/' + card.slug} className="cases-catalog__card" key={i}>
									<div className="cases-catalog__img">
										<img src={card.preview_img_small} alt="img" />
										<div className="cases-catalog__img-text text-21">
											читать кейс
										</div>
									</div>
									<div className="cases-catalog__name text-21" dangerouslySetInnerHTML={{ __html: card.title }}></div>
									<div className="cases-catalog__label">
										{card.card_label}
									</div>
								</Link>
							)
						})}
					</div>
					{remainderCardsArr.length > 0 &&

						<div className="cases-catalog__load-more text-20 fw-500 btn btn_rounded btn_transparent" onClick={() => { setCurrentPage(currentPage + 1) }}>
							показать больше
							<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="12" cy="12.6719" r="12" fill="#202020" />
								<rect x="6" y="12.0713" width="12" height="1.2" fill="#7C8A9A" />
								<rect x="11.3984" y="18.6709" width="12" height="1.2" transform="rotate(-90 11.3984 18.6709)" fill="#7C8A9A" />
							</svg>
						</div>
					}
				</div>
			</section>
		</>
	)
}
