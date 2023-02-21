var names = ["John", "Jane", "Bob", , "Mike"];
names.push("Katarina")
//let text = ""

for (var i = 0; i < names.length; i++) {
    /*if (i === 2) {break;}
    text += "The name is" + i + "<br>";*/
    console.log(names[i]);
}

var filtered = names.filter(function(x) {
    return x !== undefined;
});

//console.log(filtered);




