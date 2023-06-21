const alunos = ["João", "Juliana", "Caio", "Ana"];
const notas = [10, 8, 7.5, 9];

const alunosenotas = [alunos, notas];

console.log(
  `A Aluna da posição 1 da lista de alunos é: ${alunosenotas[0][1]} que teve a média ${alunosenotas[1][1]}`
);
