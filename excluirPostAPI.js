document.getElementById("btnDeletar").onclick = excluirPostPorID;

function excluirPostPorID(){
    alert("Opa");




        //conexão para envia ustilizando axios
        axios.delete('https://jsonplaceholder.typicode.com/posts/1', {

        })


            .then(function (response) {

                //Informa no log o status do .post
                console.log(response);
            })

}