module.exports = function(app){

	//app.get('/',function(req,res){
	 //res.render('vouchers/Indexvouchers');

	var listarVouchers = function(req,res){
	// Connectando com o banco mysql
	var connection = app.infra.ConnectionFactory();

	// Guardando as query ou seja isolamos o banco de dados
	var VoucherDAO = new app.infra.VoucherDAO(connection);


	VoucherDAO.lista(function(err,results){
			//Deixar as variaveis disponiveis passando um json para identificala-s no html
		 res.render('vouchers/Indexvouchers',{lista:results});  
        });

	connection.end();

	};

	app.get('/vouchers',listarVouchers);

// Carregando meu form da outra pagina
app.get('/vouchers/teste',function(req,res){
		res.render('vouchers/teste');
 	});



	app.post('/vouchers',function(req,res){

			// Recuperar os dados do formulario

			var produto = req.body;

			console.log('produto');

			var connection = app.infra.ConnectionFactory();
			var VoucherDAO = new app.infra.VoucherDAO(connection);

			VoucherDAO.salvar(produto,function(err,result){
				res.redirect('/vouchers'); // Para n cadastrar 2 requisoes
			});

	});

}
