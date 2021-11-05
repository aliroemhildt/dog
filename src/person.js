// if test involves both classes, go back and look at how you
// passed arguments into that first class

// practice: crafting, reccess, golf course, trick or treat, road race 

var Dog = require("./dog.js");

class Person {
  constructor(name, dog) {
    this.name = name;
    this.dog = dog
    // console.log(this.dog)
  };

  fillFoodBowl() {
    this.dog.eat();
  };

  throwBall() {
    // could also use this conditional instead of the first two line:
    // if (this.dog.fetchBall() === 'This is fun!');
    var fetchOutput = this.dog.fetchBall();
    if (fetchOutput === `This is fun!`) {
      return `${this.dog.name} loves playing fetch!`;
    } else {
      return `Oh, I think ${this.dog.name} is too tired. I guess we won\'t play fetch right now.`;
    };

    // try not to repeat logic if we've already done it
    // (the conditional below already exists in dog class):

    // if (this.dog.energyLevel > 3) {
    //   this.dog.fetchBall();
    //   return `${this.dog.name} loves playing fetch!`;
    // } else {
    //   return `Oh, I think ${this.dog.name} is too tired. I guess we won\'t play fetch right now.`;
    // };
  };

  adoptAPup(name, age) {
    if (!this.dog) {
      this.dog = new Dog ({name: name, age:age});
    } else {
      return `You can\'t adopt ${name}. You already have ${this.dog.name}!`;
    };
  };
};

module.exports = Person;
