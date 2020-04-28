//Exercícios de interpretação de código

// 1) Leia o código abaixo. Indique todas as mensagens impressas no console.
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)//false

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)//false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)//true

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)//false

console.log("e. ", typeof resultado)//boolean


// 2. Leia o código abaixo. 

let array
console.log('I. ', array)

array = null
console.log('II. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)

let i = 0
console.log('IV. ', array[i], " e ", array[i + 1])

array[i + 1] = 19
const valor = array[i + 6]
console.log('V. ', array[i + 1], " e ", valor)

i += 1
array[i] = array[i - 1]
console.log('VI. ', array[i])

i = array.length - 1
array[i] = array[i - 3]
const resultadoC = array[i] % array[1]
console.log('VII. ', resultadoC)

/*
a. O que é array e como se declara em `JS`?
    Array é uma variavel utilizada para armazenar vários valores em uma única variavel.
    podemos declara const array = [1, 2 ,3 , 4];

b. Qual o index inicial de um `array`?
    o index inicial é 0

c. Como se determinar o tamanho do `array`?
    Atraves da função length

d. Indique todas as mensagens impressas no console.
    I. undefined
    II. null
    III. 11
    IV. 3 e 4
    V. 19 e 9
    VI. 3
    VII. 1
*/


//Exercícios de escrita de código

/*1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura
   entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K).
    
a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.*/

let grauFahrenheit = 77;
let kelvin = (grauFahrenheit - 32) * 5 / 9 + 273.15;
console.log("A.", "Kelvin ", kelvin);

//b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.

let grauCelsius = 80;
grauFahrenheit = (grauCelsius * 9 / 5) + 32;
console.log("B.", "Fahrenheit ", grauFahrenheit);

//c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.

grauCelsius = 30;
grauFahrenheit = (grauCelsius * 9 / 5) + 32;
kelvin = grauCelsius + 273.15;
console.log("C. ", "Fahrenheit ", grauFahrenheit, " Kelvin ", kelvin);


//d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.

Number.grauCelsius = prompt(" Digite o grau Celsius:");
grauFahrenheit = (grauCelsius * 9 / 5) + 32;
kelvin = grauCelsius + 273.15;
console.log("D. ", "Fahrenheit ", grauFahrenheit, " Kelvin ", kelvin);


/*2) Faça um programa que faça 5 perguntas para o usuário (pode ser criativo nesta parte). 
Imprima-as com as respostas no console da seguinte forma:*/

const nome = prompt("Qual o seu nome?");
console.log("Nome: ", nome);
const idade = prompt("Tem quantos anos?");
console.log("Idade: ", idade);
const esporte = prompt("Esporte favorito:");
console.log("Esporte favorito: ", esporte);
const profissao = prompt("Qual sua profissão?");
console.log("Profissão: ", profissao);
const filhos = prompt("Tem quantos filhos?");
console.log("Filhos: ", filhos);


/* 3) Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia 
elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba 
a quantidade de quilowatts consumida por uma residência.

    a. Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora;*/

let resultadoQuilowatt = 280 * 0.05;
console.log("Valor a ser pago: ", resultadoQuilowatt, "R$");

/* b. Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a
 ser pago pela mesma residência acima considerando 15% de desconto.*/

let resultadoComDesconto = resultadoQuilowatt;
resultadoQuilowatt *= 0.15;
resultadoComDesconto -= resultadoQuilowatt;


console.log("Valor a ser pago com desconto de 15%: ", resultadoComDesconto, "R$");