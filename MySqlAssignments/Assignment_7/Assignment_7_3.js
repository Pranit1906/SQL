/*

Consider a students table having different columns and values mentioned below:

Stu_id  	Stu_name  	Stu_address    Stu_phno	     Stu_percentage



1	         Rahul	      Agra	       9557806625	        85

2	         Ankit	      Delhi	       8855664471	        75

3	        Shailendra	  Noida	       7213457896	        92

Write sql queries for the following:

1.Retrieve student id, student name, address, and percentage of all those students who scored more than 80 percent.
mysql> select * from Students where Stu_percentage > 80;
+--------+------------+-------------+------------+----------------+
| Stu_id | Stu_name   | Stu_address | Stu_phone  | Stu_percentage |
+--------+------------+-------------+------------+----------------+
|      1 | Rahul      | Agra        | 9557806625 |             85 |
|      3 | Shailendra | Noida       | 7213457896 |             92 |
+--------+------------+-------------+------------+----------------+
2 rows in set (0.00 sec)

2.Update the percentage of Rahul by 2 percent.

mysql> update Students set Stu_percentage = 85 + 2 where Stu_name = 'Rahul';
Query OK, 1 row affected (0.03 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from Students;
+--------+------------+-------------+------------+----------------+
| Stu_id | Stu_name   | Stu_address | Stu_phone  | Stu_percentage |
+--------+------------+-------------+------------+----------------+
|      1 | Rahul      | Agra        | 9557806625 |             87 |
|      2 | Ankit      | Delhi       | 8855664471 |             75 |
|      3 | Shailendra | Noida       | 7213457896 |             92 |
+--------+------------+-------------+------------+----------------+
3 rows in set (0.00 sec)

3.Student Ankit has left the school, so delete the whole record of him from the table.

mysql> delete from Students where Stu_name = 'Rahul';
Query OK, 1 row affected (0.00 sec)

mysql> select * from Students;
+--------+------------+-------------+------------+----------------+
| Stu_id | Stu_name   | Stu_address | Stu_phone  | Stu_percentage |
+--------+------------+-------------+------------+----------------+
|      2 | Ankit      | Delhi       | 8855664471 |             75 |
|      3 | Shailendra | Noida       | 7213457896 |             92 |
+--------+------------+-------------+------------+----------------+
2 rows in set (0.00 sec)

*/