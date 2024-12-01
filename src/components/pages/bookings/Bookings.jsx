import { useEffect } from "react";
import styles from "./Bookings.module.css";

function Bookings() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={styles.container}>
			<section className={styles.titleSection}>
				<h1 className={styles.title}>Réservations</h1>
				<p className={styles.subtitle}>
					Merci d&apos;utiliser notre formulaire pour effectuer votre
					demande de réservation. Veuillez noter que cette demande ne
					garantit pas la disponibilité. Votre réservation sera
					confirmée uniquement après réception d&apos;un email ou
					d&apos;un appel téléphonique de notre part. Nous vous
					remercions de votre compréhension et avons hâte de vous
					accueillir.
				</p>
			</section>
		</div>
	);
}

export default Bookings;
