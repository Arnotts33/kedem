import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Lenis from "lenis";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Navbar from "./components/ui/navbar/Navbar";
import Home from "./components/pages/home/Home";
import Bookings from "./components/pages/bookings/Bookings";
import Traiteur from "./components/pages/traiteur/Traiteur";
import Contact from "./components/pages/contact/Contact";
import Footer from "./components/ui/footer/Footer";
import "./App.css";

function App() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/bookings" element={<Bookings />} />
				<Route path="/traiteur" element={<Traiteur />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
			<SpeedInsights />
		</>
	);
}

export default App;
