import { useEffect } from "react";
import styles from "./Traiteur.module.css";

function Traiteur() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={styles.container}>
			<section className={styles.titleSection}>
				<h1 className={styles.title}>Traiteur</h1>
				<p className={styles.subtitle}>
					Merci de nous faire confiance pour vos événements ! Ce
					formulaire nous permet de mieux comprendre vos besoins et
					vos attentes. Veuillez noter qu&apos;il s&apos;agit
					d&apos;une demande d&apos;information et non d&apos;une
					réservation confirmée. Nous vous contacterons par email ou
					téléphone pour vous fournir un devis personnalisé et
					finaliser les détails de votre prestation.
				</p>
			</section>
		</div>
	);
}

export default Traiteur;
