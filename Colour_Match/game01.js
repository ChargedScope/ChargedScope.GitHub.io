// JavaScript Document

var colour = ["red", "orange", "yellow", "lightgreen", "green", "blue", "brown", "purple"];

var outerc = [];
var innerc = [];
var matchc = [];

var dimmed = .65;

function mod(n, m) {
    var remain = n % m;
    return remain >= 0 ? remain : remain + m;
};

function init()
{
	copycols();
	resetAll();
	document.getElementById("Artefact").style.opacity = document.getElementById("artopacity").value;
}

function resetAll()
{
	showColours("outer", outerc);
	showColours("inner", innerc);
	showColours("match", matchc);
}

function copycols(){
	for (c=0; c<8;c++){
		outerc[c] = colour[c]
		innerc[c] = colour[c]
		matchc[c] = colour[c]
	}
}
function showColours(rname,list){
	for (c=0; c<8;c++){
	document.getElementById(rname+c).style.backgroundColor = list[c];
	}
}
function rotateRight(rname,list) {
t = list[7];
for (c =7; c > 0; c--){
list[c] = list[c-1];}
list[0] = t;
showColours(rname, list);
}
function rotateLeft(rname,list) {
t = list[0];
for (c =1; c < 8; c++){
list[c-1] = list[c];}
list[7] = t;
showColours(rname, list);
}
function swap(n){
t = outerc[n]; 
outerc[n] = innerc[n];
innerc[n] = t;
showColours("outer", outerc);
showColours("inner", innerc);
}
function randomColours(){
MoveNumber = int(Math.random*12);
showColours("outer", outerc);
showColours("inner", innerc);
showColours("match", matchc);
}

