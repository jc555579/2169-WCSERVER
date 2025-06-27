// app.js
var myLogModule = require('./utility/log.js');

// myLogModule.info("Node.js started");
// myLogModule.warning("Warning node not found..");
// myLogModule.error("Error: Node encountered an error");

// var msg = require('./utility/Messages.js');
// console.log(msg.SimpleMessage);

var person = require('./utility/data.js')
console.log(person.firstName + ' ' + person.lastName);

var msg = require('./utility/log.js');
msg("Hello World");

