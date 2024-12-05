import styles from "./NotFound.module.css";

function NotFound() {
	return (
		<div className={styles.notFoundContainer}>
			<h1>404</h1>
			<p>Oups ! La page que vous cherchez n&apos;existe pas.</p>
			<a href="/">Retour à la page d&apos;accueil</a>
		</div>
	);
}

export default NotFound;
