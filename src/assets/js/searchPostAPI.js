

var urlBase = "http://jsonplaceholder.typicode.com/posts";

document.getElementById("startSearchFunction").onclick = searchByUser;

var pre = document.getElementById("pre");


var elementPostsFound = "";
var element = "";



function searchByUser() {
    // puxa o valor do usuário informado
    var userID = document.getElementById("inputUserID");


    var userValue = userID.value;
    var usuarioIn = parseInt(userValue);


    //se não informou nenhum usuário...
    if (userValue == "") {

        // zera o elemento para não replicar os posts já consultados
        element = "";

        //puxa os dados de todos os usuários da API usando "axios"
        axios.get(urlBase)
            .then(function (response) {

                //lança no log os dados obtidos.
                console.log(response);

                for (i = 0; i < response.data.length; i++) {

                    elementPostsFound = elementPostsFound + JSON.stringify(response.data[i]) + "\n";

                    var postUserId = response.data[i].userId;
                    var postId = response.data[i].id;
                    var tituloPost = response.data[i].title;
                    var msgPost = response.data[i].body;

                    element += `
                    <div class="postBox">
                    <div class="userIDBox">Usuário ID: `+postUserId+`</div>                              
                    <div class="postIDBox">Post ID: `+postId+`</div>
                    <div class="postTitleBox">Título: `+tituloPost+`</div>
                    <div class="postDescBox">Anotação: `+msgPost+`</div>
                    </div>
                   `;

                }

                document.getElementById("showPosts").innerHTML = element;
                //pre.innerHTML = elementPostsFound;
                elementPostsFound = "";
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
        axios.get(urlBase + '?userId=' + userValue)
            .then(function (response) {
                // handle success

                //lança no log os dados obtidos.
                console.log(response);

                //criação de um loop até que cada dado seja inserido na variável
                for (i = 0; i < response.data.length; i++) {


                        // Alterado trecho de código, perguntei em um fórum e decobri que o ${} pertence ao JQuerry
                        // por estar vetado o uso de JQuerry no teste com penalidade de desclassificação, alterei o modo...
                        // de captura e exibição dos dados.

                    var postUserId = response.data[i].userId;
                    var postId = response.data[i].id;
                    var tituloPost = response.data[i].title;
                    var msgPost = response.data[i].body;

                    element += `
                    <div class="postBox">
                    <div class="userIDBox">Usuário ID: `+postUserId+`</div>                              
                    <div class="postIDBox">Post ID: `+postId+`</div>
                    <div class="postTitleBox">Título: `+tituloPost+`</div>
                    <div class="postDescBox">Anotação: `+msgPost+`</div>
                    </div>
                  `;

                }
                if (element != "") {
                    document.getElementById("showPosts").innerHTML = element;

                }
                else {
                    showNoPostFound();
                }

            }
            )
    }
}


// Função para caso o usuário insira um Id de usuário que não tenha nenhum post registrado
function showNoPostFound() {
    element += `
    <div class="postNotFoundBox">
    <div class="userIDBox">Nenhum post encontrado a partir do Id informado</div>
  
    </div>
  `;
    document.getElementById("showPosts").innerHTML = element;
}