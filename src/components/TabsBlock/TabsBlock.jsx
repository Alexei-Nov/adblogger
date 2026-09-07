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
						<div className="tabs-block__navigation">
							<div className="tabs-block__navigation-btn tabs-block__prev" onClick={() => activeTab > 0 ? setActiveTab(activeTab - 1) : ''}>
								<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="19" cy="19" r="18.1364" transform="matrix(-1 0 0 1 38 0)" fill="white" stroke="black" strokeWidth="1.72727" />
									<path d="M20.4819 11.3264C20.8971 10.8853 21.5916 10.8635 22.0327 11.2786C22.4738 11.6937 22.4946 12.3882 22.0796 12.8293L16.3003 18.97L16.2729 18.9993L16.3003 19.0286L22.0796 25.1692C22.4944 25.6102 22.4735 26.3039 22.0327 26.719C21.5916 27.1342 20.8971 27.1132 20.4819 26.6721L13.9673 19.7512C13.5699 19.3289 13.57 18.6696 13.9673 18.2473L20.4819 11.3264Z" fill="black" stroke="white" strokeWidth="0.0863636" />
								</svg>
							</div>
							<div className="tabs-block__navigation-btn tabs-block__next" onClick={() => activeTab < block_state.tabs.length - 1 ? setActiveTab(activeTab + 1) : ''}>
								<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="19" cy="19" r="18.1364" fill="white" stroke="black" strokeWidth="1.72727" />
									<path d="M17.8452 26.6736C17.4301 27.1147 16.7356 27.1365 16.2944 26.7214C15.8534 26.3063 15.8325 25.6118 16.2476 25.1707L22.0269 19.03L22.0542 19.0007L22.0269 18.9714L16.2476 12.8308C15.8327 12.3898 15.8537 11.6961 16.2944 11.281C16.7355 10.8658 17.4301 10.8868 17.8452 11.3279L24.3599 18.2488C24.7572 18.6711 24.7572 19.3304 24.3599 19.7527L17.8452 26.6736Z" fill="black" stroke="white" strokeWidth="0.0863636" />
								</svg>
							</div>
						</div>
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
												<source media="(maxWidth: 1024px)" srcSet={item.img_mob} />
											}
											<img src={item.img} alt="img" />
										</picture>
									</div>
								)
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
