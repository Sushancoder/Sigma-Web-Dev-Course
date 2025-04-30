// An example using objects in JS:
console.log('\n Objects in JS. \n\n\n')
let obj = {
    a: 1,
    b: "Harry"
};
console.log(obj)

let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; // this will assign the prototype of the rabbit object to the animal object.
// By setting rabbit's prototype to animal, any properties or methods on animal will now be available on rabbit. So rabbit will inherit from animal. This allows us to share properties and methods between objects.
// sets rabbit. [ (Prototype)) animal



// Creating class in JS 
console.log("\n Creating class in JS. \n")
// Creating a class in JS (class is a keyword in JS to create classes)

class Animal {
    constructor(name) { // to create an argument when creating this class like here we use the name argument in Animal class.
        this.name = name; // this will assign the name argument to the name property of the Animal class.
        console.log("Object is created...") // all functions here will run while an instance of this class will be made up.

    }

    eats() {
        console.log(`${this.name} eats`)
    }

    jumps() {
        console.log(`${this.name} jumps`)
    }
}

// creating an instance of that class or assigning a variable to a class.
let a = new Animal("Rabbit"); // here we give the Rabbit as name argument to the Animal class.
console.log(a)


// Creating a second class to describe some other properties of Classes in JS.

console.log(' Another class \n\n');

class Lion extends Animal { // by using the extends keyword we can inherit the properties and methods of the Animal class.

    constructor(name) {
        super(name); // this will call the constructor of the Animal class.
        this.name = name;
        console.log(this.name, 'is a lion')
    }
    eats() {
        super.eats(); // this will call the eats method of the Animal class.
        console.log('Lion is eating in 2nd instance.')
    }
}


let l = new Lion("Lion");
console.log(l.name)



// Getters and setters
console.log('\n Getters and setters \n');

class User {
    constructor(name) {
        this.name = name;
    }
//getters
    get name() {
        return this._name; // calls the same function
    }
//setters
    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }
}

let user = new User('John Cena')
console.log(user.name); // retuns jhon
// this runs a setter
user.name = "" // returns name is too short
user.name = "hijalala" // returns hijalala


// Getting an instance 
let ins_of_li = l instanceof Lion
console.log(ins_of_li); // returns true as l var is created using Lion class

let ins_of_li2 = l instanceof Animal
console.log(ins_of_li2); // returns true as l var is created using Lion class and Lion class is created in Animal class.