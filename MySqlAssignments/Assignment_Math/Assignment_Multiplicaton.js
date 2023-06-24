/*

Print Multiplication table of a user enter number.
For e.g.:-

5 * 1 = 5

5 * 2 = 10

5 * 3 = 15

5 * 4 = 20

5 * 5 = 25

*/

const multiplicationTable = (n) =>{
    let mul;
    for(let i = 1; i <= 10; i++ ){
        mul = n * i;
        console.log(`${n} * ${i} = ${mul} `)
    }
}
multiplicationTable(5);