/*CMD
  command: С текстом2
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

Bot.setProperty("postMessage",msg);
Bot.setProperty("post",post + "text");
Bot.sendKeyboard("Опубликовать,Изменить","Пост:")
