//1)
var h1 = document.querySelector("h1");
h1.innerText = "Karlovac"
console.log("h1=" + h1.textContent);

//2)
var divDescription = document.querySelector(".description");
divDescription.innerHTML = "Grad na <h3>5 rijeka</h3>";
console.log(divDescription.innerHTML);

//3)
var divInfo = document.querySelector(".info");
divInfo.innerText = "Peta rijeka je piva"
console.log(divInfo.textContent);

//4)
var rijeke = ["Kupa", "Korana", "Dobra", "Mreznica", "Karlovačko pivo"];
var footer = document.getElementById("footer");

for(let i = 0; i < rijeke.length; i++) {
    //console.log(rijeke[i]);   
    footer.querySelectorAll("li")[i].innerText = rijeke[i];
}






