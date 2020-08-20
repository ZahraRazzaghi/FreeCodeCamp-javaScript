function testLessThan(val) {
  if (val<25) { 
    return "Under 25";
  }
  if (val<55) { 
    return "Under 55";
  }
  return "55 or Over";
}
testLessThan(10); // "Under 25"
testLessThan(54); // "Under 55"
testLessThan(55); // "55 or Over"
testLessThan(80); // "55 or Over"
testLessThan('70'); // "55 or Over"
