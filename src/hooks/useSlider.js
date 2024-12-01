import { useRef } from "react";

const useSlider = () => {
	const trackRef = useRef(null);

	const handleOnDown = (e) => {
		const clientX = e.clientX || e.touches[0].clientX;
		trackRef.current.dataset.mouseDownAt = clientX;
	};

	const handleOnUp = () => {
		if (!trackRef.current) return;
		trackRef.current.dataset.mouseDownAt = "0";
		trackRef.current.dataset.prevPercentage =
			trackRef.current.dataset.percentage || "0";
	};

	const handleOnMove = (e) => {
		if (!trackRef.current || trackRef.current.dataset.mouseDownAt === "0")
			return;

		const clientX = e.clientX || e.touches[0].clientX;
		const mouseDelta =
			parseFloat(trackRef.current.dataset.mouseDownAt) - clientX;
		const maxDelta = window.innerWidth / 2;

		const percentage = (mouseDelta / maxDelta) * -100;
		const nextPercentageUnconstrained =
			parseFloat(trackRef.current.dataset.prevPercentage) + percentage;
		const nextPercentage = Math.max(
			Math.min(nextPercentageUnconstrained, 10),
			-100
		);

		trackRef.current.dataset.percentage = nextPercentage;
		trackRef.current.style.transform = `translate(${nextPercentage}%, 0)`;
	};

	return { trackRef, handleOnDown, handleOnUp, handleOnMove };
};

export default useSlider;
