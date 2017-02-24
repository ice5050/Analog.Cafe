


// list of special functions per page:
pageAction = new __List({
	"index": 			function(){
		var analogCoffee = document.querySelector('.logo-container');
		analogCoffee.className += " active";
	},
	"favorites":	function(){
		__q(".table-of-contents li").forEach(function(el) {
			el.innerHTML += '<div class="toc-favorite"><a href="#" class="favorite -active"></a></div>';
		});
	}
});




// get page id and execute
function pageActionExecute(){
	currentAction = __q("body")[0].getAttribute('data-controller-action');
	pageAction.select(currentAction);
}