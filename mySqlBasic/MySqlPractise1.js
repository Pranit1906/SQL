/*
cltr + ? = shortcut for multiple comments...

+--------------------+
| Tables_in_itvedant |
+--------------------+
| employee           |
| fullstack          |
| table1             |
| table2             |
+--------------------+
4 rows in set (0.01 sec)

mysql> desc table1;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int         | NO   | PRI | NULL    |       |
| name  | varchar(20) | YES  |     | NULL    |       |
| age   | int         | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
3 rows in set (0.00 sec)

mysql> insert into table1 values(1, 'Pranit', 25),(2, 'Mohit',26),(3, 'Sumeet', 24);
Query OK, 3 rows affected (0.02 sec)
Records: 3  Duplicates: 0  Warnings: 0

mysql> insert into table2 values(1, 'Pranit', 25),(2, 'Mohit',26),(3, 'Sanit', 27),(4,'Yogesh',21),(5,'Mangesh',31);
Query OK, 5 rows affected (0.02 sec)
Records: 5  Duplicates: 0  Warnings: 0

mysql> insert into table1 values(4, 'Pramod', 35),(5, 'kamlesh',32);
Query OK, 2 rows affected (0.02 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql> select * from table1;
+----+---------+------+
| id | name    | age  |
+----+---------+------+
|  1 | Pranit  |   25 |
|  2 | Mohit   |   26 |
|  3 | Sumeet  |   24 |
|  4 | Pramod  |   35 |
|  5 | kamlesh |   32 |
+----+---------+------+
5 rows in set (0.00 sec)

mysql> select * from table2;
+----+---------+------+
| id | name    | age  |
+----+---------+------+
|  1 | Pranit  |   25 |
|  2 | Mohit   |   26 |
|  3 | Sanit   |   27 |
|  4 | Yogesh  |   21 |
|  5 | Mangesh |   31 |
+----+---------+------+
5 rows in set (0.00 sec)

mysql> select name from table1 intersect select name from table2;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'select name from table2' at line 1
mysql> select name from table1 union select name from table2;
+---------+
| name    |
+---------+
| Pranit  |
| Mohit   |
| Sumeet  |
| Pramod  |
| kamlesh |
| Sanit   |
| Yogesh  |
| Mangesh |
+---------+
8 rows in set (0.01 sec)

mysql> select name from table1 intersect select name from table2;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'select name from table2' at line 1
mysql> select name from table1 except select name from table2;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'except select name from table2' at line 1
mysql> select name from table1 except table2;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'except table2' at line 1
mysql> select name from table1 intersect select name from table2;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'select name from table2' at line 1
mysql>


select salary + salary + 500 as bonus from employee; 
select salary * 0.25 from employee where id = 1;
select salray, age, age + salary as combine from employee;

 */

