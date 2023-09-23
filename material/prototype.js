function Animal(type, name, age) {
  let animal = Object.create(Animal.prototype);

  animal.type = type;
  animal.name = name;
  animal.age = age;

  return animal;
}

Animal.prototype.eat = function eat() {
  console.log(`O ${this.type} ${this.name} está comendo`);
};

Animal.prototype.sleep = function sleep() {
  console.log(`O ${this.type} ${this.name} está dormindo`);
};

const animal1 = Animal("gato", "Zion", 5);
animal1.eat();
animal1.sleep();
