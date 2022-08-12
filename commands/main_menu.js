/*CMD
  command: main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"");

if (stat == "admin"){
 Bot.sendKeyboard("📝 Создать пост","Добро пожаловать!")
}
