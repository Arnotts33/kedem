import { useEffect } from "react";
import styles from "./Bookings.module.css";

function Bookings() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={styles.container}>
			<h1>Réservations</h1>
		</div>
	);
}

export default Bookings;
