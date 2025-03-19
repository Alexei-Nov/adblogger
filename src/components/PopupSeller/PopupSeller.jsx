import React, { useRef } from 'react'
import './popupSeller.css'
import { NavLink } from 'react-router-dom'


export default function PopupSeller({ block_state }) {
	let popup = useRef();

	function initPopup() {
		popup.current.classList.add('popup-seller_show')
	}

	function hidePopup() {
		popup.current.classList.remove('popup-seller_show')
	}

	setTimeout(() => {
		initPopup()
	}, 500);

	return (
		<>
			<div className='popup-seller' ref={popup}>
				<div className="popup-seller__wrapper">
					<div className="popup-seller__title text-16 fw-600" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
					<div className="popup-seller__desc text-14" dangerouslySetInnerHTML={{ __html: block_state.desc }}></div>
					<NavLink
						to={block_state.btn_link}
						className='popup-seller__btn btn btn_border btn_small'
						onClick={hidePopup}
						end
					>{block_state.btn_text}</NavLink>
				</div>
				<div className="popup-seller__img">
					<img src={block_state.img} alt="img" />
				</div>

				<div className="popup-seller__close" onClick={hidePopup}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M7.5364 6.2636C7.18492 5.91213 6.61508 5.91213 6.2636 6.2636C5.91213 6.61508 5.91213 7.18492 6.2636 7.5364L10.7272 12L6.2636 16.4636C5.91213 16.8151 5.91213 17.3849 6.2636 17.7364C6.61508 18.0879 7.18492 18.0879 7.5364 17.7364L12 13.2728L16.4636 17.7364C16.8151 18.0879 17.3849 18.0879 17.7364 17.7364C18.0879 17.3849 18.0879 16.8151 17.7364 16.4636L13.2728 12L17.7364 7.5364C18.0879 7.18492 18.0879 6.61508 17.7364 6.2636C17.3849 5.91213 16.8151 5.91213 16.4636 6.2636L12 10.7272L7.5364 6.2636Z" fill="#99A2AD" />
					</svg>
				</div>
			</div>
		</>
	)
}
