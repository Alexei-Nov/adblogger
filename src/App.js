import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCases } from './toolkitRedux/toolkitSlice'
import { HelmetProvider } from "react-helmet-async";


function App() {
	const footerState = useSelector(state => state.toolkit.footer)
	const dispatch = useDispatch()

	useEffect(() => {
		// fetch('https://api.blogger.ra-studio.ru/api/top-cases/')
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		dispatch(setCases(data.data))
		// 	})
		// 	.catch((err) => {
		// 		console.log(err.message);
		// 	});

	}, [dispatch])


	return (
		<>
			<div className="body-wrapper">
				<HelmetProvider>
					<Router>
						{/* <Preloader /> */}
						<Header />
						<Main />
						<Footer footer={footerState} />
					</Router>
				</HelmetProvider>
			</div>
		</>
	);
}

export default App;