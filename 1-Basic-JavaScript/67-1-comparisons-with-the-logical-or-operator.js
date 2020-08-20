function testLogicalOr(val) {
  if (val<10 || val>20) {
    return "Outside";
  }
  return "Inside";
}
testLogicalOr(15); // "Inside"
testLogicalOr(9); // "Outside"
testLogicalOr(21); // "Outside"



