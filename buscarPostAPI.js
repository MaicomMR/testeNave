
var idUsuario = document.getElementById("usuario");
var urlBase = "http://jsonplaceholder.typicode.com/posts";

document.getElementById("btnBuscar").onclick = buscarPorUsuario;

var pre = document.getElementById("pre");
var saidaPosts = "";

var element = "";



function buscarPorUsuario() {
    // puxa o valor do usuário informado

    var usuarioValue = idUsuario.value;
    var usuarioIn = parseInt(usuarioValue);


    //se não informou nenhum usuário...
    if (usuarioValue == "") {

        // zera o elemento para não replicar os posts já consultados
        element = "";

        //puxa os dados de todos os usuários da API usando "axios"
        axios.get(urlBase)
            .then(function (response) {

                //lança no log os dados obtidos.
                console.log(response);

                for (i = 0; i < response.data.length; i++) {
                    saidaPosts = saidaPosts + JSON.stringify(response.data[i]) + "\n";

                    var postUserId = response.data[i].userId;
                    var postId = response.data[i].id;
                    var tituloPost = response.data[i].title;
                    var msgPost = response.data[i].body;

                    element += `
                    <div class="caixaPost">
                    <div class="caixaUsuarioId">Usuário ID: `+postUserId+`</div>                              
                    <div class="caixaPostId">Post ID: `+postId+`</div>
                    <div class="caixaTituloPost">Título: `+tituloPost+`</div>
                    <div class="caixaDescPost">Anotação: `+msgPost+`</div>
                    </div>
                   `;

                }

                document.getElementById("divResultado").innerHTML = element;
                //pre.innerHTML = saidaPosts;
                saidaPosts = "";
            })

        // se foi informado algum usuário será feita a busca somente pelos posts desse usuário
    } else if (isNaN(usuarioIn)) {
        alert("por favor, informe um Id de usuário ou deixe em branco para consultar todos os usuários");
    }

    else {

        // zera o elemento para não replicar os posts já consultados
        element = "";

        //busca específica, composta pela concatenação dos valores:
        // URL Base + destino API por usuário + id do usuário
        axios.get(urlBase + '?userId=' + usuarioValue)
            .then(function (response) {
                // handle success

                //lança no log os dados obtidos.
                console.log(response);

                //criação de um loop até que cada dado seja inserido na variável
                for (i = 0; i < response.data.length; i++) {


                        // Removido, perguntei em um fórum e decobri que o ${} pertence ao JQuerry
                        // por estar vetado o uso de JQuerry no teste com penalidade de desclassificação, alterei o modo...
                        // de captura e exibição dos dados.

                    var postUserId = response.data[i].userId;
                    var postId = response.data[i].id;
                    var tituloPost = response.data[i].title;
                    var msgPost = response.data[i].body;

                    element += `
                    <div class="caixaPost">
                    <div class="caixaUsuarioId">Usuário ID: `+postUserId+`</div>                              
                    <div class="caixaPostId">Post ID: `+postId+`</div>
                    <div class="caixaTituloPost">Título: `+tituloPost+`</div>
                    <div class="caixaDescPost">Anotação: `+msgPost+`</div>
                    </div>
                  `;

                }
                if (element != "") {
                    document.getElementById("divResultado").innerHTML = element;

                }
                else {
                    informaNenhumEncontrado();
                }

            }
            )
    }
}

// Função para não repetir o código... caso o usuário insira um Id de usuário que não tenha nenhum post registrado
function informaNenhumEncontrado() {
    element += `
    <div class="caixaPostNaoEncontrado">
    <div class="caixaUsuarioId">Nenhum post encontrado a partir do Id informado</div>
  
    </div>
  `;
    document.getElementById("divResultado").innerHTML = element;
}