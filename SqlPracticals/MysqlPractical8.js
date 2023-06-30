/*

mysql> use subquery;
Database changed
mysql> create table student(stu_id int,name varchar(20),course varchar(20));
Query OK, 0 rows affected (0.12 sec)

mysql> create table courses(course_id int,course varchar(20), branch varchar(20));
Query OK, 0 rows affected (0.03 sec)

mysql> insert into student values(1,'Pranit','DSA'),(2,'Sanit','DS'),(3,'Yogesh','FD'),(4,'Mangesh',BD);
ERROR 1054 (42S22): Unknown column 'BD' in 'field list'
mysql> insert into student values(1,'Pranit','DSA'),(2,'Sanit','DS'),(3,'Yogesh','FD'),(4,'Mangesh','BD');
Query OK, 4 rows affected (0.04 sec)
Records: 4  Duplicates: 0  Warnings: 0

mysql> select * from student;
+--------+---------+--------+
| stu_id | name    | course |
+--------+---------+--------+
|      1 | Pranit  | DSA    |
|      2 | Sanit   | DS     |
|      3 | Yogesh  | FD     |
|      4 | Mangesh | BD     |
+--------+---------+--------+
4 rows in set (0.00 sec)

mysql> insert into student values(1,'DSA','Thane'),(2,'DS','Bhandup'),(3,'FD','Vashi'),(4,'BD','Mulund');
Query OK, 4 rows affected (0.02 sec)
Records: 4  Duplicates: 0  Warnings: 0

mysql> select * from student;
+--------+---------+---------+
| stu_id | name    | course  |
+--------+---------+---------+
|      1 | Pranit  | DSA     |
|      2 | Sanit   | DS      |
|      3 | Yogesh  | FD      |
|      4 | Mangesh | BD      |
|      1 | DSA     | Thane   |
|      2 | DS      | Bhandup |
|      3 | FD      | Vashi   |
|      4 | BD      | Mulund  |
+--------+---------+---------+
8 rows in set (0.00 sec)

mysql> drop table student;
Query OK, 0 rows affected (0.05 sec)

mysql> create table student(stu_id int,name varchar(20),course varchar(20));
Query OK, 0 rows affected (0.04 sec)

mysql> insert into student values(1,'Pranit','DSA'),(2,'Sanit','DS'),(3,'Yogesh','FD'),(4,'Mangesh','BD'),(5,'Yogesh','FD');
Query OK, 5 rows affected (0.02 sec)
Records: 5  Duplicates: 0  Warnings: 0

mysql> select * from student;
+--------+---------+--------+
| stu_id | name    | course |
+--------+---------+--------+
|      1 | Pranit  | DSA    |
|      2 | Sanit   | DS     |
|      3 | Yogesh  | FD     |
|      4 | Mangesh | BD     |
|      5 | Yogesh  | FD     |
+--------+---------+--------+
5 rows in set (0.00 sec)

mysql> insert into course values(1,'DSA','Thane'),(2,'DS','Bhandup'),(3,'FD','Vashi'),(4,'BD','Mulund');
ERROR 1146 (42S02): Table 'subquery.course' doesn't exist
mysql> insert into courses values(1,'DSA','Thane'),(2,'DS','Bhandup'),(3,'FD','Vashi'),(4,'BD','Mulund');
Query OK, 4 rows affected (0.04 sec)
Records: 4  Duplicates: 0  Warnings: 0

mysql> select * from courses;
+-----------+--------+---------+
| course_id | course | branch  |
+-----------+--------+---------+
|         1 | DSA    | Thane   |
|         2 | DS     | Bhandup |
|         3 | FD     | Vashi   |
|         4 | BD     | Mulund  |
+-----------+--------+---------+
4 rows in set (0.00 sec)

mysql> select * from courses where course in (select course from student);
+-----------+--------+---------+
| course_id | course | branch  |
+-----------+--------+---------+
|         1 | DSA    | Thane   |
|         2 | DS     | Bhandup |
|         3 | FD     | Vashi   |
|         4 | BD     | Mulund  |
+-----------+--------+---------+
4 rows in set (0.01 sec)

mysql> select * from student where course in (select course from courses);
+--------+---------+--------+
| stu_id | name    | course |
+--------+---------+--------+
|      1 | Pranit  | DSA    |
|      2 | Sanit   | DS     |
|      3 | Yogesh  | FD     |
|      4 | Mangesh | BD     |
|      5 | Yogesh  | FD     |
+--------+---------+--------+
5 rows in set (0.01 sec)

mysql> select count(course) from student where course in (select course in courses);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'courses)' at line 1
mysql> select count(course) from student where course in (select course in courses) group by course;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'courses) group by course' at line 1
mysql> select count(course) from student where course in (select course from courses) group by course;
+---------------+
| count(course) |
+---------------+
|             1 |
|             1 |
|             2 |
|             1 |
+---------------+
4 rows in set (0.01 sec)

mysql> select * from student where id in ( select id from courses);
ERROR 1054 (42S22): Unknown column 'id' in 'field list'
mysql> select * from student where stu_id in ( select course_id from courses);
+--------+---------+--------+
| stu_id | name    | course |
+--------+---------+--------+
|      1 | Pranit  | DSA    |
|      2 | Sanit   | DS     |
|      3 | Yogesh  | FD     |
|      4 | Mangesh | BD     |
+--------+---------+--------+
4 rows in set (0.00 sec)

mysql> select * from student where stu_id in ( select course_id from courses where course_id = 2);
+--------+-------+--------+
| stu_id | name  | course |
+--------+-------+--------+
|      2 | Sanit | DS     |
+--------+-------+--------+
1 row in set (0.00 sec)

mysql> select * from courses where course in ( select course from student where course ='FD');
+-----------+--------+--------+
| course_id | course | branch |
+-----------+--------+--------+
|         3 | FD     | Vashi  |
+-----------+--------+--------+
1 row in set (0.01 sec)

mysql> select * from student where course in ( select course from courses where course ='FD');
+--------+--------+--------+
| stu_id | name   | course |
+--------+--------+--------+
|      3 | Yogesh | FD     |
|      5 | Yogesh | FD     |
+--------+--------+--------+
2 rows in set (0.00 sec)

*/