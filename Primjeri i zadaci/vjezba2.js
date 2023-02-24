var dobro = 1234567890;
var lose = "123456";
/*var jedinstveniZnakovi = function(password) {
    console.log("text " + password);
    let isNum = _.isNumber(password);
    console.log("is number " + isNum);
};*/

function isUniqueCharacters(password) {
    var myArray = [];
    for(var i = 0; i <= password.length; i++) {
        var myChar = password.charAt(i);
        if(!myArray.includes(myChar)){
            myArray.push(myChar);
        }
        else {
            return false;
        }
    }   
    return true;
} 

console.log("rezultat = " + isUniqueCharacters(lose));
return;


jedinstveniZnakovi(dobro);
jedinstveniZnakovi(lose);