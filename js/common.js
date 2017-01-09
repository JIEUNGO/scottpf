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

/*gnb-pc*/
  $.fn.gnb = function(opt){
    var myThis = $(this);
    var myThisClass = ".pc ."+myThis.attr("class");

    var activeMenu = null;
    var mouseOver = function(){
      if(activeMenu){
         activeMenu.next().stop().slideUp(300);
         activeMenu.removeClass("on");
      }
      var ts = $(this);
      ts.next().stop().slideDown(300);
      ts.addClass("on");
      activeMenu = ts;
    };
    $(myThisClass+"ul>div").stop().slideUp(300);
    $(document).on({
      "mouseover focus":mouseOver
    }, myThisClass+">ul>li>a");

    myThis.on({
      "mouseleave":function(){
        if(activeMenu){
        activeMenu.next().slideUp(300);
        activeMenu.removeClass("on");
        }
      }
    });
  }

  /*gnb_mobile*/
   $.fn.gnbMobile = function(opt){
    var myThis = $(this);
    var myThisClass = ".tablet ."+myThis.attr("class");
    var myThisClass1 = ".mobile ."+myThis.attr("class");
    var activeMenu = null;

    var click = function(){
      if(activeMenu){
         activeMenu.next().slideUp(300);
      }
      var ts = $(this);
      ts.next().slideDown(300);
      activeMenu = ts;   
    };
    $(myThisClass+" ul").slideUp(300);
    $(myThisClass1+" ul").slideUp(300);
    
    $(document).on({
      "click":click
    }, myThisClass+">.btn_gnb");
    $(document).on({
      "click":click
    }, myThisClass1+">.btn_gnb");
  }
/*  function gnbMobile(){
    this.myThis = ".gnb"
    this.myThisClass = ".tablet ."+myThis.attr("class");
    this.myThisClass1 = ".mobile ."+myThis.attr("class");
    
    this.myWrap = ".btn_gnb";
    this.bindEvnt();
  };
  InitSelect.prototype.bindEvnt = function(){
    $(document).on("click",this.myWrap + " button",$.proxy(this.selectHanddler_1, this));
  };
  InitSelect.prototype.selectHanddler_1 = function(e){
    var $myThis = $(e.target);
    var $mySelWrap = $(this.myWrap);
    var $myUl = $("ul",$mySelWrap);
    if($myUl.is(":hidden")){
      $("ul:visible",this.myThis).hide();
        $myUl.show();
    }else{
        $myUl.hide();
    }
  };*/

  /*resize*/
  $(window).on("resize",function(){
  var b = $("body");
   var w = $(window).width();
   if (w >= 1024) {
      b.attr("class","");
      b.addClass("pc");
   }else if (w >= 640 && w < 1024) {
      b.attr("class","");
      b.addClass("tablet");
   } else {
      b.attr("class","");
      b.addClass("mobile");
    }
  });

 $(function(){
  var sel = [];
    $.each($("div[data-select=sel]"),function(i,e){
      sel[i] = new InitSelect("sel",i);
    });
  $(".gnb").gnb();
  $(window).resize();
  $(".gnb").gnbMobile();  
 });
}());