


(function(){
	isScrolling = false;
	tapVerifying = false;
	tapVerifyDelay = 150;

	// Hide :active classes (via SASS, operated via .no-tap) while isScrolling
	window.addEventListener("scroll", function(){
		__q('body')[0].classList.add("no-tap");
		isScrolling = true;
	});
	window.addEventListener("doneScrolling", function(){
		isScrolling = false;
		if(!tapVerifying)__q('body')[0].classList.remove("no-tap");
	});

	// Wait adding :active class to see if user is about to drag/scroll
	var tapTimer = -1;
	window.addEventListener("touchstart", function(){
		tapVerifying = true;
		if (tapTimer != -1) clearTimeout(tapTimer);
		tapTimer = window.setTimeout("if(!isScrolling)__q('body')[0].classList.remove('no-tap');", tapVerifyDelay);
	});
	
	// release :active for use only when finger has lifted (if the user has been scrolling)
	window.addEventListener("touchend", function(){
		tapVerifying = false;
	});
})();