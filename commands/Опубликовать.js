/*CMD
  command: Опубликовать
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var post = Bot.getProperty("post");

if (post == "-imageurltext") {
  var photoPost = Bot.getProperty("postImage");
  var urlPost = Bot.getProperty("postUrl");
  var urlText = Bot.getProperty("postUrlText");
  var textPost = Bot.getProperty("postMessage");

  Api.sendPhoto({
    chat_id: "@kkid_test_chat",
    photo: photoPost,
    caption: textPost,
    reply_markup: {
      inline_keyboard: [[{ text: urlText, url: urlPost }]]
    }
  })
  return
  Bot.runCommand("main_menu");
}

