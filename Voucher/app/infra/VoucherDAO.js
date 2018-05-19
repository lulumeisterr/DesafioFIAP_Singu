
// Criando a classe

function  VoucherDAO(connection){
	this._connection = connection;
}

// Prototype - Para criar novas classes e reutilizar codigos
VoucherDAO.prototype.lista =  function(callback){
		this._connection.query('select * from T_SINGU_CADASTRO',callback);
	}

VoucherDAO.prototype.salvar =  function(produto, callback){
		this._connection.query('insert into T_SINGU_CADASTRO set ?',produto,callback);
	}



module.exports = function(connection){
	return VoucherDAO;
}