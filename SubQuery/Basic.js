/*

Subqueries - A subquery is a SELECT statement that is embedded in a clause of another SELECT statement.

When is Subquery Used?
Whenever you need a result of a particular query to get the necessary result set.
Subquery is also known as nested queries.

Syntax:-
SELECT column_name  
FROM table_name  
WHERE column_name expression operator   
( SELECT column_name  from table_name WHERE ... );  



*/

/*

Important Rule:

1.)A subquery can be placed in a number of SQL clauses like WHERE clause, FROM clause, HAVING clause.
2.)You can use Subquery with SELECT, UPDATE, INSERT, DELETE statements along with the operators 
like =, <, >, >=, <=, IN, BETWEEN, etc.
3.)A subquery is a query within another query. The outer query is known as the main query, 
and the inner query is known as a subquery.
4.)Subqueries are on the right side of the comparison operator.
5.)A subquery is enclosed in parentheses.
6.)In the Subquery, ORDER BY command cannot be used. But GROUP BY command can be used 
to perform the same function as ORDER BY command.

*/

/*

2. Subqueries with the INSERT Statement
SQL subquery can also be used with the Insert statement.
In the insert statement, data returned from the subquery is used to insert into another table.
In the subquery, the selected data can be modified with any of the character, date functions.
Syntax:

INSERT INTO table_name (column1, column2, column3....)   
SELECT *  
FROM table_name  
WHERE VALUE OPERATOR 

mysql> select * from t1;
+------+------+------+
| id   | name | age  |
+------+------+------+
|    1 | ABS  |   21 |
|    2 | BCD  |   28 |
|    3 | TYU  |   30 |
|    4 | UGH  |   45 |
+------+------+------+
4 rows in set (0.00 sec)

mysql> select * from t2;
Empty set (0.04 sec)

mysql> insert into t2 select *from t1;
Query OK, 4 rows affected (0.01 sec)
Records: 4  Duplicates: 0  Warnings: 0

mysql> select * from t2;
+------+------+------+
| id   | name | age  |
+------+------+------+
|    1 | ABS  |   21 |
|    2 | BCD  |   28 |
|    3 | TYU  |   30 |
|    4 | UGH  |   45 |
+------+------+------+
4 rows in set (0.00 sec)

*/


/*

3. Subqueries with the UPDATE Statement
The subquery of SQL can be used in conjunction with the Update statement. When a subquery is used with the Update statement, then either single or multiple columns in a table can be updated.

Syntax

UPDATE table  
SET column_name = new_value  
WHERE VALUE OPERATOR  
   (SELECT COLUMN_NAME  
   FROM TABLE_NAME  
   WHERE condition);  

mysql> update t2 set id = 5 where id = (select id from t1 where id = 4);
Query OK, 1 row affected (0.03 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from t2;
+------+------+------+
| id   | name | age  |
+------+------+------+
|    1 | ABS  |   21 |
|    2 | BCD  |   28 |
|    3 | TYU  |   30 |
|    5 | UGH  |   45 |
+------+------+------+
4 rows in set (0.00 sec)

mysql> update t2 set name ='Yograj', age = 21 where id = (select id from t1 where id = 2);
Query OK, 1 row affected (0.03 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from t2;
+------+--------+------+
| id   | name   | age  |
+------+--------+------+
|    1 | ABS    |   21 |
|    2 | Yograj |   21 |
|    3 | TYU    |   30 |
|    5 | McK    |   31 |
+------+--------+------+
4 rows in set (0.00 sec)


*/


/*

4. Subqueries with the DELETE Statement
The subquery of SQL can be used in conjunction with the Delete statement just like any other statements mentioned above.

Syntax

DELETE FROM TABLE_NAME  
WHERE VALUE OPERATOR  
   (SELECT COLUMN_NAME  
   FROM TABLE_NAME  
   WHERE condition);


mysql> delete from t2 where id in (select id from t1);
Query OK, 3 rows affected (0.01 sec)

mysql> select * from t2;
+------+------+------+
| id   | name | age  |
+------+------+------+
|    5 | McK  |   31 |
+------+------+------+
1 row in set (0.00 sec)

*/