module.exports = function(application){
  application.post('/chat',function(req,res){
    application.app.controllers.chatController.chat(application,req,res);
  });
}
