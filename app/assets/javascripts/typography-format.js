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
};
document.addEventListener('DOMContentLoaded', typographyFormat);