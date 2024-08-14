/* using object
let obj = {
  a: 1,
  b: "Harshit",
};
console.log(obj);

let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; */

class Animal {
  constructor(name) {
    this.name = name;
    console.log("object is created");
  }

  eats() {
    console.log("kha raha hu");
  }
  jumps() {
    console.log("kood rha hu");
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name);
    // this.name = name;
    console.log("object is created and he is a Lion...");
  }
  eats() {
    super.eats();
    console.log("dahad raha hu");
  }
}
let a = new Animal("Bandar");
console.log(a);

let l = new Lion("Sher");
console.log(l);
