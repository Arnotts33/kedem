import styles from "./About.module.css";

function About() {
	return (
		<section className={styles.container}>
			<h1 className={styles.title}>
				Goûts et saveurs des pays du Levant
			</h1>
			<p className={styles.text}>
				Kedem, c’est le souhait de partager avec vous un instant de
				convivialité et de découverte, une cuisine de saison aux saveurs
				délicates et épicées, accompagnée d’une sélection attentive de
				vins et boissons d’ici et d’ailleurs.
			</p>
		</section>
	);
}

export default About;
