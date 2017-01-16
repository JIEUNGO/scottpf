/*popup_인증*/
$.fn.certi = function(){
	var ts = $(this);
	var ts1 = ts.eq(0);
	var ts2 = ts.eq(1);
	var el_1 = $("<div/>",{"class":"certifi_dim"});
	ts1.on("click",function(){
		$(".certifi_phone").fadeIn(500);
		$("body").append(el_1);
	});
	ts2.on("click",function(){
		$(".certifi_email").fadeIn(500);
		$("body").append(el_1);
	});
};

/*popup_닫기버튼*/
$.fn.certi1 = function(){
	var ts = $(this);
	var btnClose = $(".btn_close");
	var btnReset = $("input[type='reset']");
	var getNum = $("input[name='phone_3']").next();

	getNum.on("click",function(){
		$(this).closest("p").next().show();
	});
	btnClose.on("click",function(){
		$(this).parent().fadeOut(500);
		$(".certifi_dim").remove();
		getNum.closest("p").next().hide();
	});
	btnReset.on("click",function(){
		ts.fadeOut(500);
		$(".certifi_dim").remove();
		getNum.closest("p").next().hide();
	});
	
	ts.on("submit",function(){

	});
};

$(function(){
	$(".certifi section a").certi();
	$(".certifi_phone,.certifi_email").certi1();
});

