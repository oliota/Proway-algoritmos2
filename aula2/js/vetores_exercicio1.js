console.log("Criar um vetor de gostos pessoais");
console.log("pode criar o vetor ja com valores ou não");
console.log("se nao tiver valores usar o push para incluir item a item");

console.log("exibir a lista toda com LOG");
console.log("percorrer a lista para apresentar cada valor com uma frase");

//criei um vetor de gostos
let gostos=[
    "filmes",
    "series",
    "basquete"
]

//usando o push inclui um item na lista
gostos.push("lecionar")

//exibi em log como esta a variavel gostos
console.log(gostos);

//percorrendo o vetor de 0 ate tamanho da lista-1
//de 1 em 1
for(let contador=0;contador<gostos.length;contador++){
    //acessando o valor que esta na posicao [contador]
console.log("Gosto muito de "+gostos[contador]);
}

console.log(gostos[0]);
console.log("O que eu gosto mais é "+ gostos[2]);