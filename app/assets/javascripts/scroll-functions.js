






window.addEventListener("scroll", function(){
	__q('body')[0].classList.add("scrolling");
});
window.addEventListener("doneScrolling", function(){ console.log(1);
	__q('body')[0].classList.remove("scrolling");
});