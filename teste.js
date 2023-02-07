const domesticos = {
  energia: 0,
  agua: 0,
  alimentacao: 0,
  internet: 0,
  vestuario: 0,
};

const veiculo = {
  combustivel: 0,
  manutencao: 0,
};

const superfulos = {
  alimentacaoExterna: 0,
  viagem: 0,
};

domesticos.energia = 200;
domesticos.alimentacao = 800;
domesticos.alimentacao = domesticos.alimentacao + 150;
domesticos.internet = 150;
domesticos.agua = 200;

veiculo.combustivel = 400;
veiculo.manutencao = 10080;

superfulos.alimentacaoExterna = 370;
superfulos.viagem = 1000;

const arrayTotal = [];

var somaDomesticos = 0;
const arrDomesticos = Object.values(domesticos);
for (let i = 0; i < arrDomesticos.length; i++) {
  somaDomesticos += arrDomesticos[i];
}
getTotalAndPushInArray(somaDomesticos);

var somaVeiculo = 0;
const arrVeiculo = Object.values(veiculo);
for (let i = 0; i < arrVeiculo.length; i++) {
  somaVeiculo += arrVeiculo[i];
}
getTotalAndPushInArray(somaVeiculo);

const arrSuperfulos = Object.values(superfulos);
for (let i = 0; i < arrSuperfulos.length; i++) {
  var somaSuperfulos = 0;
  somaSuperfulos += arrSuperfulos[i];
}
getTotalAndPushInArray(somaSuperfulos);

function getTotalAndPushInArray(sumOfItem) {
  arrayTotal.push(sumOfItem);
}

let sumOfAllItens = 0;

for (var i = 0; i < arrayTotal.length; i++) {
  sumOfAllItens += arrayTotal[i];
}

console.log(
  `Soma de todos os itens = ${sumOfAllItens}\n`,
  "array com a soma de cada categoria: " + arrayTotal
);

// const total = Object.keys(domesticos).map((key, value) => {
//   console.log(`Essa e a key: ${key} e esse e o value: ${value}`)
//   return key;
// });

// console.log(total)
