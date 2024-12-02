import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import styles from "./Navbar.module.css";
import navigation from "./index";
import menuIcon from "../../../assets/icons/bars-solid.svg";
import closeMenuIcon from "../../../assets/icons/xmark-solid.svg";

function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	function closeMobileMenu() {
		setIsMobileMenuOpen(false);
	}

	return (
		<header className={styles.header}>
			<nav className={styles.navbar}>
				<div className={styles.logo} onClick={closeMobileMenu}>
					<NavLink to="/">
						<img src="/images/logo-kedem.svg" alt="logo" />
					</NavLink>
				</div>

				<ul
					className={
						isMobileMenuOpen
							? styles.navMobileMenuList
							: styles.navMenuList
					}
				>
					<li>
						<HashLink smooth to="/#menus" onClick={closeMobileMenu}>
							Menus
						</HashLink>
					</li>
					{navigation.map((item) => (
						<li key={item.name}>
							<NavLink to={item.link} onClick={closeMobileMenu}>
								{item.name}
							</NavLink>
						</li>
					))}
				</ul>
				<div
					className={styles.mobileMenu}
					onClick={() => setIsMobileMenuOpen((prev) => !prev)}
				>
					<img
						src={isMobileMenuOpen ? closeMenuIcon : menuIcon}
						alt="Mobile devices menu icon"
					/>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
