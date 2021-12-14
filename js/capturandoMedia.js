/*
criar variaveis para o nome do aluno, as 3 notas e calcular a media

//podem usar 3 variaveis para as notas OU usar prepeticao para a quantidade de notas
*/

let nome = "Rubem"

// let nota1 = Number(prompt("Informe a 1ª nota do aluno " + nome))
// let nota2 = Number(prompt("Informe a 2ª nota do aluno " + nome))
// let nota3 = Number(prompt("Informe a 3ª nota do aluno " + nome))

// let media = (nota1 + nota2 + nota3) / 3

let qtdNotas
let nota
let soma

qtdNotas= Number( prompt("Informe quantas notas deja capturar")  )

// variavel temporaria com ponto de partida
// condição de permanencia
//incremento ou decremento

soma=0
for(let contador=1; contador<=qtdNotas; contador++){
    nota = Number( prompt("Informe a "+contador+"ª nota do aluno "+nome) )
    soma+= nota
}

let media = (soma)/qtdNotas

alert("Media é "+ media);

if (media < 7) {
    alert("Reprovado");
} else {
    alert("Aprovado");
}