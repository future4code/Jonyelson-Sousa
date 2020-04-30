//Exercício de intrepretação de código
/*
1)O que o código abaixo está fazendo? Qual o resultado impresso no console? */

/*let sum = 0
for (let i = 0; i < 15; i++) {
    sum += i
}
console.log(sum)

O codigo esta fazendo a soma dele mesmo mais o valor atual do indice e armazenando em sua propria variavel.
o resultado é 105*/

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 5
for (const item of lista) {
    if (item % numero === 0) {
        novaLista.push(item)
    }
}
console.log(novaLista)

/*

a. O que o comando `.push` faz?

    O comando push adicionar um item no array

b. Qual o valor impresso no console?

    [10, 15, 25, 30]

c. Qual **seria** imprimido no console se a variável `numero` tivesse o valor de `3`? E se tivesse o valor 
de `4`?
   numero = 3 [12, 15, 18, 21, 27, 30]
   numero = 4 [12]

//Exercício de escrita de código


/*
3)Nas perguntas abaixo, considere que você tenha acesso a um `array`  (chamado de 'array original') que seja
composto somente de números. Após o enunciado, há um exemplo de qual deve ser a resposta final de cada
programa individualmente.

a. Escreva um programa que devolva o maior e o menor números contidos no array original*/

const arrayOriginal = [5, 8, 11, 15, 22, 35, 40, 55, 60];
let menorValor, maiorValor, valorDoIndice;
for (let i = 0; i < arrayOriginal.length; i++) {
    if (i < 1) {
        menorValor = arrayOriginal[i];
        maiorValor = arrayOriginal[i];
    }
    if (menorValor > arrayOriginal[i]) {
        menorValor = arrayOriginal[i];
    }
    if (maiorValor < arrayOriginal[i]) {
        maiorValor = arrayOriginal[i];
    }
}
console.log("=====Exercício 3=====");
console.log("=====Letra A=====");

console.log("O menor valor do array é " + menorValor + " e o maior é " + maiorValor);

//O menor valor do array é 5 e o maior é 60

/*
b. Escreva um programa que devolva um novo array contendo todos os valores do array original divididos por 10.*/

//const arrayOriginal = [5, 8, 11, 15, 22, 35, 40, 55, 60];
let novoArray = [];

for (let i = 0; i < arrayOriginal.length; i++) {
    let valorDoArray = arrayOriginal[i] / 10;
    novoArray.push(valorDoArray);
}
console.log("=====Letra B=====");
console.log(novoArray);

//[0.5, 0.8, 1.1, 1.5, 2.2, 3.5, 4 ,5.5 ,6]

/*
c)Escreva um programa que devolva um novo array contendo, somente, os números pares do array original.*/

//const arrayOriginal = [5, 8, 11, 15, 22, 35, 40, 55, 60];
let arrayPares = [];
for (let i = 0; i < arrayOriginal.length; i++) {
    let valorArray = arrayOriginal[i];
    if (valorArray % 2 === 0) {
        arrayPares.push(valorArray);
    }
}
console.log("=====Letra C=====");
console.log(arrayPares);
/*d. Escreva um programa que gere um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero"
*/

/*arrayOriginal = [5, 8, 11, 15, 22, 35, 40, 55, 60];*/
console.log("=====Letra D=====");

for (let i = 0; i < arrayOriginal.length; i++) {
    console.log(`O elemento do índex ${i} é ${arrayOriginal[i]}`);
}