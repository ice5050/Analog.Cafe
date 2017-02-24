
// name reference list of all the parse function
var parseThese = [
	typographyFormat,
	pageActionExecute
];

function parseAllViews() {
	parseThese.forEach(function(fn) { fn(); });
}

// auto execute on dom ready
document.addEventListener('DOMContentLoaded', parseAllViews);