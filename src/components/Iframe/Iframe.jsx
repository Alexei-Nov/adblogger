import React, { useEffect, useRef, useState } from 'react'
import './iframe.css'

export default function Iframe({ block_state }) {

	const [iframeHeight, setIframeHeight] = useState('8000px');
	const iframeRef = useRef(null); // Optional, for direct iframe interaction if needed

	useEffect(() => {
		const handleMessage = (event) => {
			// Verify the origin for security if possible, e.g., event.origin === "https://your-iframe-domain.com"
			if (event.data && event.data.type === 'iframeHeight' && event.data.height) {
				setIframeHeight(`${event.data.height}px`);
			}
		};

		window.addEventListener('message', handleMessage);

		return () => {
			window.removeEventListener('message', handleMessage);
		};
	}, []);


	return (
		<>
			<section className='iframe'>
				<iframe
					src={block_state.src}
					ref={iframeRef}
					width="100%"
					height={iframeHeight}
					frameBorder="0"
					scrolling="no"
					style={{ width: '100%', border: 'none' }}
				></iframe >
			</section>
		</>
	)
}
