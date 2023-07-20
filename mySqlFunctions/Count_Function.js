/*

Select Count(*) Function in SQL
The count(*) function in SQL shows all the Null and Non-Null records present in the table.

Syntax of Count (*) Function in SQL
SELECT COUNT(*) FROM table_name;  


List the number of customers in each country, ordered by the country with the most customers first.


SELECT 
count(CustomerID),
Country FROM Customers
group by country
ORDER BY Count(CustomerID) DESC;



 COUNT(*) will count all the rows in the table, including NULL values. On the other hand,
 COUNT(column name) will count all the rows in the specified column while excluding NULL values

 (iii) To display the City and the number of stores located in that City, only if number of stores is more than 2.
mysql> Select count(*) as No_Of_Stores,City from store group by City having count(*)>2;
+--------------+--------+
| No_Of_Stores | City   |
+--------------+--------+
|            3 | Mumbai |
|            3 | Delhi  |
+--------------+--------+
2 rows in set (0.00 sec)
*/