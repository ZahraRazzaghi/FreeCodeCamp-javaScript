function testSize(num) {
 if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
testSize(4); // "Tiny"
testSize(5); // "Small"
testSize(9); // "Small"
testSize(10); // "Medium"
testSize(14); // "Medium"
testSize(15); // "Large"
testSize(19); // "Large"
testSize(20); // "Huge"
testSize(21); // "Huge"
