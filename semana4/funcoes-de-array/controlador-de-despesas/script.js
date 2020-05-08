// Array dos objetos despesas

const arrayDespesas = [];

// Cadastro das depesas

const dadosFomulario = () => {
    event.preventDefault();
    const despesa = {
        valor: '',
        tipoDeDespesa: '',
        descricao: ''
    };

    despesa.valor = parseInt(document.getElementById("valor").value);
    despesa.tipoDeDespesa = document.getElementById("tipo").value;
    despesa.descricao = document.getElementById("descricao").value;

    if (despesa.valor === "" || despesa.descricao === "") {
        alert("Campos vazios não permitidos!")
    } else {
        arrayDespesas.push(despesa);
        inserirDespesasHtml();
        //Limpar os valores do formulario
        document.getElementById("valor").value = '';
        document.getElementById("descricao").value = '';
    };

    //testando 
    console.log(despesa.valor);
    console.log(despesa.tipoDeDespesa);
    console.log(despesa.descricao);
    console.log(arrayDespesas);
};

const inserirDespesasHtml = () => {
    document.getElementById('qualquer-coisa').innerHTML = '';
    for (let i in arrayDespesas) {
        document.getElementById('qualquer-coisa').innerHTML += `<li>  
            ${arrayDespesas[i].valor} 
            ${arrayDespesas[i].tipoDeDespesa} 
            ${arrayDespesas[i].descricao} 
            </li>`;
    };
};

// função para filtrar as despesas

const filtrarDespesas = arrayDespesas.filter((item, index, array) => {
    console.log('teco');
})
event.preventDefault();

