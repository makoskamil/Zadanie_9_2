var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = [];

var allNames = allNames.concat(femaleNames, maleNames);
console.log(allNames);

var allNamesToString = allNames.join(' | ');
alert(allNames);

var newName = 'Marian'

if (allNames.indexOf(newName) === -1) {
    var x = allNames.push(newName);
}
else {
    alert("Can't add newName to array");
}