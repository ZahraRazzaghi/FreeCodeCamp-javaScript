let sampleWord = "astronaut";
var pwRegex =  /^\D(?=\w{5})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);