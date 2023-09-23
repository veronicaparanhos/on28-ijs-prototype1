function Animal(type, name, age) {
  let animal = {};
  animal.type = type;
  animal.name = name;
  animal.age = age;

  animal.eat = function eat() {
    console.log(`O ${this.type} ${this.name} está comendo`);
  };

  return animal;
}

const animal1 = Animal("gato", "Zion", 5);
animal1.eat();
