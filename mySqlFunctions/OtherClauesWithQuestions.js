/*

Various Other Clauses
SELECT with CASE expression: When you wish to check multiple conditions on the database you can use CASE expression. Following the general syntax for the same:

SELECT fieldname 1, CASE fieldname 

WHEN expr THEN action

WHEN expr THEN action

ELSE expr

END, fieldname 2, ... FROM table_name;




Questions to solve in the class:

1.List all the orders placed in month of February, 2003. 
select * from orders where orderdate between '2003-02-01' and '2003-02-28';

2.Calculate the number of days required in the month of August 2004 to ship the products.
select orderNumber, orderDate, shippedDate, shippedDate - orderDate as "Days Required" 
from orders where orderDate between '2004-08-01' and '2004-08-31';

3.List product details which has stock more that 6500.
select productCode, productName from products where quantityInStock > 6500;

4.Display all the product names that don�t end with S.
select productName from Products where productName not like '%s' or productName not like '%S';

5.List names of the employees in descending order of their office numbers
select firstname, lastname, officeCode from employees order by officeCode desc;

6.List the names, job title and office no of everyone whose name falls in the alphabetical range �C� to �L�
Select firstname from employees where firstname between �c%� and �l%�;
select firstname, lastname from employees where firstname REGEXP '^[C-L].*$'

7.Display all the office cities which have NULL values in State.
select city from offices where state is null;

8.List employee details working in Office Code 2, 3 or 5.
select firstname, lastname from employees where officeCode in (2, 3, 5);

9.Display all the customers with no sales representative and they belong to either Singapore or Frankfurt cities.
select customerName,city from customers where SalesRepEmployeeNumber is null and 
city = 'Singapore' or city = 'Frankfurt';



10.Select the name of all employees who are Sales Representatives.
select firstname, lastname, jobtitle from employees where jobtitle = 'Sales Rep';


*/