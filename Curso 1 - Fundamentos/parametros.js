/* //parametros para funções
function soma(n1, n2) {
  return n1 + n2;
}

console.log(soma(3, 5)); */
//parâmetros x argumentos

//ordem parâmetros

function nomeidade(nome, idade) {
  return `Meu nome é ${nome} e minha idade é ${idade}`;
}
/* 
console.log(nomeidade{27,"Thomas"}) */

function soma(n1, n2) {
  return n1 + n2;
}
function multiplica(n1 = 1, n2 = 1) {
  return n1 * n2;
}
/* console.log(multiplica(soma(1, 4), soma(3, 3))); */

console.log(multiplica(soma(1, 4)));
