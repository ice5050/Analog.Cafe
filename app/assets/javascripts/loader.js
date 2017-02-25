// load web fonts
(function(w){
	var doc = w.document.documentElement.classList;
	if( doc.contains("fonts-loaded") ){ return; }
	
	(new FontFaceObserver("Exo 2", {
		weight: 600
	})).load().then(function(){
		console.log("Exo 2");
		doc.add("fonts-loaded-headers");
		(new FontFaceObserver("Lora")).load().then(function(){
			console.log("Lora");
			console.log("All fonts loaded");
			doc.add("fonts-loaded");
			__cookie.set('fontsLoaded', true);
		});
	});
	
}( this ));
