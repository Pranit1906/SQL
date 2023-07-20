/*

 ORDER BY :-
 ORDER BY is used to sort the column in ascending or descending order.

The ORDER BY sorts the records in ascending order by default.
To sort the records in descending order, use the DESC keyword.

ORDER BY Syntax
SELECT col1, col2, ...
FROM table_name
ORDER BY col1, col2, ... ASC|DESC;

Select all records from the Customers table, sort the result alphabetically, first by the column Country, then, by the column City.


SELECT * FROM Customers
Order by Country,City
;

mysql> select * from employee;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  1 | Jay    | HR         |  50000 | Mumbai   |
|  2 | Yash   | Management |  70000 | Pune     |
|  3 | Annand | Training   |  60000 | Chennai  |
|  4 | Ruhi   | Sales      |  40000 | Delhi    |
|  5 | Pratik | Admin      |  30000 | Pune     |
|  6 | Raj    | Training   |  50000 | Mumbai   |
+----+--------+------------+--------+----------+

mysql> select salary from employee  order by salary Desc;
+--------+
| salary |
+--------+
|  70000 |
|  60000 |
|  50000 |
|  50000 |
|  40000 |
|  30000 |
+--------+
6 rows in set (0.00 sec)

mysql> select salary from employee  order by salary ;
+--------+
| salary |
+--------+
|  30000 |
|  40000 |
|  50000 |
|  50000 |
|  60000 |
|  70000 |
+--------+
6 rows in set (0.00 sec)



SELECT with List operator (IN): It can be used instead of OR condition for single field
and can be used with character or date values.



SELECT with LIMIT: This is command is to restrict the number of records in the result set based on the requirement.
This is similar to the TOP command in SQL Server.
*/