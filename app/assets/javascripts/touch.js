


// REWRITE TOUCH AND CLICK ACTIVE STATES FOR ".-active" CSS class
var trSuper_self;
var trSuper_e = {};
var trSuper_f;
var touchRespond = function(){

	// remove all other active states on the document
	var init = function(){
		__each(__q('a'), function(i){
			__q('a')[i].classList.remove("-active");
		});
	};
	
	// add events to all elements on page
	__each(__q('a'), function(i){
		
		var pointerDown = false;
		var activeAvailable = true;
		var pointerLocFirst = {};
		var pointerLocLast = {};
		var touchTimer = -1;
		
		var touchDelay = 500;
		var slack = 35;
		
		// add/remove active classes
		var activate = function(self){ self.classList.add("-active"); }
		var deactivate = function(self){ self.classList.remove("-active"); activeAvailable = false;}
		
		// allow dragging and still keeping element active for [slack] pixels
		var outsideRange = function(a, b){
			getX = function(o) { return (typeof o.clientX !== 'undefined') ?  o.clientX : o.pageX; }
			getY = function(o) { return (typeof o.clientY !== 'undefined') ?  o.clientY : o.pageY; }
			withinRange = function(n1, n2) { if(n1 - slack <= n2 && n2 - slack <= n1) return true; else return false; }
						
			if(	withinRange(getX(a), getX(b))	&& withinRange(getY(a), getY(b)) ) return false; 
			else return true;
		}
		
		// activate down state
		var downstate = trSuper_f = function(self, e){
			activeAvailable = true;
			activate(self);
			pointerDown = true;
			pointerLocFirst = e;
		}
		var upstate = function(self){
			if(pointerDown && activeAvailable) { init(); activate(self); }
			pointerDown = false;
		}
		__q('a')[i].addEventListener("mousedown", function(e){ downstate(this, e); });
		__q('a')[i].addEventListener("mouseup", function(){ upstate(this); });
		__q('a')[i].addEventListener("touchstart", function(e){
			if (e.touches.length == 1){
				trSuper_self = this;
				trSuper_e = e.touches[0];
				
				if (touchTimer != -1) clearTimeout(touchTimer);
				//touchTimer = window.setTimeout("trSuper_f(trSuper_self, trSuper_e);", touchDelay);
			}
		});
		__q('a')[i].addEventListener("touchend", function(){
				upstate(this);
		});
		
		
		// deactivate down state
		var pointermove = function(self, e){
			if(activeAvailable){
				pointerLocLast = e;
				if(pointerDown && outsideRange(pointerLocFirst, pointerLocLast))
					deactivate(self);
			}
		}
		var pointerout = function(self){ if(pointerDown && activeAvailable) deactivate(self); }
		__q('a')[i].addEventListener("mousemove", function(e){ pointermove(this, e); });
		__q('a')[i].addEventListener("mouseout", function(){ pointerout(this); });
		__q('a')[i].addEventListener("touchmove", function(e){
			pointermove(this, e.targetTouches[0]);
		});
		__q('a')[i].addEventListener("touchleave", function(){ pointerout(this); });
		

	});	
};
document.addEventListener('DOMContentLoaded', touchRespond);