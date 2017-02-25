

// Element selector (produces array):
function __q(q){
	return document.querySelectorAll(q);
};

// Fire event shortcut:
function __fire(e, data){
	data = (typeof data !== 'undefined') ?  data : {};
	var event = new CustomEvent(e, {'detail': data});
	this.dispatchEvent(event);
}

// "doneScrolling" event for when user stopped scrolling
(function(){
	var scrollTimer = -1;
	var scrollStopTimer = 150;
	window.addEventListener("scroll", function(){
		if (scrollTimer != -1) clearTimeout(scrollTimer);
		scrollTimer = window.setTimeout("window.__fire('doneScrolling')", scrollStopTimer);
	});
})();

// List constructor to replace switch
function __List(options) {
	if (!(this instanceof __List))  return new __List(options); // scope-safe
  Object.defineProperty(this, "select", {
  	get: function() { 
			return function(action){
				return (
					typeof options[action] ==  "undefined"
						? typeof options["default"] == "undefined" 
							? false 																	// no default
							: options["default"]() 										// default
						: options[action]()													// requested
				); 
			};
		},
		set: function(newOptions) {            
			options = newOptions;     
		}, 
	}); 
}


// Cookies (based on https://www.w3schools.com/js/js_cookies.asp )
var __cookie = {
	set: function(name, value, days) {
		value = (typeof value !== 'undefined') ?  value : true;															// default: {name: true}
		maxAge = (typeof days !== 'undefined') ?  "max-age=" + days * 24*60*60*1000 : '';		// default: Session
    document.cookie = name + "=" + value + ";" + maxAge + ";path=/";
	},
	get: function(name) {
    var name = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
	}
}