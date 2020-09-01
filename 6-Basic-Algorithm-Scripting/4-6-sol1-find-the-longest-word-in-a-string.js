function findLongestWordLength(str) {
  let record = 0;
  let i = 0;
  let wordLength = 0;
  while(true) {
    wordLength = str.indexOf(' ', i) - (i);
    if (str.indexOf(' ', i) === -1) {
      wordLength = str.length-i;
    }
    i = i + (wordLength > 0 ? wordLength : wordLength*(-1)) + 1;
    // OR...
    // i += Math.abs(wordLength)+1;
    if (wordLength > record) {
      record = wordLength;
    }
    if (i > str.length) {
      break;
    }
  }
  return record;
}