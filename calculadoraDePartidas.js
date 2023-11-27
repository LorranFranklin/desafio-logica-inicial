let vitorias = 90;
let derrotas = 1;

const partidasRankeadas = (vitorias, derrotas) => {
  saldoVitorias = vitorias - derrotas
  if (saldoVitorias <= 10) {
    console.log("O Herói tem saldo de", saldoVitorias, "está no nível Ferro.");
  } else if (saldoVitorias <= 20) {
    console.log("O Herói tem saldo de", saldoVitorias, "está no nível Bronze.");
  } else if (saldoVitorias <= 50) {
    console.log("O Herói tem saldo de", saldoVitorias, "está no nível Prata.");
  } else if (saldoVitorias <= 80) {
    console.log("O Herói tem saldo de", saldoVitorias, "está no nível Ouro.");
  } else if (saldoVitorias <= 90) {
    console.log("O Herói tem saldo de", saldoVitorias, "está no nível Diamante.");
  } else if (saldoVitorias <= 100) {
    console.log("O Herói tem saldo de", saldoVitorias, "está no nível Lendário.");
  } else if (saldoVitorias > 100) {
    console.log("O Herói tem saldo de", saldoVitorias, "está no nível Imortal.");
  }
}
// Exemplo de chamada da função
partidasRankeadas(vitorias, derrotas);

console.log()