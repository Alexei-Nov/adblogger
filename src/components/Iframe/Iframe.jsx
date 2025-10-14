import React, { useEffect, useRef, useState } from 'react'
import './iframe.css'

export default function Iframe({ block_state }) {

	const iframeRef = useRef();
	const [height, setHeight] = useState('200');

	const onLoad = () => {
		// setHeight(iframeRef.current.contentWindow.document.body.scrollHeight + 'px');
	};
	useEffect(() => {
		onLoad();
	}, []);


	return (
		<>
			<section className='iframe'>
				<iframe
					src={block_state.src}
					ref={iframeRef}
					width="100%"
					height={height}
					frameBorder="0"
					scrolling="no"
					style={{ width: '100%', border: 'none' }}
					onLoad={onLoad}
				></iframe >
			</section>
		</>
	)
}
