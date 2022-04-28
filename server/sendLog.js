const fs = require('fs');
console.log("fs=",fs);
fs.writeFile('log.js', 'You got this', function (err) {
  if (err) throw err;
  console.log('New file acme.js is either created or if exists then updated');
});