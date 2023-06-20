/*

Question
1.       Write a Sql query to create the above table. Table name is worker.

mysql> create table worker(Id int primary key, First_Name varchar(30) not null, Department varchar(30) not null,
Salary bigint not null,Location varchar(20));
mysql> desc worker;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| Id         | int         | NO   | PRI | NULL    |       |
| First_Name | varchar(30) | NO   |     | NULL    |       |
| Department | varchar(30) | NO   |     | NULL    |       |
| Salary     | bigint      | NO   |     | NULL    |       |
| Location   | varchar(20) | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
5 rows in set (0.01 sec)

mysql> insert into worker values(1,'Jay','HR',50000,'Mumbai'),(2,'Yash','Management',70000,'Pune'),
(3,'Annand','Training',60000,'Chennai'),(4,'Ruhi','Sales',40000,'Delhi'),(5,'Pratik','Admin',30000,'Pune')
,(6,'Raj','Training',50000,'Mumbai');
Query OK, 6 rows affected (0.04 sec)
Records: 6  Duplicates: 0  Warnings: 0

mysql> select * from  worker;
+----+------------+------------+--------+----------+
| Id | First_Name | Department | Salary | Location |
+----+------------+------------+--------+----------+
|  1 | Jay        | HR         |  50000 | Mumbai   |
|  2 | Yash       | Management |  70000 | Pune     |
|  3 | Annand     | Training   |  60000 | Chennai  |
|  4 | Ruhi       | Sales      |  40000 | Delhi    |
|  5 | Pratik     | Admin      |  30000 | Pune     |
|  6 | Raj        | Training   |  50000 | Mumbai   |
+----+------------+------------+--------+----------+
6 rows in set (0.00 sec)


2.       Write a sql query to fetch FIRST_NAME from the worker table using the alias name WORKER_NAME.
mysql> select * from  worker;
+----+------------+------------+--------+----------+
| Id | First_Name | Department | Salary | Location |
+----+------------+------------+--------+----------+
|  1 | Jay        | HR         |  50000 | Mumbai   |
|  2 | Yash       | Management |  70000 | Pune     |
|  3 | Annand     | Training   |  60000 | Chennai  |
|  4 | Ruhi       | Sales      |  40000 | Delhi    |
|  5 | Pratik     | Admin      |  30000 | Pune     |
|  6 | Raj        | Training   |  50000 | Mumbai   |
+----+------------+------------+--------+----------+
6 rows in set (0.00 sec)

mysql> select First_Name as Worker_Name from worker;
+-------------+
| Worker_Name |
+-------------+
| Jay         |
| Yash        |
| Annand      |
| Ruhi        |
| Pratik      |
| Raj         |
+-------------+
6 rows in set (0.00 sec)


3.       Write the sql query to fetch unique values of Department from worker table (Unique= No repetition)

mysql> select * from  worker;
+----+------------+------------+--------+----------+
| Id | First_Name | Department | Salary | Location |
+----+------------+------------+--------+----------+
|  1 | Jay        | HR         |  50000 | Mumbai   |
|  2 | Yash       | Management |  70000 | Pune     |
|  3 | Annand     | Training   |  60000 | Chennai  |
|  4 | Ruhi       | Sales      |  40000 | Delhi    |
|  5 | Pratik     | Admin      |  30000 | Pune     |
|  6 | Raj        | Training   |  50000 | Mumbai   |
+----+------------+------------+--------+----------+
6 rows in set (0.00 sec)


mysql> select distinct Department from worker;
+------------+
| Department |
+------------+
| HR         |
| Management |
| Training   |
| Sales      |
| Admin      |
+------------+

4.       Write a SQL query to print details of the worker whose salary lies between 100000 and 500000.
mysql> select * from  worker;
+----+------------+------------+--------+----------+
| Id | First_Name | Department | Salary | Location |
+----+------------+------------+--------+----------+
|  1 | Jay        | HR         |  50000 | Mumbai   |
|  2 | Yash       | Management |  70000 | Pune     |
|  3 | Annand     | Training   |  60000 | Chennai  |
|  4 | Ruhi       | Sales      |  40000 | Delhi    |
|  5 | Pratik     | Admin      |  30000 | Pune     |
|  6 | Raj        | Training   |  50000 | Mumbai   |
+----+------------+------------+--------+----------+
6 rows in set (0.00 sec)

mysql> select * from worker where salary between 10000 and 50000;
+----+------------+------------+--------+----------+
| Id | First_Name | Department | Salary | Location |
+----+------------+------------+--------+----------+
|  1 | Jay        | HR         |  50000 | Mumbai   |
|  4 | Ruhi       | Sales      |  40000 | Delhi    |
|  5 | Pratik     | Admin      |  30000 | Pune     |
|  6 | Raj        | Training   |  50000 | Mumbai   |
+----+------------+------------+--------+----------+
4 rows in set (0.00 sec)


5.       Find the name of the employee working in the admin department.
mysql> select * from  worker;
+----+------------+------------+--------+----------+
| Id | First_Name | Department | Salary | Location |
+----+------------+------------+--------+----------+
|  1 | Jay        | HR         |  50000 | Mumbai   |
|  2 | Yash       | Management |  70000 | Pune     |
|  3 | Annand     | Training   |  60000 | Chennai  |
|  4 | Ruhi       | Sales      |  40000 | Delhi    |
|  5 | Pratik     | Admin      |  30000 | Pune     |
|  6 | Raj        | Training   |  50000 | Mumbai   |
+----+------------+------------+--------+----------+
6 rows in set (0.00 sec)



mysql> select First_Name from worker where Department = 'Admin';
+------------+
| First_Name |
+------------+
| Pratik     |
+------------+
1 row in set (0.00 sec)



6.       Show only names of the department from the worker table
mysql> select * from  worker;
+----+------------+------------+--------+----------+
| Id | First_Name | Department | Salary | Location |
+----+------------+------------+--------+----------+
|  1 | Jay        | HR         |  50000 | Mumbai   |
|  2 | Yash       | Management |  70000 | Pune     |
|  3 | Annand     | Training   |  60000 | Chennai  |
|  4 | Ruhi       | Sales      |  40000 | Delhi    |
|  5 | Pratik     | Admin      |  30000 | Pune     |
|  6 | Raj        | Training   |  50000 | Mumbai   |
+----+------------+------------+--------+----------+
6 rows in set (0.00 sec)


mysql> select First_Name, Department from worker;
+------------+------------+
| First_Name | Department |
+------------+------------+
| Jay        | HR         |
| Yash       | Management |
| Annand     | Training   |
| Ruhi       | Sales      |
| Pratik     | Admin      |
| Raj        | Training   |
+------------+------------+
6 rows in set (0.00 sec)

*/