/*

mysql> select * from employee;
+----+--------+---------+------+
| id | salary | city    | age  |
+----+--------+---------+------+
|  1 |  25000 | Pranit  |   25 |
|  2 |  26000 | Mohit   |   24 |
|  3 |  27000 | Sanit   |   31 |
|  4 |  21000 | Yogesh  |   27 |
|  5 |  39000 | Mangesh |   23 |
+----+--------+---------+------+
5 rows in set (0.00 sec)

mysql> select salary + 500 as bonus form employee;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'form employee' at line 1
mysql> select salary + 500 as bonus from employee;
+-------+
| bonus |
+-------+
| 25500 |
| 26500 |
| 27500 |
| 21500 |
| 39500 |
+-------+
5 rows in set (0.00 sec)

mysql> select salary - 500 as deductation from employee;
+-------------+
| deductation |
+-------------+
|       24500 |
|       25500 |
|       26500 |
|       20500 |
|       38500 |
+-------------+
5 rows in set (0.01 sec)

mysql> select salary * 500 as Multiple salary from employee;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'salary from employee' at line 1
mysql> select salary * 500 as Multiple_salary from employee;
+-----------------+
| Multiple_salary |
+-----------------+
|        12500000 |
|        13000000 |
|        13500000 |
|        10500000 |
|        19500000 |
+-----------------+
5 rows in set (0.00 sec)

mysql> select salary /50 as Divide_salary from employee;
+---------------+
| Divide_salary |
+---------------+
|      500.0000 |
|      520.0000 |
|      540.0000 |
|      420.0000 |
|      780.0000 |
+---------------+
5 rows in set (0.00 sec)

mysql> select salary %2 as Module_salary from employee;
+---------------+
| Module_salary |
+---------------+
|             0 |
|             0 |
|             0 |
|             0 |
|             0 |
+---------------+
5 rows in set (0.00 sec)

mysql> select salary//2 as Module_salary from employee;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '/2 as Module_salary from employee' at line 1
mysql> select salary\\2 as Module_salary from employee;
ERROR:
Unknown command '\\'.
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '\\2 as Module_salary from employee' at line 1
mysql> select salary**2 as Module_salary from employee;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '*2 as Module_salary from employee' at line 1
mysql> select salary ** 2 as Powerup_salary from employee;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '* 2 as Powerup_salary from employee' at line 1
mysql> select salary, id, id+employee as Combined_id_salary from employee;
ERROR 1054 (42S22): Unknown column 'employee' in 'field list'
mysql> select salary, id, id+salary as Combined_id_salary from employee;
+--------+----+--------------------+
| salary | id | Combined_id_salary |
+--------+----+--------------------+
|  25000 |  1 |              25001 |
|  26000 |  2 |              26002 |
|  27000 |  3 |              27003 |
|  21000 |  4 |              21004 |
|  39000 |  5 |              39005 |
+--------+----+--------------------+
5 rows in set (0.00 sec)

mysql> select id,name, id+name as Combined_id_name from employee;
ERROR 1054 (42S22): Unknown column 'name' in 'field list'
mysql> select id,city, id+city as Combined_id_city from employee;
+----+---------+------------------+
| id | city    | Combined_id_city |
+----+---------+------------------+
|  1 | Pranit  |                1 |
|  2 | Mohit   |                2 |
|  3 | Sanit   |                3 |
|  4 | Yogesh  |                4 |
|  5 | Mangesh |                5 |
+----+---------+------------------+
5 rows in set, 5 warnings (0.01 sec)



select count(id), salary from employee group by salary;
select * from employee group by salary having (salary < 30000);
group by must have count and having to work;

*/

/*

mysql> select * from employee group by salary having(salary < 25000);
+----+--------+--------+------+
| id | salary | city   | age  |
+----+--------+--------+------+
|  4 |  21000 | Yogesh |   27 |
+----+--------+--------+------+
1 row in set (0.01 sec)

mysql> select * from employee group by salary having(salary > 25000);
+----+--------+---------+------+
| id | salary | city    | age  |
+----+--------+---------+------+
|  2 |  26000 | Mohit   |   24 |
|  3 |  27000 | Sanit   |   31 |
|  5 |  39000 | Mangesh |   23 |
+----+--------+---------+------+
3 rows in set (0.01 sec)

mysql> select count(name) from employee group by name;
ERROR 1054 (42S22): Unknown column 'name' in 'field list'
mysql> select count(city) from employee group by city;
+-------------+
| count(city) |
+-------------+
|           1 |
|           1 |
|           1 |
|           1 |
|           1 |
+-------------+
5 rows in set (0.00 sec)

mysql> select count(city) from employee group by city having('Pranit');
Empty set, 1 warning (0.01 sec)

mysql> select count(city) from employee group by city having('Sanit');
Empty set, 1 warning (0.00 sec)

mysql> select * from employee group by city having('Sanit');
Empty set, 1 warning (0.00 sec)

mysql> select * from employee group by city having(id);
+----+--------+---------+------+
| id | salary | city    | age  |
+----+--------+---------+------+
|  1 |  25000 | Pranit  |   25 |
|  2 |  26000 | Mohit   |   24 |
|  3 |  27000 | Sanit   |   31 |
|  4 |  21000 | Yogesh  |   27 |
|  5 |  39000 | Mangesh |   23 |
+----+--------+---------+------+
5 rows in set (0.00 sec)

mysql> select * from employee group by salary;
+----+--------+---------+------+
| id | salary | city    | age  |
+----+--------+---------+------+
|  1 |  25000 | Pranit  |   25 |
|  2 |  26000 | Mohit   |   24 |
|  3 |  27000 | Sanit   |   31 |
|  4 |  21000 | Yogesh  |   27 |
|  5 |  39000 | Mangesh |   23 |
+----+--------+---------+------+
5 rows in set (0.00 sec)

mysql> select * from employee group by id;
+----+--------+---------+------+
| id | salary | city    | age  |
+----+--------+---------+------+
|  1 |  25000 | Pranit  |   25 |
|  2 |  26000 | Mohit   |   24 |
|  3 |  27000 | Sanit   |   31 |
|  4 |  21000 | Yogesh  |   27 |
|  5 |  39000 | Mangesh |   23 |
+----+--------+---------+------+
5 rows in set (0.00 sec)


*/