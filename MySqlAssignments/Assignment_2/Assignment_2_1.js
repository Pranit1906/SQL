/*


Question 1.

ID	NAME	DEPARTMENT	SALARY	LOCATION
1	Anand	HR	        50000	Chennai
2	Yash	Management	70000	Pune
3	Manoj	Training	60000	Chennai
4	Rahul	Sales	    40000	Delhi
5	Pratik	Admin	    30000	NULL

Based on above table write SQL queries to:

1. Display name and dept of all employees whose city is not Delhi

2. Display details of employees getting paid in range 50000 - 75000

3. Display Id and Name employees working in chennai or mumbai or pune

4. Display name of employee whose location is not entered

5. Display details of employee whose second letter of name is 'a'


*/

/*

mysql> select * from employee;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  1 | Anand  | HR         |  50000 | Chennai  |
|  2 | Yash   | Management |  70000 | Pune     |
|  3 | Manoj  | Training   |  60000 | Chennai  |
|  4 | Rahul  | Sales      |  40000 | Delhi    |
|  5 | Pratik | Admin      |  30000 | NULL     |
+----+--------+------------+--------+----------+
5 rows in set (0.00 sec)

1. Display name and dept of all employees whose city is not Delhi

mysql> select Name, Department from employee where not  Location = "Delhi";
+--------+------------+
| Name   | Department |
+--------+------------+
| Anand  | HR         |
| Yash   | Management |
| Manoj  | Training   |
| Pratik | Admin      |
+--------+------------+
4 rows in set (0.00 sec)



*/

/*

2. Display details of employees getting paid in range 50000 - 75000

mysql> select * from employee where Salary  between 50000 and 75000;
+----+-------+------------+--------+----------+
| Id | Name  | Department | Salary | Location |
+----+-------+------------+--------+----------+
|  1 | Anand | HR         |  50000 | Chennai  |
|  2 | Yash  | Management |  70000 | Pune     |
|  3 | Manoj | Training   |  60000 | Chennai  |
+----+-------+------------+--------+----------+
3 rows in set (0.00 sec)


*/

/*
mysql> select * from employee;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  1 | Anand  | HR         |  50000 | Chennai  |
|  2 | Yash   | Management |  70000 | Pune     |
|  3 | Manoj  | Training   |  60000 | Chennai  |
|  4 | Rahul  | Sales      |  40000 | Delhi    |
|  5 | Pratik | Admin      |  30000 | NULL     |
+----+--------+------------+--------+----------+
5 rows in set (0.00 sec)

3. Display Id and Name employees working in chennai or mumbai or pune
mysql> select Name, Department from employee where Location = 'Chennai' or Location = 'Mumbai' or Location = 'Pune';
+-------+------------+
| Name  | Department |
+-------+------------+
| Anand | HR         |
| Yash  | Management |
| Manoj | Training   |
+-------+------------+
3 rows in set (0.00 sec)

*/

/*
4. Display name of employee whose location is not entered

mysql> select * from employee;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  1 | Anand  | HR         |  50000 | Chennai  |
|  2 | Yash   | Management |  70000 | Pune     |
|  3 | Manoj  | Training   |  60000 | Chennai  |
|  4 | Rahul  | Sales      |  40000 | Delhi    |
|  5 | Pratik | Admin      |  30000 | NULL     |
+----+--------+------------+--------+----------+
5 rows in set (0.00 sec)

mysql> select Name from employee where Location = "Null";
+--------+
| Name   |
+--------+
| Pratik |
+--------+
1 row in set (0.00 sec)

*/

/*
5. Display details of employee whose second letter of name is 'a'

mysql> select * from employee;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  1 | Anand  | HR         |  50000 | Chennai  |
|  2 | Yash   | Management |  70000 | Pune     |
|  3 | Manoj  | Training   |  60000 | Chennai  |
|  4 | Rahul  | Sales      |  40000 | Delhi    |
|  5 | Pratik | Admin      |  30000 | NULL     |
+----+--------+------------+--------+----------+

mysql> select * from employee where Name  like '_a%';
+----+-------+------------+--------+----------+
| Id | Name  | Department | Salary | Location |
+----+-------+------------+--------+----------+
|  2 | Yash  | Management |  70000 | Pune     |
|  3 | Manoj | Training   |  60000 | Chennai  |
|  4 | Rahul | Sales      |  40000 | Delhi    |
+----+-------+------------+--------+----------+
3 rows in set (0.01 sec)

*/