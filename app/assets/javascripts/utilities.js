function __q(q){
	return document.querySelectorAll(q);
};
function __each(el, f){
	for (var i = 0; i < el.length; i++) {
		f(i);
	}
};
/* 
function __parent(el, selector, stopSelector) {
  var retval = null;
  while (el) {
    if (el.matches(selector)) {
      retval = el;
      break
    } else if (stopSelector && el.matches(stopSelector)) {
      break
    }
    el = el.parentElement;
  }
  return retval;
}
*/
