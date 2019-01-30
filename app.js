console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');    // 3rd party (npm) module

const notes = require('./notes.js');
// ./ relative path

var command = process.argv[2];
var command2 = process.argv[3];

console.log(process.argv);

console.log('Command:', command);

if (command === 'add')
{
  console.log('Adding new note');
}
else if (command === 'list')
{
  console.log('Listing all notes');
} else {
  console.log('Command not recognised');
}
