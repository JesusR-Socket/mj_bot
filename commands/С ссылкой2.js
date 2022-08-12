/*CMD
  command: С ссылкой2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var msg = data.message;
var post = Bot.getProperty("post");

Bot.setProperty("postUrl",msg);
Bot.setProperty("post",post + "url");
Bot.runCommand("С ссылкой3");
