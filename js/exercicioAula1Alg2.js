/* 
Solicite uma quantidade definida de numeros a serem capturados
para cada captura deve verificar qual o maior numero e o menor numero 
após a captura dos numeros exibir o maior o menor e a media geral desses numero
 
*/

let quantidade = Number(prompt("Informe quantos numeros serão capturados"))
let menor
let maior
let media
let soma

soma=0
for (let contador = 1; contador <= quantidade; contador++) {
    let numero = Number(prompt("Informe o " + contador + "ª numero "))
    soma+=numero
    if (contador == 1) {
        menor = numero
        maior = numero
    }else{

        if(numero<menor){
            menor=numero
        }

        if(numero>maior){
            maior=numero
        }

    }
}

media=soma/quantidade
alert("Menor "+menor)
alert("Maior "+maior)
alert("Média "+media)


/*

Repita indefinidamente até que o usuario decida parar 
para cada loop deve perguntar o nome , marca do carro e valor

no final do loop informar a soma geral para os valores de carros informados


*/