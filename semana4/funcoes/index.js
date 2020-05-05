// Exercicio 1
const minhaFuncao = (quantidade) => {
    const array = []
    for (let i = 0; i < quantidade; i += 2) {
        for (let j = 0; j < i; j++) {
            array.push(j)
        }
    }
    return console.log(array);
}

minhaFuncao(8);
/*
letra-a) []
letra-b) [ 0, 1, 0, 1, 2, 3 ]
letra-c) [
            0, 1, 0, 1, 2,
            3, 0, 1, 2, 3,
            4, 5
        ]
*/

// Exercicio 2

let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === nome) {
            return i;
        }
    }
};

console.log(funcao(arrayDeNomes, "Darvas"));
console.log(funcao(arrayDeNomes, "João"));
console.log(funcao(arrayDeNomes, "Paula"));

/*
letra-a)
0
2
undefined

letra-b) o array funcionaria normalmente pois é um objeto. como a tipagem do javascript é dinamica é possivel
colocar difentes tipos.
*/

// Exercicio 3

function metodo(array) {
    let resultadoA = 0;
    let resultadoB = 1;
    let arrayFinal = [];

    for (let x of array) {
        resultadoA += x;
        resultadoB *= x;
    }

    arrayFinal.push(resultadoA);
    arrayFinal.push(resultadoB);
    return arrayFinal;
}

/*a funçao acima recebe como parametro um array e retorna um novo array com os valores [3,2]
ela poderia ser chamada de criarNovoArray.*/

/* Exercicio 4
letra-a*/
//function nomeadas
function calcularIdadeCachorro(ano) {
    return console.log("O cachorro têm ", ano * 7, "anos");
}
//function não nomeadas
let calculoIdadeDoCachorro = (ano) => console.log("O cachorro têm ", ano * 7, "anos");

//letra-b



