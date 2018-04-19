//Importando as configurações do servidor
const app = require('./config/server')

//Porta que o servidor está rodando
const server = app.listen(3600,function(){
  console.log('SERVER ON PORT 3600')
});

//Fazendo o socket.io escutar a mesma porta do servidor
const io = require('socket.io').listen(server);
app.set('io',io);//Criacao da variavel global

//Criar a conexao por websocket
io.on('connection',function(socket){
  console.log('Usuario conectou');

  socket.on('disconnect',function(){
    console.log('Usuario desconectou')
  });

  //Dialogo de conversas //
  socket.on('msg',function(data){
    socket.emit(
      'msg',
      { apelido: data.apelido, mensagem: data.mensagem}
    );

    socket.broadcast.emit(
      'msg',
      { apelido: data.apelido, mensagem: data.mensagem}
    );

    //Exibir a lista de Participantes
    if(parseInt(data.participante) == 0){
      socket.emit(
        'participantes',
        { apelido: data.apelido}
      );

      socket.broadcast.emit(
        'participantes',
        { apelido: data.apelido}
      );
    }

  });
});
