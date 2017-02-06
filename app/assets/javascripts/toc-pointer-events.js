function tocPointerEvents(){
	var tocEls = [ __q('.toc-figure > a'),  __q('.toc-summary > a'), __q('.toc-cover > a') ];
	var tocLi = __q('.table-of-contents li, .table-of-contents--feature > section');
	
	// util: add or remove "active" class to parent li or featured section element
	function _upActive(el, b){ e = el.parentElement.parentElement.classList; b? e.add("active") : e.remove("active"); }
	// util: add event listener and perform _upActive()
	function _ua1(el, event){ el.addEventListener(event, function(){ _upActive(this, true); }); }
	function _ua0(el, event){ el.addEventListener(event, function(){ _upActive(this, false); }); }
	// util: check if element exists
	function _is(el){ if(el !== undefined) return true; }
 
 	// touchstart-end
 	__each(tocLi, function(i){
 		__each(tocEls, function(j){
 			_is(tocEls[j][i])? _ua1(tocEls[j][i], "touchstart") : false;
 		});
	});
	document.addEventListener("touchend", function(){ __each(tocLi, function(i){ tocLi[i].classList.remove("active"); }); });
	
	// mouseover-out
	__each(tocLi, function(i){
 		__each(tocEls, function(j){
 			_is(tocEls[j][i])? _ua1(tocEls[j][i], "mouseover") : false;
 		});
 		__each(tocEls, function(j){
 			_is(tocEls[j][i])? _ua0(tocEls[j][i], "mouseout") : false;
 		});
	});
	
}