import styles from "./Map.module.css";

function Map() {
	return (
		<>
			<div className={styles.mapContainer}>
				<h2 className={styles.mapTitle}>Nous trouver</h2>
				{/* <img
					className={styles.massa_interior_img}
					src="/images/Massa-interieur.webp"
					loading="lazy"
					alt="Massa interior"
                    /> */}
				<iframe
					className={styles.map}
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11317.52669705624!2d-0.578118!3d44.83416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55273faa5ce533%3A0xfa09880f427a204f!2sRestaurant%20Kedem!5e0!3m2!1sfr!2sfr!4v1733150332273!5m2!1sfr!2sfr"
					width={600}
					style={{ border: 0 }}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</>
	);
}

export default Map;
