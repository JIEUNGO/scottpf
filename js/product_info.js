$(function(){
	$(".spec_wrap h5, .geometry_size h5").on("click",function(e){
		e.preventDefault();
		var h5Div = $(this).next();
		var h5A = $(this).children("a");
		if(h5Div.is(":hidden")){
			$(".spec_wrap h5 a.on, .geometry_size h5 a.on").removeClass('on');
			h5A.addClass('on');
			$(".spec_wrap h5+div:visible, .geometry_size h5+div:visible").slideUp(300);
			h5Div.slideDown(300);
		}else{
			$(".spec_wrap h5 a.on, .geometry_size h5 a.on").removeClass('on');
			$(".spec_wrap h5+div:visible, .geometry_size h5+div:visible").slideUp(300);
		}
	});
});