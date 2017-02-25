// load web fonts
var loadFonts = {
	options: {},
	init: function(){
		var content = new FontFaceObserver("Lora");
		var header = new FontFaceObserver("Exo 2");

		Promise.all([
			content.load(),
			header.load()
		]).then(function () {
			__q('html')[0].classList.add("fonts-loaded");
			__cookie.set('fontsLoaded', true)
		}).catch(function () {
			//
		});
	}
};

if (!__cookie.get('fontsLoaded')) loadFonts.init();