// objeto para receber os valores do formulario

let informacoesPost = {
    titulo: '',
    autor: '',
    conteudo: ''
};

// Array para armazenar as postagem
let postagem = [];

function pegarValoresFormulario() {
    event.preventDefault();
    let atualTitulo = document.getElementById("titulo").value;
    let atualAutor = document.getElementById("autor").value;
    let atualConteudo = document.getElementById("conteudo").value;
    informacoesPost.titulo = atualTitulo;
    informacoesPost.autor = atualAutor;
    informacoesPost.conteudo = atualConteudo;
    adicionarPostagem();

};

function adicionarPostagem() {
    postagem.push(informacoesPost);
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("conteudo").value = "";
}

function mostra() {
    console.log(postagem);
}




/*const informacoesPost = {
    titulo: titulo,
    autor: autor,
    conteudo
}*/