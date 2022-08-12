/*CMD
  command: С картинкой2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

if (Bot.getProperty("post") == "undefined" | Bot.getProperty("post") == null){
Bot.setProperty("post","-");
}

var post = Bot.getProperty("post");

Bot.setProperty({name: "postImage", value: request.photo[0].file_id});
Bot.setProperty("post",post + "image");
Bot.sendKeyboard("С ссылкой,Без ссылки","Ссылка:")
