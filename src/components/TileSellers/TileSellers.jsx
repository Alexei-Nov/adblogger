import React from 'react'
import './tileSellers.css'

export default function TileSellers({ block_state }) {
	return (
		<>
			<section className='section tile-sellers'>
				<div className="container">
					<div className="tile-sellers__title title h2" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
					<div className="tile-sellers__wrapper">
						{block_state.elems_list.map((elem, i) => {
							return (
								<div key={i} className="tile-sellers__item">
									<div className="tile-sellers__img">
										<img src={elem.img} alt="img" />
									</div>
									<div className="tile-sellers__body">
										<div className="tile-sellers__item-title text-32 fw-500">{elem.title}</div>
										<div className="tile-sellers__item-desc text-21" dangerouslySetInnerHTML={{ __html: elem.desc }}></div>
										<div className="tile-sellers__item-content content text-21" dangerouslySetInnerHTML={{ __html: elem.content }}></div>
									</div>
								</div>
							)
						})}

					</div>
				</div>
			</section>
		</>
	)
}
