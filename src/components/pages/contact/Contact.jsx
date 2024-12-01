import { useEffect } from "react";
import styles from "./Contact.module.css";

function Contact() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={styles.container}>
			<section className={styles.titleSection}>
				<h1 className={styles.title}>Contact</h1>
				<p className={styles.subtitle}>
					Vous avez une question ou besoin d&apos;informations
					supplémentaires ? Remplissez ce formulaire et nous
					reviendrons vers vous dans les plus brefs délais. Nous
					sommes ravis de répondre à toutes vos demandes et de vous
					accompagner.
				</p>
			</section>
		</div>
	);
}

export default Contact;
