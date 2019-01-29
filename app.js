console.log('starting app');

const fs = require('fs');
// NB require command to use FileSystem / fs module

const os = require('os');

var user = os.userInfo();
console.log(user);
process.exit(0);

fs.appendFile('greetings.txt', 'Hello Mum! From ' , function(err)
{
  if (err)
  {
    console.log('Cannot write to file - unable');
  }
});


// could be synchronous method to avoid warning message
// fs.appendFileSync('greetings.txt', 'Hello Mum!');
