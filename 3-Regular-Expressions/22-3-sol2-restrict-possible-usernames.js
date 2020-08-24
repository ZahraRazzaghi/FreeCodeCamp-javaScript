let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
/*

    ^ - start of input
    [a-z] - first character is a letter
    [0-9]{2,0} - ends with two or more numbers
    | - or
    [a-z]+ - has one or more letters next
    \d* - and ends with zero or more numbers
    $ - end of input
    i - ignore case of input
*/