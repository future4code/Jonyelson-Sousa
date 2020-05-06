function adicionarTarefa() {
    let tarefa = document.getElementById("tarefa").value;
    let diaSemana = document.querySelector("select").value;
    switch (diaSemana) {
        case '1':
            document.getElementById("segunda").innerHTML += "<p>" + tarefa + "</p>";
            document.getElementById("tarefa").value = "";
            break;
        case '2':
            document.getElementById("terca").innerHTML += "<p>" + tarefa + "</p>";
            document.getElementById("tarefa").value = "";
            break;
        case '3':
            document.getElementById("quarta").innerHTML += "<p>" + tarefa + "</p>";
            document.getElementById("tarefa").value = "";
            break;
        case '4':
            document.getElementById("quinta").innerHTML += "<p>" + tarefa + "</p>";
            document.getElementById("tarefa").value = "";
            break;
        case '5':
            document.getElementById("sexta").innerHTML += "<p>" + tarefa + "</p>";
            console.log("deu certo");
            document.getElementById("tarefa").value = "";
            break;
        case '6':
            document.getElementById("sabado").innerHTML += "<p>" + tarefa + "</p>";
            document.getElementById("tarefa").value = "";
            break;
        case '7':
            document.getElementById("domingo").innerHTML += "<p>" + tarefa + "</p>";
            document.getElementById("tarefa").value = "";
            break;
    }

}