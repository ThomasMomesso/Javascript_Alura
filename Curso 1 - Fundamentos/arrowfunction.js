function apresentar(nome) {
  return `Meu nome é ${nome}`;
}
// Arrow Function
const apresentararow = (nome) => `Meu nome é ${nome}`;
const soma = (n1, n2) => n1 + n2;
// Arrow Function com mais de uma linha de instrução

const somanumpeq = (n1, n2) => {
  if (n1 >= 10 || n2 >= 10) {
    return "Digite um numero de 1 a 9";
  } else {
    return n1 + n2;
  }
};
console.log(somanumpeq(9, 5));
