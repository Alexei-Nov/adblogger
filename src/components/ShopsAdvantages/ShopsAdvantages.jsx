import React from 'react'
import './shopsAdvantages.css'

export default function ShopsAdvantages({ block_state }) {
	return (
		<>
			<section className='section shops-advantages'>
				<div className="container">
					<div className="shops-advantages__wrapper">
						{block_state.items_list.map((item, index) => {
							return (
								<div className="shops-advantages__item" key={index}>
									<div className="shops-advantages__item-name text-28 fw-500" dangerouslySetInnerHTML={{ __html: item.name }}></div>
									<div className="shops-advantages__item-icon">
										<img src={item.icon} alt="img" />
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
