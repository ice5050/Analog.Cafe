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
			sessionStorage.fontsLoaded = true;
		}).catch(function () {
			sessionStorage.fontsLoaded = false;
		});
	}
};

if (sessionStorage.fontsLoaded) __q('html')[0].classList.add("fonts-loaded");
else  document.addEventListener('DOMContentLoaded', loadFonts.init);