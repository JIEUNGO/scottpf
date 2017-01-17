$(function(){
	var memberJoin = function(){
			var reg_id = /^[a-z]{1}\w{5,11}$/g; //6글자부터
			var reg_pw = /^\w{5,12}$/g; //5~12글자까지
			var reg_name = /^[가-힣]{2,}$/g;
			var reg_email = /^[\w]{4,}@[\w]+(\.[\w-]+){1,3}$/g;
			var reg_phone =  /\d{3,4}$/g;

			var my_id = $("#user_id");
			var my_pw = $("#user_pw");
			var my_pwCom = $("#user_pw_1");
			var user_name = $("#user_name");
			var user_email = $("#user_email");
			var user_phone = $("#user_phone");

			var result_id = reg_id.exec(my_id.val());
			var result_pw = reg_pw.exec(my_pw.val());
			var result_name = reg_name.exec(user_name.val());
			var result_email = reg_email.exec(user_email.val());
			var result_phone = reg_phone.exec(user_phone.val());

			if(result_id ==null){
				alert("아이디는 소문자시작으로 6~12자로 입력하세요.");
				my_id.val("");
				my_id.focus();
				return false;
			}
			else if(result_pw == null){
				alert("6~13자로 입력하세요.");
				my_pw.val("");
				my_pw.focus();
				return false;
			}
			else if(my_pwCom.val() != result_pw){
				alert("입력하신 비밀번호와 다릅니다. 다시 입력해주세요.");
				my_pwCom.val("");
				my_pwCom.focus();
				return false;
			}
			else if(result_name == null){
				alert("한글로 2글자 이상을 넣으세요.");
				user_name.val("");
				user_name.focus();
				return false;
			}
			else if(result_email == null){
				alert("잘못된 이메일 형식입니다.");
				user_email.val("");
				user_email.focus();
				return false;
			}
			else if(result_phone == null){
				alert("잘못된 번호 형식입니다.");
				user_phone.val("");
				user_phone.focus();
				return false;
			};
	};
	$(".member_4").on("submit", memberJoin);
});