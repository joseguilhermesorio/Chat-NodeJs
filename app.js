//Importando as configurações do servidor
const app = require('./config/server')

//Porta que o servidor está rodando
app.listen(3600,function(){
  console.log('SERVER ON PORT 3600')
});
