function testGreaterOrEqual(val) {
  if (val>=20) { 
    return "20 or Over";
  }
  if (val>=10) { 
    return "10 or Over";
  }
  return "Less than 10";
}
testGreaterOrEqual(10); // "10 or Over"
testGreaterOrEqual(11); // "10 or Over"
testGreaterOrEqual(5); // "Less than 10"
testGreaterOrEqual(20); // "20 or Over"
testGreaterOrEqual(22); // "20 or Over"

