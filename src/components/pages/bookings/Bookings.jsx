import { useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_orange.css";
import styles from "./Bookings.module.css";
import Button from "../../ui/buttons/Button";
import dateOptions from "../../../lib/flatPickrConfig";
import useAvailableTimes from "../../../hooks/useAvailableTimes";
import useWeb3Form from "../../../hooks/useWeb3Form";
import FormLoader from "../../ui/loaders/FormLoader";
import fleurSVG from "../../../assets/images/kedem-fleur.svg";

function Bookings() {
	const accessKey = "7fb7f453-edc2-4925-a865-6602d13d39f1";

	const { result, isSubmitting, handleSubmit } = useWeb3Form(accessKey);
	const { availableTimes, updateAvailableTimes } = useAvailableTimes();

	const [date, setDate] = useState();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const scriptId = "zenchef-sdk";

		// Si le script n’est pas déjà chargé, on l’ajoute
		if (!document.getElementById(scriptId)) {
			const script = document.createElement("script");
			script.id = scriptId;
			script.async = true;
			script.src = "https://sdk.zenchef.com/v1/sdk.min.js";

			const firstScript = document.getElementsByTagName("script")[0];
			if (firstScript?.parentNode) {
				firstScript.parentNode.insertBefore(script, firstScript);
			}
		}
	}, []);

	const handleDateChange = (selectedDates) => {
		const selectedDate = selectedDates[0];
		setDate(selectedDate);
		updateAvailableTimes(selectedDate);
	};

	return (
		<div className={styles.container}>
			<img className={styles.fleurImg} src={fleurSVG} alt="Fleur" />
			<section className={styles.sectionTitle}>
				<h1 className={styles.title}>Réservations</h1>
				<p className={styles.subtitle}>
					Merci d&apos;utiliser notre formulaire pour effectuer votre demande de
					réservation. Veuillez noter que cette demande ne garantit pas la
					disponibilité. Votre réservation sera confirmée uniquement après
					réception d&apos;un email ou d&apos;un appel téléphonique de notre
					part. Nous vous remercions de votre compréhension et avons hâte de
					vous accueillir.
				</p>
			</section>

			<section className={styles.formSection}>
				{/* <form onSubmit={handleSubmit}>
					<div className={styles.grid}>
						<div className={styles.field}>
							<input
								type="hidden"
								name="Formulaire de réservation"
								value="Demande de réservation"
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
							<input type="tel" id="phone" name="phone" required />
						</div>
						<div className={styles.field}>
							<label htmlFor="date">Date</label>
							<Flatpickr
								value={date}
								onChange={handleDateChange}
								options={dateOptions}
								name="date"
								placeholder="Sélectionnez une date..."
							/>
						</div>
						<div className={styles.field}>
							<label htmlFor="time">Heure</label>
							<select name="bookingTime" id="time" required>
								{availableTimes.map((time) => (
									<option key={time} value={time}>
										{time}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className={styles.field}>
						<label htmlFor="guests">Nombre de personnes</label>
						<input
							type="number"
							id="guests"
							name="guests"
							min="1"
							max="8"
							required
						/>
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
				</form> */}

				{/* Zenchef mount point */}
				<div
					className="zc-widget-config"
					data-restaurant="375852"
					data-open="2000"
					style={{ minHeight: "400px", width: "100%" }}
				></div>
			</section>
		</div>
	);
}

export default Bookings;
