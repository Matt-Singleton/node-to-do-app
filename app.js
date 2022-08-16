
const EventEmitter = require("events"); //requiring events as a class



const Logger = require("./logger");
const logger = new Logger();

logger.on("messageLogged", (arg) => { // takes 2 arguments, name of the event, and a function once event is raised
    console.log("Message Sent", arg)

})

logger.log("Hi, how are you?")


//Needs a listener to listen for an emit
//.emit raises an event - .on listens for the event

//raise: logging (data: message)


/*const logging = new EventEmitter();

logging.on("logging", (arg) => {
    console.log(arg);
});

logging.emit("logging", "This is my mesage");*/
