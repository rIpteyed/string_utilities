const readline = require('readline');
const StringUtils = require('./StringUtils');

String.prototype.isAlpha = function() {
  var regExp = /^[A-Za-z]+$/;
  return (this.match(regExp));
};

var interface = readline.createInterface( process.stdin, process.stdout );
var prompt = function(q) {
  return new Promise( (resolve, reject) => {
    interface.question( q, answer => {
      if(answer !== 'x') {
        resolve(answer);
      } else {
        interface.close();
      }
    })
  });
};

// Main
(async function main() {
  console.log(`\n>>>>>>>> Welcome to String Utilities <<<<<<<<\n`);

  var type = '';
  while(type !== 'x') {
    type = await prompt('Options:\n\n[1]-removeDuplicates\n[2]-isAnnagram\n[x] to exit.\n\n');
    switch (type) {
      case '1':
        await tryRemoveDuplicates();
        break;
      case '2':
        await tryIsAnnagram();
        break;
      default:
        break;
    }
  }
})();

async function tryRemoveDuplicates() {
  var response = '';
  while (response !== 'quit') {
    response = await prompt('Please enter a string (alpha only) or [quit]:\n');
    if(response.isAlpha()) {
      console.log(`\nResult: ${StringUtils.removeDuplicates(response)}\n`)
    } else {
      console.log('\n!! Please try again with alphabetic characters only !!\n')
    }
  }
}

async function tryIsAnnagram() {
  var response = '';
  while (response != 'quit') {
    response = await prompt('To test for annagrams enter two words with a space in between or [quit]:\n'),
      words = response.split(' ');

    if(words.length != 2) {
      console.error('\n!! You must enter two words with a space in between !!\n');
    } else {
      console.log(`Result: ${StringUtils.isAnnagram(words)}`);
    }
  }
}

process.on('exit', function(code) {
  return console.log(`>>>>>>>> Thank you for using String Utilities <<<<<<<<\n\n`);
});