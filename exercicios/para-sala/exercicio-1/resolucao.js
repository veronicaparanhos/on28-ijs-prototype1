let employee1 = {};

employee1.id = "023";
employee1.firstName = "Verônica";
employee1.lastName = "Paranhos";
employee1.salary = 5000;
employee1.raiseSalary = function raiseSalary(percent) {
  this.salary += this.salary * percent;
  console.log(`O novo salário é R$ ${this.salary}`);
};

let employee2 = {};

employee2.id = "023";
employee2.firstName = "Letycia";
employee2.lastName = "Paranhos";
employee2.salary = 8000;
employee2.raiseSalary = function raiseSalary(percent) {
  this.salary += this.salary * percent;
  console.log(`O novo salário é R$ ${this.salary}`);
};

employee1.raiseSalary(0.5);
