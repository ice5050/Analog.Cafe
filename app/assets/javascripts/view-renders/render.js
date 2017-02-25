
// name reference list of all the parse function
var parseThese = [
	typographyFormat,
	pageActionExecute,
	touchRespond.init		// touchRespond function required every time
];

function parseAllViews() {
	parseThese.forEach(function(fn) { fn(); });
}

// auto execute
parseAllViews();