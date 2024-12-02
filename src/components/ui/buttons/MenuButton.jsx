import styles from "./MenuButton.module.css";

function MenuButton({ image, caption }) {
	return (
		<div className={styles.menuBox}>
			<img src={image} alt="Menu image" loading="lazy" />
			<p className={styles.caption}>{caption}</p>
		</div>
	);
}

export default MenuButton;
