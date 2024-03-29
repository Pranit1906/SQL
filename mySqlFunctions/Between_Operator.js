/*

The SQL BETWEEN Operator
The BETWEEN operator selects values within a given range. The values can be numbers, text, or dates.

The BETWEEN operator is inclusive: begin and end values are included. 

BETWEEN Syntax
SELECT column_name(s)
FROM table_name
WHERE column_name BETWEEN value1 AND value2;



1.)NOT BETWEEN Example
To display the products outside the range of the previous example, use NOT BETWEEN:

SELECT * FROM Products
WHERE Price NOT BETWEEN 10 AND 20;

2.)BETWEEN with IN Example
The following SQL statement selects all products with a price between 10 and 20. In addition; 
do not show products with a CategoryID of 1,2, or 3:

Example
SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20
AND CategoryID NOT IN (1,2,3);


3.)BETWEEN Dates Example
The following SQL statement selects all orders with an OrderDate between '01-July-1996' and '31-July-1996':

Example
SELECT * FROM Orders
WHERE OrderDate BETWEEN #07/01/1996# AND #07/31/1996#;

SELECT * FROM Orders
WHERE OrderDate BETWEEN '1996-07-01' AND '1996-07-31';

*/

/*

BETWEEN Text Values Example
The following SQL statement selects all products with a ProductName between Carnarvon Tigers and Mozzarella di Giovanni:

Example
SELECT * FROM Products
WHERE ProductName BETWEEN 'Carnarvon Tigers' AND 'Mozzarella di Giovanni'
ORDER BY ProductName;
The following SQL statement selects all products with a ProductName between Carnarvon Tigers and Chef Anton's Cajun Seasoning:

Example
SELECT * FROM Products
WHERE ProductName BETWEEN "Carnarvon Tigers" AND "Chef Anton's Cajun Seasoning"
ORDER BY ProductName;


NOT BETWEEN Text Values Example
The following SQL statement selects all products with a ProductName not between Carnarvon Tigers and Mozzarella di Giovanni:

Example
SELECT * FROM Products
WHERE ProductName NOT BETWEEN 'Carnarvon Tigers' AND 'Mozzarella di Giovanni'
ORDER BY ProductName;

*/