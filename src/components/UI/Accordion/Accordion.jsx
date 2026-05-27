import React, { useRef, useState } from 'react'

import './accordion.css'

export default function Accordion({ className, data }) {
	return (
		<div className={'accordion ' + className}>
			<AccordionList data={data} />
		</div>
	)
}


function AccordionList({ data }) {
	return (
		<>
			{data.map((item, i) => {
				return (
					<AccordionItem key={i} title={item.question}>
						{item.subList ? <AccordionList data={item.subList} /> : <span dangerouslySetInnerHTML={{ __html: item.answer }}></span>}
					</AccordionItem>
				)
			})}
		</>
	)
}

function AccordionItem({ title, children }) {
	const [currentOpen, setCurrentOpen] = useState(false)
	const accordionBody = useRef(null)

	function handleToggle() {
		if (currentOpen) {
			accordionBody.current.style.maxHeight = 0
		} else {
			// accordionBody.current.style.maxHeight = accordionBody.current.scrollHeight + 'px'
			accordionBody.current.style.maxHeight = 'none'
		}

		setCurrentOpen(!currentOpen)
	}


	return (
		<div className={"accordion__item" + (currentOpen ? ' accordion__item_open' : '')} itemScope itemType="https://schema.org/Question" >
			<div className="accordion__btn text-32 fw-500" itemProp="name" onClick={handleToggle}>
				<div className="accordion__caret"></div>
				<div className="accordion__btn-text" dangerouslySetInnerHTML={{ __html: title }}></div>
			</div>
			<div className="accordion__body content text-21" ref={accordionBody} itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
				<div itemProp="text">{children}</div>
			</div>
		</div>
	)
}
