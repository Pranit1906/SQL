/*


Q.1. Create below table  EMPLOYEE and write query for them.

1.ADD EMPLOYEE (ID, NAME, DEPARTMENT, SALARY)

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
6 rows in set (0.00 sec)

mysql> insert into employee(Id, Name, Department, Salary) values(7,'Pranit','HR',80000);
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  1 | Jay    | HR         |  50000 | Mumbai   |
|  2 | Yash   | Management |  70000 | Pune     |
|  3 | Annand | Training   |  60000 | Chennai  |
|  4 | Ruhi   | Sales      |  40000 | Delhi    |
|  5 | Pratik | Admin      |  30000 | Pune     |
|  6 | Raj    | Training   |  50000 | Mumbai   |
|  7 | Pranit | HR         |  80000 | NULL     |
+----+--------+------------+--------+----------+
7 rows in set (0.00 sec)


2.  SHOW EMPLOYEES

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
|  7 | Pranit | HR         |  80000 | NULL     |
+----+--------+------------+--------+----------+
7 rows in set (0.00 sec)

3. UPDATE EMPLOYEE SALARY

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
|  7 | Pranit | HR         |  80000 | NULL     |
+----+--------+------------+--------+----------+
7 rows in set (0.00 sec)

mysql> update employee set salary = 100000 where id = 7;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

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
|  7 | Pranit | HR         | 100000 | NULL     |
+----+--------+------------+--------+----------+
7 rows in set (0.00 sec)



4. UPDATE EMPLOYEE DEPARTMENT
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
|  7 | Pranit | HR         |  80000 | NULL     |
+----+--------+------------+--------+----------+
7 rows in set (0.00 sec)

mysql> update employee set Department = 'IT' where Name = 'Pranit';
Query OK, 1 row affected (0.02 sec)
Rows matched: 1  Changed: 1  Warnings: 0

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
|  7 | Pranit | IT         | 100000 | NULL     |
+----+--------+------------+--------+----------+
7 rows in set (0.00 sec)

5. DELETE EMPLOYEE
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
|  7 | Pranit | HR         |  80000 | NULL     |
+----+--------+------------+--------+----------+
7 rows in set (0.00 sec)

mysql> delete from  employee where id = 7;
Query OK, 1 row affected (0.00 sec)

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
6 rows in set (0.00 sec)


6. SORT BY SALARY
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
|  7 | Pranit | HR         |  80000 | NULL     |
+----+--------+------------+--------+----------+
7 rows in set (0.00 sec)

mysql> select * from employee order by salary;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  5 | Pratik | Admin      |  30000 | Pune     |
|  4 | Ruhi   | Sales      |  40000 | Delhi    |
|  1 | Jay    | HR         |  50000 | Mumbai   |
|  6 | Raj    | Training   |  50000 | Mumbai   |
|  3 | Annand | Training   |  60000 | Chennai  |
|  2 | Yash   | Management |  70000 | Pune     |
+----+--------+------------+--------+----------+
6 rows in set (0.00 sec)

mysql> select * from employee order by salary DESC;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  2 | Yash   | Management |  70000 | Pune     |
|  3 | Annand | Training   |  60000 | Chennai  |
|  1 | Jay    | HR         |  50000 | Mumbai   |
|  6 | Raj    | Training   |  50000 | Mumbai   |
|  4 | Ruhi   | Sales      |  40000 | Delhi    |
|  5 | Pratik | Admin      |  30000 | Pune     |
+----+--------+------------+--------+----------+
6 rows in set (0.00 sec)

7. FILTER IT FOR MUMBAI LOCATION
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
|  7 | Pranit | HR         |  80000 | NULL     |
+----+--------+------------+--------+----------+
7 rows in set (0.00 sec)

mysql> select * from employee where Location = "Mumbai";
+----+------+------------+--------+----------+
| Id | Name | Department | Salary | Location |
+----+------+------------+--------+----------+
|  1 | Jay  | HR         |  50000 | Mumbai   |
|  6 | Raj  | Training   |  50000 | Mumbai   |
+----+------+------------+--------+----------+
2 rows in set (0.00 sec)


ID	NAME	DEPARTMENT	   SALARY	LOCATION
1	Jay	        HR  	    5000	Mumbai
2	Yash	 Management	    7000	Pune
3	Annand	 Training	    6000	Chennai
4	Ruhi	   Sales	    4000	Delhi
5	Pratik	   Admin	    3000	Pune
6	Raj	     Training	    5000	Mumbai


*/