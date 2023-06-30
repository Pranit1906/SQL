/*

ID	NAME	DEPARTMENT	SALARY	LOCATION
1	Jay	HR	5000	Chennai
2	Yash	Management	7000	Pune
3	Annand	Training	6000	Chennai
4	Ruhi	Sales	4000	Delhi
5	Pratik	Admin	3000	
NULL

Based on above table write SQL queries to:

1. Display Id and Name employees working in chennai or mumbai or pune.
mysql> select Id, Name from employees where Location = "Mumbai" or Location = "Chennai" or Location = "Pune";
+----+--------+
| Id | Name   |
+----+--------+
|  1 | Jay    |
|  2 | Yash   |
|  3 | Annand |
+----+--------+
3 rows in set (0.01 sec)

2. Display name of employee whose location is not entered.
mysql> select * from employees where Location = "Null";
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  5 | Pratik | Admin      |   3000 | NULL     |
+----+--------+------------+--------+----------+
1 row in set (0.00 sec)

3.Display the list of employee in ascending order of their salary. 
mysql> select Name from employees order by salary;
+--------+
| Name   |
+--------+
| Pratik |
| Ruhi   |
| Jay    |
| Annand |
| Yash   |
+--------+
5 rows in set (0.00 sec)


*/