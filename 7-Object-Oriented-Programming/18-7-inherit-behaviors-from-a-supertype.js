function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype); 
let beagle = Object.create(Animal.prototype); 

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom"