
// name reference list of all the parse function
var parseThese = [
	typographyFormat,
	pageActionExecute,	// page-specific scripts, listed in _pagejs.js
	touchRespond.init		// touchRespond function required every time
];

// run all functions within the array at once
function parseAllViews() {
	__each(parseThese, function(fn) { fn(); });
}

// auto execute on dom ready
document.addEventListener('DOMContentLoaded', parseAllViews);