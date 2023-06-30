/*

mysql> use subquery;
Database changed
mysql> create table salary(
    -> id int primary key,name varchar(20),salary bigint);
Query OK, 0 rows affected (0.08 sec)

mysql> desc salary;
+--------+-------------+------+-----+---------+-------+
| Field  | Type        | Null | Key | Default | Extra |
+--------+-------------+------+-----+---------+-------+
| id     | int         | NO   | PRI | NULL    |       |
| name   | varchar(20) | YES  |     | NULL    |       |
| salary | bigint      | YES  |     | NULL    |       |
+--------+-------------+------+-----+---------+-------+
3 rows in set (0.01 sec)

mysql> insert into salary values(1,'abc',10000),(2,'bcd',12300),(3,'tree',50000),(4,'Yvc',90000),(5,'Ghjni',60000),(6,'Dham',34000),(7,'Ram',70000),(8,'Shyam',69000)(9,'Rohot',40000),(10,'Japani',21000);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '(9,'Rohot',40000),(10,'Japani',21000)' at line 1
mysql> insert into salary values(1,'abc',10000),(2,'bcd',12300),(3,'tree',50000),(4,'Yvc',90000),(5,'Ghjni',60000),(6,'Dham',34000),(7,'Ram',70000),(8,'Shyam',69000),(9,'Rohot',40000),(10,'Japani',21000);
Query OK, 10 rows affected (0.02 sec)
Records: 10  Duplicates: 0  Warnings: 0

mysql> select* from salary;
+----+--------+--------+
| id | name   | salary |
+----+--------+--------+
|  1 | abc    |  10000 |
|  2 | bcd    |  12300 |
|  3 | tree   |  50000 |
|  4 | Yvc    |  90000 |
|  5 | Ghjni  |  60000 |
|  6 | Dham   |  34000 |
|  7 | Ram    |  70000 |
|  8 | Shyam  |  69000 |
|  9 | Rohot  |  40000 |
| 10 | Japani |  21000 |
+----+--------+--------+
10 rows in set (0.00 sec)

mysql> select * from salary where salary = (select max(salary) from salary);
+----+------+--------+
| id | name | salary |
+----+------+--------+
|  4 | Yvc  |  90000 |
+----+------+--------+
1 row in set (0.00 sec)

mysql> select * from salary where salary = (select min(salary) from salary);
+----+------+--------+
| id | name | salary |
+----+------+--------+
|  1 | abc  |  10000 |
+----+------+--------+
1 row in set (0.00 sec)



mysql> select max(salary),name from salary;
+-------------+------+
| max(salary) | name |
+-------------+------+
|       90000 | abc  |
+-------------+------+
1 row in set (0.00 sec)

mysql> select * from salary where salary = (select min(salary) from salary <()select max(salary) from salary);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '<()select max(salary) from salary)' at line 1
mysql> select * from salary where salary = (select min(salary) from salary <(select max(salary) from salary));
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '<(select max(salary) from salary))' at line 1
mysql> select * from salary where salary = (select min(salary) from salary where salary <(select max(salary) from salary));
+----+------+--------+
| id | name | salary |
+----+------+--------+
|  1 | abc  |  10000 |
+----+------+--------+
1 row in set (0.00 sec)

mysql> select * from salary where salary = (select max(salary) from salary where salary <(select max(salary) from salary));
+----+------+--------+
| id | name | salary |
+----+------+--------+
|  7 | Ram  |  70000 |
+----+------+--------+
1 row in set (0.00 sec)

mysql> select * from salary where salary = (select max(salary) from salary where salary <(select max(salary) from salary));
+----+------+--------+
| id | name | salary |
+----+------+--------+
|  7 | Ram  |  70000 |
+----+------+--------+
1 row in set (0.00 sec)

mysql> select * from salary where salary = (select max(salary) from salary where salary <(select max(salary) from salary where salary <(select max(salary) from salary)) ));
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near ')' at line 1
mysql> select * from salary where salary = (select max(salary) from salary where salary <(select max(salary) from salary where salary <(select max(salary) from salary)));
+----+-------+--------+
| id | name  | salary |
+----+-------+--------+
|  8 | Shyam |  69000 |
+----+-------+--------+
1 row in set (0.01 sec)

*/

