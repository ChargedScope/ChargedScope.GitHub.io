// JavaScript Document
i=0;
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
	checkColours();
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
checkColours();
}
function rotateLeft(rname,list) {
t = list[0];
for (c =1; c < 8; c++){
list[c-1] = list[c];}
list[7] = t;
showColours(rname, list);
checkColours();
}
function swap(n){
t = outerc[n]; 
outerc[n] = innerc[n];
innerc[n] = t;
showColours("outer", outerc);
showColours("inner", innerc);
}

function randomColours(){
RandomNumber = Math.floor(Math.random()*12);
if (RandomNumber < 8){
swap(RandomNumber);	
} 
else if (RandomNumber >= 8){
	if(RandomNumber == 8){	
		rotateLeft('outer', outerc);
	}
	if(RandomNumber == 9){	
		rotateRight('outer', outerc);
	}
	if(RandomNumber == 10){	
		rotateLeft('inner', innerc);
	}
	if(RandomNumber == 11){	
		rotateRight('inner', innerc);
	}
}
showColours("outer", outerc);
showColours("inner", innerc);
checkColours();
}
function dimMatches(){
	document.body.style.backgroundColor = "black";
	 document.getElementById("text").style.color = "white";
}
function lightMatches(){
	document.body.style.backgroundColor = "white";
	 document.getElementById("text").style.color = "black";
}
function startGame(){
	for (var i = 0; i < 30; i++) {
		randomColours()
	}
}
function checkColours(){
    var c;
	
	for (c=0; c<8;c++){
	if (outerc[c] == innerc[c] && innerc[c] == matchc[c]){
		document.getElementById("match"+c).style.opacity = .6;
		document.getElementById("match"+c).style.borderColor = matchc[c];}
	else{
		document.getElementById("match"+c).style.opacity = 1;
		document.getElementById("match"+c).style.borderColor = "black";}
	}
}

