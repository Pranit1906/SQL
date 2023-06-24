/*



Q.1. Create below table  EMPLOYEE and write query for them.

1.ADD EMPLOYEE (ID, NAME, DEPARTMENT, SALARY)
mysql> create table employee(Id int primary key, First_Name varchar(30) not null, Department varchar(30) not null,
Salary bigint not null,Location varchar(20));

mysql> desc employee;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| Id         | int         | NO   | PRI | NULL    |       |
| Name       | varchar(30) | NO   |     | NULL    |       |
| Department | varchar(30) | NO   |     | NULL    |       |
| Salary     | bigint      | NO   |     | NULL    |       |
| Location   | varchar(20) | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
5 rows in set (0.01 sec)


2.  SHOW EMPLOYEES

mysql> insert into employee values(1,'Jay','HR',5000,'Mumbai'),(2,'Yash','Management',7000,'Pune'),
(3,'Annand','Training',6000,'Chennai'),(4,'Ruhi','Sales',4000,'Delhi'),(5,'Pratik','Admin',3000,'Pune')
,(6,'Raj','Training',5000,'Mumbai');
Query OK, 6 rows affected (0.04 sec)
Records: 6  Duplicates: 0  Warnings: 0

mysql> select * from employee;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  1 | Jay    | HR         |   5000 | Mumbai   |
|  2 | Yash   | Management |   7000 | Pune     |
|  3 | Annand | Training   |   6000 | Chennai  |
|  4 | Ruhi   | Sales      |   4000 | Delhi    |
|  5 | Pratik | Admin      |   3000 | Pune     |
|  6 | Raj    | Training   |   5000 | Mumbai   |
+----+--------+------------+--------+----------+
6 rows in set (0.00 sec)

3. UPDATE EMPLOYEE SALARY
mysql> update employee set salary = 6000 where id = 5;
Query OK, 1 row affected (0.02 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from employee;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  1 | Jay    | HR         |   5000 | Mumbai   |
|  2 | Yash   | Management |   7000 | Pune     |
|  3 | Annand | Training   |   6000 | Chennai  |
|  4 | Ruhi   | Sales      |   4000 | Delhi    |
|  5 | Pratik | Admin      |   6000 | Pune     |
|  6 | Raj    | Training   |   5000 | Mumbai   |
+----+--------+------------+--------+----------+
6 rows in set (0.00 sec)

4. UPDATE EMPLOYEE DEPARTMENT
mysql> update employee set Department = 'IT' where id = 6;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from employee;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  1 | Jay    | HR         |   5000 | Mumbai   |
|  2 | Yash   | Management |   7000 | Pune     |
|  3 | Annand | Training   |   6000 | Chennai  |
|  4 | Ruhi   | Sales      |   4000 | Delhi    |
|  5 | Pratik | Admin      |   6000 | Pune     |
|  6 | Raj    | IT         |   5000 | Mumbai   |
+----+--------+------------+--------+----------+
6 rows in set (0.00 sec)

5. DELETE EMPLOYEE
mysql> delete from employee where id = 6;
Query OK, 1 row affected (0.03 sec)

mysql> select * from employee;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  1 | Jay    | HR         |   5000 | Mumbai   |
|  2 | Yash   | Management |   7000 | Pune     |
|  3 | Annand | Training   |   6000 | Chennai  |
|  4 | Ruhi   | Sales      |   4000 | Delhi    |
|  5 | Pratik | Admin      |   6000 | Pune     |
+----+--------+------------+--------+----------+
5 rows in set (0.00 sec)

6. SORT BY SALARY
mysql> select * from employee order by salary;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  4 | Ruhi   | Sales      |   4000 | Delhi    |
|  1 | Jay    | HR         |   5000 | Mumbai   |
|  3 | Annand | Training   |   6000 | Chennai  |
|  5 | Pratik | Admin      |   6000 | Pune     |
|  2 | Yash   | Management |   7000 | Pune     |
+----+--------+------------+--------+----------+
5 rows in set (0.00 sec)

7. FILTER IT FOR MUMBAI LOCATION
mysql> select * from employee where Location = 'Mumbai';
+----+------+------------+--------+----------+
| Id | Name | Department | Salary | Location |
+----+------+------------+--------+----------+
|  1 | Jay  | HR         |   5000 | Mumbai   |
|  6 | Raj  | Training   |   5000 | Mumbai   |
+----+------+------------+--------+----------+
2 rows in set (0.01 sec)_

ID	NAME	DEPARTMENT	SALARY	LOCATION
1	Jay	        HR  	5000	Mumbai
2	Yash	Management	7000	Pune
3	Annand	Training	6000	Chennai
4	Ruhi	   Sales	4000	Delhi
5	Pratik	   Admin	3000	Pune
6	Raj	    Training	5000	Mumbai



*/