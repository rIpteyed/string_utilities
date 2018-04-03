var removeDuplicates = function (string) {
  var unique = '';
  for (var i = 0; i < string.length; i++) {
    if(unique.indexOf(string[i].toLowerCase()) < 0 && unique.indexOf(string[i].toUpperCase()) < 0) {
      unique += string[i];
    }
  }
  return unique;
}

module.exports = removeDuplicates;