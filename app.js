console.log('starting app');

const fs = require('fs');
// NB require command to use FileSystem / fs module

const os = require('os');

var user = os.userInfo();
// console.log(user);
// process.exit(0);

//fs.appendFile('greetings.txt', 'Hello Mum! From ' + os.userInfo().username, function(err)
// use ES6 template string ``
fs.appendFile('greetings.txt', `Hello Mum! From ${user.username} ` , function(err)
{
  if (err)
  {
    console.log('Cannot write to file - unable');
  }
});


// could be synchronous method to avoid warning message
// fs.appendFileSync('greetings.txt', 'Hello Mum!');
