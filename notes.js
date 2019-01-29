console.log('starting notes.js');

// console.log(module);

module.exports.age=45;

module.exports.logtest = 'exported starting notes.js';
// NB module.exports.whatever

// module.exports.addNote = function () {
//
// }

module.exports.addNote = () => {
  console.log('addNote');
  var noteAdded = 'Adding Note';
  return noteAdded;
}
// NB arrow/lambda function notation =>


module.exports.add = (a,b) => {
  return a + b;
}
