import { useState } from "react";

const useAvailableTimes = () => {
	const [availableTimes, setAvailableTimes] = useState([]);

	const updateAvailableTimes = (selectedDate) => {
		const dayOfWeek = selectedDate.getDay(); // 0 = dimanche, ..., 6 = samedi
		if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3) {
			setAvailableTimes(["12:00", "12:30", "13:00", "13:30"]); // Midi uniquement
		} else {
			setAvailableTimes([
				"12:00",
				"12:30",
				"13:00",
				"13:30",
				"19:00",
				"19:30",
				"20:00",
				"20:30",
				"21:00",
				"21:30",
			]); // Midi et soir
		}
	};

	return { availableTimes, updateAvailableTimes };
};

export default useAvailableTimes;
