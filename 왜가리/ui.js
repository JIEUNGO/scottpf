(function(){
   /*
      1.객체 생성함수를 정의
      2. 객체 생성
      3. 속성, 메서드 등록 메서드 등록하는메서드 / 핸들러메서드 
   */
   function TabmenuFnc(objName,idx){ //속성을 만들어주는것
      this.myObjName = objName;
      this.myIdx = idx;
      this.myObj = this.myObjName+":eq("+this.myIdx+")";
      this.actImg = $(this.myObj).find("h3:first img, h4:first img");
      this.bindEvent();
   };
   TabmenuFnc.prototype.bindEvent=function(){
      $(document).on("click",this.myObj+" h3 a, "+this.myObj+" h4 a",$.proxy(this.tabEvntHnd,this))

   }
   TabmenuFnc.prototype.tabEvntHnd=function(e){
      e.preventDefault();
      var $myImg = $(e.target);
      var $myThis = $(e.target).closest('a'); //제일 하위요소  this 대신 쓰기 지정하는것 !!!!!!
      var $myDiv= $myThis.parent().next();
      var $visibleDiv = $(this.myObj+" div:visible");
      //보이는 div 요소는 숨겨라 
      //클릭한 텝텝에 해당하는 div 는 보여라
      if($myDiv.is(":hidden")){
         $visibleDiv.hide();
         $myDiv.show();

          var src_1 = this.actImg.attr("src").replace("_ov.gif",".gif");
          this.actImg.attr("src",src_1);
          var src_2 = $myImg.attr("src").replace(".gif","_ov.gif");
          $myImg.attr("src",src_2);
         this.actImg = $myImg;   
      };
   };
   $(function(){
      //console.log($("div[data-type=tabmenu]"));
      var arrTab = []; // 매번객체생성을할수가없으니 배열로지정해주기
      var tabText = "div[data-type=tabmenu]";
      var tabMenuWrap = $(tabText);
      $.each(tabMenuWrap,function(i,o){
         arrTab[i] = new TabmenuFnc(tabText,i);
      });
   });


/*
@$fn. playSlide : 반응형 bxSlide 메서드 
@opt {object} : bxSlide 옵션값 
*{
*@{
*@ mobile:{minSlides:2,maxSlides:2,slideWidth:150},
*@ tablet:{minSlides:3,maxSlides:3,slideWidth:150},
*@ pc:{minSlides:5,maxSlides:5,slideWidth:150}
*@}
*/
$.fn.playSlide = function(opt){
   var baseOption = {
            mode:'horizontal',
            speed:500,
            minSlides:5,
            maxSlides:5,
            slideWidth:100,
            slideMargin:10,
            auto:true
         }

   var k;
   $(window).on("resize",function(){
      if($(window).width() > 800){
         k = $.extend(baseOption, opt.pc);
         }else if($(window).width() > 480){
         k = $.extend(baseOption, opt.tablet);
         }else{
         k = $.extend(baseOption,opt.mobile);
         }
         // console.log(k);
   });
   $(window).resize();
   var mySlide = $(this).bxSlider(k);
   $(window).on("resize",function(){
      mySlide.reloadSlider(k);
   });
}


/*gnb*/

$.fn.gnb = function(opt){
   var myThis = $(this);
   var mouseOver = function(){
      if(activeMenu){ //null이 아니라면
         activeMenu.next().hide();
         var bfImg = $("img",activeMenu).attr("src").replace(opt.name2,opt.name1);
      }
      var ts = $(this);
      ts.next().show();

      var ovImg = $("img",ts).attr("src").replace(opt.name1,opt.name2);
       $("img",ts).attr("src",ovImg);
      activeMenu = ts;
   }
   $("ul ul",myThis).hide();
   $(">ul>li>a",myThis).on({
      "mouseover fucus":mouseOver
   });

   myThis.on({
      "mouseleave":function(){
         if(activeMenu){ //null이 아니라면
         activeMenu.next().hide();
         var bfImg = $("img",activeMenu).attr("src").replace(opt.name2,opt.name1);
         $("img",activeMenu).attr("src",bfImg)

      }
      }
   })
   }
$.fn.quickMenu =function(opt){
      var ts = $(this);
      var i = 0;
      $(window).on("scroll",function(){
         var myThis = $(this);
         var scT = myThis.scrollTop()+opt.top;
         ts.stop().animate({top:scT+"px"},opt.speed);
      })
}
/*
*@ $.fn.gnbScrollDown: 자동올가미 메서드
*@ opt{object} : {top : 80,speed : 100} | {상단간격 , 속도}
*@ $(선택자).gnbScrollDown({top:80,speed:100});
*/


/*quick_menu*/
$.fn.gnbScrollDown = function(opt){
      var ts = $(this);
      var myH1 = $("section>h1");
      var gnbScrollHnd = function(e){
         e.preventDefault();
         var idx = ts.index($(this));
         var myH1 = $("section>h1").eq(idx);
         var myH1_t = myH1.offset().top -opt.top;
         //offset 현재 페이지 기준에서부터의 거리(상단에서부터의 거리)
         $("html,body").animate({scrollTop:myH1_t+"px"},opt.speed) ;//스크롤이 브라우저마다 부모가 달라서 둘다 적용시켜줘야함
      }
      var arr = [];
      $.each(myH1,function(){
                var myH1_t = $(this).offset().top - opt.top;
                arr.push(myH1_t);
          });

      var m = 0;
      var gnbChoice = function(){
         var sct = $(window).scrollTop();
            $.grep(arr,function(d,i){ //d=배열, i=인덱스
                  if(d <= sct){
                     m = i;
                  }
               });
                  ts.filter(".on").removeClass("on");
                  ts.eq(m).addClass("on");
      }
      var gnbChoiceHnd = function(){
         gnbChoice();
         /*
         if(scTop >= 3001){
            ts.filter(".on").removeClass("on")
            ts.eq(3).addClass("on")

         }else if(scTop >= 2001){
            ts.filter(".on").removeClass("on")
            ts.eq(2).addClass("on")

         }else if(scTop >= 1001){
            ts.filter(".on").removeClass("on")
            ts.eq(1).addClass("on")

         }else{
            ts.filter(".on").removeClass("on")
            ts.eq(0).addClass("on")
         }
         */
      }
      ts.on({
         "click": gnbScrollHnd
      });
      $(window).on({
         "scroll": gnbChoiceHnd
      })
} 

$.fn.motionFnc = function(){
   if(ie_8){return false}
   var ts = $(this);
   $.each(ts,function(i,o){
      var myObj = $(o); 
      var myObjopt = JSON.parse(myObj.attr("data-motion-opt"));
      var myObjClass = "."+myObj.attr("class");
      var myObjTop = myObj.offset().top - 500; //상단에서 500내려왔을때
      $(myObjClass).css({"margin-left":myObjopt.dst+"px"})
      if(myObjopt.direct == "left"){
         $(myObjClass).css({"margin-left":-myObjopt.dst+"px"})
      }
      var i = 0;
      var k = true ;
      var m = -parseInt(myObj.css("margin-left"));
      $(window).on("scroll",function(){
         var sct = $(this).scrollTop();
         if(sct >= myObjTop && k){
            k = !k;
            // console.log(parseInt(myObj.css("margin-left")))
            TweenMax.staggerTo(myObjClass,myObjopt.speed,{x:m},myObjopt.term);
         }else if (sct < myObjTop && !k){
            k = !k;
            TweenMax.staggerTo(myObjClass,0.2,{x:-m},myObjopt.term);
         }
      });
   });
}
$(window).on("resize",function(){
  var b = $("body");
   var w = $(window).width();
   if (w >= 1024) {
      b.attr("class","");
      b.addClass("pc");
   }else if (w >= 480 && w < 1024) {
      b.attr("class","");
      b.addClass("tablet");
   } else {
      b.attr("class","");
      b.addClass("mobile");
   }
});


$(function(){
      $("#gnb").gnb({name1:"png",name2:"_ov.png"});
      $(".quick_menu").quickMenu({top:50,speed:900});
      $("#gnbWrap").quickMenu({top:0,speed:100});
      $("#gnbWrap>ul>li>a").gnbScrollDown({top:50,speed:1000});
      $("*[data-type=motion]").motionFnc();
      $(window).resize();
})

}());