import { useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_orange.css";
import Button from "../../ui/buttons/Button";
import styles from "./Traiteur.module.css";

function Traiteur() {
	const [date, setDate] = useState();
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
						<div className={styles.field}>
							<label htmlFor="date">Date</label>
							<Flatpickr
								value={date}
								onChange={() => setDate(date)}
								placeholder="Sélectionnez une date..."
							/>
						</div>

						<div className={styles.field}>
							<label htmlFor="guests">Nombre de personnes</label>
							<input
								type="number"
								id="guests"
								name="guests"
								min="1"
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

export default Traiteur;
