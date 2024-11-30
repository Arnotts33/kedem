import About from "./About";
import Chefs from "./Chefs";
import Hero from "./Hero";
import styles from "./Home.module.css";
import Menus from "./Menus";

function Home() {
	return (
		<div className={styles.container}>
			<Hero />
			<About />
			<Chefs />
			<Menus />
		</div>
	);
}

export default Home;
