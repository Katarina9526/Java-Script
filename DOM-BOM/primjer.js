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
const footerNode = document.getElementById("footer");
const ul = footerNode.getElementsByTagName("ul")[0];

for(let i = 3; i < 6; i++) {
    var listViewItem = document.createElement("li");
    listViewItem.appendChild(document.createTextNode(i));
    ul.appendChild(listViewItem);
}