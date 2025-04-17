import { useEffect } from "react";

export default function ZenchefWidget() {
	useEffect(() => {
		const scriptId = "zenchef-sdk";
		if (document.getElementById(scriptId)) return;

		const existingScript = document.querySelector(
			"script[src='https://sdk.zenchef.com/v1/sdk.min.js']"
		);
		if (existingScript) return;

		const el = document.getElementsByTagName("script")[0];
		if (!el?.parentNode) return;

		const js = document.createElement("script");
		js.id = scriptId;
		js.async = true;
		js.src = "https://sdk.zenchef.com/v1/sdk.min.js";

		el.parentNode.insertBefore(js, el);
	}, []);

	return (
		<div
			className="zc-widget-config"
			data-restaurant="375852"
			data-open="2000"
			style={{ display: "none" }} // planqué mais présent pour Zenchef
		/>
	);
}
