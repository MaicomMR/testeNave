
//chama a função ao clicar no botão
document.getElementById("btnEnviar").onclick = enviarPost;


var idUsuario = document.getElementById("userID");
var tituloPost = document.getElementById("tituloPost");
var descPost = document.getElementById("descPost");


// função responsável por enviar o post
function enviarPost() {

    var idUsuarioVal = idUsuario.value;
    var tituloPostVal = tituloPost.value;
    var descPostVal = descPost.value;


    if (idUsuarioVal.trim() == "") {
        // verificação se o id do usuário não é vazio nem espaço
        alert("O número de usuário não foi informado.");
        return;

    } else if (isNaN(idUsuarioVal)) {
        // verificação se foi informado um número de usuário
        alert("O campo id do usuário deve ser um número, verifique e tente novamente.");
        return;

    } else if (tituloPostVal.trim() == "") {
        // verificação se foi informado um título
        alert("Por favor, de um título a sua anotação");
        return;

    } else if (descPostVal.trim() == "") {
        // verificação se foi informado uma descrição
        alert("Por favor, de um título a sua anotação");
        return;
    } else {

        //conexão para envia ustilizando axios
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: tituloPostVal,
            body: descPostVal,
            userId: idUsuarioVal
        })


            .then(function (response) {

                //Informa no log o status do .post
                console.log(response);
            })
    }

}

