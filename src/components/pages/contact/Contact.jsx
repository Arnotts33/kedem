import { useEffect } from "react";
import styles from "./Contact.module.css";
import Button from "../../ui/buttons/Button";
import Map from "../../ui/map/Map";
import useWeb3Form from "../../../hooks/useWeb3Form";
import FormLoader from "../../ui/loaders/FormLoader";

function Contact() {
	const accessKey = "49c64825-8d1a-4fde-9b75-5da2b5872dbc";
	const { result, isSubmitting, handleSubmit } = useWeb3Form(accessKey);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={styles.container}>
			<section className={styles.sectionTitle}>
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
				<form onSubmit={handleSubmit}>
					<div className={styles.grid}>
						<input
							type="hidden"
							name="Formulaire de contact"
							value="Contact / Questions"
						/>
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
						<Button type="submit" disabled={isSubmitting}>
							Envoyer
						</Button>
					</div>
					<div className={styles.result}>
						{isSubmitting && <FormLoader />}
						{result && <p className={styles.result}>{result}</p>}
					</div>
				</form>
			</section>

			<section className={styles.mapSection}>
				<Map />
			</section>
		</div>
	);
}

export default Contact;
