import { Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/navbar/Navbar";
// import Footer from "./components/ui/footer/Footer";
import Home from "./components/pages/home/Home";
import Bookings from "./components/pages/bookings/Bookings";
import Traiteur from "./components/pages/traiteur/Traiteur";
import Contact from "./components/pages/contact/Contact";
import "./App.css";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/bookings" element={<Bookings />} />
				<Route path="/traiteur" element={<Traiteur />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			{/* <Footer /> */}
		</>
	);
}

export default App;
