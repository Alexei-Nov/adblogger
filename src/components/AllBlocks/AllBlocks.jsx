import React, { useEffect } from 'react';
import Entrance from '../Entrance/Entrance';
import Advantages from '../Advantages/Advantages';
import Tile from '../Tile/Tile';
import Channels from '../Channels/Channels';
import Partners from '../Partners/Partners';
import Steps from '../Steps/Steps';
import Case from '../Case/Case';
import Money from '../Money/Money';
import Faq from '../Faq/Faq';
import { useDispatch } from 'react-redux';
import { setPreloaderInit } from '../../toolkitRedux/toolkitSlice';
import TextVideo from 'components/TextVideo/TextVideo';

export default function AllBlocks({ pageState }) {
	const dispatch = useDispatch();

	useEffect(() => {
		const hasPreloader = pageState.blocks.some(block => block.block_slug === 'preloader');
		if (hasPreloader) {
			dispatch(setPreloaderInit(true));
		}
	}, [pageState.blocks, dispatch]);

	return (
		<>
			{pageState.blocks.map((block, i) => {
				switch (block.block_slug) {
					case 'text_video':
						return <TextVideo key={i} textVideoState={block.block_state} />;
					case 'entrance':
						return <Entrance key={i} entranceState={block.block_state} />;
					case 'advantages':
						return <Advantages key={i} advantagesState={block.block_state} />;
					case 'tile':
						return <Tile key={i} tileState={block.block_state} />;
					case 'channels':
						return <Channels key={i} channelsState={block.block_state} />;
					case 'partners':
						return <Partners key={i} partnersState={block.block_state} />;
					case 'steps':
						return <Steps key={i} stepsState={block.block_state} />;
					case 'case':
						return <Case key={i} caseState={block.block_state} />;
					case 'money':
						return <Money key={i} moneyState={block.block_state} />;
					case 'faq':
						return <Faq key={i} faqState={block.block_state} />;
					default:
						return null;
				}
			})}
		</>
	);
}
