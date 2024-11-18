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
							показать блольше
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
								<path d="M10 3C9.35567 3 8.83333 3.52233 8.83333 4.16667V8.83333H4.16667C3.56836 8.83333 3.07524 9.28371 3.00785 9.86394L3 10C3 10.6443 3.52233 11.1667 4.16667 11.1667H8.83333V15.8333C8.83333 16.4316 9.28371 16.9248 9.86394 16.9922L10 17C10.6443 17 11.1667 16.4777 11.1667 15.8333V11.1667H15.8333C16.4316 11.1667 16.9248 10.7163 16.9922 10.1361L17 10C17 9.35567 16.4777 8.83333 15.8333 8.83333H11.1667V4.16667C11.1667 3.56836 10.7163 3.07524 10.1361 3.00785L10 3Z" fill="white" />
							</svg>
						</div>
					}
				</div>
			</section>
		</>
	)
}
