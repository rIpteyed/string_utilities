const readline = require('readline');
const removeDuplicates = require('./removeDuplicates');

String.prototype.isAlpha = function() {
  var regExp = /^[A-Za-z]+$/;
  return (this.match(regExp));
};


var interface = readline.createInterface( process.stdin, process.stdout );
var prompt = function(q) {
  return new Promise( (resolve, reject) => {
    interface.question( q, answer => {
      resolve(answer);
    })
  });
};

(async function main() {
  var response;
  while ( response != 'exit' ) {
    response = await prompt('Please enter a string (alpha only): ');
    if(response.isAlpha()) {
      console.log(`Result: ${removeDuplicates(response)}`)
    } else {
      console.log('Please try again with alphabetic characters only.')
    }
  }
})();