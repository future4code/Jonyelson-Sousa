//indica os Exercícios
/* indica as respostas dos exercícios */

// Exercícios de interpretação de código

// 1
/*
    A função é um conversor de moeda de dolar para real que recebe um
parametro em sua invoção no caso o valor em dolar foi 100, quando executada
solicita aõ usuario que coloque o valor da cotação do dolar neste exemplo vamos
considera com 4 então  em seu processamento a constante 'meuDinheiro' multiplica
o valor em dolar pela cotação e retorna a saida em real no console que seria 'R$ 400'
*/

// 2 
/*
    Esta função serve para calcular investimentos com base no tipo e no valor,
em seu escopo ela possui uma estrutura condicional que verifica o tipo de investimento
e apartir dai faz o calculo do valor investido. para o novoMontante que têm o tipo Ações
e valor 150 ela vai retorna a quantia de 165. ja para o segundoMontante que possui
tipo Tesouro direto e valor 200 ela vai verifica que o tipo não exiti e vai cair no
default, logo vai avisar o usuario que o tipo informado é incorreto.
*/

//3
/*
        O código faz a declaração de 3 arrays sendo dois arrays vazios e um com varios numeros,
    depois em uma laço ele pecorre todo o array de numeros e verifica se o numero do indice
    atual dividido por 2 é = 0 se for ele armazena em um dos array vazio, caso contrario
    ele armazena no outro array vazio, ao fim do laço temos todos os array preenchidos.
    depois no cosole o código mostrar a quantidade total de numeros em cada array.
*/

//4
/*
    O código verifica qual o maior e menor numero dentro do array, o código estaria mais
    legivel se as variaveis numero1 e numero2 estivessem representadas respectivamente
    por menorNumero e maiorNumero. Aõ final ele imprime no console o menor e maior
    numero, no caso menor = -10 e maior = 1590.
*/


// Exercícios de Lógica de Programação

// 1- Cite 3 maneiras de se percorrer/iterar uma lista. Exercício multiplica os numeros 
// do array
/*
    primeira maneira */
/*
let numeros = [10, 25, 11, 33];
for (let i = 0; i < numeros.length; i++) {
    numeros[i] *= 2;
}
console.log(numeros);*/
/*
    segunda maneira */
/*let numeros2 = [15, 35, 12, 43];

const mutiplicaValoresDoArray = numeros2.map((numero) => {
    return numero * 2;
});
console.log(mutiplicaValoresDoArray);*/

/*
    terceira maneira */

/*numeros2.forEach((numero, index, array) => {
    array[index] = numero * 2;
});
console.log(numeros2);*/

//2
/*
letra-a) false;
letra-b) false;
letra-c) true;
letra-d) true;
letra-e) true;
*/

//3

/*const quantidadeDeNumerosPares = prompt("Digite um numero:")
let i = 0
while (i < quantidadeDeNumerosPares) {
    console.log(i * 2);
    i++
}*/
/* o código estava faltando receber o numero do usuario, a condição estava errada e
o loop estava sem incremento.*/


//4

/*const classificaTriangulo = (ladoA, ladoB, ladoC) => {
    if (ladoA == ladoB && ladoA == ladoC) {
        return console.log('Equilátero');
    } else if ((ladoA == ladoB) || (ladoA == ladoC) || (ladoB == ladoC)) {
        return console.log('Isósceles');
    }
    return console.log('Escaleno');
};

classificaTriangulo(8, 8, 8);*/

//5 Tentei aõ maximo deixa o algoritmo sem furo!!

/*function receberDois(numeroA, numeroB) {

    if (numeroA > numeroB) {
        console.log('O maior é:', numeroA);
        if (numeroA % numeroB == 0) {
            console.log(numeroA, 'é divisível por', numeroB);
            console.log(numeroB, 'não é divisível por', numeroA);
            numeroA -= numeroB;
            console.log('A diferença entre eles é ', numeroA);
        } else {
            console.log(numeroA, 'não é divisivel por', numeroB);
            console.log(numeroB, 'não é divisível por', numeroA);
            numeroA -= numeroB;
            console.log('A diferença entre eles é ', numeroA);
        }

    } else if (numeroA == numeroB) {
        console.log('Os numeros são iguais logo não ha diferenças!');
        if (numeroA == 0) {
            console.log('Sem pegadinhas zero é zero :)');
        } else {
            console.log(numeroB, 'é divisível por', numeroA);
        }
    } else {
        console.log('else');
        console.log('O maior é:', numeroB);
        if (numeroB % numeroA == 0) {
            console.log(numeroA, 'não é divisível por', numeroB);
            console.log(numeroB, 'é divisível por', numeroA);
            numeroB -= numeroA;
            console.log('A diferença entre eles é ', numeroB);
        } else {
            console.log(numeroA, 'não é divisivel por', numeroB);
            console.log(numeroB, 'não é divisível por', numeroA);
            numeroB -= numeroA;
            console.log('A diferença entre eles é ', numeroA);
        }
    }
};
receberDois(673, 6);*/


// Exercícios de Funções

//1

const arrayDeNumeros = [5, 3, 7, 8];

function verificaSegundoNumeroMaiorEMenor(array) {
    array.sort();
    console.log(array);
    let segundoMenorValor = array[1];
    console.log('Segundo menor numero: ', segundoMenorValor);
    let segundoMaiorValor = array[array.length - 2];
    console.log('Sengundo Maior valor: ', segundoMaiorValor);

};
verificaSegundoNumeroMaiorEMenor(arrayDeNumeros);
/* OBS: a função esta com furo pois estou pegando o segundo elemento e o penultimo,
se o primeiro elemento ou o ultimo forem valores duplicados então o a logica se contra
diz. porém tentei solucionar mais não tive exeto. */

//2

const alertLabenu = () => alert('Hello Labenu!');
alertLabenu();


// Exercícios de Objetos

//1
/*
    array serve para armazenarmos um conjunto de itens ou objetos e acessarmos pelo
mesmo nome, muito bom quando temos uma lista. Objeto é muito importante para representarmos
objetos reais no algoritmo pois podemos guardar suas propriedades e ações. a grade
diferência entre eles é que o array é uma listagem numerada e o objeto uma listagem
nomeada.
*/

//2

function criaRetangulo(lado1, lado2) {
    return retangulo = {
        lagura: lado1,
        altura: lado2,
        perimetro: (2 * (lado1 * lado2)),
        area: (lado1 * lado2),
    };
};

//3

/*const meuFilmeFavorito = {
    titulo: '2 Fast 2 Furios',
    ano: 2003,
    diretor: 'Jonh Singleton',
    atores: ['Paul Walker', 'Tyrese Gilbson'],
    atrizes: ['Eva Mendes', 'Devon Aoki'],

    detalhesDoFilme: function () {
        console.log(`Venha assistir ao filme ${meuFilmeFavorito.titulo}, do ano ${meuFilmeFavorito.ano}, dirigido por ${meuFilmeFavorito.diretor} e estrelado por ${meuFilmeFavorito.atores}, ${meuFilmeFavorito.atrizes}.`);
    }


}

meuFilmeFavorito.detalhesDoFilme();*/

//4

const pessoa = {
    nome: 'jonyelson',
    idade: '27',
    email: 'jl@kkk.com',
    enderenco: ' São luís',
};


let anonomizarPessoa = (objeto) => {
    const pessoaAnonima = {
        ...objeto,
        nome: 'anonima'
    }
    return pessoaAnonima;

};
console.log(anonomizarPessoa(pessoa));
console.log(pessoa);

