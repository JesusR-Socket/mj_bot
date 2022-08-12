/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("hi");
if(user.telegramid == "246451346"){
Bot.setProperty(""+user.telegramid+"","admin");
}
Bot.runCommand("main_menu");
