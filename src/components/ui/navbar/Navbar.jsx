import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { animateScroll as scroll } from "react-scroll";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Navbar.module.css";
// import navigation from "./index";
import logo from "/images/logo-kedem.svg";
import menuIcon from "../../../assets/icons/bars-solid.svg";
import closeMenuIcon from "../../../assets/icons/xmark-solid.svg";

function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const headerRef = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline();

		tl.from(headerRef.current, {
			opacity: 0,
			y: -100,
			duration: 1.5,
			delay: 0.5,
			ease: "power4.inOut",
		});
	}, []);

	function closeMobileMenu() {
		setIsMobileMenuOpen(false);
	}

	return (
		<header className={styles.header} ref={headerRef} id="header">
			<nav className={styles.navbar}>
				<div className={styles.logo} onClick={closeMobileMenu}>
					<NavLink to="/">
						<img src={logo} alt="logo" width="100" height="100" />
					</NavLink>
				</div>

				<ul
					className={
						isMobileMenuOpen ? styles.navMobileMenuList : styles.navMenuList
					}
				>
					<li>
						<HashLink
							smooth
							to="/#menus"
							onClick={closeMobileMenu}
							className={styles.navLink}
						>
							Menus
						</HashLink>
					</li>
					<li>
						<NavLink
							to="/traiteur"
							onClick={closeMobileMenu}
							className={styles.navLink}
						>
							Traiteur
						</NavLink>
					</li>
					<li>
						<a
							href="#footer"
							onClick={(e) => {
								e.preventDefault();
								closeMobileMenu();
								scroll.scrollToBottom({
									smooth: true,
									duration: 800,
								});
							}}
							className={styles.navLink}
						>
							Contact
						</a>
					</li>

					<button
						className={styles.bookingsLink}
						onClick={closeMobileMenu}
						aria-label="Réservations"
						data-zc-action="open"
					>
						Réservations
					</button>
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
