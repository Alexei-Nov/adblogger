import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCases } from './toolkitRedux/toolkitSlice'
import { HelmetProvider } from "react-helmet-async";


function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		fetch('/data/cases/index.json')
			.then(res => res.json())
			.then(files =>
				Promise.all(
					files.map(file => fetch(`/data/cases/${file}`).then(r => r.json()))
				)
			)
			.then(cases => {
				dispatch(setCases(cases))
			});
	}, [])


	return (
		<>
			<div className="body-wrapper">
				<HelmetProvider>
					<Router>
						{/* <Preloader /> */}
						<Header />
						<Main />
						<Footer />
					</Router>
				</HelmetProvider>
			</div>
		</>
	);
}

export default App;