const EventEmitter = require("events"); //requiring events as a class


var url = "http://mylogger.io/log"


class Logger extends EventEmitter {
    log(message) {
        //send an http request
    console.log(message)
    this.emit("messageLogged", {time: "1pm", url: "facebook.com"}); //produce something
}

}

module.exports = Logger;