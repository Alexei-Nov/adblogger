import React, { useEffect, useRef } from 'react'
import './preloader.css'

export default function Preloader() {

	const preloaderFramePath = [
		'/img/preloader/square0001.png',
		'/img/preloader/square0002.png',
		'/img/preloader/square0003.png',
		'/img/preloader/square0004.png',
		'/img/preloader/square0005.png',
		'/img/preloader/square0006.png',
		'/img/preloader/square0007.png',
		'/img/preloader/square0008.png',
		'/img/preloader/square0009.png',
		'/img/preloader/square0010.png',
		'/img/preloader/square0011.png',
		'/img/preloader/square0012.png',
		'/img/preloader/square0013.png',
		'/img/preloader/square0014.png',
		'/img/preloader/square0015.png',
		'/img/preloader/square0016.png',
		'/img/preloader/square0017.png',
		'/img/preloader/square0018.png',
		'/img/preloader/square0019.png',
		'/img/preloader/square0020.png',
		'/img/preloader/square0021.png',
		'/img/preloader/square0022.png',
		'/img/preloader/square0023.png',
		'/img/preloader/square0024.png',
		'/img/preloader/square0025.png',
		'/img/preloader/square0026.png',
		'/img/preloader/square0027.png',
		'/img/preloader/square0028.png',
		'/img/preloader/square0029.png',
		'/img/preloader/square0030.png',
		'/img/preloader/square0031.png',
		'/img/preloader/square0032.png',
		'/img/preloader/square0033.png',
		'/img/preloader/square0034.png',
		'/img/preloader/square0035.png',
		'/img/preloader/square0036.png',
		'/img/preloader/square0037.png',
		'/img/preloader/square0038.png',
		'/img/preloader/square0039.png',
		'/img/preloader/square0040.png',
		'/img/preloader/square0041.png',
		'/img/preloader/square0042.png',
		'/img/preloader/square0043.png',
		'/img/preloader/square0044.png',
		'/img/preloader/square0045.png',
		'/img/preloader/square0046.png',
		'/img/preloader/square0047.png',
		'/img/preloader/square0048.png',
		'/img/preloader/square0049.png',
		'/img/preloader/square0050.png',
		'/img/preloader/square0051.png',
		'/img/preloader/square0052.png',
		'/img/preloader/square0053.png',
		'/img/preloader/square0054.png',
		'/img/preloader/square0055.png',
		'/img/preloader/square0056.png',
		'/img/preloader/square0057.png',
		'/img/preloader/square0058.png',
		'/img/preloader/square0059.png',
		'/img/preloader/square0060.png',
		'/img/preloader/square0061.png',
		'/img/preloader/square0062.png',
		'/img/preloader/square0063.png',
		'/img/preloader/square0064.png',
		'/img/preloader/square0065.png',
		'/img/preloader/square0066.png',
		'/img/preloader/square0067.png',
		'/img/preloader/square0068.png',
		'/img/preloader/square0069.png',
		'/img/preloader/square0070.png',
		'/img/preloader/square0071.png',
		'/img/preloader/square0072.png',
		'/img/preloader/square0073.png',
		'/img/preloader/square0074.png',
		'/img/preloader/square0075.png',
		'/img/preloader/square0076.png',
		'/img/preloader/square0077.png',
		'/img/preloader/square0078.png',
		'/img/preloader/square0079.png',
		'/img/preloader/square0080.png'
	]

	let wrapper = useRef()

	useEffect(() => {
		let i = 0;
		const imgArr = wrapper.current.querySelectorAll('img')
		let animInterval = setInterval(() => {
			if (imgArr[i - 1]) {
				imgArr[i - 1].style.display = 'none'
			}
			imgArr[i].style.display = 'block'
			i++
			if (imgArr.length <= i) {
				clearInterval(animInterval)
				wrapper.current.style.display = 'none'
			}
		}, 50);
	})

	return (
		<>
			<div className="preloader" ref={wrapper}>
				{preloaderFramePath.map((img, i) => {
					return (
						<img src={img} alt="img" key={i} />
					)
				})}
			</div>
		</>
	)
}
