
//chama a função ao clicar no botão
document.getElementById("sendPostButton").onclick = enviarPost;


var userID = document.getElementById("userID");
var postTitle = document.getElementById("postTitle");
var postDesc = document.getElementById("postDesc");


// função responsável por enviar o post
function enviarPost() {

    var userIDVal = userID.value;
    var postTitleVal = postTitle.value;
    var postDescVal = postDesc.value;


    if (userIDVal.trim() == "") {
        // verificação se o id do usuário não é vazio nem espaço
        alert("O número de usuário não foi informado.");
        return;

    } else if (isNaN(userIDVal)) {
        // verificação se foi informado um número de usuário
        alert("O campo id do usuário deve ser um número, verifique e tente novamente.");
        return;

    } else if (postTitleVal.trim() == "") {
        // verificação se foi informado um título
        alert("Por favor, de um título a sua anotação");
        return;

    } else if (postDescVal.trim() == "") {
        // verificação se foi informado uma descrição
        alert("Por favor, de um título a sua anotação");
        return;
    } else {

        //conexão para envia ustilizando axios
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: postTitleVal,
            body: postDescVal,
            userId: userIDVal
        }
        )
            .then(function (response) {

                //Informa no log o status do .post
                console.log(response);

                // TODO: JANELA PARA INFORMAR O STATUS DA REQUISIÇÃO DO CLIENTE
                alert("Seu post foi enviado com sucesso...");
                document.getElementById("userID").focus(); 
            }
        )
    }
}

