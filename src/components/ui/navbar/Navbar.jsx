import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
	return (
		<header className={styles.header}>
			<nav className={styles.navbar}>
				<div className={styles.logo}>
					<Link to="/">
						<img src="/images/logo-kedem.svg" alt="logo" />
					</Link>
				</div>
				<ul className={styles.navMenu}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/bookings">Bookings</Link>
					</li>
					<li>
						<Link to="/traiteur">Traiteur</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
