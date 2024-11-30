import styles from "./Menus.module.css";
import menuMidi from "../../../assets/images/menu-midi.webp";
import menuSoir from "../../../assets/images/menu-soir.webp";
import MenuButton from "../../ui/buttons/MenuButton";

function Menus() {
	return (
		<section className={styles.menuSection}>
			<div className={styles.title}>
				<h2>Nos Menus</h2>
			</div>
			<div className={styles.menuBoxes}>
				<MenuButton image={menuMidi} caption={"Déjeuner"} />
				<MenuButton image={menuSoir} caption={"Dîner"} />
			</div>
		</section>
	);
}

export default Menus;
