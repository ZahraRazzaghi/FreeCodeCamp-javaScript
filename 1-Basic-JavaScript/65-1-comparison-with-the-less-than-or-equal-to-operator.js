function testLessOrEqual(val) {
  if (val<=12) { 
    return "Smaller Than or Equal to 12";
  }
  if (val<=24) {  
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}
testLessOrEqual(10); // "Smaller Than or Equal to 12
testLessOrEqual(12); // "Smaller Than or Equal to 12"
testLessOrEqual(24); // "Smaller Than or Equal to 24"
testLessOrEqual(11); // "Smaller Than or Equal to 24"
testLessOrEqual(30); // "More Than 24"
testLessOrEqual("42"); // "More Than 24"
