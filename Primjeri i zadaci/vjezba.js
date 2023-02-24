var auto = {
    brand: {
        marka: "VW",
        model: "Golf",
        godina: 2022,  
    },
    gorivo: "benzin",
    boja: "crvena",
    maxBrzina: 180,
    trenutnaBrzina: 0,
    ubrzaj: function(ubrzanje) {
        this.trenutnaBrzina += ubrzanje;
        return this.trenutnaBrzina;
    },
    zakoci: function(brojSekundi) {
        while(this.trenutnaBrzina > 0 || brojSekundi > 0 ){
            this.trenutnaBrzina -= 2;
            console.log("trenutna brzina pri kocenju je: " + this.trenutnaBrzina);
            brojSekundi--;
        }
        return this.trenutnaBrzina;
    },
    brojKotaca: 4
};

for(let key in auto) {
    if(auto.propertyIsEnumerable(key)) {
        //console.log("kljuc: " + key + ": vrijednost: " + auto[key]);
    }
}

/*console.log("ja vozim auto marke: " + auto.brand.marka + ": model " + auto.brand.model);
console.log("auto vozi brzinom " + auto.trenutnaBrzina);
console.log("auto nakon ubrzanja vozi brzinom " + auto.ubrzaj(10));
console.log("auto nakon kocenja vozi brzinom " + auto.zakoci(2));*/

var json = JSON.stringify(auto);
console.log(json);



