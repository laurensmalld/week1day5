function isPalindrome(s) {
  var stringReverse = s.split(' ').join('').reverse().join('');
  var newS = s.split(' ').join('');
  return newS === stringReverse;
}

module.exports = isPalindrome;
