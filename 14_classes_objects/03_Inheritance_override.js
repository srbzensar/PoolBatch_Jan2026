class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

// ------------------------------------

const animal = new Animal();
animal.speak(); // Output: Animal speaks

const dog = new Dog();
dog.speak(); // Output: Dog barks
// The speak method in Dog overrides the speak method in Animal.

// =================================================    

// Challenge:
// Create a Vehicle class with a method move() that logs "Vehicle is moving".
// Create a Airplane class that extends Vehicle and overrides the move() method to log "Airplane is flying".
