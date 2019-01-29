console.log('starting app.js');

const fs = require('fs');
// NB require command to use FileSystem / fs module

const os = require('os');

const notes = require('./notes.js');
// ./ relative path

console.log(notes.logtest);

var user = os.userInfo();
// console.log(user);
// process.exit(0);

//fs.appendFile('greetings.txt', 'Hello Mum! From ' + os.userInfo().username, function(err)
// use ES6 template string ``
// fs.appendFile('greetings.txt', `Hello Mum! From ${user.username} - age = ${notes.age} ` , function(err)
// {
//   if (err)
//   {
//     console.log('Cannot write to file - unable');
//   }
// });


// could be synchronous method to avoid warning message
// fs.appendFileSync('greetings.txt', 'Hello Mum!');

var result = notes.addNote();
console.log(result);

console.log(notes.add(-4,8));   // check my add function
