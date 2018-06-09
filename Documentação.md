# DesafioFIAP_Singu
Voucher

# 1º Instale as dependencias dentro da pasta projeto-sigu utilizando o comando " npm install "
# 2° A aplicação esta toda no arquivo App.js
# 3° Dependencias instaladas : Express , body-parse , ejs , express-validator e nodemon
# 4° Utilize nodemon app , para executar a aplicação
# 5° Clicar no dropdown em Setting's para realizar o primeiro cadastro
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

# 1 - Sobre os metodos:

# Metodos que estão funcionando READ , POST , GET -> Este metodo realiza a paginação

# Metodos que não consegui realizar DELETE e UPDATE , Fui saber depois que O form do HTML só tem suporte ao método GET e POST. Para usar os outros métodos HTTP eu deveria ter utilizado um JavaScript para fazer um AJAX ou utilizar um biblioteca chamanda Method Override que implementará o AJAX. Mas deixei os metodos mesmo assim. 

# No Metodo READ retornei um JSON dentro de um vetor vazio , e utilizei os Scriplets para realizar um FOR dentro da minha tabela no meu arquivo index.ejs assim retornando os dados inseridos na tabela.

# No Metodo POST utilizei as propriedades da biblioteca body-parse para recuperar o body que está dentro de uma variavel , em seguida utilizei o meu vetor que está instanciado "global" e adicionei a variavel que contem o body adentro do vetor em seguida chamando o metodo push do javascript que realizará a inserção.

# No Metodo GET que está Comentado como "Paginação" Tentei responder das duas formas. Se o seu cliente pedir json, responde json e nao responde html. então realizei paginacao com 3 dados: lista dos objetos, pagina atual e numero de paginas. Mas atribui o meu vetor que esta como global em minhas variaveis lista:recuperarHtml page:recuperarHtml,n_pages:recuperarHtml. Mas obtive uma dificuldade de como imprimiria corretamente os dados no HTML então está ação ficou incompleta.

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

# 2 - Validações 
# Realizei as validações utilizando a biblioteca express-validator e pude fazer alguns testes para validar alguns dados , as validações se encontram no metodo app.post

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

# 3 - Infelizmente não consegui realizar os testes no mocha

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~







