/*lnb, lnb2*/
$.fn.lnb = function(){
	var ts = $(this);
	var lnbA = " ." + ts.attr("class") + ">ul>li>a";
	//$(".lnb .on").next().show();
	$(".lnb>ul>li>a").not(".on").find("+ul").hide();

	$(document).on("click", lnbA, function(e){
			e.preventDefault();
      var myThis = $(this);
      if(myThis.next().is(":hidden")) {
        $(".lnb .on").removeClass('on');
        $(".lnb li ul:visible").slideUp(300);
        myThis.addClass("on");
        myThis.next().slideDown(300);
      } else {
        myThis.removeClass('on');   
        $(".lnb li ul:visible").slideUp(300);
      }
  });
  var lnbSub = " ." + ts.attr("class") + ">ul>li>ul>li>a";
  $(document).on("click", lnbSub, function(e){
		e.preventDefault();
  	var myThis = $(this);
  	$(".lnb .active").removeClass('active');
  	var lnbsubA = myThis.closest("ul").find("li a.active");
  	lnbsubA.attr("class","");	  	
  	myThis.addClass("active");
  });
};
$.fn.lnb2 = function(){
	var ts = $(this);
	var lnbA = ".pc" + " ." + ts.attr("class") + ">ul>li>a"+",.tablet" + " ." + ts.attr("class") + ">ul>li>a";
	$(document).on("click", lnbA, function(){
		var myThis = $(this);
		var lnb2 = myThis.closest("ul").find("li a.on")
		console.log(lnb2);
			lnb2.attr("class", "");
			myThis.addClass("on");
	});
};

/*quickmenu*/
$.fn.quickMenu = function(opt){
	var visual_height = $(".visual_wrap").height();
	var ts = $(this);
	$(window).on("scroll",function(){
	  var myThis = $(this);
	  var scT = myThis.scrollTop() - visual_height + 80;
	  var scH = $('body').prop("scrollHeight")-$("#footer_wrap").height()-$(".quick_menu").height()-200;
	  if(myThis.scrollTop() >= scH) {
	  	ts.stop();
	  	return false;
	  }
	  if(myThis.scrollTop() < visual_height) {
	  	ts.stop().animate({top:"108px"},opt.speed-500);
	  	return false;
	  } else {
			ts.stop().animate({top:scT+"px"},opt.speed);
		}
	});
};

$(function(){
	$(".lnb").lnb();
	$(".lnb_2").lnb2();
	$(".quick_menu").quickMenu({speed:900});
	$(".move_top").on("click", function() {
		$('html, body').animate({scrollTop: 0}, 1000);
	});
});