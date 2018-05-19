var express = require('express'); // Chamando o express

var load = require('express-load');
//Informar os modulos que sejam carregados

var bodyParse = require('body-parser');

module.exports = function(){

	var app = express();

	app.set('view engine','ejs') // Define uma variavel para nos podermos usar dentro do express no caso é a variavel 'ejs'
	app.set('views','./app/views');	

	// Liberando o css																																		
	app.use(express.static('app/views/vouchers'));
	
	app.use(bodyParse.urlencoded({extended: true})); 

	// Carregando dentro da app
	// Passando um json para carregar as pastas
	load('routes' , {cwd: 'app'}) // Carregue tudo oque estiver em routes

		.then('infra') // Carregue tudo oque estiver em infra
	.into(app); // Estamos dizendo onde queremos carregar os arquivos informados a ele

	return app;

}
