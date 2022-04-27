const fs = require('fs');
console.log("fs=",fs);
fs.writeFile('example.js', 'You got this', function (err) {
  if (err) throw err;
  console.log('New file acme.js is either created or if exists then updated');
});