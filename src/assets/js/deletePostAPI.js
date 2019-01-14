document.getElementById("deleteButton").onclick = excluirPostPorID;

var urlBase = "http://jsonplaceholder.typicode.com";


function excluirPostPorID() {

    // captura o ID informado
    var deletPostID = document.getElementById("deletPostID");
    // deposita o ID informado em forma de valor em outra variável...
    //...para manter a disponibilidade de buscar o dado conforme foi inserido
    var deletPostIDValue = deletPostID.value;

    //Validações, campo vazio ou caso não seja informado um número
    if (deletPostIDValue.trim() == "") {
        alert("Por favor, informe um ID");
    } else if (isNaN(deletPostIDValue)) {
        alert("Ei... o ID deve ser um número");
    } else {

        // Início da Função Delete
        
        // GET para buscar a mensagem e informar ao usuário
        // O ideal seria criar uma caixa de confirmação se o usuário realmente...
        //...quer deletar a mensagem referente ao ID informado
        axios.get(urlBase + "/posts/" + deletPostIDValue)
            .then(function (response) {

                //lança no log os dados obtidos.
                console.log(response);
                var postUserId = response.data.userId;
                var postMessage = response.data.body;


                // TODO: ABA DE CONFIRMAÇÃO DE EXCLUSÃO DA MENSAGEM EXIBINDO A MENSAGEM EQUIVALENTE AO ID

                // provisório...
                alert("=== MENSAGEM EXCLUIDA ===\n"
                    +"ID DO USUÁRIO: "+ postUserId+                  
                    "\nMENSAGEM: \n"+ postMessage);
             });

        // FUNÇÃO DELETE
        //utilização da Lib axios para excluir o post informado
        axios.delete(urlBase + '/posts/' + deletPostID.value, {})
            .then(function (response) {
                //Informa no log o status do axios
                console.log(response);
            })
    }
}

