import styles from "./Traiteur.module.css";
import chefs from "../../../assets/images/gilronan.webp";

function Traiteur() {
	return (
		<section className={styles.traiteurSection}>
			<div className={styles.traiteurContainer}>
				<div className={styles.traiteurContent}>
					<h2 className={styles.traiteurTitle}>Kedem Traiteur</h2>
					<p className={styles.traiteurText}>
						Faites de vos moments spéciaux une expérience
						inoubliable grâce à notre service traiteur. Que ce soit
						pour un mariage, un anniversaire, une soirée
						professionnelle ou un événement privé, nous mettons à
						votre disposition notre savoir-faire en cuisine
						méditerranéenne.
						<br />
						<br />
						Nous pouvons nous déplacer à Bordeaux et dans son
						agglomération.
					</p>
				</div>
				<div className={styles.chefsImg}>
					{/* <img
						src={lemons}
						alt="Citrons noirs"
						className={styles.lemons}
					/> */}
					<img src={chefs} alt="Chefs" className={styles.chefs} />
				</div>
			</div>
		</section>
	);
}

export default Traiteur;
