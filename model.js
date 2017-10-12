const currentDate = new Date();

const BUTTONS = {
    PAY: "pay", 
    EXIT: "exit",
    CONFIRM_TO_PAY: "Confirm to pay "
}
const COMMANDS = {
    START: /\/start/, 
    CHANGE_PASSWORD_:/\/dest/, 
}

function getMessage(name){
    var hour = currentDate.getHours();
    if(hour > 16)
        return "suka pozno, " + name;
    else if(hour > 10)
        return "suka den', " + name;
    else 
        return "suka utro, " + name;
}

class Model{
    constructor(){
        console.log("Model Created");
    }
    messageFrom(){
        return "Message from model";
    }
}

module.exports.date = currentDate;
module.exports.getMessage = getMessage;
module.exports.Model = Model;
module.exports.COMMANDS = COMMANDS;
module.exports.BUTTONS = BUTTONS;