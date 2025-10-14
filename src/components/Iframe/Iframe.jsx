import React, { useEffect, useRef, useState } from 'react'
import './iframe.css'

export default function Iframe({ block_state }) {

	return (
		<>
			<section className='iframe'>
				<iframe
					src={block_state.src}
					width="100%"
					height="100%"
					frameBorder="0"
					style={{ width: '100%', height: '100%', border: 'none', position: 'fixed', left: '0px', top: '0px' }}
				></iframe >
			</section>
		</>
	)
}
