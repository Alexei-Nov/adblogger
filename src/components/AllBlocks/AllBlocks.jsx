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
import EntranceEvent from 'components/EntranceEvent/EntranceEvent';
import BannerSellers from 'components/BannersSellers/BannerSellers';
import Connect from 'components/Connect/Connect';
import SalesImprovement from 'components/SalesImprovement/SalesImprovement';
import TileSellers from 'components/TileSellers/TileSellers';

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
					case 'entrance_event':
						return <EntranceEvent key={i} block_state={block.block_state} />;
					case 'entrance':
						return <Entrance key={i} block_state={block.block_state} />;
					case 'advantages':
						return <Advantages key={i} block_state={block.block_state} />;
					case 'tile':
						return <Tile key={i} block_state={block.block_state} />;
					case 'channels':
						return <Channels key={i} block_state={block.block_state} />;
					case 'partners':
						return <Partners key={i} block_state={block.block_state} />;
					case 'steps':
						return <Steps key={i} block_state={block.block_state} />;
					case 'case':
						return <Case key={i} block_state={block.block_state} />;
					case 'money':
						return <Money key={i} block_state={block.block_state} />;
					case 'faq':
						return <Faq key={i} block_state={block.block_state} />;
					case 'banner_sellers':
						return <BannerSellers key={i} block_state={block.block_state} />;
					case 'connect':
						return <Connect key={i} block_state={block.block_state} />;
					case 'sales_improvement':
						return <SalesImprovement key={i} block_state={block.block_state} />;
					case 'tile_sellers':
						return <TileSellers key={i} block_state={block.block_state} />;
					default:
						return null;
				}
			})}
		</>
	);
}