/*

mysql> select * from salary where id = (select max(id) from salary));
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near ')' at line 1
mysql> select * from salary where id = (select max(id) from salary);
+----+--------+--------+
| id | name   | salary |
+----+--------+--------+
| 10 | Japani |  21000 |
+----+--------+--------+
1 row in set (0.00 sec)

mysql> select * from salary where id = (select min(salary) from salary);
Empty set (0.01 sec)



mysql> select * from salary where id = (select min(id) from salary);
+----+------+--------+
| id | name | salary |
+----+------+--------+
|  1 | abc  |  10000 |
+----+------+--------+
1 row in set (0.00 sec)

mysql> select * from salary where id in(select id from salary);
+----+--------+--------+
| id | name   | salary |
+----+--------+--------+
|  1 | abc    |  10000 |
|  2 | bcd    |  12300 |
|  3 | tree   |  50000 |
|  4 | Yvc    |  90000 |
|  5 | Ghjni  |  60000 |
|  6 | Dham   |  34000 |
|  7 | Ram    |  70000 |
|  8 | Shyam  |  69000 |
|  9 | Rohot  |  40000 |
| 10 | Japani |  21000 |
+----+--------+--------+
10 rows in set (0.01 sec)

mysql> select * from salary where id <(select id from salary where id = 8);
+----+-------+--------+
| id | name  | salary |
+----+-------+--------+
|  1 | abc   |  10000 |
|  2 | bcd   |  12300 |
|  3 | tree  |  50000 |
|  4 | Yvc   |  90000 |
|  5 | Ghjni |  60000 |
|  6 | Dham  |  34000 |
|  7 | Ram   |  70000 |
+----+-------+--------+
7 rows in set (0.00 sec)

mysql> select * from salary where id <= (select id from salary where id = 5);
+----+-------+--------+
| id | name  | salary |
+----+-------+--------+
|  1 | abc   |  10000 |
|  2 | bcd   |  12300 |
|  3 | tree  |  50000 |
|  4 | Yvc   |  90000 |
|  5 | Ghjni |  60000 |
+----+-------+--------+
5 rows in set (0.00 sec)

mysql> select * from salary where id exist (select id from salary where name = Ram);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'exist (select id from salary where name = Ram)' at line 1
mysql> select * from salary where name exist (select name from salary where name = Ram);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'exist (select name from salary where name = Ram)' at line 1
mysql> select * from salary where id exist (select name from salary where name = Ram);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'exist (select name from salary where name = Ram)' at line 1
mysql> select * from salary where id = any (select id from salary);
+----+--------+--------+
| id | name   | salary |
+----+--------+--------+
|  1 | abc    |  10000 |
|  2 | bcd    |  12300 |
|  3 | tree   |  50000 |
|  4 | Yvc    |  90000 |
|  5 | Ghjni  |  60000 |
|  6 | Dham   |  34000 |
|  7 | Ram    |  70000 |
|  8 | Shyam  |  69000 |
|  9 | Rohot  |  40000 |
| 10 | Japani |  21000 |
+----+--------+--------+
10 rows in set (0.00 sec)

mysql> select * from salary where id exists (select name from salary where name = Ram);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'exists (select name from salary where name = Ram)' at line 1
mysql> select * from salary where  exists (select name from salary where name = Ram);
ERROR 1054 (42S22): Unknown column 'Ram' in 'where clause'
mysql> select * from salary where  exists (select name from salary);
+----+--------+--------+
| id | name   | salary |
+----+--------+--------+
|  1 | abc    |  10000 |
|  2 | bcd    |  12300 |
|  3 | tree   |  50000 |
|  4 | Yvc    |  90000 |
|  5 | Ghjni  |  60000 |
|  6 | Dham   |  34000 |
|  7 | Ram    |  70000 |
|  8 | Shyam  |  69000 |
|  9 | Rohot  |  40000 |
| 10 | Japani |  21000 |
+----+--------+--------+
10 rows in set (0.01 sec)
*/