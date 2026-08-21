import React from 'react'
import { Link } from 'react-router-dom';
import './breadcrumbs.css'


export default function Breadcrumbs({ breadcrumbsState }) {

	return (
		<div
			className="breadcrumbs text-22"
			itemScope
			itemType="https://schema.org/BreadcrumbList"
		>
			<div className="container">
				<div className="breadcrumbs__wrapper ">
					{breadcrumbsState.map((breadcrumb, index) => {
						const url = breadcrumb.link;
						const title = breadcrumb.title;
						const isLast = index === breadcrumbsState.length - 1;

						return (
							<div
								key={index}
								className='breadcrumbs__link'
								itemProp="itemListElement"
								itemScope
								itemType="https://schema.org/ListItem"
							>
								{isLast ? (
									<span className="breadcrumbs__current" itemProp="name" dangerouslySetInnerHTML={{ __html: title }}></span>
								) : (
									<>
										<Link to={url} itemProp="item">
											<span
												itemProp="name"
												dangerouslySetInnerHTML={{
													__html: breadcrumb.title
												}}
											/>
										</Link>
										<span className="breadcrumbs__arrow" aria-hidden="true">
											<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" clipRule="evenodd" d="M7.47001 4.21698C7.17693 4.50968 7.17662 4.98456 7.46933 5.27764L12.1856 9.99995L7.46939 14.7212C7.17665 15.0142 7.1769 15.4891 7.46995 15.7818C7.763 16.0746 8.23788 16.0743 8.53061 15.7813L13.7762 10.5301C14.0687 10.2373 14.0687 9.76286 13.7763 9.47002L8.53067 4.21766C8.23797 3.92458 7.76309 3.92427 7.47001 4.21698Z" fill="#7A7A7A" />
											</svg>
										</span>
									</>
								)}
								<meta itemProp="position" content={index + 1} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	)
}
