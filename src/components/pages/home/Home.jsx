import About from "./About";
import Hero from "./Hero";
import styles from "./Home.module.css";

function Home() {
	return (
		<div className={styles.container}>
			<Hero />
			<About />
		</div>
	);
}

export default Home;