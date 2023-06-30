/*

The Basic syntax of Decimal data type in SQL Server
Let’s take a look at the basic syntax of SQL Decimal Data type first. It is denoted as below:

decimal [(p [,s])]
Where,

p stands for Precision, the total number of digits in the value, i.e. on both sides of the decimal point
s stands for Scale, number of digits after the decimal point


mysql> alter table item_ordered modify price decimal(4,2); // 4 is size of number and 2 is numbers after decimal point 
Query OK, 0 rows affected (0.09 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> insert into item_ordered values(10330,'30-jun-1999','Pogo stick',1,28.00);
Query OK, 1 row affected (0.01 sec)

mysql> select * from item_ordered;
+------------+-------------+------------+----------+-------+
| customerId | order_date  | item       | quantity | price |
+------------+-------------+------------+----------+-------+
|      10330 | 30-jun-1999 | Pogo stick |        1 | 28.00 |
+------------+-------------+------------+----------+-------+
1 row in set (0.00 sec)

*/