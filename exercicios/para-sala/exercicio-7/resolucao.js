function Account(bankNumber, numberAccount, agencyNumber, balance) {
  this.bankNumber = bankNumber;
  this.numberAccount = numberAccount;
  this.agencyNumber = agencyNumber;
  this.balance = balance;
}

Account.prototype.credit = function credit(amount) {
  this.balance += amount;
  console.log(`O novo valor é de ${this.balance}`);
};

Account.prototype.debit = function debit(amount) {
  if (this.balance >= amount) {
    this.balance -= amount;
    console.log(`O novo valor é de ${this.balance}`);
  } else {
    console.log("Você não tem saldo suficiente para essa operação.");
  }
};

Account.prototype.transferTo = function transferTo(anotherAccount, amount) {
  let tax = 0;

  if (this.bankNumber !== anotherAccount.bankNumber) {
    tax = 0.05;
  }

  const amountToDebit = amount + amount * tax;

  if (this.balance >= amountToDebit) {
    this.balance -= amountToDebit;
    anotherAccount.balance += amount;
    console.log(
      `Transferência realizada com sucesso. Seu novo saldo é de ${this.balance}`
    );
  } else {
    throw "Você não tem saldo suficiente para essa operação.";
  }
};

Account.prototype.closeAccount = function closeAccount() {
  if (this.balance === 0) {
    this.bankNumber = undefined;
    this.numberAccount = undefined;
    this.agencyNumber = undefined;
    this.balance = undefined;
    console.log(`Conta encerrada com sucesso!`);
  } else {
    console.log(
      "A conta não pode ser encerrada. Sua conta ainda possui saldo. Saldo atual: ${this.balance}"
    );
  }
};

module.exports = { Account };
