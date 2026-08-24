
import React, { useRef, useState } from 'react'
import './blogArticle.css'
import Contents from 'components/Contents/Contents'

export default function BlogArticle({ article }) {
	const articleBlock = useRef()
	const datePublished = article && article.date_published && new Date(article.date_published);

	function getMinutesLabel(minutes) {
		if (minutes % 10 === 1 && minutes % 100 !== 11) {
			return 'минута';
		}

		if (
			[2, 3, 4].includes(minutes % 10) &&
			![12, 13, 14].includes(minutes % 100)
		) {
			return 'минуты';
		}

		return 'минут';
	}

	return (
		<>
			{article &&
				<section className='section blog-article' ref={articleBlock}>
					<div className="container">
						<div className="blog-article__wrapper">
							<div className="blog-article__heading">
								<h1 className="blog-article__title text-40 fw-600" dangerouslySetInnerHTML={{ __html: article.title }}></h1>
								<div className="blog-article__preview-wrapper">
									<div className="blog-article__preview-top text-18">
										<div className="blog-article__preview-tag blog-article__preview-date">
											<svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" clipRule="evenodd" d="M7.99998 1.5C8.49703 1.5 8.89998 1.90294 8.89998 2.4V3.00043C9.07971 3 9.26681 3 9.4616 3H14.5384C14.7332 3 14.9203 3 15.1 3.00043V2.4C15.1 1.90294 15.5029 1.5 16 1.5C16.497 1.5 16.9 1.90294 16.9 2.4V3.05299C17.5278 3.10616 18.0828 3.21729 18.5976 3.47957C19.4255 3.90141 20.0986 4.57453 20.5204 5.40244C20.7866 5.92481 20.8971 6.48863 20.9493 7.12792C21 7.74834 21 8.51409 21 9.46159V14.5384C21 15.4859 21 16.2517 20.9493 16.8721C20.8971 17.5114 20.7866 18.0752 20.5204 18.5976C20.0986 19.4255 19.4255 20.0986 18.5976 20.5204C18.0752 20.7866 17.5114 20.8971 16.8721 20.9493C16.2517 21 15.4859 21 14.5384 21H9.46159C8.51409 21 7.74834 21 7.12792 20.9493C6.48863 20.8971 5.92481 20.7866 5.40244 20.5204C4.57453 20.0986 3.90142 19.4255 3.47957 18.5976C3.21341 18.0752 3.10291 17.5114 3.05067 16.8721C2.99998 16.2517 2.99999 15.4859 3 14.5384V9.46159C2.99999 8.51409 2.99998 7.74834 3.05067 7.12792C3.10291 6.48863 3.21341 5.92481 3.47957 5.40244C3.90142 4.57453 4.57453 3.90141 5.40244 3.47957C5.91719 3.2173 6.47218 3.10616 7.09998 3.053V2.4C7.09998 1.90294 7.50292 1.5 7.99998 1.5ZM7.09998 4.86117C6.6779 4.90689 6.41974 4.98142 6.21963 5.08338C5.7304 5.33265 5.33265 5.7304 5.08338 6.21962C4.96807 6.44595 4.88783 6.74652 4.8447 7.2745C4.80848 7.7178 4.8016 8.26521 4.8003 9H19.1997C19.1984 8.26521 19.1915 7.7178 19.1553 7.2745C19.1122 6.74652 19.0319 6.44595 18.9166 6.21962C18.6673 5.7304 18.2696 5.33265 17.7804 5.08338C17.5803 4.98142 17.3221 4.90688 16.9 4.86117V5.6C16.9 6.09706 16.497 6.5 16 6.5C15.5029 6.5 15.1 6.09706 15.1 5.6V4.80052C14.9129 4.80003 14.7134 4.8 14.5 4.8H9.5C9.28655 4.8 9.08703 4.80003 8.89998 4.80052V5.6C8.89998 6.09706 8.49703 6.5 7.99998 6.5C7.50292 6.5 7.09998 6.09706 7.09998 5.6V4.86117ZM19.2 10.8H4.8V14.5C4.8 15.4949 4.8007 16.187 4.8447 16.7255C4.88783 17.2535 4.96807 17.5541 5.08338 17.7804C5.33265 18.2696 5.7304 18.6673 6.21963 18.9166C6.44595 19.0319 6.74652 19.1122 7.2745 19.1553C7.81298 19.1993 8.50506 19.2 9.5 19.2H14.5C15.4949 19.2 16.187 19.1993 16.7255 19.1553C17.2535 19.1122 17.5541 19.0319 17.7804 18.9166C18.2696 18.6673 18.6673 18.2696 18.9166 17.7804C19.0319 17.5541 19.1122 17.2535 19.1553 16.7255C19.1993 16.187 19.2 15.4949 19.2 14.5V10.8Z" fill="#909090" />
											</svg>
											{datePublished.toLocaleDateString()}
										</div>
										<div className="blog-article__preview-tag blog-article__preview-time">
											<svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M12.3996 7.99998C12.3996 7.50292 11.9967 7.09998 11.4996 7.09998C11.0026 7.09998 10.5996 7.50292 10.5996 7.99998V12.5C10.5996 12.8751 10.8323 13.2109 11.1836 13.3427L15.1836 14.8427C15.649 15.0172 16.1678 14.7814 16.3423 14.316C16.5168 13.8506 16.281 13.3318 15.8156 13.1573L12.3996 11.8763V7.99998Z" fill="#909090" />
												<path fillRule="evenodd" clipRule="evenodd" d="M11.9996 2.09998C6.53199 2.09998 2.09961 6.53236 2.09961 12C2.09961 17.4676 6.53199 21.9 11.9996 21.9C17.4672 21.9 21.8996 17.4676 21.8996 12C21.8996 6.53236 17.4672 2.09998 11.9996 2.09998ZM3.89961 12C3.89961 7.52647 7.5261 3.89998 11.9996 3.89998C16.4731 3.89998 20.0996 7.52647 20.0996 12C20.0996 16.4735 16.4731 20.1 11.9996 20.1C7.5261 20.1 3.89961 16.4735 3.89961 12Z" fill="#909090" />
											</svg>
											Читать {article.reading_time_minutes} {getMinutesLabel(article.reading_time_minutes)}
										</div>
									</div>
									<picture className="blog-article__preview">
										{article.preview_img_mob &&
											<source media="(max-width: 570px)" srcSet={article.preview_img_mob} />
										}
										<img src={article.preview_img} alt={article.brand_name} />
									</picture>
								</div>
							</div>
							<div className="blog-article__body">
								<div className="blog-article__content ">
									{article.blocks && article.blocks.map((block, i) => {
										switch (block.block_type) {
											case 'text-with-border':
												return (
													<div key={i} id={block.id} className='blog-article__block blog-article__block_with-border content' >
														<div className='text-18' dangerouslySetInnerHTML={{ __html: block.text }}></div>
													</div>
												)
											case 'text':
												return (
													<div key={i} id={block.id} className='blog-article__block content' >
														<div className='text-18' dangerouslySetInnerHTML={{ __html: block.text }}></div>
													</div>
												)
											case 'example':
												return (
													<div key={i} id={block.id} className='blog-article__block blog-article__block-example text-18 content' >
														<div className="blog-article__block-example-title">{block.title}</div>
														<div className="blog-article__block-example-desc" dangerouslySetInnerHTML={{ __html: block.text }}></div>
													</div>
												)
											case 'pinned-text':
												return (
													<div key={i} id={block.id} className='blog-article__block blog-article__block-pinned text-18 content' >
														<div className="blog-article__block-pinned-title">
															<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M14.7033 3.19502C14.9766 2.92165 15.4199 2.92165 15.6932 3.19502L20.8033 8.30507C20.9345 8.43634 21.0083 8.61439 21.0083 8.80004C21.0083 9.18664 20.6949 9.50004 20.3083 9.50004H18.4982L15.4982 12.5V18.7618C15.4982 18.9528 15.4224 19.1359 15.2874 19.2709C15.0062 19.5521 14.5503 19.5521 14.2691 19.2709L10.382 15.383L5.63388 20.1324C5.14573 20.6206 4.35427 20.6206 3.86612 20.1324C3.37796 19.6443 3.37796 18.8528 3.86612 18.3647L8.614 13.615L4.72736 9.72916C4.61934 9.62114 4.54919 9.48233 4.52545 9.33335L4.51648 9.22004C4.51648 8.8224 4.83883 8.50004 5.23648 8.50004H11.4982L14.4982 5.50004V3.68999C14.4982 3.50434 14.572 3.32629 14.7033 3.19502Z" fill="#00D3E6" />
															</svg>

															{block.title}
														</div>
														<div className="blog-article__block-pinned-desc" dangerouslySetInnerHTML={{ __html: block.text }}></div>
													</div>
												)
											case 'button':
												return (
													<div key={i} id={block.id} className='blog-article__block ' >
														<a href={block.link} className="btn btn_rounded btn_border">{block.text}</a>
													</div>
												)
											case 'important':
												return (
													<div key={i} id={block.id} className='blog-article__block blog-article__block-important text-18 content' >
														<div className="blog-article__block-important-title">
															<svg width="135" height="50" viewBox="0 0 136 50" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M77.18 2.11237C12.3355 -4.56602 -49.044 45.5208 65.7951 48.3828C176.143 51.1329 135.59 4.49719 57.8753 10.6983" stroke="#00D3E6" strokeWidth="3" />
															</svg>

															{block.title}
														</div>
														<div className="blog-article__block-important-desc" dangerouslySetInnerHTML={{ __html: block.text }}></div>
													</div>
												)
											case 'special-list':
												return (
													<div key={i} id={block.id} className={'blog-article__block blog-article__block-special-list text-18' + (block.icon_size == 'big' ? ' blog-article__block-special-list_big' : '')} >
														{block.title &&
															<div className="blog-article__block-special-list-title" dangerouslySetInnerHTML={{ __html: block.title }}></div>
														}
														<ul className="blog-article__block-special-list-ul">
															{block.list.map((item, j) => {
																return (
																	<li className="blog-article__block-special-list-item" key={i + '-' + j}>
																		<div className="blog-article__block-special-list-icon">
																			<img src={item.icon} alt="icon" />
																		</div>
																		<div className="blog-article__block-special-list-item-body">
																			{item.title &&
																				<div className="blog-article__block-special-list-item-title text-22 fw-600" dangerouslySetInnerHTML={{ __html: item.title }}></div>
																			}
																			{item.text &&
																				<div className="blog-article__block-special-list-item-text" dangerouslySetInnerHTML={{ __html: item.text }}></div>
																			}
																		</div>
																	</li>
																)
															})}
														</ul>
													</div>
												)
										}
									})}
								</div>
								<div className="blog-article__side">
									{article.contents_nav &&
										<Contents className={'blog-article__contents'} data={article.contents_nav} />
									}
									{article.related_articles &&
										<div className="blog-article__related">
											<div className="blog-article__related-title text-20">Вам может быть интересно</div>
											<div className="blog-article__related-list">
												{article.related_articles.map((card, i) => {
													return (
														<a href={card.link} className='blog-article__related-card' key={i} target='_blank'>
															<div className="blog-article__related-card-img">
																<img src={card.img} alt="img" />
															</div>
															<div className="blog-article__related-card-info">
																<div className="blog-article__related-card-title text-16 fw-600 blue-text" dangerouslySetInnerHTML={{ __html: card.title }}></div>
																<div className="blog-article__related-card-desc text-14" dangerouslySetInnerHTML={{ __html: card.desc }}></div>
															</div>
														</a>
													)
												})}
											</div>
										</div>
									}
									{article.subscribe &&
										<div className="blog-article__subscribe">
											<picture className="blog-article__subscribe-img">
												{article.subscribe.img_mob &&
													<source media="(max-width: 570px)" srcSet={article.subscribe.img_mob} />
												}
												<img src={article.subscribe.img} alt="img" />
											</picture>
											<a href={article.subscribe.link} className="blog-article__subscribe-btn btn btn_border text-22 fw-500" target='_blank'>{article.subscribe.btn_text}</a>
										</div>
									}
								</div>
							</div>
						</div>
					</div>
				</section >
			}
		</>
	)
}