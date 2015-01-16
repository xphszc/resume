

function addLoadEvent (func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else{
		window.onload = function  () {
			oldonload();
			func();
		}
	}
}

function controlwh () {
//	var scrWidth = document.scrollWidth;
//	var myWidth = window.innerWidth-document.scrollWidth;
	var myHeight = window.innerHeight;
//	document.getElementById("p").innerHTML = "scrWidth="+scrWidth+",width="+myWidth+",height="+myHeight;
//	document.getElementById("one").style.backgroundColor = "blue";
	document.getElementById("one").style.height = myHeight+"px";
	document.getElementById("sec").style.height = myHeight+"px";
	document.getElementById("thr").style.height = myHeight+"px";
//	document.getElementById("one").style.width = myWidth+"px";
}

//0-600 600-1200
function up () {
	
	//获取元素
	var obtn = document.getElementById("up");
	
	//设置点击事件
	obtn.onclick = function () {
		
		//获取顶部高度
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		
//		switch (osTop){
//			case osTop < (window.innerHeight*2):
//				document.documentElement.scrollTop = document.body.scrollTop = 0;
//			case osTop >= (window.innerHeight*2) || osTop < (window.innerHeight*3):
//				document.documentElement.scrollTop = document.body.scrollTop = window.innerHeight;
//			default:
//				break;
//		}

		//获取顶部高度与屏幕高度的绝对比值
//		var absOsTop = Math.floor(osTop/window.innerHeight);
//		
//		//判断绝对比值是否为整数
//		if ((osTop/window.innerHeight) == absOsTop) {
			//找到目标高度
			var aimTop = (Math.floor(osTop/window.innerHeight)-1)*window.innerHeight;
			console.log("aimTop="+aimTop);
			//整数缓慢跳上一屏
			var timer = setInterval(function  () {
				//获取现在的高度
				var actOsTop = document.documentElement.scrollTop || document.body.scrollTop;
				//找到目标高度
//				var aimTop = (Math.floor(osTop/window.innerHeight))*window.innerHeight
				//设置移动速度
				var ispeed = Math.floor(-(actOsTop-aimTop)/6);
				
				document.documentElement.scrollTop = document.body.scrollTop = actOsTop+ispeed;
				console.log("speed:"+ispeed);
				console.log("actOsTop:"+actOsTop);
//				console.log(ispeed);
				//console.log(osTop-ispeed);
				//document.documentElement.scrollTop = document.body.scrollTop = osTop-window.innerHeight;
							
				//获取顶部高度与屏幕高度的绝对比值
//				var absOsTop = Math.floor(osTop/window.innerHeight);
				//console.log(absOsTop);
				
				//判断绝对比值是否为整数
//				if ((osTop/window.innerHeight) == absOsTop) {
//					clearInterval(timer);
//				}
				if (actOsTop == aimTop) {
					clearInterval(timer);
					console.log("Interval over");
				}
			},30)
			
			
//		} else{
//			//非整数缓慢跳该屏
//		document.documentElement.scrollTop = document.body.scrollTop = absOsTop*window.innerHeight;
//		}
//		console.log(Math.floor(osTop/window.innerHeight));
	}
}

function down () {
	var obtn = document.getElementById("down");
	obtn.onclick = function () {
		//获取顶部高度
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		//找到目标高度
		var aimTop = (Math.floor(osTop/window.innerHeight)+1)*window.innerHeight;
		console.log("aimTop="+aimTop);
		//整数缓慢跳下一屏
			var timer = setInterval(function  () {
				//获取现在的高度
				var actOsTop = document.documentElement.scrollTop || document.body.scrollTop;

				//设置移动速度
				var ispeed = Math.floor((actOsTop-aimTop)/6);
				
				document.documentElement.scrollTop = document.body.scrollTop = actOsTop-ispeed;
				console.log("speed:"+ispeed);
				console.log("actOsTop:"+actOsTop);
				if (actOsTop == aimTop) {
					clearInterval(timer);
					console.log("Interval over");
				}
			},30)
	}
}

addLoadEvent(controlwh);
addLoadEvent(up);
addLoadEvent(down);

/*

window.onload = function  () {
	var obtn = document.getElementById("up");
	obtn.onclick = function	() {
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		document.documentElement.scrollTop = document.body.scrollTop = 200;
		
	}
}

*/
