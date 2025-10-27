import styles from "./HolidayPopup.module.css";
import { useState, useEffect } from "react";
import closePopupIcon from "../../../assets/icons/xmark-solid.svg";

export default function HolidayPopup() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	const handleClose = () => {
		setIsVisible(false);
	};

	if (!isVisible) return null;

	return (
		<div className={styles.popupOverlay}>
			<div className={styles.popupContainer}>
				<img
					src={closePopupIcon}
					alt="Close popup"
					className={styles.closeIcon}
					onClick={handleClose}
				/>
				<div className={styles.popupContent}>
					<h1 className={styles.popupTitle}>Kedem</h1>
					<h2>Fermetures et horaires des fêtes</h2>
					<p>Voici les horaires spéciaux pour la période des fêtes :</p>
					<h3>Le restaurant sera fermé les 24 et 25 décembre.</h3>
					<ul className={styles.holidayList}>
						<li>26 décembre : ouvert le soir</li>
						<li>27 décembre : ouvert midi et soir</li>
						<li>28 décembre : fermé</li>
						<li>29 décembre : ouvert le midi</li>
						<li>30 décembre & 31 décembre : ouvert midi et soir</li>
					</ul>
					<h3>Le restaurant sera ensuite fermé du 1er au 11 janvier inclus.</h3>
				</div>
			</div>
		</div>
	);
}
