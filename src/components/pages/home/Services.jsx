import { Link } from "react-router-dom";
import Button from "../../ui/buttons/Button";
import styles from "./Services.module.css";
import chefs from "../../../assets/images/gilronan.webp";
import cafeImg from "../../../assets/images/kedem-cafe.svg";
import challahImg from "../../../assets/images/kedem-challah.svg";

function Services() {
	return (
		<section className={styles.servicesSection}>
			<img src={cafeImg} className={styles.cafeImg} alt="Café" />
			<img src={challahImg} className={styles.challahImg} alt="Challah" />
			<div className={styles.servicesContainer}>
				<div className={styles.servicesContent}>
					<h2 className={styles.servicesTitle}>Kedem Traiteur</h2>
					<p className={styles.servicesText}>
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
					<Link to="/traiteur">
						<Button>Demander un devis</Button>
					</Link>
				</div>
				<div className={styles.chefsImg}>
					<img
						src={chefs}
						alt="Chefs"
						className={styles.chefs}
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	);
}

export default Services;
