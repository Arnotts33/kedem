import { useEffect } from "react";

export default function ZenchefWidget() {
	useEffect(() => {
		console.log("Zenchef script injected");

		const scriptId = "zenchef-sdk";
		if (document.getElementById(scriptId)) return;

		const script = document.createElement("script");
		script.id = scriptId;
		script.async = true;
		script.src = "https://sdk.zenchef.com/v1/sdk.min.js";

		document.body.appendChild(script);
	}, []);

	return (
		<div
			className="zc-widget-config"
			data-restaurant="375852"
			data-lang="fr"
			// data-open="2000"
		/>
	);
}
