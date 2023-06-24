/*

Write algorithm and flow chart to find factorial of any number

          Start n = 4
              |
              |
              V
          let factorial = 1;
          let i = 1;
              |
              |
              V
        while(i <= n) <--------True---------> factorial *= i;                               
              |                                      i++;     
            false
              |
              |
              V
        Return factorial
              |
              |
              V
             End
*/

const factorial = (n) => {
    let factorial = 1;
    let i = 1;
    while(i <= n){
        factorial *= i;
        i++;
    }
    return factorial;
} 

console.log(factorial(4));