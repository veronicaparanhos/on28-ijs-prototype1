function generateId() {
  const crypto = require("crypto");
  const id = crypto.randomUUID();

  return id;
}

function raiseSalary(percent) {
  this.salary += this.salary * percent;
  console.log(`O novo salário é R$ ${this.salary}`);
}

function addBenefits(benefit) {
  this.benefits.push(benefit);
  console.log(`O benefíco ${benefit} foi adicionado`);
}

// function removeBenefits(benefit) {
//   let index = this.benefits.indexOf(benefit);

//   if (index !== -1) {
//     this.benefits.splice(index, 1);
//     console.log(`O benefíco ${benefit} foi removido`);
//   } else {
//     console.log(`O benefício ${benefit} não é um benefício válido`);
//   }
// }

function removeBenefits(benefit) {
  let index = this.benefits.indexOf(benefit);
  if (index === -1) {
    console.log(`O benefício ${benefit} não é um benefício válido`);
  } else {
    this.benefits = this.benefits.filter(
      (currentBenefit) => currentBenefit !== benefit
    );
    console.log(`O benefíco ${benefit} foi removido`);
  }
}

function listBenefits() {
  console.log(`Os beneficios desse funcionário são ${this.benefits}`);
}

function Employee(firstName, lastName, salary) {
  let employee = {};

  employee.id = generateId(); //aqui eu preciso executar para ela criar o id
  employee.firstName = firstName;
  employee.lastName = lastName;
  employee.salary = salary;
  employee.raiseSalary = raiseSalary; //só vamos executar quando o objeto for criado
  employee.benefits = [];
  employee.addBenefits = addBenefits;
  employee.removeBenefits = removeBenefits;
  employee.listBenefits = listBenefits;

  return employee;
}

module.exports = { Employee };
