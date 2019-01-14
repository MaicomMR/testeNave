# Teste - Vaga Estágio Nave 2019
Resolução do teste proposto para vaga de estágio. Nave_2019

# Proposta:
Propostas do teste
  Realizar buscas de Posts na API: https://jsonplaceholder.typicode.com/posts
    -Buscar por ID
    -Buscar todos caso não seja informado um ID
  Enviar um Post novo para a API
  Excluir um Post através do seu ID
  
  *Observações:
    Vetado o uso de JQuerry.
    Recomendação da utilização da lib "axios".
    
# Como verificar o Teste:
Por restrições do github não será possível verificar as requisições feitas para a API no ambiente web do github, para a realização do teste, o usuário deverá realizar uma cópia deste projeto em sua maquina local(baixa como ZIP e extrair dentro de uma pasta).

Como o teste está organizado:
Menu principal(Home) - Através do menu principal o usuário pode optar por 3 direcionamentos, cada um deles responsável por uma função proposta no teste, sendo estas, Visualizar Anotações, Fazer uma anotação, Excluir anotações, as quais serão descritas a baixo.

## Visualizar Anotações:
Esta janela é responsável por realizar consultas a API "https://jsonplaceholder.typicode.com", através dela o usuário poderá informar um ID para buscar os posts relacionados a este ID, ou então, deixar o campo em branco e buscar por todas os "posts".
###### Resultados: Nesta aba os resultados podem ser observados visualmente através de caixas, as quais serão preenchidas com os posts encontrados, também sera exibida uma caixa com a mensagem "Nenhum post encontrado a partir do Id informado" caso a requisição não encontre nenhuma mensagem referente ao ID informado.

## Fazer uma anotação:
Esta janela da o poder do usuário enviar a sua anotação para a API, o usuário deverá preencher os campos ID, Título e Mensagem. Ao solicitar que a página registre a anotação será realizada verificações sobre a validação dos campos informados e caso todos estejam corretos será feita a requisição de envio, uma mensagem de aviso deve aparecer para o usuário.
###### Resultados: Para verificar o resultado é indicado o uso do console, através deste é possível ver com maiores detalhes o status da requisição.

## Excluir anotações
Através da janela excluir o usuário poderá informar o ID de um POST(não de um usuário), após informar o ID e clicar no botão Excluir Post será realizada uma rápida validação do ID informado, em seguida deve ser exibida uma mensagem na tela informado a Mensagem excluída e a qual usuário(ID) ela pertencia.
###### Resultados: Para verificação desta etapa é necessário abrir o console e então realizar a função de exclusão, nota-se que primeiro é realizado um get para buscar a mensagem que vai ser excluída, o ideal seria a criação de uma segunda etapa de verificação, para o usuário confirmar se a mensagem referente ao ID informado seria realmente a mensagem que ele deseja excluir da API.
