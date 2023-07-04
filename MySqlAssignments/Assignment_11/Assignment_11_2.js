/*

Create following table named as Student_info:  sid is primary key auto_incremented

            

sid                  name                  dept                  percentage

1                    Harry                 IT                       95.26

2                    Mac                   CS                       98.45

3                    Rox                Mechanical                  75.69

4                   Shree                  IT                       85.65

5                   Ramesh                 CS                       89.45

mysql> desc student_info;
+------------+--------------+------+-----+---------+----------------+
| Field      | Type         | Null | Key | Default | Extra          |
+------------+--------------+------+-----+---------+----------------+
| sid        | int          | NO   | PRI | NULL    | auto_increment |
| name       | varchar(30)  | YES  |     | NULL    |                |
| dept       | varchar(20)  | YES  |     | NULL    |                |
| percentage | decimal(5,2) | YES  |     | NULL    |                |
+------------+--------------+------+-----+---------+----------------+
4 rows in set (0.01 sec)

Assume there are 1000 records of the student in the student_info table and solve the following questions.

1.)Find the records  of the students scoring the highest percentage.
Highest Score:-
mysql> select * from student_info where percentage in(select max(percentage) from student_info);
+-----+------+------+------------+
| sid | name | dept | percentage |
+-----+------+------+------------+
|   2 | Mac  | CS   |      98.45 |
+-----+------+------+------------+
1 row in set (0.00 sec)

Highest Score Students:-
mysql> select * from student_info where name in(select name from student_info where percentage > 90);
+-----+-------+------+------------+
| sid | name  | dept | percentage |
+-----+-------+------+------------+
|   1 | Harry | IT   |      95.26 |
|   2 | Mac   | CS   |      98.45 |
+-----+-------+------+------------+
2 rows in set (0.01 sec)

2.) Find the information of the students who are having the second highest percentage in the table.  
mysql> select name,dept,percentage from student_info where percentage =(select max(percentage) from student_info where percentage <(select max(percentage) from student_info));
+-------+------+------------+
| name  | dept | percentage |
+-------+------+------------+
| Harry | IT   |      95.26 |
+-------+------+------------+
1 row in set (0.00 sec)


*/