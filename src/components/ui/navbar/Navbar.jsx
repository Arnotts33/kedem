import styles from "./Navbar.module.css";

function Navbar() {
	return (
		<header className={styles.header}>
			<nav>
				<div>
					<a href="/">
						<img
							src="/images/logo-kedem.svg"
							alt="logo"
							width={50}
						/>
					</a>
				</div>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/bookings">Bookings</a>
					</li>
					<li>
						<a href="/traiteur">Traiteur</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
