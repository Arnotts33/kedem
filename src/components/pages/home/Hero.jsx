import styles from "./Hero.module.css";
import illustration from "../../../assets/images/illustration-marche.webp";
import plante from "../../../assets/images/kedem-plantes-pois.svg";

function Hero() {
	return (
		<section className={styles.container}>
			<img
				className={styles.peaImg}
				src={plante}
				alt="Feuilles de pois chiches"
			/>

			<div className={styles.heroCenter}>
				<div className={styles.heroTitle}>
					<h1 className={styles.title}>Kedem</h1>
					<p className={styles.subtitle}>Restaurant</p>
				</div>
				<div className={styles.heroImg}>
					<img
						src={illustration}
						alt="Illustration Marche"
						width={345}
						height={343}
						fetchPriority="high"
					/>
				</div>
			</div>
			<img
				className={styles.peaImgRight}
				src={plante}
				alt="Feuilles de pois chiches"
			/>
		</section>
	);
}

export default Hero;
