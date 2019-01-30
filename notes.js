console.log('starting notes.js');

const fs = require('fs');   // core node module

var fetchNotes = () => {
  // try/catch in case file not yet existing
  try {
    var notesString = fs.readFileSync('notes-data.json');   // get existing notes
    return JSON.parse(notesString);
  } catch (e) {
    return [];    // empty array returned if no notes yet
  }
};

var saveNotes = () =>
{
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  console.log('Adding note', title, body);
  var notes = fetchNotes;
  var note = {
    title,
    body    // ES6 no need for body:body
  };



// look for notes with this title already
// var duplicateNotes = notes.filter((note) => {
//   return note.title === title;
// });
// short-hand of above, with E6 lambda/arrow
var duplicateNotes = notes.filter((note) =>  note.title === title);
// console.log(duplicateNotes.length);
// console.log(duplicateNotes[0].title);
// console.log(duplicateNotes[1].title);
// go ahead if no duplicates (none with this title already), write new note, else don't save
if (duplicateNotes.length === 0) {
  notes.push(note);
  saveNotes(notes);
}


};

var getAll = () => {
  console.log('Getting all notes');
}

var getNote = (title) => {
  console.log(`Getting note ${title}`);
  // console.console.log("Getting note ",title);
}

var removeNote = (title) => {
  console.log(`Removing note ${title}`);
  // console.console.log("Getting note ",title);
}



module.exports = {
  //addNote: addNote    // the function defined above
  addNote,    // the function defined above (shorter syntax for function names in ES6)
  getAll,
  getNote,
  removeNote
}

// module.exports.addNote = () => {
//   console.log('addNote');
//   var noteAdded = 'Adding Note';
//   return noteAdded;
// }
// NB arrow/lambda function notation =>
