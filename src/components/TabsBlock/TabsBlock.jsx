import React, { useEffect, useState } from 'react'
import './tabsBlock.css'

export default function TabsBlock({ block_state }) {
	const [activeTab, setActiveTab] = useState(0)

	return (
		<>
			<section className='section tabs-block'>
				<div className="container">
					{/* <div className="tabs-block__title title h1" dangerouslySetInnerHTML={{ __html: block_state.title }}></div> */}
					<div className="tabs-block__wrapper">
						<div className="tabs-block__body">
							{block_state.tabs.map((item, i) => {
								return (
									<div key={i} className={"tabs-block__body-item " + (activeTab == i ? 'tabs-block__body-item_active' : '')}>
										<div className="tabs-block__body-left">
											<div className="tabs-block__body-title text-40 fw-500" dangerouslySetInnerHTML={{ __html: item.title }}></div>
											<div className="tabs-block__body-desc content" dangerouslySetInnerHTML={{ __html: item.desc }}></div>
											<a href={item.btn_link} className="tabs-block__body-btn btn  btn_wide text-20 fw-500">{item.btn_text}</a>
										</div>
										<picture className="tabs-block__body-img">
											{item.img_mob &&
												<source media="(max-width: 1024px)" srcSet={item.img_mob} />
											}
											<img src={item.img} alt="img" />
										</picture>
									</div>)
							})}

						</div>
						<div className="tabs-block__heading">
							{block_state.tabs.map((item, i) => {
								return (
									<div
										key={i}
										className={"tabs-block__heading-btn " + (activeTab == i ? 'tabs-block__heading-btn_active' : '')}
										onClick={() => setActiveTab(i)}
									>
										<div className='tabs-block__heading-btn-panel'></div>
										{item.tab_name}
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
