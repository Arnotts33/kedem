import { NavLink } from "react-router-dom";
import styles from "./About.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

function About() {
	const sectionRef = useRef(null);
	const btnRef = useRef(null);

	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		const tl = gsap.timeline();

		ScrollTrigger.create({
			trigger: sectionRef.current,
			start: "top 70%",
			end: "bottom top",

			onEnter: () => {
				tl.to(btnRef.current, {
					opacity: 1,
					duration: 0.8,
					ease: "power4.inOut",
				});
			},

			onLeaveBack: () => {
				tl.to(btnRef.current, {
					opacity: 0,
					duration: 0.4,
					ease: "power4.inOut",
				});
			},
		});
	}, [sectionRef.current]);

	return (
		<section className={styles.aboutSection} ref={sectionRef}>
			<div className={styles.bookingBtn} ref={btnRef}>
				<NavLink to="/bookings" className={styles.bookingsLink}>
					Réserver
				</NavLink>
			</div>
			<h1 className={styles.title}>
				Goûts et saveurs des pays du Levant
			</h1>
			<p className={styles.text}>
				Kedem, c’est le souhait de partager avec vous un instant de
				convivialité et de découverte, une cuisine de saison aux saveurs
				délicates et épicées, accompagnée d’une sélection attentive de
				vins et boissons d’ici et d’ailleurs.
			</p>
		</section>
	);
}

export default About;
