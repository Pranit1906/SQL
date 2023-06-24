/*



id	name	price	quantity
1	TV	    45000	3

2	Bike	85000	2

3	Washing
    Machine	40000	4

4	Fan	   18000	10

5	Car  	95000	2

1. Display all records with name and price fileds.
mysql> select name,price from Products;
+-----------------+-------+
| name            | price |
+-----------------+-------+
| TV              | 45000 |
| Bike            | 85000 |
| Washing Machine | 40000 |
| Fan             | 18000 |
| Car             | 95000 |
+-----------------+-------+
5 rows in set (0.00 sec)

2. display records of product with 20% discount on price
mysql> select * from Products where price = price*(20/100);
Empty set (0.01 sec)

3. find the records of product whose price is less than 60000/-
mysql> select * from Products where price < 60000;
+----+-----------------+-------+----------+
| id | name            | price | quantity |
+----+-----------------+-------+----------+
|  1 | TV              | 45000 |        3 |
|  3 | Washing Machine | 40000 |        4 |
|  4 | Fan             | 18000 |       10 |
+----+-----------------+-------+----------+
3 rows in set (0.00 sec)

4. find the records of product whose quantity is between 3 to 10
mysql> select * from Products where quantity between 3 and 10;
+----+-----------------+-------+----------+
| id | name            | price | quantity |
+----+-----------------+-------+----------+
|  1 | TV              | 45000 |        3 |
|  3 | Washing Machine | 40000 |        4 |
|  4 | Fan             | 18000 |       10 |
+----+-----------------+-------+----------+
3 rows in set (0.00 sec)

*/