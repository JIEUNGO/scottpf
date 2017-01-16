$.fn.schAgree = function(){
	var agree = $("#s_agree_y");
	var agree1 = $("#s_agree_y_1");
	var ts = $(this);
	ts.on("submit",function(){
		if(!agree.is(":checked")){
			alert("이용약관에 동의하지 않으셨습니다. 이용약관에 동의하셔야 가입할 수 있습니다.");
			$("#s_agree_y").focus();
			return false;
		};
		if(!agree1.is(":checked")){
			alert("개인정보 취급방침에 동의하지 않으셨습니다. 이용약관에 동의하셔야 가입할 수 있습니다.");
			$("#s_agree_y_1").focus();
			return false;
		};
	});
};

$(function(){
	$(".member_agree").schAgree();
});

