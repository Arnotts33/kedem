const dateOptions = {
	dateFormat: "d/m/Y",
	disable: [
		function (date) {
			// Disable dimanche (0) et samedi (6)
			return date.getDay() === 0 || date.getDay() === 6;
		},
	],
	locale: {
		firstDayOfWeek: 1, // La semaine commence le lundi
	},
};

export default dateOptions;
