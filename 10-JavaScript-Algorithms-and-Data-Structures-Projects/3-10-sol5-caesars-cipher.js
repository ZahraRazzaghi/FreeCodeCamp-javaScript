function rot13(str) {
  str.toUpperCase(); // Convert `str` string to uppercase letters
  var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
  var nop = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var arr = str.split(""); // Splits `str` into an array where each element is an individual character (including non-alphabetic characters)

    for (var i = 0; i < arr.length; i++) { // Iterate number of `arr` elements
      for (var j = 0; j < abc.length; j++) { // Iterate number of `abc`/`nop` array elements
      if (arr[i] === abc[j]) {
        arr[i] = nop[j]; // Swap the `arr` character for the corresponding `nop` array character
      } else if (arr[i] === nop[j]) {
        arr[i] = abc[j]; // Swap the `arr` character for the corresponding `abc` array character
      }
    }
  }

  return arr.join(""); // Join all `arr` array characters back into a string, returning the deciphered `str` with all non-alphabetical characters preserved
}

rot13("FHCRE FRPERG!!!");