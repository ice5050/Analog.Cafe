function typographyFormat(){
	var bq = __q("blockquote p:first-child");
	__each(bq, function(i){
		(bq[i].innerHTML.length < 175 ) ? bq[i].parentElement.classList.add("short") : false;
	});
};