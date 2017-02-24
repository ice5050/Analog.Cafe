


// list of special functions per page:
pageAction = new __List({
	"index": 			function(){
		var analogCoffee = document.querySelector('.logo-container');
		analogCoffee.classList.add("-view");
	},
	"favorites":	function(){
		__q(".table-of-contents li").forEach(function(el) {
			el.innerHTML += '<div class="toc-favorite"><a href="#" class="favorite -active"></a></div>';
		});
		__q(".button-favorites").forEach(function(el) { el.classList.add("-view"); });
	}
});




// get page id and execute
function pageActionExecute(){
	currentAction = __q("body")[0].getAttribute('data-controller-action');
	pageAction.select(currentAction);
}