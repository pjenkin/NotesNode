// var obj = {
//   name: 'PNJ'
// };
// var stringObj = JSON.stringify(obj);
//
// console.log('typeof stringObj: ',typeof stringObj);
// console.log('stringObj: ',stringObj);
//
//
// var personString = '{"name":"Peter","age":45}';    // NB double quotes in JSON
// var person = JSON.parse(personString);
//
// console.log('typeof person: ',typeof person);
// console.log('person: ',person);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

// var originalNoteString = JSON.stringify({"title":"First","body":"The first note"});
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log('typeof note: ',typeof note);
console.log('note: ',note);
