import Advantages from "./components/Advantages/Advantages";
import Channels from "./components/Channels/Channels";
import Entrance from "./components/Entrance/Entrance";
import Header from "./components/Header/Header";
import Tile from "./components/Tile/Tile";

function App() {
	return (
		<>
			<div className="body-wrapper">
				<Header />
				<Entrance />
				<Advantages />
				<Tile />
				<Channels />
			</div>
		</>
	);
}

export default App;