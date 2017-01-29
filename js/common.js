/*
	1.생성함수
	2.속성,메서드 생성
	3.객체 생성 (앞글자는 대문자로)
*/
(function(){
  /*select-box,메인 대리점찾기*/
  function InitSelect(objName,idx){ //객체 생성함수
  	this.sel_c = objName;
  	this.idx = idx;
  	this.myWrap = "div[data-select="+this.sel_c+"]:eq("+this.idx+")";
  	this.allSelectWrap = $("div[data-select]");
  	this.bindEvent();
  }
  InitSelect.prototype.bindEvent = function(){
  	$(document).on("click",this.myWrap + " button",$.proxy(this.selectHanddler_1, this));

    $(document).on("click",this.myWrap + " a",$.proxy(this.selectClickHanddler_1, this));      

    $(document).on("click",this.myWrap + " input[type=submit]",$.proxy(this.selectMvSite_1, this));
  }
  InitSelect.prototype.selectMvSite_1 = function(e){
      var myObj = $(e.target);
      var url = myObj.closest(".selectBox").find("input[type=hidden]").val();
      window.open("http://"+url);
  }
  InitSelect.prototype.selectClickHanddler_1 = function(e){
      e.preventDefault();
      var myObj = $(e.target);
      var myObjText = myObj.text();
      $(this.myWrap+" button").text(myObjText);
      $(this.myWrap+" ul").hide();
      var url = myObj.attr("href");
      $(this.myWrap+" input[type=hidden]").val(url);
      //window.open("http://"+url);
  }
  InitSelect.prototype.selectHanddler_1 = function(e){
    e.preventDefault();
  	var $myThis = $(e.target);
  	var $mySelWrap = $(this.myWrap);
  	var $myUl = $("ul",$mySelWrap);
    if($myUl.is(":hidden")){
    	$("ul:visible",this.allSelectWrap).hide();
    		$myUl.show();
    }else{
    		$myUl.hide();
    }
  }

/*gnb*/
  $.fn.rsGnb = function(opt){
    var mode = opt.mode;
    var ts = $(this);
    var selector = " ." + ts.attr("class") + ">ul>li>a";

    if(mode == "all"){
      var selector = ".pc" + " ." + ts.attr("class") + ">ul>li>a";
      $(document).on("mouseover focus", selector, function(){
        var myThis = $(this);
        $(this).closest("ul").find(">li>div:visible, >li>ul:visible").stop().slideUp(300)
        .end().find("a.on").removeClass("on").off('hover').blur();
        myThis.next().slideDown(300);
        $(this).addClass("on");
      });

      var selector2 = ".tablet" + " ." + ts.attr("class") + ">ul>li>a"+",.mobile" + " ." + ts.attr("class") + ">ul>li>a";
      $(document).on("click", selector2, function(){
        var myThis = $(this);
        if(myThis.next().is(":hidden")) {
          myThis.attr("style","");
          $(".gnb li .on").removeClass('on').blur().removeClass('hover');
          $(".gnb ul div:visible, .ul_common:visible").slideUp(300);
          myThis.addClass("on");
          myThis.next().slideDown(300);
        } else {
          myThis.removeClass('on').off('hover').blur();   
          $(".gnb ul div:visible, .ul_common:visible").slideUp(300);
        }
      });

      var selector3 = ".tablet" + " ." + ts.attr("class") + ">ul>li>div>ul>li>h3>a"+",.mobile" + " ." + ts.attr("class") + ">ul>li>div>ul>li>h3>a";
      $(document).on("click", selector3, function(){
        var h3Li= $(this).closest("li").find("ul");

        if(h3Li.is(":hidden")){          
          $(".info_prd_wrap ul:visible").slideUp(300);
          h3Li.slideDown(300);
        }else{
          h3Li.slideUp(300);
        }
        
      });

      var selector4 = ".pc" + " ." + ts.attr("class");
      $(document).on("mouseleave", selector4,function(){
        $(">ul",this).find(">li>div:visible, >li>ul:visible").stop().slideUp(300)
        .end().find("a.on").removeClass("on");
      });
     
    };
    $(document).on("click",".btn_gnb",function(){
      $(".gnb").slideToggle(500);
    });
  }
 
   /*resize*/
    $(window).on("resize",function(){
  var b = $("body");
   var w = $(window).width()+17;

   if (w > 1024) {
      b.attr("class","");
      b.addClass("pc");
   }else if (w > 767 && w <= 1024) {
      b.attr("class","");
      b.addClass("tablet");
   } else {
      b.attr("class","");
      b.addClass("mobile");
    }
  });
/*  $(window).on("resize",function(){
  var b = $("body");
   var w = $(window).width();
   if (w > 1007) {
      b.attr("class","");
      b.addClass("pc");
   }else if (w > 749 && w <= 1007) {
      b.attr("class","");
      b.addClass("tablet");
   } else {
      b.attr("class","");
      b.addClass("mobile");
    }
  });*/

 $(function(){
  var sel = [];
    $.each($("div[data-select=sel]"),function(i,e){
      sel[i] = new InitSelect("sel",i);
    });
  $(window).resize();
  $(".gnb").rsGnb({mode:"all"});
 });
}());