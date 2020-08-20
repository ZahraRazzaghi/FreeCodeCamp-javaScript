function testLogicalAnd(val) {
    if (val<=50&& val>=25) {
      return "Yes";
  }
  return "No";
}

testLogicalAnd(10); // "No"
testLogicalAnd(55); // "No"
testLogicalAnd(66); // "No"
testLogicalAnd(50); // "Yes"
testLogicalAnd(25); // "Yes"
testLogicalAnd(45); // "Yes"
