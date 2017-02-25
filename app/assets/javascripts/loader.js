// load web fonts
(function(w){
	var doc = w.document.documentElement.classList;
	if( doc.contains("fonts-loaded") ){ return; }
	
	var critical = new FontFaceObserver("Exo 2", {
		weight: 600
	});
	
	w.Promise.all([ critical.load() ]).then(function(){
		console.log('critical fonts loaded');
		w.Promise.all([
			(new FontFaceObserver("Lora", {
				weight: 400
			})).load(),
			(new FontFaceObserver("Lora", {
				weight: 700
			})).load(),
			(new FontFaceObserver("Lora", {
				style: "italic"
			})).load(),
			(new FontFaceObserver("Lora", {
				weight: 700,
				style: "italic"
			})).load(),
		]).then(function(){
			console.log('secondary fonts loaded');
			doc.add("fonts-loaded");
			__cookie.set('fontsLoaded', true);
		});
	});
		
}( this ));
