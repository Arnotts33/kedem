import styles from "./Gallery.module.css";
import bbqImg from "../../../assets/images/bbq.webp";
import confitImg from "../../../assets/images/confit.webp";
import marcheImg from "../../../assets/images/marche.webp";
// import dessertImg from "../../../assets/images/dessert.webp";
// import thonImg from "../../../assets/images/thon.webp";

const images = [bbqImg, confitImg, marcheImg];

function Gallery() {
	return (
		<section className={styles.gallerySection}>
			<div className={styles.gallery}>
				{images.map((image, index) => (
					<div key={index} className={styles.galleryItem}>
						<img src={image} alt="Gallery" />
					</div>
				))}
			</div>
		</section>
	);
}

export default Gallery;
