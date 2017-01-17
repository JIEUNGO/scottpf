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
	
	/*클릭이벤트*/
	ts.on("submit",function(){
		var phone2 = $("#phone_2")
		var reg_phone2 =  /\d{3,4}$/g;
		var result_phone2 = reg_phone2.exec(phone2.val());

		var phone3 = $("#phone_3")
		var reg_phone3 =  /\d{4}$/g;
		var result_phone3 = reg_phone3.exec(phone3.val());

		var certifi_num = $("#certifi_num");
		var reg_num =  /\d{6}$/g;
		var result_num = reg_num.exec(certifi_num.val());

		if(result_phone2 == null){
				alert("3~4자리로 입력하세요");
				phone2.val("");
				phone2.focus();
				return false;
		}else if(result_phone3 == null){
				alert("4자리로 입력하세요");
				phone3.val("");
				phone3.focus();
				return false;
		}else if(result_num == null){
				alert("인증번호 6자리를 입력하세요.")
				certifi_num.val("");
				certifi_num.focus();
				return false;
		}
	});
};

$(function(){
	$(".certifi section a").certi();
	$(".certifi_phone,.certifi_email").certi1();
});

