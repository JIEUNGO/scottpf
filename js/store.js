$(function(){
	var storeSelect = function(){
		var ts = $(this);
		var myUl = $(".store_wrap h3+ul");

		if(myUl.is(":hidden")){
			$(myUl+":visible").hide();
			$(this+" h3+ul").show();
		}
	};
	$(".store_wrap h3 a").on("click",storeSelect);
});