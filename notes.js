console.log('starting notes.js');

var addNote = (title, body) => {
  console.log('Adding note', title, body);
};

var getAll = () => {
  console.log('Getting all notes');
}

module.exports = {
  //addNote: addNote    // the function defined above
  addNote,    // the function defined above (shorter syntax for function names in ES6)
  getAll
}

// module.exports.addNote = () => {
//   console.log('addNote');
//   var noteAdded = 'Adding Note';
//   return noteAdded;
// }
// NB arrow/lambda function notation =>
