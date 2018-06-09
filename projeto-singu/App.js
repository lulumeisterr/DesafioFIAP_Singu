var express = require('express'); 
var app = express();
var bodyParse = require('body-parser');
var expressValidator = require('express-validator');

app.use(bodyParse.urlencoded({extended: true})); 
app.use(bodyParse.json());
app.use(express.static('app/views/vouchers'));
app.use(expressValidator());

app.set('view engine','ejs') 
app.set('views','./app/views');	

const recuperarHtml = [];
const errosValidacao = [];

app.get('/vouchers',function(req,res){
    res.render('vouchers/index',{lista:recuperarHtml});
});

app.post('/vouchers' , function(req,res){

    var produto = req.body;

    req.assert('codigo','O Codigo é obrigatório').notEmpty().trim();

    
    req.assert('campanha','A campanha é obrigatório').notEmpty();
    req.assert('campanha','Maximo 10 Caracter').isLength({max:10});
    
    req.assert('inicio','A data de Inicio é obrigatório').notEmpty()
    //req.assert('inicio','Data invalida').isDataURI();
  
    req.assert('fim','A data termino é obrigatório').notEmpty().toDate();
    req.assert('fim','A data termino deve seguir o padrão dia,mes,ano').notEmpty();

    req.assert('max','O Valor maximo é obrigatório').notEmpty();
    req.assert('valor','O Valor deve ser um numero inteiro').isInt();
 
    var erros = req.validationErrors();

    if(erros){
        res.render('vouchers/index',{lista:[recuperarHtml],errosValidacao:erros});
        return;
    }
    
    recuperarHtml.unshift(produto);
    res.status(201).redirect('/vouchers');
});


app.put('/vouchers/:id' , function(req,res){
    const id = req.params.id;
    res.status(200).send({
        id: id
    });
});


app.delete('/vouchers/:id',function(req,res,err){

    // Recuperar meu id
    var idHttp = req.params.id;
    console.log(idHttp);
    // Recuperando meu body
    var produto = req.body;
    console.log(produto);
    // Recuperando meu produto
    recuperarHtml = [produto];
    console.log(recuperarHtml);

    // Listar
    for (var i in recuperarHtml) {
        if(recuperarHtml[i].codigo == idHttp){
            recuperarHtml.shift(codigo);
      }
    }
    res.redirect('/vouchers');
});

// Paginação
app.get('/vouchers/:page',function(req,res){

    res.format({
        html: function() {
            res.render('vouchers/index', {
              lista:recuperarHtml ,
              page:recuperarHtml,
              n_pages:recuperarHtml
            }) 
        } ,
        json: function() {
            res.json({
              vouchers:recuperarHtml ,
              page:recuperarHtml ,
              n_pages:recuperarHtml 
            });
        }
    });
});

app.listen(3000, function(){
	console.log("servidor rodando");
});