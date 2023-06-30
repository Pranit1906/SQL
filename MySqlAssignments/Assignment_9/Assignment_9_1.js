/*

Assignment
ID	NAME	DEPARTMENT	SALARY	LOCATION
1	Jay	HR	5000	Chennai
2	Yash	Management	7000	Pune
3	Annand	Training	6000	Chennai
4	Ruhi	Sales	4000	Delhi
5	Pratik	Admin	3000	
NULL



Based on above table write SQL queries to:

1. Display details employees whose name start with P 
mysql> select * from employees where Name like 'P%';
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  5 | Pratik | Admin      |   3000 | NULL     |
+----+--------+------------+--------+----------+
1 row in set (0.01 sec)

2. Display names of employees getting paid in range 3000-5000
mysql> select Name,salary from employees where salary between 3000 and 5000;
+--------+--------+
| Name   | salary |
+--------+--------+
| Jay    |   5000 |
| Ruhi   |   4000 |
| Pratik |   3000 |
+--------+--------+
3 rows in set (0.00 sec)

3. Display all records in the decreasing order of salary
mysql> select * from employees order by salary desc;
+----+--------+------------+--------+----------+
| Id | Name   | Department | Salary | Location |
+----+--------+------------+--------+----------+
|  2 | Yash   | Management |   7000 | Pune     |
|  3 | Annand | Training   |   6000 | Chennai  |
|  1 | Jay    | HR         |   5000 | Chennai  |
|  4 | Ruhi   | Sales      |   4000 | Delhi    |
|  5 | Pratik | Admin      |   3000 | NULL     |
+----+--------+------------+--------+----------+
5 rows in set (0.00 sec)

4. Display name as ENAME and Department As Dept for the first 2 records
mysql> select Name as Ename, Department as Dept from employees where id between 1 and 2;
+-------+------------+
| Ename | Dept       |
+-------+------------+
| Jay   | HR         |
| Yash  | Management |
+-------+------------+
2 rows in set (0.01 sec)

5. Display details employees whose name has 'a' as second last letter
mysql> select * from employees where Name like'_a%';
+----+------+------------+--------+----------+
| Id | Name | Department | Salary | Location |
+----+------+------------+--------+----------+
|  1 | Jay  | HR         |   5000 | Chennai  |
|  2 | Yash | Management |   7000 | Pune     |
+----+------+------------+--------+----------+
2 rows in set (0.00 sec)

*/