import React from 'react'
import './faq.css'
import Accordion from 'components/UI/Accordion/Accordion'

export default function Faq({ block_state }) {
	return (
		<section className='section faq'>
			<div className="container">
				<h2 className="faq__title h2">FAQ</h2>
				<Accordion className="faq__accordion" data={block_state.faqList} />
			</div>
		</section>
	)
}
