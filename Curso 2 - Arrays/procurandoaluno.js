const alunos = ["João", "Juliana", "Caio", "Ana"];
const notas = [10, 8, 7.5, 9];

const alunosenotas = [alunos, notas];

function exibenomeenota(aluno) {
  if (alunosenotas[0].includes(aluno)) {
    /*  const alunos1 = alunosenotas[0];
    const medias = alunosenotas[1]; */
    const [alunos1, medias] = alunosenotas;
    ////linha a cima faz a mesma coisa que as duas a cima dela
    const indice = alunos1.indexOf(aluno);
    const mediaaluno = medias[indice];
    console.log(`${aluno} tem a média ${mediaaluno} `);
  } else {
    console.log("Aluno não encontrado!");
  }
}
exibenomeenota("Juliana");
