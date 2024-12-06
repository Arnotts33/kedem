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

		gsap.set(btnRef.current, { autoAlpha: 0 });

		ScrollTrigger.create({
			trigger: sectionRef.current,
			start: "top 70%",
			end: "bottom top",
			onEnter: () => {
				tl.to(btnRef.current, {
					autoAlpha: 1,
					duration: 0.6,
					ease: "power3.inOut",
				});
			},
			onLeaveBack: () => {
				tl.to(btnRef.current, {
					autoAlpha: 0,
					duration: 0.6,
					ease: "power4.inOut",
				});
			},
		});
	}, []);

	return (
		<section className={styles.aboutSection} ref={sectionRef}>
			<NavLink to="/bookings" className={styles.bookingsLink}>
				<div className={styles.bookingBtn} ref={btnRef}>
					Réserver
				</div>
			</NavLink>
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
