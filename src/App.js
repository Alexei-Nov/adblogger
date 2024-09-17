import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import Preloader from "./components/Preloader/Preloader";
import { useSelector } from "react-redux";

function App() {
	const footerState = useSelector(state => state.toolkit.footer)

	useEffect(() => {
		let scrollStep = 0;
		var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

		function preventDefault(e) {
			if (e.wheelDelta) {
				scrollStep = e.wheelDelta / 3
			}

			e.preventDefault();
			window.scrollBy({
				top: -scrollStep,
				left: 0
			})
		}

		function preventDefaultForScrollKeys(e) {
			if (keys[e.keyCode]) {
				preventDefault(e);
				return false;
			}
		}

		var supportsPassive = false;
		try {
			window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
				get: function () { supportsPassive = true; }
			}));
		} catch (e) { }

		var wheelOpt = supportsPassive ? { passive: false } : false;
		var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

		window.addEventListener('DOMMouseScroll', preventDefault, false);
		window.addEventListener(wheelEvent, preventDefault, wheelOpt);
		// window.addEventListener('touchmove', preventDefault, wheelOpt); 
		window.addEventListener('keydown', preventDefaultForScrollKeys, false);
	})


	return (
		<>
			<div className="body-wrapper">
				<Router>
					{/* <Preloader /> */}
					<Header />
					<Main />
					<Footer footer={footerState} />
				</Router>
			</div>
		</>
	);
}

export default App;