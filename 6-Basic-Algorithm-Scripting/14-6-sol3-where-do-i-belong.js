function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  var i = 0;
  while (num > arr[i]) {
    i++;
  }

  return i;
}

getIndexToIns([40, 60], 50);