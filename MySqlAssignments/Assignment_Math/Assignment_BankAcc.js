/*

Analyze the following problem and develop an algorithm to solve it.

A  bank  gives  5%  interest  for  the  annual  accounts.  However,  if  the  money  in  the account  is  10000  or  more,
the  bank  increases  the  interest  to  7%.  In  both cases, 2% of that interest is cut as the tax. 
Given the amount of money a customer uses to open an annual account in that bank, calculate the amount of money he will have after one year

10000* 12 *0.07 = 8400
128400 * 0.02 * 12 = 30816
128400 - 30816 = 97584

*/

const Bank =(amount)=>{
    let finalAmount = 0;
    let moneyWithAnnualInterest;
    let annualInterest;
    let tax;
   if(amount < 10000){
     annualInterest = 0.05;
    moneyWithAnnualInterest = (amount*12 + ( amount*annualInterest*12)) 
   } 
 
 if(amount >= 10000){
    annualInterest = 0.07;
    moneyWithAnnualInterest = (amount*12 + ( amount*annualInterest*12))  
 }
   tax = moneyWithAnnualInterest * 0.02 *12;
   finalAmount = moneyWithAnnualInterest - tax;

   return finalAmount;

}
console.log(Bank(10000))
console.log(Bank(9000));