function countdown(n){
   return n < 1 ? [] : [n, ...countdown(n - 1)];
}

