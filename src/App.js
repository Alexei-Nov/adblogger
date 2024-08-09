import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopCase from "./pages/TopCase";

function App() {
	return (
		<>
			<div className="body-wrapper">
				<Router>
					<Header />
					<main className="main">
						<Routes>
							<Route exact path="/" element={<Home />} />
							<Route exact path="/top-cases" element={<TopCase />} />
						</Routes>
					</main>
					<Footer />
				</Router>
			</div>
		</>
	);
}

export default App;