import styles from "./Hero.module.css";
import illustration from "../../../assets/images/illustration-marche.webp";
import planteSVG from "../../../assets/images/kedem-plantes-pois.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Hero() {
	const leftPeaImgRef = useRef(null);
	const rightPeaImgRef = useRef(null);
	const titleRef = useRef(null);
	const heroImgRef = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline();

		tl.from(heroImgRef.current, {
			opacity: 0,
			scale: 1.3,
			duration: 2,
			ease: "power4.inOut",
		});
		tl.from(
			titleRef.current,
			{
				y: -300,
				opacity: 0,
				duration: 1.5,
				ease: "power3.inOut",
			},
			"-=1.6"
		)
			.from(
				leftPeaImgRef.current,
				{
					x: -300,
					duration: 1.5,
					ease: "power3.inOut",
				},
				"-=1.6"
			)
			.from(
				rightPeaImgRef.current,
				{
					x: 300,
					duration: 1.5,
					ease: "power3.inOut",
				},
				"-=1.6"
			);
	}, []);

	return (
		<section className={styles.heroSection}>
			<img
				className={styles.peaImg}
				src={planteSVG}
				ref={leftPeaImgRef}
				alt="Feuilles de pois chiches"
			/>

			<div className={styles.heroCenter}>
				<div className={styles.heroTitle} ref={titleRef}>
					<h1 className={styles.title}>Kedem</h1>
					<p className={styles.subtitle}>Restaurant</p>
				</div>
				<div className={styles.heroImg} ref={heroImgRef}>
					<img
						src={illustration}
						alt="Illustration Marche"
						width={345}
						height={343}
						fetchPriority="high"
					/>
				</div>
			</div>
			<img
				className={styles.peaImgRight}
				src={planteSVG}
				ref={rightPeaImgRef}
				alt="Feuilles de pois chiches"
			/>
		</section>
	);
}

export default Hero;
