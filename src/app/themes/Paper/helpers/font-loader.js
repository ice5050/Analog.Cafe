// tools
import FontFaceObserver from "fontfaceobserver"

// return 
export const loadFonts = () => {
	const doc = document.documentElement.classList
	if( doc.contains("fonts-loaded") ){ return }    

	(new FontFaceObserver("Exo 2", {
		style: "normal",
		weight: 600
		}
	))
	.load(null, 5000)
	.then(function(){
		doc.add("fonts-loaded-headers")

		Promise.all([
			(new FontFaceObserver("Lora", {
				style: "normal",
				weight: 400
			})).load(null, 5000),
			(new FontFaceObserver("Lora", {
				style: "italic",
				weight: 400
			})).load(),
			(new FontFaceObserver("Lora", {
				style: "normal",
				weight: 700
			})).load(),
			(new FontFaceObserver("Lora", {
				style: "italic",
				weight: 700
			})).load(),
			]).then(
			function(){
				doc.add("fonts-loaded")
				//__cookie.set('fontsLoaded', true)
			}, function(){ console.log("Lora FAILED") }
		)}, function(){ console.log("Exo 2 FAILED") })
}
