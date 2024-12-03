import { useState } from "react";

function useWeb3Form(accessKey) {
	const [result, setResult] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsSubmitting(true);

		const formData = new FormData(event.target);
		formData.append("access_key", accessKey);

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData,
			});
			const data = await response.json();

			if (data.success) {
				setResult("Formulaire envoyé avec succès !");
				event.target.reset();
			} else {
				console.error("Erreur", data);
				setResult(data.message);
			}
		} catch (error) {
			console.error("Erreur de soumission", error);
			setResult("Une erreur s'est produite. Veuillez réessayer.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return { result, isSubmitting, handleSubmit };
}

export default useWeb3Form;
