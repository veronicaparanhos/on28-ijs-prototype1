const {
  Gatos,
  Cachorros,
  AnimalExotico,
  HistoricoMedico,
} = require("./resolucao");

const zion = new Gatos("Zion", 5, "amarelo e branco", true);
zion.historico.vacinar("raiva");
zion.historico.vacinar("V4");
zion.historico.consultar("25/09/2023");
zion.historico.consultar("30/09/2023");
console.log(zion);

const mariazinha = new Cachorros(
  "Mariazinha",
  7,
  "amarelo e branco",
  false,
  "chihuahua"
);

mariazinha.historico.vacinar("raiva");
console.log(mariazinha);
