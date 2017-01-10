/*quickmenu*/
$.fn.quickMenu = function(opt){
	var ts = $(this);
	$(window).on("scroll",function(){
	  var myThis = $(this);
	  var scT = myThis.scrollTop() + opt.top;
	  ts.stop().animate({top:scT+"px"},opt.speed);
	  
	  var content = $(".content");
	  var qkHieght = content.offset().top;
	  console.log(qkHieght);
	  
	});
};

$(function(){
	$(".quick_menu").quickMenu({top:-500, speed:900});
	$(".move_top").on("click", function() {
		$('html, body').animate({scrollTop: 0}, 1000);
	});
});

/*$(document).ready(function(){
  var top = parseInt($(".quick_menu").css("top"));  //window가 스크롤되어질때 function수행
  $(window).scroll(function(){  //스크롤되어진 top의 위치 구하기
    var scrollTop = $(window).scrollTop(); //이동할 top의 위치 구하기
    var moveTop=scrollTop-300;
    $(".quick_menu").stop();//기존에 수행중인 애니메이션 멈추기  //퀵메뉴를 1초간 moveTop의 위치로 이동하기
    $(".quick_menu").animate({top:moveTop},1000);
  });
});*/