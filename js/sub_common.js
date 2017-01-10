/*quickmenu*/
$.fn.quickMenu = function(opt){
	var ts = $(this);
	$(window).on("scroll",function(){
	  var myThis = $(this);
	  var scT = myThis.scrollTop() + opt.top;
	  ts.stop().animate({top:scT+"px"},opt.speed);
	});
};

$(function(){
	$(".quick_menu").quickMenu({top:-200, speed:900});
	$(".move_top").on("click", function() {
	    $('html, body').animate({
	        scrollTop: 0
	    }, 1000);
	});
});

