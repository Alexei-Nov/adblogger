import Advantages from "./components/Advantages/Advantages";
import Case from "./components/Case/Case";
import Channels from "./components/Channels/Channels";
import Entrance from "./components/Entrance/Entrance";
import Faq from "./components/Faq/Faq";
import Header from "./components/Header/Header";
import Money from "./components/Money/Money";
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
				<Case />
				<Money />
				<Faq />
			</div>
		</>
	);
}

export default App;