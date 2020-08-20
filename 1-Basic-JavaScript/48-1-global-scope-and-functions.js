var myGlobal=10; //oopsGlobal=10
function fun1() {
oopsGlobal=5; //oopsGlobal=5
}
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal; //oopsGlobal=10

  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal; //oopsGlobal=5
  }
  console.log(output);
}
