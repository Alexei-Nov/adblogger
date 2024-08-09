import React from 'react'
import Entrance from '../components/Entrance/Entrance'
import Advantages from '../components/Advantages/Advantages'
import Tile from '../components/Tile/Tile'
import Channels from '../components/Channels/Channels'
import Partners from '../components/Partners/Partners'
import Steps from '../components/Steps/Steps'
import Case from '../components/Case/Case'
import Money from '../components/Money/Money'
import Faq from '../components/Faq/Faq'

export default function Home() {
	return (
		<>
			<Entrance />
			<Advantages />
			<Tile />
			<Channels />
			<Partners />
			<Steps />
			<Case />
			<Money />
			<Faq />
		</>
	)
}
