const { Account } = require("./resolucao");

luaraAccount = Account(123, 1234, 1000);
luaraAccount.credit(2000);
luaraAccount.debit(500);
outraconta = Account(456, 4321, 100);
luaraAccount.transferTo(outraconta, 10);
