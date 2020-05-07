//array de objetos
let postagem = [];

// função para receber os valores e adicionar ao array
function criarPostagem() {
    event.preventDefault();
    let informacoesPost = {
        titulo: '',
        autor: '',
        conteudo: ''
    };
    informacoesPost.titulo = document.getElementById("titulo").value;
    informacoesPost.autor = document.getElementById("autor").value;
    informacoesPost.conteudo = document.getElementById("conteudo").value;
    postagem.push(informacoesPost);

    inserirPostagens(informacoesPost);

    console.log(postagem);
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("conteudo").value = "";


};

// função para inserir os post no html

function inserirPostagens(informacoesPost) {
    document.getElementById("postagens").innerHTML += (`<div> <h3>
    ${informacoesPost.titulo} </h3> <h6> ${informacoesPost.autor} </h6>  <p> ${informacoesPost.conteudo} </p>
    </div>`);
}