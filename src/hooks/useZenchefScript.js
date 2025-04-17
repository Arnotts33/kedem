import { useEffect } from "react";

export default function useZenchefScript() {
	useEffect(() => {
		const scriptId = "zenchef-sdk";

		// Ne pas injecter le script s’il est déjà là
		const existingScript = document.getElementById(scriptId);

		if (existingScript) {
			// Si le widget est déjà monté, éviter de le remonter
			if (window.zc && !document.querySelector("iframe[src*='zenchef']")) {
				window.zc.mount();
			}
			return;
		}

		// Création du script
		const script = document.createElement("script");
		script.id = scriptId;
		script.src = "https://sdk.zenchef.com/v1/sdk.min.js";
		script.async = true;

		// Quand le script est chargé, on monte le widget
		script.onload = () => {
			if (window.zc) {
				window.zc.mount();
			}
		};

		document.body.appendChild(script);

		// Pas de remove du script ici : Zenchef n’aime pas ça.
		// Si on veut nettoyer, mieux vaut virer la div du widget uniquement :
		return () => {
			const container = document.querySelector(".zc-widget-config");
			if (container) {
				container.innerHTML = ""; // Supprime le contenu (iframe, etc.)
			}
		};
	}, []);
}
