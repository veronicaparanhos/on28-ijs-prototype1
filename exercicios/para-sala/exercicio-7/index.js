const { Account } = require("./resolucao");

luaraAccount = new Account(1, 123, 1112, 10000);
// luaraAccount.credit(2000);
// luaraAccount.debit(500);

outraconta = new Account(2, 456, 1113, 100);
luaraAccount.transferTo(outraconta, 1000);
console.log(outraconta);

maisUmaConta = new Account(2, 456, 1114, 0);
maisUmaConta.closeAccount();
console.log(maisUmaConta);
