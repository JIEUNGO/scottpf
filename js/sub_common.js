 /*quickmenu*/
 (function(){
  $.fn.quickMenu = function(opt){
    var ts = $(this);
    $(window).on("scroll",function(){
      var myThis = $(this);
      var scT = myThis.scrollTop() + opt.top;
      ts.stop().animate({top:scT+"px"},opt.speed);
    });
  };

 $(function(){
  $(".quick_menu").quickMenu({top:10, speed:900});
 });
});