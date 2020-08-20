
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }
  return answer;
}
caseInSwitch(1); // "alpha"
caseInSwitch(2); // "beta"
caseInSwitch(3); // "gamma
caseInSwitch(4); // "delta"
