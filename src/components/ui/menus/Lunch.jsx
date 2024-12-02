import styles from "./Lunch.module.css";

function Lunch() {
	return (
		<div className={styles.menuContainer}>
			<h2 className={styles.menuTitle}>Menus du Midi</h2>
			<p className={styles.menuDescription}>
				Nous vous proposons chaque midi pains spéciaux traditionnels
				réalisés sur place, assortiment de mezzes accompagnés d&apos;un
				plat au choix et d&apos;un dessert.
			</p>
			<div className={styles.menu}>
				<h3>Mezzes / Dessert</h3>
				<p>19 €</p>
			</div>
			<div className={styles.menu}>
				<h3>Mezzes / Plat</h3>
				<p>22 €</p>
			</div>
			<div className={styles.menu}>
				<h3>Mezzes / Plat / Dessert</h3>
				<p>26 €</p>
			</div>
		</div>
	);
}

export default Lunch;
