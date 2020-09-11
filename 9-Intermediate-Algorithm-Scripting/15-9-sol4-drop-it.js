function dropElements(arr, func, i = 0) {
  return i < arr.length && !func(arr[i])
    ? (dropElements(arr.slice(i + 1), func, i))
    : arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});