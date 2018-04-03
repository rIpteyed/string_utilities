String.prototype.isAlpha = function() {
  var regExp = /^[A-Za-z]+$/;
  return (this.match(regExp));
};

var prompt = process.argv;

console.log(prompt)

if(prompt[2].toString().isAlpha()) {
  console.log(`Result: ${removeDuplicates(prompt[2])}`)
} else {
  console.log('Please try again with alphabetic characters only.')
}

function removeDuplicates(string) {
  var unique = '';
  for (var i = 0; i < string.length; i++) {
    if(unique.indexOf(string[i].toLowerCase()) < 0 && unique.indexOf(string[i].toUpperCase()) < 0) {
      unique += string[i];
    }
  }
  return unique;
}