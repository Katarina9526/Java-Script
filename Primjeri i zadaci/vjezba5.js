function Dog(name) {
    this.name = name ? name : "Rex";
    this.getName = function() {
        return this.name;
    }
}

var dog1 = new Dog();
console.log(dog1.name);

var dog2 = new Dog("Floki");
console.log(dog2.name);

var dog3 = new Dog("Fifi");
console.log(dog3.getName());