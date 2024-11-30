import styles from "./Chefs.module.css";
import chefs from "../../../assets/images/chefs.webp";
import lemons from "../../../assets/images/kedem-citrons.svg";

function Chefs() {
	return (
		<section className={styles.chefsSection}>
			<div className={styles.chefsContainer}>
				<div className={styles.chefsImg}>
					<img
						src={lemons}
						alt="Citrons noirs"
						className={styles.lemons}
					/>
					<img src={chefs} alt="Chefs" className={styles.chefs} />
				</div>
				<div className={styles.chefsContent}>
					<h2 className={styles.chefsTitle}>Raconter une histoire</h2>
					<p className={styles.chefsText}>
						Kedem est le résultat de notre rencontre il y a quelques
						années : deux cuisiniers enthousiastes aux parcours
						divers, mais aux idées communes.
						<br />
						<br />
						Passionnés par les saveurs, les goûts et l’hospitalité
						des pays du Levant, notre cuisine s’est construite au
						long de six années de travail communes, de recherches et
						de réflexions.
						<br />
						<br />
						En cuisine, Gil et Ronan forment un duo complice et
						créatif, porté par une même ambition : proposer une
						cuisine qui raconte une histoire.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Chefs;
