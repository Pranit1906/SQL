/*


SQL NULL Values

What is a NULL Value?
A field with a NULL value is a field with no value.
If a field in a table is optional, it is possible to insert a new record or update a record without adding a value to this field.
Then, the field will be saved with a NULL value.

Note: A NULL value is different from a zero value or a field that contains spaces. 
A field with a NULL value is one that has been left blank during record creation!

How to Test for NULL Values?
It is not possible to test for NULL values with comparison operators, such as =, <, or <>.

We will have to use the IS NULL and IS NOT NULL operators instead.

1.) IS NULL Syntax:-
SELECT column_names
FROM table_name
WHERE column_name IS NULL;

mysql> select * from customer_table where Cust_Id in(select Cust_Id from customer_Table where Name is Null);
+---------+------+------------+------+
| Cust_Id | Name | Occupation | Age  |
+---------+------+------------+------+
|     107 | NULL | NULL       | NULL |
+---------+------+------------+------+
1 row in set (0.00 sec

2.) IS NOT NULL Syntax
SELECT column_names
FROM table_name
WHERE column_name IS NOT NULL;

+---------+---------+------------+------+
| Cust_Id | Name    | Occupation | Age  |
+---------+---------+------------+------+
|     101 | Peter   | Engineer   |   32 |
|     102 | Joseph  | Developer  |   30 |
|     103 | John    | Leader     |   28 |
|     104 | Stephen | Scientist  |   45 |
|     105 | Suzi    | Carpenter  |   26 |
|     106 | Bob     | Actor      |   25 |
+---------+---------+------------+------+
6 rows in set (0.00 sec)

*/