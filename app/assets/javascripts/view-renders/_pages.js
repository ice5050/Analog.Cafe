


// list of special functions per page:
pageAction = new __List({
	"index":			function(){
	},
	"favorites":	function(){
		var heartButton = '<div class="toc-favorite"><a href="#" class="favorite -active"></a></div>';
		__q(".table-of-contents li").forEach(function(el) {
			el.innerHTML.includes(heartButton) ? false :
			el.innerHTML += '<div class="toc-favorite"><a href="#" class="favorite -active"></a></div>';
		});
	},
	"submit":			function(){
	},
	"articles":		function(){
	},
	"essays":			function(){
	}
});




// get page id, display active state on all related buttons and execute special functions:
function pageActionExecute(){
	currentAction = __q("body")[0].getAttribute('data-controller-action');
	__q(".button-" + currentAction).forEach(function(el) { el.classList.add("-view"); });
	pageAction.select(currentAction);
}