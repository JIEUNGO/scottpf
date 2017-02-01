(function(){
	/*1.객체 생성함수를 정의
	2.객체 생성
	3.속성, 메서드 등록*/
	function TabmenuFnc(objName,idx){
		this.myObjName = objName;
		this.myIdx = idx;
		this.myObj = this.myObjName + ":eq("+this.myIdx+")"
		this.bindEvent();
	}
	TabmenuFnc.prototype.bindEvent = function(){
		$(document).on("click",this.myObj + " h3 a, " + this.myObj + " h4 a",$.proxy(this.tabEvntHand,this));
	};
	TabmenuFnc.prototype.tabEvntHand = function(e){
		e.preventDefault();
		var $myA = $(e.target);
		var $myParent = $($myA.parent().parent());
		var $myUl = $myA.parent().next();
		if($myUl.is(":hidden")){
			$myParent.find("h3>a").attr("class","");
			$myParent.find("ul").filter(":visible").hide();
			$myA.attr("class","on");
			$myUl.show();
		}
	};
	$(function(){
		var arrTab = [];
		var tabText = "div[data-type=tabmenu]";
		var tabMenuWrap = $(tabText);
		$.each(tabMenuWrap,function(i,o){
			arrTab[i] = new TabmenuFnc(tabText, i);
		});
		console.log(arrTab);
	});

	/*레이어팝업*/
	$.fn.layerPopup = function(){
		var ts = $(this);
		var openLyer = function(e){
			e.preventDefault();
			var url = $(this).attr("href");
			$.get(url,function(data){
				//console.log(data);
				var el_1 = $("<div/>",{"class":"pop_dim"});
				var el_2 = $("<div/>",{"class":"pop_inner_wrap"}).appendTo(el_1);
				var el_3 = $("<div/>",{"class":"pop_inner"}).appendTo(el_2);
				$("<button/>",{"class":"btnCloseLayer","text":"닫기"}).appendTo(el_3);
				el_3.prepend(data); //preappend- 앞으로 들어감
				$("body").append(el_1);
			});
			$(document).on("click",".btnCloseLayer",function(){
				$(".pop_dim").remove();
			})
		}
		ts.on("click",openLyer);
	};
	$(function(){
		$("a[data-type=layerPopup]").layerPopup();
	});
}());