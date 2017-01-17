$(function(){
	var login = function(){
		var ts = $(this);
		var reg_id = /^[a-z]{1}\w{5,11}$/g;
		var reg_pw = /^\w{5,12}$/g;
		var my_id = $("#user_id");
		var my_pw = $("#user_pw");
		var result_id = reg_id.exec(my_id.val());
		var result_pw = reg_pw.exec(my_pw.val());
		
		if(result_id == null){
			alert("아이디 형식이 잘못되었습니다. 소문자시작으로 6~12자로 입력하세요.");
			my_id.val("");
			my_id.focus();
			return false;
		}
		else if(result_pw == null){
			alert("비밀번호는 6~13자로 입력하세요.");
			my_pw.val("")
			my_pw.focus();
			return false;
		};
	};
	$(".login").on("submit", login);
});

	
