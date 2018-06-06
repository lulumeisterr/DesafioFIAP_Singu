var express = require('express'); 
var app = express();
var bodyParse = require('body-parser');

app.use(bodyParse.urlencoded({extended: true})); 

var json = [{codigo: 1 ,campanha:'Doação' ,inicio: '25/03/17' ,fim: '30/03/17' , max: 100 ,Valor:50} ,
            {codigo: 2 ,campanha:'Venda' ,inicio: '25/03/17' ,fim: '30/03/17' , max: 100 ,Valor:50}
            ];

var recuperarHtml = [];


app.get('/vouchers' , function(req,res){
    app.set('view engine','ejs') 
    app.set('views','./app/views');	
    app.use(express.static('app/views/vouchers'));

    // Exibindo a tabela dinamica
    console.log(recuperarHtml);
    res.render('vouchers/index' , {lista:recuperarHtml});
});


app.post('/vouchers' , function(req,res){
    var produto = req.body;
    console.log(req.body);
    // Adicionar um elemento no inicio do array
    recuperarHtml.unshift(produto);
    res.redirect('/vouchers');
});

app.put('/vouchers' , function(req,res){
});


app.delete('/vouchers' , function(req,res){
    if(req.body.codigo == recuperarHtml.codigo){
        array.shift();
    }
    console.log(recuperarHtml.codigo);
    res.redirect('/vouchers');
});


app.listen(3000, function(){
	console.log("servidor rodando");
});