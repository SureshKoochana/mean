// OS Module

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//Template String
// ES /ES2015 : ECMAScript 6

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

// //Output
// Total Memory: 12473806848
// Free Memory: 880099328