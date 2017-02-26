// load web fonts
(function(){
	var doc = document.documentElement.classList;
	if( doc.contains("fonts-loaded") ){ return; }
	
	(new FontFaceObserver("Exo 2", {
		weight: 600
	})).load().then(function(){
		console.log("Exo 2: 600");
		doc.add("fonts-loaded-headers");
		
			Promise.all([
				(new FontFaceObserver("Lora", {
					style: "normal",
					weight: 400
				})).load(),
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
			])
			.then(function(){
				console.log("Lora");
				doc.add("fonts-loaded");
				__cookie.set('fontsLoaded', true);
			});
		
	});
	
	
}( this ));
