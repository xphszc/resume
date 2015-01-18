var WINDOW_WIDTH = 936;
var WINDOW_HEIGHT = 550;
var RADIUS = 8;
var FRAP = 30;

var balls = [];
const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"];



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


function render() {
	
	var canvas = document.getElementById("dbccanvas");
	var context = canvas.getContext("2d");
	
	canvas.width = WINDOW_WIDTH;
	canvas.height = WINDOW_HEIGHT;

	var dbctimer = 0;
//	console.log(mydbc.length);
	var timer = setInterval(function(){
		
		context.clearRect(0,0,WINDOW_WIDTH, WINDOW_HEIGHT);			
		var line = Math.floor(dbctimer/(30*FRAP));
//		console.log("dbctimer:"+x);
		renderLine(line,context);
		addballs(dbctimer,line);
		renderball(context);
		updateBalls();
		dbctimer += 30;
		if (dbctimer === 36000) {
			clearInterval(timer);
			console.log("over")
		}
	},FRAP);
}
			
				
//				var aBall = {
//                  x:301+j*2*RADIUS,
//                  y:101+i*2*RADIUS,
//                  g:1.5+Math.random(),
//                  vx:Math.pow( -1 , Math.ceil( Math.random()*1000 ) ) * 4,
//                  vy:-5,
//                  color: colors[ Math.floor( Math.random()*colors.length ) ]
//              }
//
//              balls.push( aBall );
//              context.fillStyle=balls[i].color;
//      		context.beginPath();
//      		context.arc( balls[i].x , balls[i].y , RADIUS , 0 , 2*Math.PI , true );
//				context.closePath();
//      		context.fill();	
	
//	
//	context.beginPath();
//	context.arc(300,300,20,0,1.5*Math.PI,false);
//	context.closePath();
//	context.stroke();
//	
//	context.moveTo(100,100);
//	context.lineTo(600,600);
//	context.stroke();
//	render(context);

//
//function render (cxt) {
//	cxt.fillStyle = "rgb(0,102,153)"
//	for (var i=0;i<mydbc.length;i++) {
//		for (var j=0;j<mydbc[i].length;j++) {
//			if (mydbc[i][j] == 1) {
//				cxt.beginPath();
//				var x = 60;
//				var y = 30;
//				ctx.arc( x+j*2*(RADIUS+1)+(RADIUS+1) , y+i*2*(RADIUS+1)+(RADIUS+1) , RADIUS , 0 , 2*Math.PI );
//				cxt.closePath();
//				cxt.fill();
//			}
//		}
//	}
//}

	
//	context.lineWidth = 5;
//	for (var i=0;i<test.length;i++) {
//		if (test[i] == 1) {
//			context.beginPath();
//			context.arc(50+i*30,50,15,0,2*Math.PI);
//			//arc x,y,radius,startAngle,endAngle,counterclockwise
//			context.closePath();
//			context.fill();
//		}
//	}



//	for (var i=0;i<mydbc.length;i++) {
//		for (var j=0;j<mydbc[i].length;j++) {
//			if (mydbc[i][j] == 1) {
//				context.beginPath();
//				context.arc(300+j*2*RADIUS,100+i*2*RADIUS,RADIUS,0,2*Math.PI);
//				context.closePath();
//				context.fill();
//			}
//		}
//	}
//	var i = 20;

function addballs (dbctimer,line) {
		if ((dbctimer%900) === 0) {
//			var line = Math.floor(dbctimer/(30*FRAP));
//			console.log(line);
			var ballline = 20-line;
//			console.log(ballline);
			for (var j=0;j<mydbc[ballline].length;j++) {
				if (mydbc[ballline][j] == 1) {
					addeachball(ballline,j);					
				}
			}
		}
}

function addeachball (i,j) {
	var aBall = {
                    x:300+j*2*RADIUS,
                    y:100+i*2*RADIUS,
                    g:1.5+Math.random(),
                    vx:Math.pow( -1 , Math.ceil( Math.random()*1000 ) ) * 4,
                    vy:-5,
                    color: colors[ Math.floor( Math.random()*colors.length ) ]
               };
//				console.log(typeof(aBall.color));
                balls.push( aBall );
//              console.log("balladd!");
//              console.log(balls[i].color);
}

function renderLine (line,context){
//	var lines = Math.floor(dbctimer/(30*FRAP));
//	console.log("lines:"+lines);
	for(var i=20;i>(19-line);i--){
//		console.log("i:"+i);
		for (var j=0;j<mydbc[1].length;j++) {
			if (mydbc[i][j] == 1) {
//				console.log("i:"+i);
				context.strokeStyle = "#005588";
				context.fillStyle = "#005588";
				context.beginPath();
				context.arc(300+j*2*RADIUS,100+i*2*RADIUS,RADIUS,0,2*Math.PI);
				context.closePath();
				context.fill();
//				console.log("rend!"+"i="+i+"__j="+j+"__dbctimer="+dbctimer);
			}
//			console.log("i="+i+"__j="+j+"__dbctimer="+dbctimer);
		}
	}
}
function renderball (cxt) {
	for( var i = 0 ; i < balls.length ; i ++ ){
        cxt.fillStyle = balls[i].color;
        
        cxt.beginPath();
        cxt.arc( balls[i].x , balls[i].y , RADIUS , 0 , 2*Math.PI , true );
        cxt.closePath();

        cxt.fill();
    }
}
function updateBalls(){

    for( var i = 0 ; i < balls.length ; i ++ ){

        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;

        if( balls[i].y >= WINDOW_HEIGHT-RADIUS ){
            balls[i].y = WINDOW_HEIGHT-RADIUS;
            balls[i].vy = - balls[i].vy*0.75;
        }
    }
}


addLoadEvent(render);
