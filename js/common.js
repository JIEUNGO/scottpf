/*
	1.생성함수
	2.속성,메서드 생성
	3.객체 생성 (앞글자는 대문자로)
*/
$(function(){
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
  $.fn.gnb = function(opt){
    var myThis = $(this);
    var activeMenu = null;
    var mouseOver = function(){
      if(activeMenu){
         activeMenu.next().stop().slideUp(300);
         $("ul>li>a",activeMenu).attr("class"," ");             
      }
      var ts = $(this);
      ts.next().stop().slideDown(300);     
      $("li>a",ts).attr("class","on");
      activeMenu = ts;
    };
    $("ul>div", myThis).stop().slideUp(300);
    $(">ul>li>a",myThis).on({
      "mouseover focus":mouseOver
    });

    myThis.on({
      "mouseleave":function(){
        if(activeMenu){
        activeMenu.next().slideUp(300);
        $("li>a",activeMenu).attr("class"," ");
        }
      }
    });
  }
 $(function(){
  var sel = [];
    $.each($("div[data-select=sel]"),function(i,e){
      sel[i] = new InitSelect("sel",i);
    });
  $(".gnb").gnb();
 });
});