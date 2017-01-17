$(function(){
	var memberJoin = function(){
			var reg_id = /^[a-z]{1}\w{5,11}$/g; //6글자부터
			var reg_pw = /^\w{5,12}$/g; //5~12글자까지
			var reg_name = /^[가-힣]{2,}$/g;
			var reg_email = /^[\w]{4,}@[\w]+(\.[\w-]+){1,3}$/g;
			var reg_phone =  /\d{3,4}$/g;
			var reg_phone_2 =  /\d{4}$/g;
			var reg_mobile = /\d{3,4}$/g;
			var reg_mobile_1 = /\d{4}$/g;

			var my_id = $("#user_id");
			var my_pw = $("#user_pw");
			var my_pwCom = $("#user_pw_1");
			var user_name = $("#user_name");
			var user_email = $("#user_email");
			var user_phone = $("#user_phone");
			var user_phone_2 = $("#user_phone_2");
			var user_mobile_1 = $("#user_mobile_1");
			var user_mobile_2 = $("#user_mobile_2");

			var result_id = reg_id.exec(my_id.val());
			var result_pw = reg_pw.exec(my_pw.val());
			var result_name = reg_name.exec(user_name.val());
			var result_email = reg_email.exec(user_email.val());
			var result_phone = reg_phone.exec(user_phone.val());
			var result_phone2 = reg_phone2.exec(user_phone_2.val());
			var result_mobile = reg_mobile.exec(user_mobile_1.val());
			var result_mobile1 = reg_mobile_1.exec(user_mobile_2.val());


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
				alert("입력하신 비밀번호와 다릅니다. 다시 입력해주세요.")
				my_pwCom.val("");
				my_pwCom.focus();
				return false;
			}
		/*	else if(result_name == null){
				alert("한글로 2글자 이상을 넣으세요.")
				user_name.val("");
				user_name.focus();
				return false;
			}
			else if(result_email == null){
				alert("이메일 형식에 맞지않습니다.")
				user_email.val("");
				user_email.focus();
				return false;
			}
			else if(result_phone == null){
				alert("3~4자리로 입력하세요");
				user_phone.val("");
				user_phone.focus();
				return false;
			}
			else if(result_phone2 == null){
					alert("4자리로 입력하세요");
					user_phone2.val("");
					user_phone2.focus();
					return false;
			}
			else if(result_mobile == null){
				alert("3~4자리로 입력하세요");
				user_mobile_1.val("");
				user_mobile_1.focus();
				return false;
			}
			else if(result_mobile1 == null){
					alert("4자리로 입력하세요");
					user_mobile_2.val("");
					user_mobile_2.focus();
					return false;
			};*/
	};
	$(".member_4").on("submit", memberJoin);
});