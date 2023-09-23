const animalMethods = {
  eat: function eat() {
    console.log(`O ${this.type} ${this.name} está comendo`);
  },
  sleep: function sleep() {
    console.log(`O ${this.type} ${this.name} está dormindo`);
  },
};

function Animal(type, name, age) {
  let animal = {};
  animal.type = type;
  animal.name = name;
  animal.age = age;

  animal.eat = animalMethods.eat;
  animal.sleep = animalMethods.sleep;

  return animal;
}

const animal1 = Animal("gato", "Zion", 5);
animal1.eat();
animal1.sleep();
