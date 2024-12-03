import { useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_orange.css";
import Button from "../../ui/buttons/Button";
import styles from "./Traiteur.module.css";
import useWeb3Form from "../../../hooks/useWeb3Form";
import FormLoader from "../../ui/loaders/FormLoader";

function Traiteur() {
	const accessKey = "49c64825-8d1a-4fde-9b75-5da2b5872dbc";
	const { result, isSubmitting, handleSubmit } = useWeb3Form(accessKey);

	const [date, setDate] = useState();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={styles.container}>
			<section className={styles.sectionTitle}>
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
				<form onSubmit={handleSubmit}>
					<div className={styles.grid}>
						<div className={styles.field}>
							<input
								type="hidden"
								name="Formulaire de traiteur"
								value="Demande de traiteur"
							/>
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
								name="date"
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
						<Button type="submit" disabled={isSubmitting}>
							Envoyer
						</Button>
					</div>
					<div className={styles.result}>
						{isSubmitting && <FormLoader />}
						{result && <p className={styles.result}>{result}</p>}
					</div>
				</form>
				{result && <p className={styles.result}>{result}</p>}
			</section>
		</div>
	);
}

export default Traiteur;
