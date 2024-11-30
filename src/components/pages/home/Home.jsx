import About from "./About";
import Chefs from "./Chefs";
import Hero from "./Hero";
import styles from "./Home.module.css";

function Home() {
	return (
		<div className={styles.container}>
			<Hero />
			<About />
			<Chefs />
		</div>
	);
}

export default Home;
