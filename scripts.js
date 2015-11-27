
//Municipal List
var munilist=document.getElementById("munilist");
console.log(munilist);
for (var i = 1; i < 412; i++) {
	munilist.innerHTML += "<a href=\"#\">municipalGov NUMBA"+i+" <a><br>";
};

//Canvas
var canvas = document.getElementById("score-canvas1");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(90,90,20,Math.PI*3/2,Math.PI);
ctx.strokeStyle="#FFFFFF";
ctx.lineWidth=5;
ctx.stroke();