import { useState } from "react";
import styles from "./Menus.module.css";
import menuMidi from "../../../assets/images/menu-midi.webp";
import menuSoir from "../../../assets/images/menu-soir.webp";
import MenuButton from "../../ui/buttons/MenuButton";
import Lunch from "../../ui/menus/Lunch";
import Dinner from "../../ui/menus/Dinner";

function Menus() {
	const [isLunchMenuOpen, setIsLunchMenuOpen] = useState(false);
	const [isDinnerMenuOpen, setIsDinnerMenuOpen] = useState(false);

	function toggleLunchMenu() {
		setIsLunchMenuOpen((prevLunchMenu) => !prevLunchMenu);
	}

	function toggleDinnerMenu() {
		setIsDinnerMenuOpen((prevDinnerMenu) => !prevDinnerMenu);
	}

	return (
		<section className={styles.menuSection} id="menus">
			<div className={styles.title}>
				<h2>Nos Menus</h2>
			</div>
			<div className={styles.menuBoxes}>
				<div className={styles.menuBox} onClick={toggleLunchMenu}>
					{isLunchMenuOpen ? (
						<Lunch />
					) : (
						<MenuButton image={menuMidi} caption={"Déjeuner"} />
					)}
				</div>
				<div className={styles.menuBox} onClick={toggleDinnerMenu}>
					{isDinnerMenuOpen ? (
						<Dinner />
					) : (
						<MenuButton image={menuSoir} caption={"Dîner"} />
					)}
				</div>
			</div>
		</section>
	);
}

export default Menus;
