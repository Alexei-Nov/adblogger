import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../../pages/Home";
import TopCase from "../../pages/TopCase";
import ForAdvisers from '../../pages/ForAdvertisers';
import ForAuthors from '../../pages/ForAuthors';
import DetailCase from "../../pages/DetailCase";

export default function Main() {

	const location = useLocation();
	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0
		});
	}, [location])

	return (
		<>
			<main className="main">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/for-authors" element={<ForAuthors />} />
					<Route exact path="/for-advertisers" element={<ForAdvisers />} />
					<Route exact path="/top-cases" element={<TopCase />} />
					<Route exact path="/top-cases/:slug" element={<DetailCase />} />
				</Routes>
			</main>
		</>
	)
}
