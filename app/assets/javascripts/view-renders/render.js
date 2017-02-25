
// name reference list of all the parse function
var parseThese = [
	typographyFormat,
	pageActionExecute,	// page-specific scripts, listed in _pagejs.js
	touchRespond.init		// touchRespond function required every time
];

// run all functions within the array at once
function parseAllViews() {
	parseThese.forEach(function(fn) { fn(); });
}

// auto execute
parseAllViews();