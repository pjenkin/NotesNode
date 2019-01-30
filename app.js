console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');    // 3rd party (npm) module
const yargs = require('yargs');

const notes = require('./notes.js');
// ./ relative path

const argv = yargs.argv;    // use yargs
var command = process.argv[2];
var command2 = process.argv[3];

console.log(process.argv);

console.log('Command:', command);
console.log('Process:', process.argv);
console.log('Yargs:', argv);

if (command === 'add')
{
  // console.log('Adding new note');
  var note = notes.addNote(argv.title, argv.body);
  // check returned note has right fields (undefined if note not added e.g. duplicate)
// console.log(note);
// console.log(_.has(note,['title','body']));
// console.log(_.has(note,'title'));
// console.log(_.has(note,'body'));
  // if (_.has(note,['title','body']))
  if (_.has(note,'title'))
  {
    console.log(`Note ${note.title} added`);
  } else
  {
    console.log('Error occurred (maybe duplicate title): Note not added');
  }

}
else if (command === 'list')
{
  // console.log('Listing all notes');
  notes.getAll();
}
else if (command === 'read')
{
  //console.log('Reading note');
  notes.getNote(argv.title);
}
else if (command === 'remove')
{
  // console.log('Removing note');
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognised');
}
