function typographyFormat(){
	__q("blockquote p:first-child").forEach(function(el) {
		(el.innerHTML.length < 175 ) ? el.parentElement.classList.add("short") : false;
	});
};