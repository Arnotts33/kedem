import { useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_orange.css";
import styles from "./Bookings.module.css";
import Button from "../../ui/buttons/Button";
import dateOptions from "../../../lib/flatPickrConfig";
import useAvailableTimes from "../../../hooks/useAvailableTimes";

function Bookings() {
	const [date, setDate] = useState();
	const { availableTimes, updateAvailableTimes } = useAvailableTimes();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleDateChange = (selectedDates) => {
		const selectedDate = selectedDates[0];
		setDate(selectedDate);
		updateAvailableTimes(selectedDate);
	};

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
								onChange={handleDateChange}
								options={dateOptions}
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
						<Button type="submit">Envoyer</Button>
					</div>
				</form>
			</section>
		</div>
	);
}

export default Bookings;
