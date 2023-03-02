var div = document.getElementsByClassName("description")[0];

//1)
var y = document.createElement("h1");
y.innerHTML = "ovo je nas header";
div.parentNode.insertBefore(y, div);

//2)
var divInfo = document.createElement("div");
divInfo.className = "info";

var div = document.getElementsByClassName("description")[0];

div.parentNode.insertBefore(divInfo, footer);

//3)
