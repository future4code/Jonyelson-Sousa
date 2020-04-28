// Exercício de intrepretação de código

const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
    console.log("Passou no teste.")
} else {
    console.log("Não passou no teste.")
}

/*
01)Explique o que o código faz. Qual o teste que ele realiza? Para que tipos de números ele imprime
 no console "Passou no teste"? Para que tipos, a mensagem é "Não passou no teste"?

    O código acima recebe um valor do usuario e transforma para numero, depois verifica se o resto da
 divisão do numero é igual a zero se for ele imprimir 'Passou no teste' caso contrario imprimir
'Não passou no teste'.*/


/*
2)O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de
um supermercado. Veja abaixo:*/

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
    case "Laranja":
        preco = 3.5
        break;
    case "Maçã":
        preco = 2.25
        break;
    case "Uva":
        preco = 0.30
        break;
    case "Pêra":
        preco = 5.5
    //break; // BREAK PARA O ITEM d.
    default:
        preco = 5
        break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/*
a. Para que serve o código acima?
    Serve para mostrar o preço de uma fruta ao usuario.

b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    O preço da fruta  Maçã  é  R$  2.25

c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva.
Qual seria o preço que você pagaria?
    24.55 R$

d. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console
 se retirássemos o `break` que está logo acima do `deafult` (o `break` indicado pelo comentário
  "BREAK PARA O ITEM d.")?
    O preço da fruta  Pêra  é  R$  5.5
  */

const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if (numero1 > 0 && numero2 > 0) {
    let mensagem
    if (numero1 > numero2) {
        mensagem = "Número 1 é m3aior que o 2!"
    } else {
        mensagem = "Número 1 é menor ou igual ao 2!"
    }
}

console.log(mensagem)
/*
3)Considere um usuário que digita os números 3 e 4 respectivamente. Qual será a mensagem do terminal?
 Haverá algum erro? Justifique usando os conceitos de bloco ou escopo.

    Haverá um erro pois a variavel mensagem foi declarada dentro do escopo if e else,
ou seja é uma variavel local e não pode ser acessada no escopo global.*/

// Exercícios de escrita de código

/*
4)Nos exercícios abaixo, será necessário que você trabalhe com a comparação de números. Leia abaixo:
a. Crie um programa que receba dois números do usuário através do prompt e imprima-os na ordem decrescente. 
O que acontece com o seu programa se os 2 números forem iguais? (é só testar e colocar um comentário
descrevendo o que aconteceu).*/

const numero1 = prompt("Digite o primeiro número.");
const numero2 = prompt("Digite o segundo número?");
if (numero1 > numero2) {
    console.log("Ordem decrescente: ", numero1, numero2);
} else {
    console.log("Ordem decrescente: ", numero2, numero1);
}
//Ele cair na condição else e  faz a impressão dos numeros repetidos.

/*
b. Adapte o programa para que o usuário digite 3 números. Ainda os imprima na ordem **decrescente**. 
O que acontece como seu programa se os 3 números forem iguais? (é só testar e colocar um comentário 
descrevendo o que aconteceu).*/

const numero1 = prompt("Digite o primeiro número.");
const numero2 = prompt("Digite o segundo número?");
const numero3 = prompt("Digite o terceiro número?");
if (numero1 > numero2 && numero1 > numero3) {
    if (numero2 > numero3) {
        console.log("Ordem decrescente: ", numero1, numero2, numero3);
    } else {
        console.log("Ordem decrescente: ", numero1, numero3, numero2);
    }
} else if (numero2 > numero1 && numero2 > numero3) {
    if (numero1 > numero3) {
        console.log("Ordem decrescente: ", numero2, numero1, numero3);
    } else {
        console.log("Ordem decrescente: ", numero2, numero3, numero1);
    }
} else {
    if (numero1 > numero2) {
        console.log("Ordem decrescente: ", numero3, numero1, numero2);
    } else {
        console.log("Ordem decrescente: ", numero3, numero2, numero1);
    }
}

// Se os tres numeros forem iguais ele imprime o numero 3 vezes

/*c. Agora, impeça que o usuário digite 3 números iguais. Caso todos sejam iguais, mostre um aviso ao
 usuário indicando que ele deve, ao menos, inserir um número diferente.*/

const numero1 = prompt("Digite o primeiro número.");
const numero2 = prompt("Digite o segundo número?");
const numero3 = prompt("Digite o terceiro número?");
if (numero1 == numero2 && numero1 == numero3) {
    console.log("Atualize a pagina e coloque pelo menos um numero diferente");
} else {
    if (numero1 > numero2 && numero1 > numero3) {
        if (numero2 > numero3) {
            console.log("Ordem decrescente: ", numero1, numero2, numero3);
        } else {
            console.log("Ordem decrescente: ", numero1, numero3, numero2);
        }
    } else if (numero2 > numero1 && numero2 > numero3) {
        if (numero1 > numero3) {
            console.log("Ordem decrescente: ", numero2, numero1, numero3);
        } else {
            console.log("Ordem decrescente: ", numero2, numero3, numero1);
        }
    } else {
        if (numero1 > numero2) {
            console.log("Ordem decrescente: ", numero3, numero1, numero2);
        } else {
            console.log("Ordem decrescente: ", numero3, numero2, numero1);
        }
    }
}


/*
5)Vamos criar um programa que classifique os animais dados alguns critérios. O primeiro critério de divisão
é se eles possuem ossos formando seu esqueleto ou não. Caso possuam, são vertebrados, caso contrário,
invertebrados. O nosso foco é realizar a classificação só do primeiro caso. Se possuir pelos, entende-se que
ele é um mamífero; e este pode ser classificado como um ser humano ou não (mamífero não humano), simplesmente,
pelo fato dele ser considerado racional ou não. Se não for mamífero, entende-se que ele é uma ave, se possuir
penas. Se não possuir, devemos entender uma característica importante: se ele é um animal terrestre.
Se não for, diz-se que é um peixe; se  for, ele pode ser um anfíbio ou um réptil. Ele será o primeiro
 (anfíbio), se passar uma parte da vida em ambiente aquático; e será o segundo (réptil), caso contrário.
 */