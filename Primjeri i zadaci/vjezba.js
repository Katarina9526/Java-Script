var names = ["John", "Jane", "Bob", , "Mike"];
names.push("Katarina")

for (var i = 0; i < names.length; i++){
    //console.log(names[i]);
}

var filtered = names.filter(function(x) {
    return x !== undefined;
});

console.log(filtered);




