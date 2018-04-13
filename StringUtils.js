var removeDuplicates = function (string) {
  var unique = '';
  for (var i = 0; i < string.length; i++) {
    if(unique.indexOf(string[i].toLowerCase()) < 0 && unique.indexOf(string[i].toUpperCase()) < 0) {
      unique += string[i];
    }
  }
  return unique;
}

var isAnnagram = function (words) {
  var resultString = '',
    a = removeDuplicates(words[0]),
    b = removeDuplicates(words[1]);

  // Remove the possibility that duplicated characters will return false positive
  if(a.length != b.length || words[0].length != words[1].length) {
    return false;
  }

  for(const letter of words[0]) {
    const position = words[1].indexOf(letter);
    if(position >= 0) {
      resultString += letter;
    }
  }
  return resultString === words[0];
}

module.exports = { removeDuplicates, isAnnagram };