import styles from "./Dinner.module.css";

function Dinner() {
	return (
		<div className={styles.menuContainer}>
			<h2 className={styles.menuTitle}>Menus du Soir</h2>
			<p className={styles.menuDescription}>
				Deux soirs par semaine, embarquez dans notre univers culinaire inspiré
				de nos voyages et origines pour une découverte en plusieurs étapes.
			</p>
			<div className={styles.menu}>
				<h3>Menu en quatre étapes </h3>
				<p>39 €</p>
			</div>
			<div className={styles.menu}>
				<h3>Menu en cinq étapes</h3>
				<p>45 €</p>
			</div>
			<div className={styles.menu}>
				<h3>Menu en six étapes</h3>
				<p>52 €</p>
			</div>
		</div>
	);
}

export default Dinner;
