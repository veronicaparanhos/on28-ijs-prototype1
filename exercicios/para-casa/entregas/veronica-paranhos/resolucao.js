function HistoricoMedico() {
  this.consultas = [];
  this.vacinas = [];
  this.procedimentos = [];
}

HistoricoMedico.prototype.vacinar = function (vacina) {
  this.vacinas.push(vacina);
};

HistoricoMedico.prototype.consultar = function (consulta) {
  this.consultas.unshift(consulta);
};

function Gatos(nome, idade, cor, castrado) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.historico = new HistoricoMedico();
}

function Cachorros(nome, idade, cor, castrado, raca) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.raca = raca;
  this.historico = new HistoricoMedico();
}

function AnimalExotico(nome, idade, cor, especie, adulto) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.especie = especie;
  this.adulto = adulto;
  this.historico = new HistoricoMedico();
}

module.exports = { Gatos, Cachorros, AnimalExotico, HistoricoMedico };
