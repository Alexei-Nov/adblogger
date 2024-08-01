import Advantages from "./components/Advantages/Advantages";
import Channels from "./components/Channels/Channels";
import Entrance from "./components/Entrance/Entrance";
import Header from "./components/Header/Header";
import Partners from "./components/Partners/Partners";
import Steps from "./components/Steps/Steps";
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
				<Partners />
				<Steps />
			</div>
		</>
	);
}

export default App;