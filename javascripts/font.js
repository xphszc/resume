//window.onload = function () {
//	var fontStyle = document.getElementById("font-style");
//	console.log(fontStyle.onchange);
//	var testp = document.getElementById("testp");
//	testp.style.fontStyle = fontStyle;
//}
function font_style () {
	var fontstyle = document.getElementById("font-style").value;
	console.log("fontstyle:"+fontstyle);
	var testp = document.getElementById("testp");
	testp.style.fontStyle = fontstyle;
}
function font_variant () {
	var fontvariant = document.getElementById("font-variant").value;
	console.log("fontvariant:"+fontvariant);
	var testp = document.getElementById("testp");
	testp.style.fontVariant = fontvariant;
}
function font_weight () {
	var fontweight = document.getElementById("font-weight").value;
	console.log("weight:"+fontweight);
	var testp = document.getElementById("testp");
	testp.style.fontWeight = fontweight;
}
function font_size () {
	var fontsize = document.getElementById("font-size").value;
	console.log("size:"+fontsize);
	var testp = document.getElementById("testp");
	testp.style.fontSize = fontsize;
}
function font_height () {
	var fontheight = document.getElementById("font-height").value;
	console.log("height:"+fontheight);
	var testp = document.getElementById("testp");
	testp.style.lineHeight = fontheight;
}
function font_family () {
	var fontfamily = document.getElementById("font-family").value;
	console.log("fontfamily:"+fontfamily);
	var testp = document.getElementById("testp");
	testp.style.fontFamily = fontfamily;	
}
function font_color () {
	var fontcolor = document.getElementById("font-color").value;
	console.log("fontcolor:"+fontcolor);
	var testp = document.getElementById("testp");
	testp.style.color = fontcolor;
}
