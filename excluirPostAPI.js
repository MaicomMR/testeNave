document.getElementById("btnDeletar").onclick = excluirPostPorID;


var urlBase = "http://jsonplaceholder.typicode.com";


// .trim()



function excluirPostPorID() {
    var idExcluir = document.getElementById("idExcluir");
    var idExcluirValue = idExcluir.value;

    if (idExcluirValue.trim() == "") {
        alert("Por favor, informe um ID");
    } else if (isNaN(idExcluirValue)) {
        alert("Ei... o ID deve ser um número");
    } else {
        var element = "";
        axios.get(urlBase + "/posts/" + idExcluirValue)
            .then(function (response) {

                //lança no log os dados obtidos.
                console.log(response);
                var postUserId = response.data.userId;
                var msgPost = response.data.body;


                // TODO: ABA DE CONFIRMAÇÃO DE EXCLUSÃO DA MENSAGEM EXIBINDO A MENSAGEM EQUIVALENTE AO ID

                // provisório...
                alert("Usuário: "+ postUserId+                  
                    "\n Mensagem: \n"+ msgPost);
             });

        //conexão para envia ustilizando axios
        axios.delete(urlBase + '/posts/' + idExcluir.value, {})
            .then(function (response) {
                //Informa no log o status do axios
                console.log(response);
            })
    }
}

