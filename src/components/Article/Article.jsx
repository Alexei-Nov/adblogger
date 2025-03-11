import React from 'react'
import './article.css'

export default function Article({ article }) {

	return (
		<>
			{article &&
				<section className='section article'>
					<div className="container">
						<div className="article__wrapper">
							<div className="article__heading">
								<div className="article__title h2" dangerouslySetInnerHTML={{ __html: article.title }}></div>
								<div className="article__brand">
									<div className="article__logo">
										<img src={article.logo} alt="img" />
									</div>
									<div className="article__brand-name text-21" dangerouslySetInnerHTML={{ __html: article.brand_name }}></div>
								</div>
								<div className="article__preview">
									<img src={article.preview_img} alt={article.brand_name} />
								</div>
							</div>

							<div className="article__content content">
								{article.blocks.map((block, i) => {
									switch (block.block_type) {
										case 'text':
											if (block.title && block.text) {
												return (
													<div key={i} className='article__block'>
														<div className='article__block-title text-32 fw-500'>{block.title}</div>
														<div className='text-21' dangerouslySetInnerHTML={{ __html: block.text }}></div>
													</div>
												)
											} else if (block.title) {
												return (
													<div key={i} className='article__block'>
														<div className='article__block-title text-32 fw-500'>{block.title}</div>
													</div>
												)
											} else if (block.text) {
												return (
													<div key={i} className='article__block'>
														<div className='text-21' dangerouslySetInnerHTML={{ __html: block.text }}></div>
													</div>
												)
											}
											break;
										case 'citation':
											if (block.autor_name || block.autor_photo_path) {
												return (
													<div key={i} className='article__block article__citation'>
														<div className='article__citation-text text-21' dangerouslySetInnerHTML={{ __html: block.text }}></div>
														<div className="article__citation-author">
															<div className="article__citation-photo">
																<img src={block.autor_photo_path} alt="author" />
															</div>
															<div className="article__citation-name" dangerouslySetInnerHTML={{ __html: block.autor_name }}></div>
														</div>
													</div>
												)
											} else {
												return (
													<div key={i} className='article__block article__citation'>
														<div className='article__citation-text text-21' dangerouslySetInnerHTML={{ __html: block.text }}></div>
													</div>
												)
											}
										case 'gallery':
											return (
												<div key={i} className={'article__block article__gallery' + (block.images.length > 1 ? ' article__gallery_grid' : '')}>
													{block.images.map((img, j) => {
														return (
															<div key={j} className="article__gallery-img">
																<img src={img} alt="img" />
															</div>
														)
													})}
												</div>
											)
										case 'tile':
											return (
												<div key={i} className='article__block article__tile'>
													{block.tile_items.map((item, j) => {
														return (
															<div key={j} className="article__tile-item" style={{ fontSize: item.desc_font_size }}>
																<div className="article__tile-name text-28 fw-600" dangerouslySetInnerHTML={{ __html: item.name }}></div>
																<div className="article__tile-desc fw-700" >{item.desc}</div>
															</div>
														)
													})}
												</div>
											)
									}
								})}
							</div>
						</div>
					</div>
				</section>
			}
		</>
	)
}
