/*CMD
  command: С ссылкой4
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var msg = data.message;

Bot.setProperty("postUrlText",msg);
Bot.sendKeyboard("С текстом,Без текста","Текст:")
