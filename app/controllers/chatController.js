module.exports.chat = function(application,req,res){

  var dadosForm = req.body;//Inicialização do Body Parser

  //Validação dos dados passados no form
  req.assert('apelido','Nome ou Apelido é Obrigatório').notEmpty();//validação se o campo está vazio
  req.assert('apelido','O Campo precisa ter entre 3 e 15 caracteres').len(3,15);//Validação da quantidade de caracteres do campo

  //Atribuição da variavel erros ao validation Errors
  var erros = req.validationErrors();

  //Se houver erros entrará nesse if e parará o script
  if(erros){
    res.render("index",{validacao: erros})
    return;
  }

  application.get('io').emit('msg',{apelido: dadosForm.apelido, mensagem: 'acabou de entrar no chat'});//passando a mensagem para o cliente

  res.render('chat',{dadosForm: dadosForm});
}
