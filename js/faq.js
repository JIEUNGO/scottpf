$(function(){	 		
	$(".faq_wrap a").on("click",function(e){
		e.preventDefault();
		var myReply = $(this).next();
		if(myReply.is(":hidden")){
			$(".faq_wrap a.on").removeClass('on');
			$(this).addClass('on');
			$(".faq_wrap p:visible").slideUp(200);
			myReply.slideDown(300);
		}	else{
			$(".faq_wrap a.on").removeClass('on');
			$(".faq_wrap p:visible").slideUp(200);
		}			
	});
});