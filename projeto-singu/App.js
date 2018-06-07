var express = require('express'); 
var app = express();
var bodyParse = require('body-parser');

app.use(bodyParse.urlencoded({extended: true})); 
app.use(bodyParse.json());

app.set('view engine','ejs') 
app.set('views','./app/views');	
app.use(express.static('app/views/vouchers'));

var recuperarHtml = [];

app.get('/vouchers' , function(req,res){
    res.render('vouchers/index',{lista:recuperarHtml});
});

app.post('/vouchers' , function(req,res){
    var produto = req.body;
    console.log(produto.codigo);
    // Adicionar um elemento no array
    recuperarHtml.push(produto);
    res.status(201).redirect('/vouchers');
});

app.delete('/vouchers:id',function(req,res){
    res.status(200).redirect('/vouchers');
});

app.put('/vouchers/:id' , function(req,res){
    const id = req.params.id;
    res.status(200).send({
        id: id
    });
});




app.listen(3000, function(){
	console.log("servidor rodando");
});