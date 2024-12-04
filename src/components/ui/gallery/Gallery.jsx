import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import styles from "./Gallery.module.css";
import thonImg from "../../../assets/images/thon.webp";
import briocheImg from "../../../assets/images/brioche.webp";
import bbqImg from "../../../assets/images/bbq.webp";
import confitImg from "../../../assets/images/confit.webp";
import hummusImg from "../../../assets/images/hummus.webp";
import { useGSAP } from "@gsap/react";

const images = [thonImg, briocheImg, bbqImg, confitImg, hummusImg];

function Gallery() {
	const sectionRef = useRef(null);
	const columnRefs = useRef([]);

	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		columnRefs.current.forEach((col, index) => {
			gsap.to(col, {
				y: index % 2 === 0 ? "-140vh" : "100vh",
				ease: "none",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top top",
					end: "bottom bottom",
					scrub: true,
				},
			});
		});
	}, []);

	return (
		<section className={styles.gallerySection} ref={sectionRef}>
			<h1>Kedem</h1>
			<h1>Kedem</h1>
			<h1>Kedem</h1>
			<div className={styles.images}>
				{[0, 1, 2].map((colIndex) => (
					<div
						key={colIndex}
						className={styles.column}
						ref={(el) => (columnRefs.current[colIndex] = el)}
					>
						{images.map((image, index) => (
							<div key={index} className={styles.imageContainer}>
								<img
									src={image}
									alt={`Image ${index}`}
									loading="lazy"
								/>
							</div>
						))}
					</div>
				))}
			</div>
		</section>
	);
}

export default Gallery;
