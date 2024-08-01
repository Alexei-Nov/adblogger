import Adventages from "./components/Adventages/Adventages";
import Header from "./components/Header/Header";
import Tile from "./components/Tile/Tile";

function App() {
	return (
		<>
			<div className="body-wrapper">
				<Header />
				<Adventages />
				<Tile />
			</div>
		</>
	);
}

export default App;