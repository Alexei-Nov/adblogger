import React, { useEffect, useRef } from 'react'
import './preloader.css'
import { useDispatch, useSelector } from 'react-redux'
import { setPreloaderInit } from '../../toolkitRedux/toolkitSlice'


export default function Preloader() {
	const preloaderInit = useSelector(state => state.toolkit.preloaderInit)
	const dispatch = useDispatch()

	let wrapper = useRef()

	useEffect(() => {
		let i = 0;
		const imgArr = wrapper.current.querySelectorAll('img')
		if (preloaderInit) {
			let animInterval = setInterval(() => {
				if (imgArr[i - 1]) {
					imgArr[i - 1].style.display = 'none'
				}
				imgArr[i].style.display = 'block'
				i++
				if (imgArr.length <= i) {
					clearInterval(animInterval)
					imgArr[i - 1].style.display = 'none'
					dispatch(setPreloaderInit(false))
				}
			}, 50);
		}
	})


	return (
		<>
			<div className="preloader" ref={wrapper}>
				{[...Array(80)].map((img, i) => {
					return (
						<img src={'./img/preloader/square00' + ((i + 1) < 10 ? ('0' + (i + 1)) : (i + 1)) + '.png'} alt="img" key={i} />
					)
				})}
			</div>
		</>
	)
}
