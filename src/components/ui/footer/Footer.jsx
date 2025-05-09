import styles from "./Footer.module.css";
import affiche from "../../../assets/images/affiche.webp";
import instaIcon from "../../../assets/icons/instagram.svg";
import fbIcon from "../../../assets/icons/facebook.svg";

function Footer() {
	return (
		<footer className={styles.footer} id="footer">
			<div className={styles.footerContainer}>
				<div className={styles.footerImgContainer}>
					<img
						src={affiche}
						alt="Affiche illustrations Kedem"
						className={styles.footerImg}
					/>
				</div>
				<div className={styles.footerTextContainer}>
					<h2 className={styles.footerTitle}>Kedem</h2>
					<div className={styles.footerText}>
						<div className={styles.left}>
							<div className={styles.contact}>
								<div className={styles.address}>
									<p className={styles.contactTitle}>
										Adresse :
									</p>
									<p className={styles.contactText}>
										16, rue Jean Burguet
										<br />
										33000 Bordeaux
									</p>
								</div>
								<div className={styles.phone}>
									<p className={styles.contactTitle}>
										Contact et réservations :
									</p>
									<p className={styles.contactText}>
										05 57 80 04 30
									</p>
									<p>
										<a
											href="mailto:restaurant.kedem@gmail.com"
											aria-label="Send a mail to the restaurant"
										>
											restaurant.kedem@gmail.com
										</a>
									</p>
								</div>
							</div>
						</div>
						<div className={styles.right}>
							<div className={styles.hours}>
								<p className={styles.contactTitle}>
									Horaires d&apos;ouverture :
								</p>
								<p className={styles.contactText}>
									Lundi - Vendredi : 12h - 15h
								</p>
								<p className={styles.contactText}>
									Jeudi - Vendredi : 19h30 - 23h
								</p>
							</div>
							<div className={styles.socials}>
								<a
									href="https://www.instagram.com/restaurantkedem/"
									target="_blank"
									aria-label="Link to the restaurant Instagram page"
								>
									<img
										src={instaIcon}
										alt="Instagram icon"
										className={styles.socialIcon}
									/>
								</a>
								<a
									href="https://www.facebook.com/p/Restaurant-Kedem-61551921728848/"
									target="_blank"
									aria-label="Link to the restaurant Facebook page"
								>
									<img
										src={fbIcon}
										alt="Facebook icon"
										className={styles.socialIcon}
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<p>© 2024 Kedem. Tous droits réservés.</p>
			<div className={styles.credits}>
				<div className={styles.illustrationsCredit}>
					<p>Illustrations:</p>
					<a
						href="https://www.instagram.com/ublo__/"
						target="_blank"
						rel="noreferrer"
						aria-label="Lien vers page instagram de l'illustratrice"
					>
						UBLO | Marine Lecardeur
					</a>
				</div>
				<div className={styles.developerCredit}>
					<p>Design & Développement:</p>
					<a
						href="https://www.linkedin.com/in/arnaudlht/"
						target="_blank"
						rel="noreferrer"
						aria-label="Lien vers le profil LinkedIn du développeur"
					>
						AL | Arnaud Lahaut
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
