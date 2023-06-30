
/*
SubQueries Examples:-
using multiple select inside single query :-

mysql> select id,name,(select concat(salary, " ",contact) from emp where id = 1)as salary from emp;
+----+---------+------------------+
| id | name    | salary           |
+----+---------+------------------+
|  1 | Sagar   | 10000 9966558822 |
|  2 | Ram     | 10000 9966558822 |
|  3 | Rajesh  | 10000 9966558822 |
|  4 | Sameer  | 10000 9966558822 |
|  5 | Kala    | 10000 9966558822 |
|  6 | Avinash | 10000 9966558822 |
|  7 | Roshan  | 10000 9966558822 |
+----+---------+------------------+
7 rows in set (0.00 sec)

select * from emp where id between (select min(emp_id) from project) and (select max(emp_id) from project);

*/


/*

Subqueries in DDL and DML:-

Example of DML with subquery:- 
Increase the credit limit for the customers by 5% whose Sales Representative is Larry. 

UPDATE customers 
SET creditLimit = creditLimit + (creditLimit * 0.05)
WHERE salesRepEmployeeNumber = 
(SELECT employeeNumber from employees 
WHERE firstName = �Larry�);

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





Example of DDL with subquery:-
Create a duplicate employee table named NemEmp.

CREATE TABLE NewEmp AS SELECT employeeNumber, 
CONCAT(firstName, ' ' , lastName) as fullname, 
officeCode FROM employees;

mysql> select * from fullstack;
+----+-----------+----------+----------------+
| id | subject   | Time     | year_month_day |
+----+-----------+----------+----------------+
|  1 | Sql       | 02:23:00 | 1996-05-23     |
|  2 | Sequelize | 07:03:40 | 1999-02-12     |
|  3 | NodeJs    | 03:35:00 | 1986-08-03     |
|  4 | MySql     | 02:00:08 | 1989-03-25     |
|  5 | MongoDb   | 03:41:10 | 1992-09-23     |
+----+-----------+----------+----------------+
5 rows in set (0.05 sec)

mysql> create table duplicate_Fullstack as select id,subject,Time,year_month_day from fullstack;
Query OK, 5 rows affected (0.08 sec)
Records: 5  Duplicates: 0  Warnings: 0

mysql> select * from duplicate_Fullstack;
+----+-----------+----------+----------------+
| id | subject   | Time     | year_month_day |
+----+-----------+----------+----------------+
|  1 | Sql       | 02:23:00 | 1996-05-23     |
|  2 | Sequelize | 07:03:40 | 1999-02-12     |
|  3 | NodeJs    | 03:35:00 | 1986-08-03     |
|  4 | MySql     | 02:00:08 | 1989-03-25     |
|  5 | MongoDb   | 03:41:10 | 1992-09-23     |
+----+-----------+----------+----------------+
5 rows in set (0.00 sec)


*/