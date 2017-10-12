
const model = require('./model');
const os = require("os");
const TelegramBot = require('node-telegram-bot-api');
const dbService = require('./dbService')

// replace the value below with the Telegram token you receive from @BotFather
const token = '347822030:AAFRJ9NMhJtWoZP7oMx33C_I9thkxMUy_fA';
const userName = os.userInfo().username;
var Model = model.Model;
var clModel = new Model();
dbService.getBots();
console.log(clModel.messageFrom());
console.log(`Дата запроса: ${model.date}`);
console.log(model.getMessage(userName));

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.onText(model.COMMANDS.START, (msg) => {
    
    bot.sendMessage(msg.chat.id, "Welcome", {
    "reply_markup": {
        "keyboard": [["Sample text", "Second sample"],   ["Keyboard"], ["I'm robot"]]
        }
    });
        
});


// Listen for any kind of message. There are different kinds of 
// messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const from = msg.from.first_name;
    console.log(msg)

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Hellod, '+ from);
});
 