function testGreaterThan(val) {
  if (val>100) {  
    return "Over 100";
  }

  if (val>10) {  
    return "Over 10";
  }

  return "10 or Under";
}
testGreaterThan(10); // "10 or Under"
testGreaterThan(11); // "Over 10"
testGreaterThan(99); // "Over 10"
testGreaterThan(101); // "Over 100"
