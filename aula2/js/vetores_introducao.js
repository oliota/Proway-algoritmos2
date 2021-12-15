
console.log("deu certo");

let nomes = [] // criando um vetor sem itens

console.log(nomes);

// criando um vetor ja com itens
let cursos = [
    "Algoritmos 1",
    "Algoritmos 2",
    "Java fundamentos",
    "Fundamentos em html5",
    "Javascript avançado",
    "MySql",
    "Typescript",
    "Fundamentos em css"
]


console.log(cursos);

console.log(cursos[5]);//acessando o valor no index 5, lembrando que começa com 0
console.log(cursos.indexOf("Fundamentos em html5"));

console.log(cursos.indexOf("Typescript"));

cursos.splice(4, 3)
//para deletar um item na lista é necessário informar a posição do item
//e a quantidade de itens para deletar

console.log(cursos);


cursos.push("Python")//inserindo item no final da lista
cursos.push("Angular")//inserindo item no final da lista

console.log(cursos);


//iniciando o contador com zero pois o indice na lista começa com zero
//enquanto for menor que o tamanho da lista, ou seja tamanho -1
//incremento de 1 em 1
for (let contador = 0; contador < cursos.length; contador++) {
    //acessando o valor de cursos na posicao [contador]
    console.log("Na posicao " + (contador+1) + " tem o valor = " + cursos[contador]);
}


//inicando o contador com 1 pq é mais intuitivo fazer a contagem com 1
//mas tenho que ir ate o tamanho da lista
//incremento de 1 em 1
console.log("======================================");
for (let contador = 1; contador <= cursos.length; contador++) { 
    //ajustando o acesso ao valor para localizar o indice correto, pois começa com 0
    //se eu inicio com 1 eu estaria pulando o primeiro item e acesso um item extra que não existe
    console.log("Na posicao " + contador + " tem o valor = " + cursos[contador-1]);
}