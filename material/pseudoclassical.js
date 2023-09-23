function Animal(type, name, age) {
  this.type = type;
  this.name = name;
  this.age = age;
}

Animal.prototype.eat = function eat() {
  console.log(`O ${this.type} ${this.name} está comendo`);
};

Animal.prototype.sleep = function sleep() {
  console.log(`O ${this.type} ${this.name} está dormindo`);
};

const animal1 = new Animal("gato", "Zion", 5); // com o new não precisamos criar o objeto e nem retotnar o objeto
animal1.eat();
animal1.sleep();
