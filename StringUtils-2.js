const readline = require('readline');

String.prototype.isAlpha = function() {
  var regExp = /^[A-Za-z]+$/;
  return (this.match(regExp));
};


var interface = readline.createInterface( process.stdin, process.stdout );
  var prompt = function(q) {
    return new Promise( (resolve, reject) => {
      interface.question( q, answer => {
        if(answer !== 'exit') {
          resolve(answer);
        } else {
          process.exit();
        }
    })
  });
};

(async function main() {
  var response;
  while ( true ) {
    response = await prompt('Please enter a string (alpha only): ');
    if(response.isAlpha()) {
      console.log(`Result: ${removeDuplicates(response)}`)
    } else {
      console.log('Please try again with alphabetic characters only.')
    }
  }
})();

function removeDuplicates(string) {
  var unique = '';
  for (var i = 0; i < string.length; i++) {
    if(unique.indexOf(string[i].toLowerCase()) < 0 && unique.indexOf(string[i].toUpperCase()) < 0) {
      unique += string[i];
    }
  }
  return unique;
}

process.on('exit', function(code) {
  return console.log(`Exiting with code ${code}`);
});