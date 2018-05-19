// Realizar a importação do mysql

var mysql = require('mysql');

function createDBConnection(){
	return  mysql.createConnection({

		host : 'localhost',
		user : 'root',
		password : 	'lucas',
		database : 'singu',
		insecureAuth : true
		
		});
}


//wrapper , Criamos uma função que embrulha uma outra função
//essa funcao so vai ser invocadas quando carregarmos o objeto

module.exports = function(){
	return createDBConnection;
}