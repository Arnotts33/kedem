import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import menuIcon from "../../../assets/icons/menu.svg";
import { useState } from "react";

function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<header className={styles.header}>
			<nav className={styles.navbar}>
				<div className={styles.logo}>
					<Link to="/">
						<img src="/images/logo-kedem.svg" alt="logo" />
					</Link>
				</div>

				<ul
					className={
						isMobileMenuOpen
							? styles.navMobileMenuList
							: styles.navMenuList
					}
				>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/bookings">Réservations</Link>
					</li>
					<li>
						<Link to="/traiteur">Traiteur</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
				<div
					className={styles.mobileMenu}
					onClick={() => setIsMobileMenuOpen((prev) => !prev)}
				>
					<img src={menuIcon} alt="Mobile devices menu icon" />
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
