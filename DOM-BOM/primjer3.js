//1)
var ul = document.querySelector("ul");
ul.style.listStyleType = "decimal";

//2)
var info = document.querySelector(".info");
info.classList.add("hide");

//3)
var body = document.querySelector("body");
console.log(window.getComputedStyle(body, null).marginLeft);

//4)
