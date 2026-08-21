import React from 'react'
import './article.css'
import Contents from 'components/Contents/Contents'

export default function Article({ article }) {

	return (
		<>
			{article &&
				<section
					className='article'
					itemScope
					itemType="https://schema.org/Article"
				>
					{article.date_published &&
						<meta itemProp="datePublished" content={article.date_published} />
					}
					{
						article.date_modified &&
						<meta itemProp="dateModified" content={article.date_modified} />
					}
					<div className="container">
						<div className="article__wrapper">
							<div className="article__heading">
								<h1 className="article__title h2" itemProp="headline" dangerouslySetInnerHTML={{ __html: article.title }}></h1>
								{article.desc &&
									<meta itemProp="description" content={article.desc} />
								}
								{article.logo &&
									<div className="article__brand">
										<div className="article__logo">
											<img src={article.logo} alt="img" />
										</div>
										<div className="article__brand-name text-21" dangerouslySetInnerHTML={{ __html: article.brand_name }}></div>
									</div>
								}
								<picture className="article__preview" itemProp="image">
									{article.preview_img_mob &&
										<source media="(max-width: 570px)" srcSet={article.preview_img_mob} />
									}
									<img src={article.preview_img} alt={article.brand_name} />
								</picture>
							</div>

							{article.contents_nav &&
								<Contents className={'article__contents'} data={article.contents_nav} />
							}

							<div className="article__content content" itemProp="articleBody">
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
														{block.title &&
															<div className='article__citation-title text-32' dangerouslySetInnerHTML={{ __html: block.title }}></div>
														}
														<div className='article__citation-text text-21' dangerouslySetInnerHTML={{ __html: block.text }}></div>
														<div
															className="article__citation-author"
															itemProp="author"
															itemScope
															itemType="https://schema.org/Person"
														>
															<div className="article__citation-photo">
																<img src={block.autor_photo_path} alt="author" />
															</div>
															<div className="article__citation-name" itemProp="name" dangerouslySetInnerHTML={{ __html: block.autor_name }}></div>
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
										case 'img':
											return (
												<div key={i} className={'article__block article__gallery'}>
													<picture className="article__gallery-img">
														{block.img_mob &&
															<source media="(max-width: 570px)" srcSet={block.img_mob} />
														}
														<img src={block.img_desktop} alt="img" />
													</picture>
												</div>
											)
										case 'tile':
											return (
												<div key={i} className='article__block article__tile'>
													{block.tile_items.map((item, j) => {
														return (
															<div key={j} className={"article__tile-item " + (j % 2 == 0 && j == block.tile_items.length - 1 ? 'article__tile-item_wide' : '')} style={{ fontSize: item.desc_font_size }}>
																<div className="article__tile-name text-28 fw-600" dangerouslySetInnerHTML={{ __html: item.name }}></div>
																<div className="article__tile-desc fw-700" >{item.desc}</div>
															</div>
														)
													})}
												</div>
											)
										case 'clips':
											return (
												<div key={i} className='article__block article__clips'>
													{block.videos.map((item, j) => {
														return (
															<div key={j} className={"article__clips-item "}>
																<div className="article__clips-video">
																	<video src={item} controls></video>
																</div>
															</div>
														)
													})}
												</div>
											)
									}
								})}
							</div>

							<div style={{ display: 'none' }}>
								<div itemProp="publisher" itemScope itemType="https://schema.org/Organization" >
									<meta itemProp="name" content="ООО «ВК»" />
									<link itemProp="url" href="https://adblogger.vk.ru" />
								</div>
								<link itemProp="mainEntityOfPage" href={window.location.href} />
							</div>
						</div>
					</div>
				</section>
			}
		</>
	)
}