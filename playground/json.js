var obj = {
  name: 'PNJ'
};
var stringObj = JSON.stringify(obj);

console.log('typeof stringObj: ',typeof stringObj);
console.log('stringObj: ',stringObj);


var personString = '{"name":"Peter","age":45}';    // NB double quotes in JSON
var person = JSON.parse(personString);

console.log('typeof person: ',typeof person);
console.log('person: ',person);
