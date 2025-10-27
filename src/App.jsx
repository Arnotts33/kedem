import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Lenis from "lenis";

import Navbar from "./components/ui/navbar/Navbar";
import Home from "./components/pages/home/Home";
import Traiteur from "./components/pages/traiteur/Traiteur";
import Footer from "./components/ui/footer/Footer";
import "./App.css";
import NotFound from "./components/pages/errors/NotFound";
import ZenchefWidget from "./components/ui/zenchef/ZenchefWidget";
import HolidayPopup from "./components/ui/popups/HolidayPopup";

function App() {
	const [showPopup, setShowPopup] = useState(true);

	useEffect(() => {
		const lenis = new Lenis();

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => lenis.destroy();
	}, []);

	const handleClosePopup = () => {
		setShowPopup(false);
	};

	return (
		<>
			<HolidayPopup isVisible={showPopup} onClose={handleClosePopup} />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/bookings" element={<Bookings />} /> */}
				<Route path="/traiteur" element={<Traiteur />} />
				{/* <Route path="/contact" element={<Contact />} /> */}
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
			{showPopup ? null : <ZenchefWidget />}
		</>
	);
}

export default App;
