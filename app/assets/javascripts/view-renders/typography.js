function typographyFormat(){
	__each(__q("blockquote p:first-child"), function(el) {
		(el.innerHTML.length < 175 ) ? el.parentElement.classList.add("short") : false;
	});
	__each(__q(".toc-chartrim"), function(el) {
		trim = 220;
		textLength = el.innerHTML.length;
		ellipsis = (textLength >= trim) ? '...' : '';
		trimmed = el.innerHTML.substr(0, trim);
		el.innerHTML = (textLength >= trim) ? trimmed.substr(0, Math.min(trimmed.length, trimmed.lastIndexOf(" "))) + ellipsis : el.innerHTML;
		el.innerHTML = (trimmed == '') ? '...' : el.innerHTML;
	});
	
	// Title Case Capitalization (requires to-title-case-gouch)
	__each(__q("h1"), function(el) {
		el.innerHTML = el.innerHTML.toTitleCase();
	});
	__each(__q("h2"), function(el) {
		el.innerHTML = el.innerHTML.toTitleCase();
	});
	__each(__q("h3"), function(el) {
		el.innerHTML = el.innerHTML.toTitleCase();
	});
	__each(__q(".subtitle"), function(el) {
		el.innerHTML = el.innerHTML.toTitleCase();
	});
	__each(__q(".button"), function(el) {
		el.innerHTML = el.innerHTML.toTitleCase();
	});
};