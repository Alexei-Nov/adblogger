import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter as Router } from "react-router-dom";

function App() {

	return (
		<>
			<div className="body-wrapper">
				<Router>
					<Header />
					<Main />
					<Footer />
				</Router>
			</div>
		</>
	);
}

export default App;