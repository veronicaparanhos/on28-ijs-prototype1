function generateId() {
  const crypto = require("crypto");
  const id = crypto.randomUUID();

  return id;
}

function raiseSalary(percent) {
  this.salary += this.salary * percent;
  console.log(`O novo salário é R$ ${this.salary}`);
}

function Employee(firstName, lastName, salary) {
  let employee = {};

  employee.id = generateId(); //aqui eu preciso executar para ela criar o id
  employee.firstName = firstName;
  employee.lastName = lastName;
  employee.salary = salary;
  employee.raiseSalary = raiseSalary; //só vamos executar quando a função construtora for criada

  return employee;
}

module.exports = { Employee };
