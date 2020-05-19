
//Example Problem
const sumOf = function(list) {

    if(list.length === 1) {
      return list[0];
    }
    return list[0] + sumOf(list.slice(1))
  }
  
  let first = [2,4,6,8,10]
  console.log(sumOf(first));
  
  
  //Counting Sheep
  const numsheep = function(list) {
    if(list.length === 1) {
      return list[0]  +  `, 'All sheep jumped over the fence'`;
    }
    return list[0] + numsheep(list.slice(1))  +  `, 'Another sheep jumps over the fence'`
  }
  
  let sheep = [3]
  console.log(numsheep(sheep))
  
  
  //Power Calculator
  const powerCalculator = function(base, exponent) {
    if( exponent == 0) {
      return 1;
    } else {
      return base * powerCalculator(base, exponent - 1)
    }
  }
  console.log(powerCalculator(10, 2));
  
  
  //Reverse String
  function reverseString(str) {
    if(str === "") {
      return "";
     } else  {
      return reverseString(str.substr(1)) + str.charAt(0);
    }
  }
  console.log(reverseString("Hello"));
  
  
  //nth Triangle Number
  function tri(n) {
    if(n <= 1) {
      return n
    } else {
      return n + tri(n - 1)
    }
  }
  console.log(tri(4))
  
  
  //String Splitter
  function splitString(str) {
  
  }
  
  
  //Fibonacci
  function fib(n) {
    if( n < 2) {
      return n;
    } else {
      return fib(n-1) + fib(n-2)
    }
  }
  console.log(fib(7))
  
  
  //Factorial
  function factorial(x) {
    if( x === 0 ) {
      return 1;
    } else {
      return x * factorial( x-1 )
    }
  }
  console.log(factorial(5))
  