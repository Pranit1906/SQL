/*

Draw a flowchart to find smallest of the three numbers entered by User



*/

const smallestOfThree = (a,b,c)=>{
if(a < b && a < c){
    console.log(`${a} is the Smallest of Three`);
}
else if(b < a && b < c){
console.log(`${b} is the Smallest of Three`)
}
else{
    console.log(`${c} is the Smallest of Three `)
}
}

smallestOfThree(8,9,1);
smallestOfThree(18,9,10);
smallestOfThree(8,19,10);