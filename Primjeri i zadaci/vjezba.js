var auto = {
    marka: "VW",
    gorivo: "benzin",
    model: "Golf",
    godina: 2022,
    boja: "crvena",
    maxBrzina: 180,
    trenutnaBrzina: 0,
    ubrzaj: function(ubrzanje) {
        this.trenutnaBrzina += ubrzanje;
        return this.trenutnaBrzina;
    },
    zakoci: function(brojSekundi) {
        while(this.trenutnaBrzina > 0 || brojSekundi >0 ){
            this.trenutnaBrzina -= 2;
            console.log("trenutna brzina pri kocenju je: " + this.trenutnaBrzina);
            brojSekundi--;
        }
        return this.trenutnaBrzina;
    },
    brojKotaca: 4
};

console.log("ja vozim auto marke: " + auto.marka);

console.log("auto vozi brzinom " + auto.trenutnaBrzina);
console.log("auto nakon ubrzanja vozi brzinom " + auto.ubrzaj(10));
console.log("auto nakon kocenja vozi brzinom " + auto.zakoci(2));




