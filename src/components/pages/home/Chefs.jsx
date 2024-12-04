import styles from "./Chefs.module.css";
import chefs from "../../../assets/images/chefs.webp";
import citronNoirImg from "../../../assets/images/kedem-citron-noir.svg";
import epicesImg from "../../../assets/images/kedem-epices.svg";

function Chefs() {
	return (
		<section className={styles.chefsSection}>
			<img
				src={citronNoirImg}
				className={styles.citronNoirImg}
				alt="Citron noir"
			/>
			<img
				src={epicesImg}
				className={styles.epicesImg}
				alt="Sacs d'épices"
			/>
			<div className={styles.chefsContainer}>
				<div className={styles.chefsImg}>
					<img
						src={chefs}
						alt="Chefs devant le restaurant"
						className={styles.chefs}
						loading="lazy"
					/>
				</div>
				<div className={styles.chefsContent}>
					<h2 className={styles.chefsTitle}>Raconter une histoire</h2>
					<p className={styles.chefsText}>
						Kedem est le résultat de notre rencontre il y a quelques
						années : deux cuisiniers enthousiastes aux parcours
						divers, mais aux idées communes.
						<br />
						<br />
						Passionnés par les saveurs, les goûts et
						l&apos;hospitalité des pays du Levant, notre cuisine
						s&apos;est construite au long de six années de travail
						communes, de recherches et de réflexions.
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
