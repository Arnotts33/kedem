import { useEffect } from "react";
import styles from "./Contact.module.css";
import Button from "../../ui/buttons/Button";

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

			<section className={styles.formSection}>
				<form>
					<div className={styles.grid}>
						<div className={styles.field}>
							<label htmlFor="lastName">Nom</label>
							<input
								type="text"
								id="lastName"
								name="lastName"
								placeholder="Votre nom..."
								required
							/>
						</div>
						<div className={styles.field}>
							<label htmlFor="firstName">Prénom</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								placeholder="Votre prénom..."
								required
							/>
						</div>
						<div className={styles.field}>
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Votre email..."
								required
							/>
						</div>
						<div className={styles.field}>
							<label htmlFor="phone">Téléphone</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								required
							/>
						</div>
					</div>
					<div className={styles.field}>
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							name="message"
							cols={30}
							rows={10}
							placeholder="Votre message..."
							required
						></textarea>
					</div>
					<div className={styles.submitBtn}>
						<Button type="submit">Envoyer</Button>
					</div>
				</form>
			</section>
		</div>
	);
}

export default Contact;
