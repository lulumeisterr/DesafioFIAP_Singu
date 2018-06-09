var assert = require('assert');
var appMain = require('../App');
var request = require('supertest')(configApp);
var configApp = require('../App.js');

describe('#Validação', function(){
    it('#Verificando o formulario',function(done){
        request.post('/vouchers')
        .send({codigo:"1",
              Campanha:"Teste",
              Inicio:"05/03/2011",
              Fim:"09/03/2011",
              Max:"100",
              Valor:"85"}).expect(400,done);
    });

}); 