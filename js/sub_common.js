/*quickmenu*/
$.fn.quickMenu = function(opt){
	var visual_height = $(".visual_wrap").height();
	var ts = $(this);
	$(window).on("scroll",function(){
	  var myThis = $(this);
	  var scT = myThis.scrollTop() - visual_height + 80;
	  var scH = $('body').prop("scrollHeight")-$("#footer_wrap").height()-$(".quick_menu").height()-200;
	  //console.log(myThis.scrollTop());
	  console.log(scH);
	  if(myThis.scrollTop() >= scH) {
	  	ts.stop();
	  	return false;
	  }
	  if(myThis.scrollTop() <= visual_height) {
	  	ts.stop().animate({top:"108px"},opt.speed-500);
	  	return false;
	  } else {
			ts.stop().animate({top:scT+"px"},opt.speed);
		}
	});
};

$(function(){
	$(".quick_menu").quickMenu({speed:900});
	$(".move_top").on("click", function() {
		$('html, body').animate({scrollTop: 0}, 1000);
	});
});