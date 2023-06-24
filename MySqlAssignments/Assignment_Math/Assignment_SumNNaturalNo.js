/*

Write an algorithm and flowchart to find sum of n natural numbers

            start n = 5
                |
                |
                |
                V
             sum = 0;
             i = 1;   < ------True
             i <= n;          |
                              |
               False          |
                |             |
                |             |
                |             V
                |        sum += i;     
                |            i++;   
                |
                V
             Return -----------> End
               Sum;                         

*/

function naturalNumberSum (n){
    let sum = 0;
    for(let i = 1; i <= n;i++){
        sum += i;
    }
    return sum;
}
console.log(naturalNumberSum(5));