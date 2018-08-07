// add  Write a function named "add" that takes two arguments and returns their sum.
// You may use built-in operators to finish the definition.
// Display the result of calling add(2, 4), which should be 6.

function add(x,y) {
    return x + y;
}
const result = add(2,4)
console.log(result)


// // // multiply
// Write a function named "multiply" that takes two arguments and returns their product.
// You may not use built-in arithmetic operators or functions. Instead, you'll need a for loop which calls the "add" function you wrote earlier.  Display the result of calling multiply(6, 8), which should be 48.

  function multiply(a,b){
     let result=0;
     for (let i = 0;i < a;i++){
        result = add(result,b);
        // result = add(6,result);
     }  
     
     return result 
    }
    
  console.log(multiply(6,8))
  


// // // // power
// Write a function named "power" that takes two arguments (x and n) and returns the the result of raising x to the nth power.
// You may not use built-in arithmetic operators or functions. Instead, use functions you wrote in earlier katas to write this function.
// Display the result of calling power(2, 8), which should be 256.

function power(c,d) {
    
    let result=1;
    // debugger;
    for (let i = 0; i < d; i++){
       result = multiply(result,c)
    }  

    return result; 
   }
 
console.log(power(2,8))


// // // // factorial
// Write a function named "factorial" that takes a single argument and returns the factorial of that argument.
// You may not use built-in arithmetic operators or functions. Instead, use functions you wrote in earlier katas to write this function.


function factorial(e) {
    
    let result=1;
    debugger;
    for (let i = 1; i < e; i++)
     {
       result = multiply(result,i)
    }  

    return result; 
   }
 
console.log(factorial(5));

// // // fibonacci
// Write a function named "fibonacci" that takes an argument n and returns the nth, Fibonacci number (Links to an external site.)Links to an external site. (click me!).
// You may not use built-in arithmetic operators or functions. Instead, use functions you wrote in earlier katas to write this function.

function fibonacci (n) {
    
    let a = 0;
    let b = 1;
    let result = 0;
    
    for (i = 1; i < n-1; i++) {
        result = add(a, b)
        a = b;
        b = result;
    
    } 
    return result

}
console.log(fibonacci(8)); 
// 