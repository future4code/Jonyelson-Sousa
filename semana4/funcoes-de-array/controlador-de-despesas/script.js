// Array dos objetos despesas

const arrayDespesas = [];

// Cadastro das depesas

const dadosFomulario = () => {
    event.preventDefault();
    const despesa = {
        valor: '',
        tipoDeDespesa: '',
        descricao: ''
    }

    despesa.valor = parseInt(document.getElementById("valor").value);
    despesa.tipoDeDespesa = document.getElementById("tipo").value;
    despesa.descricao = document.getElementById("descricao").value;

    if (despesa.valor === "" || despesa.descricao === "") {
        alert("Campos vazios não permitidos!")
    } else {
        arrayDespesas.push(despesa);
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

// função filtrar as despesas

const filtrarDespesas = () => {
    event.preventDefault();

};

// Limpar filtros

const limparFiltros = () => {

}

