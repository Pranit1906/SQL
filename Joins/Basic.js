/*
 JOIN:-
 
A join is a query that combines rows from two or more tables. 
Database performs a join whenever multiple tables appear in the FROM clause of the query. 
The select list of the query can select any columns from any of these tables.
If any two of these tables have a column name in common, then you must qualify all references 
to these columns throughout the query with table names to avoid ambiguity. 
This can be done by giving an alias name.


Types of Joins:

1. Equal Join:- 
An equijoin is a join which contains an equality operator.

SELECT tab1.fieldname, tab1.fieldname, tab2.fieldname, tab2.fieldname, FROM tab1, tab2 WHERE 
tab1.fieldname = tab2.fieldname; 
Alias can be used in place of table name.

Example:-
SELECT employeeNumber, CONCAT(firstName, ' ', lastName) AS "Full Name", o.officeCode, city 
FROM employees e, offices o WHERE e.officeCode = o.officeCode;




2. Self Join:- 
It is a join which relates the table to itself.

Example:-
Display the names of all employees who has manager.
SELECT Concat(e1.firstName, ' ', e1.lastName, ' works for ', e2.firstName, ' ', e2.lastName) 
AS "Employee works for Manager" 
FROM employees e1, employees e2 WHERE e1.reportsTo = e2.employeeNumber;


3. Non-equi join: 
A join condition using any other operator than �=� is a non-equi join.

Example:- 
Display customer details along with order details between 12-Jan-2003 to 31-Mar-2003.
SELECT c.customerName, o.orderNumber, o.orderDate, od.quantityOrdered * od.priceEach as "Total Cost"
FROM customers c, orders o, orderdetails od WHERE c.customerNumber = o.customerNumber and 
o.orderNumber = od.orderNumber and  o.orderDate between '2003-01-12' and '2003-03-31';

i.) On Clause:-
The ON clause is used to join tables where the column names don�t match in both tables. 
The join conditions are removed from the filter conditions in the WHERE clause. 
In other words, the ON clause is similar to the WHERE clause as you can put multiple conditions in the ON clause.

SELECT Concat(e.firstName, ' ', e.lastname) as "EmployeeName", c.customerName 
FROM employees e JOIN customers c ON (e.employeeNumber = c.SalesRepEmployeeNumber);


ii.)Using Clause:- 
The columns listed in the USING clause must be present in both of the two tables being joined. 
The USING clause will be transformed to an ON clause that checks for equality between the named columns in the two tables.

SELECT concat(e.firstname, ' ', e.lastname), o.city FROM employees e JOIN offices o USING (officeCode);


4. Cross Join:-
This join produces a Cartesian product. CROSS JOIN returns the Cartesian product of the sets of rows from the joined tables. 
Cartesian product is a join of every row of one table to every row of another table. 
This normally happens when no matching join columns are specified.

SELECT CONCAT(e.firstName, ' ', e.lastname) AS "EmployeeName", c.customerName FROM employees e CROSS JOIN customers c;



5.Outer Join: An outer join returns all rows that satisfy the join condition and also returns some or all of those rows
from one table for which no rows from the other table satisfy the join condition. Such rows are not satisfied by a simple join.

Left Outer Join:- 

SELECT e.firstName, c.customerName FROM employees e LEFT OUTER JOIN customers c ON (e.employeeNumber=c.SalesRepEmployeeNumber);

Right Outer Join:-

SELECT e.firstName, c.customerName FROM employees e RIGHT OUTER JOIN customers c ON (e.employeeNumber=c.SalesRepEmployeeNumber);


*/

/*
1.Inner Join
2.Outer Join
2.1Left Outer Join
2.2 Right Outer Join
2.3 Full Outer Join
3.Cross Join
4. Self Join

*/