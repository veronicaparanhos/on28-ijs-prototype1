const { Employee } = require('./resolucao');

const employee1 = Employee('Luara', 'Kerlen', 10000);
console.log(employee1);
console.log(employee1.raiseSalary(10));

const employee2 = Employee('Maria', 'Santos', 20000);
console.log(employee2);
console.log(employee2.raiseSalary(5));
