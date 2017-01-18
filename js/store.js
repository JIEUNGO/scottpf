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
		}());