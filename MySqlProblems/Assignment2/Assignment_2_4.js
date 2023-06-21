/*

Question
ID	NAME	  DEPARTMENT	SALARY	LOCATION
1	Jay	          HR	    5000	Chennai
2	Yash	  Management	7000	Pune
3	Annand	    Training	6000	Chennai
4	Ruhi	      Sales    	4000	Delhi
5	Pratik	      Admin	    3000	 NULL

Based on above table write SQL queries to:

1. Display name and dept of all employees

mysql> select *from employees;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  1 | Jay    | HR         |   5000 | Chennai  |
|  2 | Yash   | Management |   7000 | Pune     |
|  3 | Annand | Training   |   6000 | Chennai  |
|  4 | Ruhi   | Sales      |   4000 | Delhi    |
|  5 | Pratik | Admin      |   3000 | NULL     |
+----+--------+------------+--------+----------+
5 rows in set (0.00 sec)

mysql> select Name, Department from employees;
+--------+------------+
| Name   | Department |
+--------+------------+
| Jay    | HR         |
| Yash   | Management |
| Annand | Training   |
| Ruhi   | Sales      |
| Pratik | Admin      |
+--------+------------+
5 rows in set (0.00 sec)


2. Display details of employees getting paid more than 5000
mysql> select *from employees;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  1 | Jay    | HR         |   5000 | Chennai  |
|  2 | Yash   | Management |   7000 | Pune     |
|  3 | Annand | Training   |   6000 | Chennai  |
|  4 | Ruhi   | Sales      |   4000 | Delhi    |
|  5 | Pratik | Admin      |   3000 | NULL     |
+----+--------+------------+--------+----------+
5 rows in set (0.00 sec)

mysql> select * from employees where salary > 5000;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  2 | Yash   | Management |   7000 | Pune     |
|  3 | Annand | Training   |   6000 | Chennai  |
+----+--------+------------+--------+----------+
2 rows in set (0.00 sec)

3. Display Id and Name employees working in chennai or mumbai or pune
mysql> select *from employees;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  1 | Jay    | HR         |   5000 | Chennai  |
|  2 | Yash   | Management |   7000 | Pune     |
|  3 | Annand | Training   |   6000 | Chennai  |
|  4 | Ruhi   | Sales      |   4000 | Delhi    |
|  5 | Pratik | Admin      |   3000 | NULL     |
+----+--------+------------+--------+----------+
5 rows in set (0.00 sec)

mysql> select Id, Name from employees where Location = 'Chennai' or Location = 'Pune' or Location = 'Mumbai';
+----+--------+
| Id | Name   |
+----+--------+
|  1 | Jay    |
|  2 | Yash   |
|  3 | Annand |
+----+--------+
3 rows in set (0.00 sec)

4. Display name of employee whose location is not entered
mysql> select *from employees;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  1 | Jay    | HR         |   5000 | Chennai  |
|  2 | Yash   | Management |   7000 | Pune     |
|  3 | Annand | Training   |   6000 | Chennai  |
|  4 | Ruhi   | Sales      |   4000 | Delhi    |
|  5 | Pratik | Admin      |   3000 | NULL     |
+----+--------+------------+--------+----------+
5 rows in set (0.00 sec)

mysql> select * from employees where Location = "Null";
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  5 | Pratik | Admin      |   3000 | NULL     |
+----+--------+------------+--------+----------+
1 row in set (0.00 sec)



*/