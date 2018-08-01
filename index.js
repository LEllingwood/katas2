// add
function add(x,y) {
    return x + y;
}
const result = add(2,4)
console.log(result)


// // multiply

  function multiply(a,b){
     let result=0;
     for (let i = 0;i < a;i++){
        result = result+b;

     }  
     
     return result 
    }
    
  console.log(multiply(6,8))
  


// // // power

function power(c,d) {
    
    let result=1;
    // debugger;
    for (let i = 0; i < d; i++){
       result = multiply(result,c)
    }  

    return result; 
   }
 
console.log(power(2,8))


// // // factorial

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

// // fibonacci

// funtion fibonacci(n) {

    // function testNum(a) {
    //     if (n === 0) {
    //       return 0;
        
    //     else 
    //       if (n === 1)
    //       return 1;
        
        
    //     }
    //   }
      
// if n = 1 || n = 0
//    return n;

// else
//     return F(n-1) + F(n-2);

//       console.log(fibonacci(8);

// }

function fibonacci(n)  {
    if(n == 0)
        return 0;
    
    else 
    if(n == 1)
      return 1;
   
    else
      return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7))