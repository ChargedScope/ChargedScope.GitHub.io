// JavaScript Document

var boardw = 800;
var boardh = 800;
var radius;
var deg45 = Math.PI/4;	//	45 degrees in radians (2pi rad = 360 deg)

var left = [];
var topp = [];	//	can't use 'top' as it is a RESERVED WORD (ie has a special meaning in JavaScript)

var ringname = ["outer", "swap", "inner", "match"];

function resetBoard() {
	document.getElementById("outercolour").value = "red";
	document.getElementById("innercolour").value = "yellow";
	document.getElementById("matchcolour").value = "cyan";
	document.getElementById("swapcolour").value = "silver";
	document.getElementById("outerwidth").value = 60;
	document.getElementById("outerheight").value = 85;
	document.getElementById("outerradius").value = 300;
	document.getElementById("swapwidth").value = 50;
	document.getElementById("swapheight").value = 65;
	document.getElementById("swapradius").value = 250;
	document.getElementById("innerwidth").value = 60;
	document.getElementById("innerheight").value = 85;
	document.getElementById("innerradius").value = 200;
	document.getElementById("matchwidth").value = 60;
	document.getElementById("matchheight").value = 85;
	document.getElementById("matchradius").value = 100;
	document.getElementById("outercorner").value = 
		document.getElementById("innercorner").value =
		document.getElementById("matchcorner").value =
		document.getElementById("swapcorner").value = 10;
//	return;
	document.getElementById("ring").value = "outer";
	updateBoard(0);
	document.getElementById("ring").value = "swap";
	updateBoard(0);
	document.getElementById("ring").value = "inner";
	updateBoard(0);
	document.getElementById("ring").value = "match";
	updateBoard(0);
	document.getElementById("ring").value = "0";
}

function updateBoard(r) {
	var ring = document.getElementById("ring").value;
	var rn;

	if (ring == "")
		return;

	var w = document.getElementById(ring + "width").valueAsNumber;
	var h = document.getElementById(ring + "height").valueAsNumber;
	var radius;
	var br = document.getElementById(ring + "corner").valueAsNumber;
	var vertmid = Math.floor((boardh - h) / 2);
	var horizmid = Math.floor((boardw - w) / 2);

	if (r > 0)	//	new radius being set
		radius = document.getElementById(ring + "radius").value = r;
	else
		radius = document.getElementById(ring + "radius").value;
	document.getElementById("radius").value = radius;
	document.getElementById("radval").innerHTML = radius;

	for (g = 0; g < 8; ++g) {
		gempiece = document.getElementById(ring + g);
		left[g] = Math.round(radius*Math.cos(g*deg45) + horizmid);
		topp[g] = Math.round(radius*Math.sin(g*deg45) + vertmid);
		gempiece.style.backgroundColor = document.getElementById(ring + "colour").value;
		gempiece.style.width = w + "px";
		gempiece.style.height = h + "px";
		gempiece.style.borderRadius = br + "px";
		gempiece.style.left = Math.round(radius*Math.cos(g*deg45) + horizmid) + "px";
		gempiece.style.top = Math.round(radius*Math.sin(g*deg45) + vertmid) + "px";
		gempiece.style.transform = "rotate(" + (g * 45) +"deg)";
	}
}

function highlight(ring) {
	for (r = 0; r < 4; ++r) {
		rn = ringname[r];
		col = rn == ring ? document.getElementById(rn+"colour").value : "white";
		document.getElementById(rn+"radius").style.backgroundColor = col;
		document.getElementById(rn+"width").style.backgroundColor = col;
		document.getElementById(rn+"height").style.backgroundColor = col;
		document.getElementById(rn+"corner").style.backgroundColor = col;
	}
}

function generateCSS() {
	var code = "";
	var ring = document.getElementById("ring").value;
	var g;

	if (ring > "") {
		code = "." + ring + " { /* radius = " + document.getElementById(ring  + "radius").value + "*/\n"
				+ "position: absolute; z-index: 1; "
				+ "width: " + document.getElementById(ring  + "width").value + "px;"
				+ "height: " + document.getElementById(ring  + "height").value + "px;"
				+ "border: 2px solid black;"
				+ "border-radius: " + document.getElementById(ring  + "corner").value + "px;"
		if (ring == "swap") {
			code += "vertical-align:middle;"
				+ "font-size:48px;"
				+ "font-weight:bolder;"
				+ "background-color:silver;"
				+ "color:gold;";
		}
		code += "}";
		for (g = 0; g < 8; ++g) {
			code += "#" + ring + g + " {";
			code += "left: " + left[g] +  "px;";
			code += "top: " + topp[g] +  "px;";
			code += "transform: rotate(" + (g * 45) +"deg)";
			code += "}";
		}
	} else
		code = "No ring selected";

	document.getElementById("csscode").innerHTML = "<p>" + code + "</p>";
}

function swap(n)
{
	//	nothing happens
	return;
}