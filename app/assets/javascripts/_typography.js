function typographyFormat(){
	__q("blockquote p:first-child").forEach(function(el) {
		(el.innerHTML.length < 175 ) ? el.parentElement.classList.add("short") : false;
	});
	__q(".toc-chartrim").forEach(function(el) {
		trim = 220;
		textLength = el.innerHTML.length;
		ellipsis = (textLength >= trim) ? '...' : '';
		trimmed = el.innerHTML.substr(0, trim);
		el.innerHTML = (textLength >= trim) ? trimmed.substr(0, Math.min(trimmed.length, trimmed.lastIndexOf(" "))) + ellipsis : el.innerHTML;
		el.innerHTML = (trimmed == '') ? '...' : el.innerHTML;
	});
	
	// Title Case Capitalization (requires to-title-case-gouch)
	__q("h1").forEach(function(el) {
		el.innerHTML = el.innerHTML.toTitleCase();
	});
	__q("h2").forEach(function(el) {
		el.innerHTML = el.innerHTML.toTitleCase();
	});
	__q("h3").forEach(function(el) {
		el.innerHTML = el.innerHTML.toTitleCase();
	});
	__q(".subtitle").forEach(function(el) {
		el.innerHTML = el.innerHTML.toTitleCase();
	});
	__q(".button").forEach(function(el) {
		el.innerHTML = el.innerHTML.toTitleCase();
	});
};
document.addEventListener('DOMContentLoaded', typographyFormat);